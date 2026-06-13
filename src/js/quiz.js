// Three.js Compass Animation
        (function() {
            const container = document.getElementById('threejs-container');
            if (!container || typeof THREE === 'undefined') {
                return;
            }

            const width = container.clientWidth;
            const height = container.clientHeight;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const primaryColor = new THREE.Color('#4648d4');
            const secondaryColor = new THREE.Color('#fed01b');

            const compassGroup = new THREE.Group();
            scene.add(compassGroup);

            const ringGeo = new THREE.TorusGeometry(3, 0.15, 16, 100);
            const ringMat = new THREE.MeshPhongMaterial({ color: primaryColor, shininess: 100 });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            compassGroup.add(ring);

            const needleGroup = new THREE.Group();
            compassGroup.add(needleGroup);

            const needleNorthGeo = new THREE.ConeGeometry(0.5, 2.5, 4);
            const needleNorthMat = new THREE.MeshPhongMaterial({ color: primaryColor, shininess: 100 });
            const needleNorth = new THREE.Mesh(needleNorthGeo, needleNorthMat);
            needleNorth.position.y = 1.25;
            needleGroup.add(needleNorth);

            const needleSouthGeo = new THREE.ConeGeometry(0.5, 2.5, 4);
            const needleSouthMat = new THREE.MeshPhongMaterial({ color: secondaryColor, shininess: 100 });
            const needleSouth = new THREE.Mesh(needleSouthGeo, needleSouthMat);
            needleSouth.position.y = -1.25;
            needleSouth.rotation.z = Math.PI;
            needleGroup.add(needleSouth);

            const pivotGeo = new THREE.SphereGeometry(0.3, 16, 16);
            const pivotMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
            const pivot = new THREE.Mesh(pivotGeo, pivotMat);
            needleGroup.add(pivot);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            camera.position.z = 8;

            const mouse = { x: 0, y: 0 };
            window.addEventListener('mousemove', (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            });

            const animate = () => {
                requestAnimationFrame(animate);

                window.compassSpeedMult = window.compassSpeedMult || 1;
                compassGroup.rotation.y += 0.005 * window.compassSpeedMult;
                compassGroup.rotation.x = THREE.MathUtils.lerp(compassGroup.rotation.x, mouse.y * 0.5, 0.05);
                compassGroup.rotation.z = THREE.MathUtils.lerp(compassGroup.rotation.z, -mouse.x * 0.5, 0.05);

                needleGroup.rotation.z += Math.sin(Date.now() * 0.002) * 0.002;

                renderer.render(scene, camera);
            };

            animate();
        })();

        // PBL Engine Logic
        let selectedCourses = [];
        let userVector = [50, 50, 50, 50]; // Holds the calculated average profile at the end
        let currentPhaseIndex = 0;

        let phases = [];

        function renderPhase() {
            if (currentPhaseIndex >= phases.length) {
                calculateAffinity();
                return;
            }

            const phase = phases[currentPhaseIndex];
            const container = document.getElementById('pbl-container');
            
            let optionsHtml = phase.options.map((opt, i) => `
                <button class="pbl-option" onclick="selectOption(${i})">
                    ${opt.text}
                </button>
            `).join('');

            container.innerHTML = `
                <h1 style="font-size: 1.8rem; color: var(--primary); font-weight: 800;">${phase.title}</h1>
                ${phase.animationHtml}
                
                <button class="start-btn" onclick="openTheory()" style="background-color: var(--surface-container-high); color: var(--on-surface); box-shadow: none; height: 48px; border: 1px solid var(--outline-variant); width: 100%;">
                    <span class="material-symbols-outlined text-primary">menu_book</span>
                    Ler Manual de Emergência
                </button>

                <div style="background: var(--surface-container-lowest); padding: 24px; border-radius: 16px; border: 1px solid var(--outline-variant);">
                    ${phase.questionHtml}
                </div>

                <div style="display: flex; flex-direction: column; width: 100%;">
                    ${optionsHtml}
                </div>
            `;
            
            document.getElementById('theory-content').innerHTML = phase.theoryHtml;
            if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
                MathJax.typesetPromise();
            }
        }

        function openTheory() {
            document.getElementById('theory-modal').style.display = 'flex';
        }

        function closeTheory() {
            document.getElementById('theory-modal').style.display = 'none';
        }

        function selectOption(optionIndex) {
            // Track the course associated with this choice
            const courseName = optionToCourse[currentPhaseIndex][optionIndex];
            selectedCourses.push(courseName);

            currentPhaseIndex++;
            
            // Save state for SPA reload
            sessionStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
            sessionStorage.setItem('currentPhaseIndex', currentPhaseIndex.toString());

            renderPhase();
        }

        const k = 0.00015; 

        function calculateAffinity() {
            if (!Array.isArray(selectedCourses) || selectedCourses.length === 0) {
                sessionStorage.removeItem('selectedCourses');
                sessionStorage.removeItem('currentPhaseIndex');
                currentPhaseIndex = 0;
                renderPhase();
                return;
            }

            // 0. Compute the userVector as the average of profiles of all selected courses
            userVector = [0.0, 0.0, 0.0, 0.0];
            selectedCourses.forEach(courseName => {
                const courseData = courses.find(c => c.name === courseName);
                if (courseData) {
                    for (let i = 0; i < 4; i++) {
                        userVector[i] += courseData.profile[i];
                    }
                }
            });
            for (let i = 0; i < 4; i++) {
                userVector[i] /= selectedCourses.length;
            }

            const results = courses.map(course => {
                let sumSq = 0;
                for (let i = 0; i < 4; i++) {
                    sumSq += Math.pow(userVector[i] - course.profile[i], 2);
                }
                let affinity = 100 * Math.exp(-k * sumSq);
                return { ...course, affinity: affinity };
            });

            results.sort((a, b) => b.affinity - a.affinity);

            const winner = results[0];
            const runnerUp = results[1];

            // 1. Update Hero Section (Original Dashboard)
            document.getElementById('top-course-name').textContent = winner.name;
            document.getElementById('top-course-percentage').textContent = winner.affinity.toFixed(0) + '%';
            
            const illustrationImg = document.getElementById('top-course-illustration');
            const iconContainer = document.getElementById('top-course-icon-container');
            
            if (winner.name === "Engenharia de Software" || winner.name === "Engenharia de Energia" || winner.name === "Engenharia Automotiva") {
                let imgFile = "";
                if (winner.name === "Engenharia de Software") imgFile = "assets/images/software.png";
                else if (winner.name === "Engenharia de Energia") imgFile = "assets/images/energia.png";
                else if (winner.name === "Engenharia Automotiva") imgFile = "assets/images/automotivo.png";
                
                illustrationImg.src = imgFile;
                illustrationImg.style.display = ""; // Let CSS handle it
                iconContainer.style.display = "none";
            } else {
                illustrationImg.style.display = "none";
                iconContainer.style.display = "block";
                document.getElementById('top-course-icon-bg').textContent = winner.iconBg;
            }

            // 2. Render Affinity Bars (Original Dashboard)
            const barsContainer = document.getElementById('affinity-bars-container');
            barsContainer.innerHTML = '';
            results.forEach((res, index) => {
                let barColor = 'var(--primary)';
                if (index === 1) barColor = 'var(--primary-container)';
                else if (index >= 2) barColor = 'var(--outline-variant)';
                
                let opacityStyle = '';
                if (index === 3) opacityStyle = 'opacity: 0.8;';
                else if (index === 4) opacityStyle = 'opacity: 0.6;';
                
                const percentageStr = res.affinity.toFixed(1) + '%';
                const el = document.createElement('div');
                el.className = 'progress-group';
                el.style = opacityStyle;
                el.innerHTML = `
                    <div class="progress-label-row">
                        <span style="font-weight: 700; color: var(--on-surface);">${res.name.replace("Engenharia de ", "").replace("Engenharia ", "")}</span>
                        <span style="font-weight: 700; color: var(--primary);">${percentageStr}</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-bar" style="background-color: ${barColor}; width: 0%" data-target="${percentageStr}"></div>
                    </div>
                `;
                barsContainer.appendChild(el);
            });

            // 3. Dynamic Profile Analysis text (Original Dashboard)
            const topName = winner.name;
            const secondName = runnerUp.name;
            let analysisText = "";
            if (profileAnalyses[topName] && profileAnalyses[topName][secondName]) {
                analysisText = profileAnalyses[topName][secondName];
            } else if (profileAnalyses[topName]) {
                analysisText = profileAnalyses[topName]["default"];
            } else {
                analysisText = `Seu perfil demonstra grande alinhamento com a área de ${topName}.`;
            }
            document.getElementById('profile-dynamic-text').innerHTML = analysisText;

            // 3.5 Populate Explore More Courses
            const recommendedContainer = document.getElementById('recommended-cards-container');
            if (recommendedContainer) {
                recommendedContainer.innerHTML = '';
                // Pick top 3 results
                [results[0], results[1], results[2]].forEach((res, index) => {
                    const badgeClass = index === 0 ? 'recommended-card-badge' : 'recommended-card-badge recommended-card-badge-secondary';
                    const percentageStr = res.affinity.toFixed(0) + '% Match';
                    const pillsHtml = res.tags.map(t => `<span class="tech-pill">${t}</span>`).join('');
                    
                    const el = document.createElement('div');
                    el.className = 'recommended-card';
                    el.style.cursor = 'pointer';
                    el.onclick = () => showExploreCourse(res.name);
                    el.innerHTML = `
                        <div class="recommended-card-image-wrapper">
                            <img src="${res.image}" alt="${res.name}" class="recommended-card-image">
                            <div class="${badgeClass}">${percentageStr}</div>
                        </div>
                        <div class="recommended-card-content">
                            <h4 class="title-lg" style="margin-bottom: 8px; font-weight: 700; color: var(--on-surface);">${res.name.replace("Engenharia de ", "Eng. de ").replace("Engenharia ", "Eng. ")}</h4>
                            <p class="caption text-on-surface-variant" style="text-transform: none; font-size: 13px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 36px; margin-bottom: 12px; font-weight: 500;">
                                ${res.shortDesc}
                            </p>
                            <div class="pill-container">
                                ${pillsHtml}
                            </div>
                        </div>
                    `;
                    recommendedContainer.appendChild(el);
                });
            }

            window.currentWinnerName = winner.name;

            // 12. Swap UI containers
            const quizCard = document.querySelector('.quiz-card');
            if (quizCard) quizCard.style.display = 'none';
            document.getElementById('results-dashboard').style.display = 'block';

            // 13. Smooth Scroll to top and animate bars
            window.scrollTo({ top: 0, behavior: 'smooth' });

            setTimeout(() => {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-target');
                });
            }, 300);

            window.compassSpeedMult = 4;
        }

        /* ────────────────────────────────────────────
           TAB SWITCHING
        ──────────────────────────────────────────── */
        function switchTab(tabId) {
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');
            document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
            // Animate skill bars when overview is shown
            if (tabId === 'overview') {
                setTimeout(() => animateSkillBars(), 100);
            }
        }

        function backToResults() {
            document.getElementById('explore-course-dashboard').style.display = 'none';
            document.getElementById('results-dashboard').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /* ────────────────────────────────────────────
           QUICK FACTS
        ──────────────────────────────────────────── */
        function renderQuickFacts(course) {
            const facts = course.quickFacts || [
                { label: 'Duração', value: '5 Anos' },
                { label: 'Turno', value: 'Diurno' },
                { label: 'Créditos', value: '232' },
                { label: 'Campus', value: 'Gama (FCTE)' }
            ];
            const strip = document.getElementById('quick-facts-strip');
            strip.innerHTML = '';
            facts.forEach(f => {
                const el = document.createElement('div');
                el.className = 'quick-fact-item';
                el.innerHTML = `<span class="quick-fact-label">${f.label}</span><span class="quick-fact-value">${f.value}</span>`;
                strip.appendChild(el);
            });
        }

        /* ────────────────────────────────────────────
           HERO TAGS
        ──────────────────────────────────────────── */
        function renderHeroTags(course) {
            const container = document.getElementById('hero-tags');
            container.innerHTML = '';
            (course.tags || []).forEach(tag => {
                const el = document.createElement('span');
                el.style = 'background: rgba(255,255,255,0.2); color: white; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.3);';
                el.textContent = tag;
                container.appendChild(el);
            });
        }

        /* ────────────────────────────────────────────
           SKILL BARS
        ──────────────────────────────────────────── */
        let currentSkills = [];
        function renderSkillBars(course) {
            currentSkills = course.skills || [
                { label: 'Lógica & Algoritmos', pct: 92 },
                { label: 'Trabalho em Equipe', pct: 85 },
                { label: 'Comunicação Técnica', pct: 75 },
                { label: 'Inovação & Design', pct: 80 }
            ];
            const container = document.getElementById('skill-bars');
            container.innerHTML = '';
            currentSkills.forEach(s => {
                const el = document.createElement('div');
                el.className = 'skill-bar-item';
                el.innerHTML = `
                    <div class="skill-bar-header">
                        <span style="font-size:0.9rem; font-weight:700; color: var(--on-surface);">${s.label}</span>
                        <span style="font-size:0.85rem; font-weight:700; color: var(--primary);">${s.pct}%</span>
                    </div>
                    <div class="skill-bar-track">
                        <div class="skill-bar-fill" data-pct="${s.pct}"></div>
                    </div>`;
                container.appendChild(el);
            });
        }
        function animateSkillBars() {
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                const pct = bar.dataset.pct;
                bar.style.width = pct + '%';
            });
        }

        /* ────────────────────────────────────────────
           TIMELINE
        ──────────────────────────────────────────── */
        function renderTimeline(course) {
            const items = course.timeline || [
                { semester: '1º–3º Semestre', title: 'Ciclo Básico Comum', desc: 'Cálculo, Física, Álgebra, Algoritmos. Base sólida antes da habilitação.' },
                { semester: '3º Semestre', title: 'Escolha da Habilitação', desc: 'Por Coeficiente de Rendimento (CR), o aluno define sua engenharia definitiva.' },
                { semester: '4º–8º Semestre', title: 'Especialização & Projetos', desc: 'Disciplinas avançadas do curso + participação em projetos reais, GPP/MDS, empresas juniores.' },
                { semester: '9º–10º Semestre', title: 'TCC & Estágio', desc: 'Conclusão do Trabalho de Conclusão de Curso e estágio supervisionado obrigatório.' },
            ];
            const container = document.getElementById('course-timeline');
            container.innerHTML = '';
            items.forEach(item => {
                const el = document.createElement('div');
                el.className = 'timeline-item';
                el.innerHTML = `
                    <div class="timeline-left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-line"></div>
                    </div>
                    <div class="timeline-content">
                        <p class="timeline-semester">${item.semester}</p>
                        <p class="timeline-title">${item.title}</p>
                        <p class="timeline-desc">${item.desc}</p>
                    </div>`;
                container.appendChild(el);
            });
        }

        /* ────────────────────────────────────────────
           FAQ ACCORDION
        ──────────────────────────────────────────── */
        function renderFAQ(course) {
            const faqs = course.faq || [
                { q: 'Como é o processo de escolha de engenharia?', a: 'Você entra pelo vestibular na opção genérica "Engenharias". Após o ciclo básico (1–3 semestres), escolhe a habilitação por Coeficiente de Rendimento (CR). Não é necessário saber de antemão.' },
                { q: 'Quanto tempo dura o curso?', a: 'O fluxo recomendado é de 10 semestres (5 anos). O mínimo legal é 9 e o máximo é 16 semestres.' },
                { q: 'O mercado de trabalho está aquecido?', a: 'Extremamente. A Era da IA aumentou dramaticamente a demanda por engenheiros seniores. Egressos da FCTE são requisitados por empresas como Embraer, governo digital e big techs.' },
                { q: 'Tem estágio obrigatório?', a: 'Sim. O estágio supervisionado é computado como disciplina regular e exigido para a conclusão do curso.' }
            ];
            const container = document.getElementById('faq-accordion');
            container.innerHTML = '';
            faqs.forEach((item, i) => {
                const el = document.createElement('div');
                el.className = 'accordion-item';
                el.innerHTML = `
                    <button class="accordion-trigger" onclick="toggleAccordion(this)">
                        <span>${item.q}</span>
                        <span class="material-symbols-outlined accordion-arrow">expand_more</span>
                    </button>
                    <div class="accordion-body">
                        <div class="accordion-body-inner">${item.a}</div>
                    </div>`;
                container.appendChild(el);
            });
        }
        function toggleAccordion(btn) {
            const body = btn.nextElementSibling;
            const isOpen = body.classList.contains('open');
            // Close all
            document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
            document.querySelectorAll('.accordion-trigger').forEach(b => b.classList.remove('open'));
            if (!isOpen) {
                body.classList.add('open');
                btn.classList.add('open');
            }
        }

        function showExploreCourse(courseName) {
            const targetCourseName = courseName || window.currentWinnerName;
            const targetCourse = courses.find(c => c.name === targetCourseName);
            if (!targetCourse) return;

            // 4. Hero Section Bento
            document.getElementById('hero-title').textContent = targetCourse.name;
            document.getElementById('hero-image').src = targetCourse.image;
            document.getElementById('hero-link').href = targetCourse.link;
            document.getElementById('hero-icon').textContent = targetCourse.icon;
            
            // 5. O que você faz? (innerHTML to support HTML tags)
            document.getElementById('desc-text').innerHTML = targetCourse.longDesc;

            // 6. Mito vs Verdade
            document.getElementById('myth-text').textContent = targetCourse.myth.common;
            document.getElementById('truth-text').textContent = targetCourse.myth.truth;

            // 7. Curriculum
            const baseList = document.getElementById('base-disciplines');
            baseList.innerHTML = '';
            targetCourse.disciplines.base.forEach(d => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="material-symbols-outlined text-primary" style="font-size: 16px; color: var(--primary);">arrow_right</span> ${d}`;
                baseList.appendChild(li);
            });
            
            const specList = document.getElementById('specific-disciplines');
            specList.innerHTML = '';
            targetCourse.disciplines.specific.forEach(d => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; color: #007da9;">arrow_right</span> ${d}`;
                specList.appendChild(li);
            });

            // 8. Market & Career
            document.getElementById('market-salary').textContent = targetCourse.market.salary;
            const marketTags = document.getElementById('market-tags');
            marketTags.innerHTML = '';
            targetCourse.market.tags.forEach(tag => {
                const span = document.createElement('span');
                span.style = 'background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 700; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.1);';
                span.textContent = tag;
                marketTags.appendChild(span);
            });

            // 9. Match Points
            const matchPoints = document.getElementById('match-points');
            matchPoints.innerHTML = '';
            targetCourse.matchPoints.forEach(mp => {
                const div = document.createElement('div');
                div.style = 'display: flex; align-items: center; gap: 12px;';
                div.innerHTML = `<span class="material-symbols-outlined text-primary" style="color: var(--primary);">${mp.icon}</span><span style="font-weight: 600; color: var(--on-surface);">${mp.text}</span>`;
                matchPoints.appendChild(div);
            });

            // 10. Ecosystem Labs
            const labsGrid = document.getElementById('labs-grid');
            labsGrid.innerHTML = '';
            targetCourse.labs.forEach(lab => {
                const div = document.createElement('div');
                div.className = 'lab-card';
                div.innerHTML = `
                    <div class="lab-img-container">
                        <img src="${lab.img}" alt="${lab.title}">
                        <div class="lab-badge">${lab.tag}</div>
                    </div>
                    <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; color: var(--on-surface);">${lab.title}</h4>
                    <p style="font-size: 0.95rem; color: var(--on-surface-variant);">${lab.desc}</p>
                `;
                labsGrid.appendChild(div);
            });

            // 11. Mini Mission
            document.getElementById('mission-icon').textContent = targetCourse.icon;
            document.getElementById('mission-title').textContent = targetCourse.missionTitle;
            document.getElementById('mission-desc').textContent = targetCourse.mission;
            
            document.getElementById('stat-1-title').textContent = targetCourse.missionStats.stat1Title;
            document.getElementById('stat-1-val').textContent = targetCourse.missionStats.stat1Value;
            document.getElementById('stat-2-title').textContent = targetCourse.missionStats.stat2Title;
            document.getElementById('stat-2-val').textContent = targetCourse.missionStats.stat2Value;

            // 12. Empregabilidade
            const empSection = document.getElementById('employability-section');
            const empStatsContainer = document.getElementById('employability-stats-container');
            if (targetCourse.employability) {
                document.getElementById('employability-text').innerHTML = targetCourse.employability.text;
                document.getElementById('employability-source').textContent = targetCourse.employability.source;
                
                empStatsContainer.innerHTML = '';
                if (targetCourse.employability.stats) {
                    targetCourse.employability.stats.forEach(stat => {
                        const statCard = document.createElement('div');
                        statCard.style = 'background: var(--surface-container-high); padding: 20px 24px; border-radius: 16px; display: flex; flex-direction: column; justify-content: center; flex: 1; border: 1px solid var(--outline-variant); position: relative; overflow: hidden;';
                        statCard.innerHTML = `
                            <div style="position: absolute; top: 0; right: 0; width: 64px; height: 64px; background: var(--primary); opacity: 0.05; border-radius: 0 0 0 64px;"></div>
                            <h4 style="font-size: 2.5rem; font-weight: 900; color: var(--primary); margin-bottom: 4px; line-height: 1; letter-spacing: -0.02em;">${stat.value}</h4>
                            <span style="font-size: 0.95rem; font-weight: 700; color: var(--on-surface-variant); text-transform: uppercase; letter-spacing: 0.02em;">${stat.label}</span>
                        `;
                        empStatsContainer.appendChild(statCard);
                    });
                }
                
                empSection.style.display = 'block';
            } else {
                empSection.style.display = 'none';
            }

            // 13. Quick Facts
            renderQuickFacts(targetCourse);

            // 14. Hero Tags (in hero image)
            renderHeroTags(targetCourse);

            // 15. Skill Bars
            renderSkillBars(targetCourse);

            // 16. Timeline
            renderTimeline(targetCourse);

            // 17. FAQ
            renderFAQ(targetCourse);

            // Reset tabs to overview
            switchTab('overview');

            // Animação de transição
            const overlay = document.getElementById('course-transition-overlay');
            const transitionText = document.getElementById('transition-text');
            const transitionIcon = document.getElementById('transition-icon');
            
            transitionText.textContent = targetCourse.name;
            transitionIcon.textContent = targetCourse.icon;
            
            // Trigger animation resets
            transitionText.style.animation = 'none';
            overlay.style.animation = 'none';
            overlay.style.transform = 'translateY(0)';
            
            overlay.style.display = 'flex';
            
            // Allow browser paint, then start animation
            setTimeout(() => {
                transitionText.style.animation = 'popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
                
                // Wait for the intro to be read (1.2s)
                setTimeout(() => {
                    overlay.style.animation = 'slideOutUpOverlay 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards';
                    
                    // While overlay is sliding up, switch dashboards underneath
                    document.getElementById('results-dashboard').style.display = 'none';
                    document.getElementById('explore-course-dashboard').style.display = 'block';
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    
                    // After sliding is complete, hide overlay and animate skill bars
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        animateSkillBars();
                    }, 600);
                }, 1200);
            }, 50);
        }

        function refazerDiagnostico() {
            sessionStorage.removeItem('selectedCourses');
            sessionStorage.removeItem('currentPhaseIndex');
            window.location.reload();
        }


        // Initialize quiz from the imported questionsData
        if (typeof questionsData !== 'undefined') {
            phases = questionsData;
            
            const savedCourses = sessionStorage.getItem('selectedCourses');
            const savedPhase = sessionStorage.getItem('currentPhaseIndex');
            
            if (savedCourses && savedPhase) {
                try {
                    selectedCourses = JSON.parse(savedCourses);
                    currentPhaseIndex = parseInt(savedPhase, 10);
                } catch(e) {
                    console.error("Error parsing saved state", e);
                }
            }
            
            renderPhase();
        } else {
            document.getElementById('pbl-container').innerHTML = `
                <div style="text-align: center; color: var(--error);">
                    <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 16px;">error</span>
                    <h2>Erro de Leitura</h2>
                    <p>Não foi possível carregar as questões. Verifique se src/data/questions.js existe.</p>
                </div>
            `;
        }
