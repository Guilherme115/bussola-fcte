const courses = [
            {
                name: "Engenharia de Software",
                profile: [95, 80, 90, 50],
                icon: "code",
                iconBg: "terminal",
                tags: ["Arquitetura", "Inteligência Artificial", "Sistemas Críticos"],
                shortDesc: "A orquestração do futuro na era da Inteligência Artificial.",
                longDesc: "A profissão do desenvolvedor de software atravessa a sua metamorfose mais violenta. O mercado de tecnologia atual não valoriza apenas a velocidade de digitação de código, mas sim a capacidade de orquestração arquitetônica em uma era dominada pela <strong>IA Agêntica</strong>.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>O Tsunami da Inteligência Artificial e o Mercado</h4>As estatísticas de 2025-2030 delineiam um cenário de choque estrutural. Enquanto a demanda por tarefas rotineiras de codificação diminui devido à automação, o <strong>\"Engenheiro de Software Sênior\"</strong> — aquele que concebe arquiteturas, audita segurança cibernética e rege modelos de Machine Learning — entra em sua \"era de ouro\". Empresas transferem orçamentos colossais para profissionais capazes de fazer o <em>fine-tuning</em> e a orquestração técnica de IA, pagando prêmios salariais astronômicos (com médias de especialistas chegando a US$ 206.000 anuais no exterior). O currículo da UnB Gama foca em te vacinar contra a automação mecânica, te preparando para ser a mente que governa os algoritmos.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Vivência Corporativa: O Legado PUMA</h4>Diferente da teoria abstrata, a metodologia da FCTE insere você na realidade de manter sistemas em produção. Na integração das disciplinas GPP e MDS, os alunos herdam e evoluem o <strong>PUMA (Plataforma Unificada de Metodologias Ativas)</strong>, um software real usado na UnB. Você lidará com código legado, refatoração de débito técnico, versionamento rigoroso e esteiras de integração contínua (CI/CD), mimetizando com precisão as <em>squads</em> das big techs do Vale do Silício.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Projetos de Extensão e Inovação Pública</h4>A universidade atua como um hub tecnológico de Estado. Projetos massivos de extensão são a regra:<br><ul style='margin-left: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px;'><li><strong>LAPPIS e Residência TIC:</strong> Os estudantes lideraram a construção do <em>DecidimBR (Brasil Participativo)</em> e remodelaram o núcleo digital da <em>Revista Darcy</em>, atuando profissionalmente como Product Managers.</li><li><strong>Orc'estra Gamificação:</strong> Empresa Júnior que presta consultoria vendendo lógicas de jogos para resolver problemas corporativos do mercado.</li><li><strong>M2ICE e Liderança:</strong> O campus também respira inclusão através de projetos fortes de fomento a mulheres na tecnologia, corrigindo disparidades de gênero estruturais para uma IA mais ética e sem vieses.</li></ul><br>O egresso de Engenharia de Software da UnB não sai apenas com um diploma; ele sai como arquiteto da nova revolução digital.",
                mission: "Atuar na Residência em TIC do LAPPIS desenvolvendo produtos mínimos viáveis (PMVs) reais para o Estado Brasileiro, assumindo papéis de orquestrador técnico e Product Manager.",
                missionTitle: "Inovação em Governo Digital",
                missionStats: { stat1Title: "Tecnologia", stat1Value: "Open Source", stat2Title: "Impacto", stat2Value: "Soberania Nacional" },
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAddFFwPQrNXsKr6e6bOjmnPXxMlOCAdcPYDcutSwVo5o_j97q7BOoGXL7i-kAUbDPuL-U11aCg2fpfDAymHSiedb7Bi-Vfs1vsY52Kx0JRAuUTIAr2qSpwsHxEh-Ls_OnWkLy6JglsKWZKJU6n8D5j2DvutyQiZHeuqIuKXI8-hjhGjAfLyw414Tb7prZtaWnPgKETpvpl1YKnf0gRabd2vIBtK2CI39dhKcICftIRhNlCnWTKziz6SGnvDLkaSqn7ObStmLEWTG0",
                link: "https://fcte.unb.br/index.php/graduacao/engenharia-de-software",
                myth: { common: '"Software é só saber programar na linguagem da moda."', truth: "Software é arquitetura complexa, gestão de falhas, interface humana e orquestração de IA." },
                market: { salary: "Faixa vari?vel por ?rea e experi?ncia", tags: ["IA Agêntica", "Sistemas Embraer", "Governo Digital"] },
                disciplines: {
                    base: ["Cálculo e Álgebra", "Engenharia Econômica", "Gestão de Produção", "Lógica de Algoritmos"],
                    specific: ["Projeto e Arquitetura", "Sistemas Paralelos e Distribuídos", "Interface Humano-Computador", "Verificação e Validação"]
                },
                matchPoints: [
                    { icon: "psychology", text: "Orquestrador de IA e Sistemas" },
                    { icon: "engineering", text: "Arquitetura e Produto de Software" },
                    { icon: "groups", text: "Metodologias Ágeis e Liderança" }
                ],
                labs: [
                    { title: "LAPPIS", desc: "Hub de inteligência tecnológica e pesquisa em código aberto para o Estado.", tag: "Pesquisa", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" },
                    { title: "Orc'estra", desc: "Empresa Júnior de alto rendimento focada em gamificação corporativa.", tag: "Empreendedorismo", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" },
                    { title: "Maratona", desc: "Elite algorítmica e esportes de alto rendimento computacional.", tag: "Competição", img: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=600&q=80" }
                ],
                employability: {
                    stats: [
                        { value: "Dados a validar", label: "Salário Nacional" },
                        { value: "Alta demanda", label: "Demanda em IA Agêntica" },
                        { value: "Mercado global", label: "Pico Global (Especialista IA)" }
                    ],
                    text: "No contexto da UnB Gama, a altíssima exigência algorítmica e a vivência em projetos reais criam um profissional disputado a peso de ouro. A ocupação de 'Engenheiro de Software' encontra-se no topo do funil financeiro brasileiro. Devido à escassez de talentos na Era da IA, estudantes da FCTE frequentemente recebem ofertas de Big Techs e indústrias de fronteira (como a contratação precoce pela EMBRAER) antes mesmo de pegarem o diploma.",
                    source: "Ministério do Trabalho e Emprego (CAGED/MTE) e Relatório McKinsey/Gartner (2025)"
                },
                quickFacts: [
                    { label: 'Duração', value: '10 Semestres' },
                    { label: 'Créditos', value: '232' },
                    { label: 'Turno', value: 'Diurno' },
                    { label: 'Coordenador', value: 'Prof. Gardenghi' }
                ],
                skills: [
                    { label: 'Arquitetura de Sistemas', pct: 95 },
                    { label: 'Metodologias Ágeis (SCRUM/XP)', pct: 90 },
                    { label: 'Engenharia de Requisitos', pct: 85 },
                    { label: 'Orquestração de IA', pct: 88 },
                    { label: 'Qualidade & Testes', pct: 82 }
                ],
                timeline: [
                    { semester: '1º–3º Semestre', title: 'Ciclo Básico Comum (ABI)', desc: 'Cálculo, Física, Álgebra Linear e Algoritmos. A base analítica que diferencia o engenheiro do programador.' },
                    { semester: '3º Semestre', title: 'Escolha da Habilitação', desc: 'Processo de seleção interna pelo Coeficiente de Rendimento (CR). O aluno já sabe em qual engenharia quer se especializar com maior maturidade.' },
                    { semester: '4º–7º Semestre', title: 'Formação Técnica & Projetos Reais', desc: 'Arquitetura, Requisitos, IHC, GPP+MDS integrados. Projeto PUMA: sistema real em produção. LAPPIS, Orc\'estra e Maratona de Programação.' },
                    { semester: '8º–9º Semestre', title: 'Estágio & TCC 1', desc: 'Estágio supervisionado em empresa real (já reconhecido como disciplina desde 2013). TCC 1: definição do projeto de pesquisa (mínimo 70% dos créditos integralizados).' },
                    { semester: '10º Semestre', title: 'TCC 2 & Formação', desc: 'Defesa final. Egressos com diploma de Bacharel em Engenharia de Software, prontos para orquestrar a revolução da IA.' }
                ],
                faq: [
                    { q: 'Engenharia de Software é a mesma coisa que Ciência da Computação?', a: 'Não. Engenharia de Software foca em construir sistemas de software confiáveis, seguros e escaláveis usando métodos de engenharia. A ênfase está na qualidade, gestalt de processos e na visão de produto, enquanto a CC foca mais em teoria computacional e algoritmos.' },
                    { q: 'Preciso saber programar antes de entrar?', a: 'Não é obrigatório. O ciclo básico ensina lógica e algoritmos do zero. Mas se você já programa, a prioridade será aprender a construir sistemas de forma rigorosa e profissional.' },
                    { q: 'O curso prepara para trabalhar com Inteligência Artificial?', a: 'Sim, e de forma única. O currículo foca em arquitetura e qualidade de sistemas, que é exatamente o que o mercado de IA valoriza: não só usar modelos, mas projetar, auditar e orquestrar pipelines de IA.' },
                    { q: 'Quais empresas contratam egressos da FCTE?', a: 'Há casos documentados de contratação precoce pela EMBRAER. O LAPPIS conecta alunos ao governo federal. Startups, big techs e consultorias tecnológicas do Distrito Federal são os principais destinos.' },
                    { q: 'Existe maratona de programação no campus?', a: 'Sim! A FCTE é uma potência nacional. O Prof. Bruno Ribas dirige a Maratona SBC no Brasil. Alunos da UnB conquistaram vaga inédita para o torneio internacional ICPC no Chile (2026).' }
                ]
            },
            {
                name: "Engenharia Eletrônica",
                profile: [40, 70, 80, 10],
                icon: "memory",
                iconBg: "developer_board",
                tags: ["Telecom", "Robótica", "IoT"],
                shortDesc: "Cérebro da Revolução Tecnológica.",
                longDesc: "Se a energia é o sangue e o software é a linguagem, a eletrônica é o cérebro das inovações modernas. No curso de Engenharia Eletrônica da UnB (Campus Gama), você aprenderá a projetar desde a inteligência de veículos autônomos até sistemas de telecomunicações de ponta. Descubra como dominar o hardware que move o mundo digital.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Eletrônica vs. Elétrica</h4>A Engenharia Eletrônica é a área dedicada ao desenvolvimento da inteligência embarcada nos equipamentos. O profissional projeta, testa e constrói circuitos, microprocessadores e sistemas de comunicação que dão \"vida\" às máquinas. Em vez de lidar com grandes cabos de alta tensão (foco da Elétrica), o engenheiro eletrônico trabalha na micro e nanoescala, controlando pequenos sinais elétricos, desenvolvendo FPGAs, PCBs e criando a infraestrutura para a IoT.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Ecossistema de Referência</h4><ul style='margin-left: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px;'><li><strong>🏆 UnBeatables:</strong> Equipe multicampeã mundial (RoboCup) de robôs humanoides NAO totalmente autônomos.</li><li><strong>💼 EletronJun:</strong> Primeira empresa júnior do Gama (mais de 12 anos), focada em layout de PCBs, telemetria e controle térmico.</li><li><strong>📡 Lab Telecom e LITE:</strong> Infraestrutura com 6 patentes no INPI, sediando projetos aeroespaciais e palestras da Google AI.</li><li><strong>🏎️ Fórmula Gama Racing:</strong> Os alunos criam o \"cérebro\" de um carro de Fórmula SAE 100% elétrico.</li></ul>",
                mission: "Programe a inteligência artificial de navegação de um robô humanoide NAO para a RoboCup.",
                missionTitle: "Robótica Autônoma",
                missionStats: { stat1Title: "Robô", stat1Value: "NAO", stat2Title: "Controle", stat2Value: "Autônomo" },
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                link: "https://fcte.unb.br/index.php/graduacao/engenharia-eletronica",
                myth: { common: '"É só consertar rádio e TV."', truth: "É projetar o cérebro de robôs, sistemas IoT e redes de telecomunicações (5G/6G)." },
                market: { salary: "Faixa vari?vel por setor", tags: ["IoT", "Hardware", "Telecom"] },
                disciplines: {
                    base: ["Cálculo 1, 2 e 3", "Física Clássica & Eletromag", "Sinais e Sistemas", "Álgebra Linear"],
                    specific: ["Projeto de Circuitos Eletrônicos", "Microprocessadores", "Processamento de Sinais", "Telecomunicações"]
                },
                matchPoints: [
                    { icon: "precision_manufacturing", text: "Atenção aos Detalhes (Microescala)" },
                    { icon: "hardware", text: "Paixão por Hardware e IoT" },
                    { icon: "wifi", text: "Interesse em Telecomunicações" }
                ],
                labs: [
                    { title: "UnBeatables", desc: "Tricampeões mundiais na RoboCup com robôs humanoides NAO autônomos.", tag: "Robótica", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
                    { title: "EletronJun", desc: "Empresa Júnior pioneira do Gama, desenvolvendo soluções de PCBs, telemetria e controle.", tag: "Empreendedorismo", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
                    { title: "Lab Telecom (LITE)", desc: "Pesquisa avançada em radiofrequência, 6 patentes e parceria em projetos aeroespaciais.", tag: "Pesquisa", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80" }
                ],
                employability: {
                    stats: [
                        { value: "Indicativo", label: "Salário Médio" },
                        { value: "Resiliente", label: "Resiliência na Crise" },
                        { value: "Versátil", label: "Migração para TI" }
                    ],
                    text: "O mercado para quem cria a base da tecnologia é extremamente resiliente. A média salarial nacional é de R$ 10.956,28 mensais, alcançando tetos de R$ 16.926,76 para seniores. As áreas de atuação englobam projetos eletrônicos, telecomunicações (5G/6G), automação automotiva e robótica. Graças ao forte perfil analítico e carga de programação, o engenheiro eletrônico possui enorme facilidade para atuar também como desenvolvedor de software puro em gigantes de TI e bancos.",
                    source: "Classificação Brasileira de Ocupações (CBO 2143-10) — 2026"
                },
                quickFacts: [
                    { label: "Créditos", value: "243" },
                    { label: "Seleção", value: "3º Semestre (CR)" },
                    { label: "Turno", value: "Diurno" },
                    { label: "Duração", value: "10 Semestres" }
                ],
                skills: [
                    { label: "Projeto de Circuitos & PCBs", pct: 95 },
                    { label: "Sistemas Embarcados & IoT", pct: 90 },
                    { label: "Processamento de Sinais", pct: 85 },
                    { label: "Telecomunicações (RF/5G)", pct: 88 },
                    { label: "Programação de Baixo Nível", pct: 92 }
                ],
                timeline: [
                    { semester: "1º–3º Semestre", title: "Ciclo Básico Comum (ABI)", desc: "Matemática, Física e Algoritmos com todos os alunos de Engenharia do Gama. Formação da base analítica." },
                    { semester: "3º Semestre", title: "Escolha da Habilitação por CR", desc: "Ao final do ciclo básico, você formaliza a escolha por Engenharia Eletrônica com base no seu desempenho (CR)." },
                    { semester: "4º–7º Semestre", title: "Hardware, Sinais e Telecom", desc: "Mergulho em projetos reais: de microcontroladores a sistemas de comunicação. Participação na EletronJun, UnBeatables ou Fórmula Gama Racing." },
                    { semester: "8º–9º Semestre", title: "Estágio & Especialização", desc: "Estágio obrigatório na indústria, empresas de tecnologia ou telecom. Aprofundamento em FPGAs ou microeletrônica com professores de elite." },
                    { semester: "10º Semestre", title: "TCC & Formação", desc: "Defesa do Trabalho de Conclusão de Curso e ingresso no mercado de trabalho altamente resiliente de hardware e inovação." }
                ],
                faq: [
                    { q: "Qual a principal diferença para a Engenharia Elétrica?", a: "Escala e foco. A Elétrica foca em potência, geração e distribuição de energia (grandes redes, alta tensão). A Eletrônica foca na micro e nanoescala, processando informações através de circuitos, PCBs, radares e telecomunicações." },
                    { q: "O curso ensina a programar?", a: "Sim, e com forte ênfase em integração com o mundo físico! Você aprenderá linguagens de baixo nível (como C e C++) e programação de FPGAs para dar inteligência ao hardware, podendo inclusive migrar facilmente para o mercado de TI." },
                    { q: "Existem projetos práticos além das aulas teóricas?", a: "Muitos. Desde a EletronJun (empresa júnior) até a equipe UnBeatables de robótica, você terá acesso a laboratórios equipadíssimos como o LITE para aplicar seus conhecimentos." },
                    { q: "Os professores do curso são referência na área?", a: "Absolutamente. O corpo docente inclui especialistas internacionais em FPGAs, sinais e eletromagnetismo, além de referências em microeletrônica." }
                ]
            },
            {
                name: "Engenharia Aeroespacial",
                profile: [10, 95, 60, 90],
                icon: "rocket_launch",
                iconBg: "rocket",
                tags: ["Foguetes", "Satélites", "New Space"],
                shortDesc: "O Céu Não É o Limite — É o Seu Ponto de Partida.",
                longDesc: "A Engenharia Aeroespacial é a especialidade focada no projeto, desenvolvimento, teste estrutural e operação de aeronaves (aviões e helicópteros) e veículos espaciais (foguetes, satélites, mísseis e espaçonaves). O engenheiro desta área lida diariamente com desafios extremos: velocidades incríveis, variações térmicas violentas e materiais que precisam ser simultaneamente leves e inquebráveis.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>O que diferencia a Aeroespacial da Mecânica?</h4>Enquanto a Mecânica foca em máquinas industriais e veículos terrestres com aço e ferro fundido, a Aeroespacial trabalha exclusivamente com <strong>materiais compostos de altíssima resistência e baixo peso</strong> (como fibra de carbono) e aerodinâmica de alta velocidade — dinâmica de gases compressíveis, empuxo de jatos e fluxo supersônico. A disciplina que mais impressiona: <strong>Dinâmica dos Gases para Sistemas Aeroespaciais</strong>, onde os alunos aprendem os comportamentos bizarros do ar em velocidades supersônicas e hipersônicas — a ciência exata por trás do motor de foguete e da reentrada atmosférica.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Ecossistema Único no Campus Gama</h4><ul style='margin-left: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px;'><li><strong>🚀 Capital Rocket Team:</strong> 1º lugar no Latin American Space Challenge com foguete híbrido a 3km de apogeu.</li><li><strong>🔥 Lab de Propulsão Química (CPL):</strong> Pioneiro no hemisfério sul em testes reais com motores híbridos (oxigênio + parafina) e motores impressos em 3D.</li><li><strong>🏭 Zenit Aerospace:</strong> Empresa júnior gerida por estudantes — drones, modelagem 3D, consultoria em fluidos e o projeto social <em>Escola Espacial</em> para alunos do ensino básico.</li><li><strong>🤯 Foguete Hermes:</strong> Estudantes projetaram um foguete de 1,40m em PVC e impressão 3D que alcançou 700 metros de altura em Goiás.</li></ul>",
                mission: "Projetar a trajetória de lançamento e calcular o apogeu de um foguete híbrido como o Capital Rocket Team, utilizando as equações de dinâmica de gases do curso.",
                missionTitle: "Capital Rocket Team",
                missionStats: { stat1Title: "Apogeu Recorde", stat1Value: "3 km", stat2Title: "Propulsão", stat2Value: "Híbrida" },
                image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80",
                link: "https://fcte.unb.br/index.php/graduacao/engenharia-aeroespacial",
                myth: { common: '"Aeroespacial é só para construir foguetes."', truth: "Drones agrícolas, satélites de baixo custo, aerodinâmica de EVs e certificação de aeronaves comerciais também são Aeroespacial." },
                market: { salary: "Faixa vari?vel por setor", tags: ["Embraer", "New Space", "Drones de Entrega"] },
                disciplines: {
                    base: ["Cálculo e Álgebra Linear", "Física Mecânica e Térmica", "Mecânica dos Sólidos", "Termodinâmica"],
                    specific: ["Aerodinâmica de Sistemas Aeroespaciais", "Mecânica do Voo", "Estruturas Aeroespaciais", "Dinâmica dos Gases"]
                },
                matchPoints: [
                    { icon: "rocket_launch", text: "Fascínio por foguetes e espaço" },
                    { icon: "air", text: "Curiosidade por aerodinâmica e fluidos" },
                    { icon: "architecture", text: "Visão de otimização estrutural" }
                ],
                labs: [
                    { title: "Capital Rocket Team", desc: "1º lugar no Latin American Space Challenge. Foguetes híbridos com motor impresso em 3D e apogeu de 3km.", tag: "Competição", img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80" },
                    { title: "Lab de Propulsão Química", desc: "Pioneiro no hemisfério sul — testes reais com propelentes sólidos, híbridos e motores resfriados em impressão 3D.", tag: "Pesquisa", img: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=600&q=80" },
                    { title: "Zenit Aerospace", desc: "Empresa júnior de estudantes: drones, consultoria em fluidos e o projeto Escola Espacial para alunos do ensino básico.", tag: "Empreendedorismo", img: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=600&q=80" }
                ],
                employability: {
                    stats: [
                        { value: "R$ 17k", label: "Salário Médio Nacional" },
                        { value: "Top 5%", label: "Remuneração no Brasil" },
                        { value: "Global", label: "Validade do Diploma" }
                    ],
                    text: "O engenheiro aeroespacial pertence a um clube altamente restrito. No Brasil, o salário médio gira entre R$ 16.096 e R$ 17.302/mês segundo o CAGED. Seniors facilmente superam R$ 22.700. No exterior (Embraer, Boeing, Airbus), os contratos em dólar ou euro colocam esses profissionais no topo financeiro. O setor 'New Space' — barateamento de microssatélites e drones de entrega — abre frentes inesgotáveis de inovação.",
                    source: "CAGED/MTE, Embraer Careers e Agência Espacial Brasileira (AEB) — 2025"
                },
                quickFacts: [
                    { label: "Créditos", value: "262" },
                    { label: "Carga Horária", value: "3.930h" },
                    { label: "Turno", value: "Diurno" },
                    { label: "Duração", value: "10 Semestres" }
                ],
                skills: [
                    { label: "Aerodinâmica & Dinâmica de Gases", pct: 94 },
                    { label: "Estruturas Aeroespaciais", pct: 90 },
                    { label: "Propulsão e Motores", pct: 88 },
                    { label: "Simulação Numérica (CFD)", pct: 82 },
                    { label: "Materiais Compostos", pct: 85 }
                ],
                timeline: [
                    { semester: "1º–3º Semestre", title: "Ciclo Básico Comum (ABI)", desc: "Cálculo, Física, Álgebra Linear e Algoritmos. Base sólida para todos, antes da escolha da habilitação." },
                    { semester: "3º Semestre", title: "Escolha da Habilitação por CR", desc: "Seleção interna pelo Coeficiente de Rendimento. A tensão de escolher a engenharia fica para depois — com maturidade." },
                    { semester: "4º–7º Semestre", title: "Formação Técnica Avançada", desc: "Aerodinâmica, Propulsão Química, Mecânica do Voo, Estruturas Aeroespaciais. Participação no Capital Rocket Team e Lab de Propulsão." },
                    { semester: "8º–9º Semestre", title: "Estágio & TCC 1", desc: "Estágio em empresas como Embraer, AEB ou no CPL do próprio campus. Início do projeto de conclusão de curso." },
                    { semester: "10º Semestre", title: "TCC 2 & Colação de Grau", desc: "Defesa final do projeto. Egressos com diploma reconhecido pela Embraer e válido internacionalmente." }
                ],
                faq: [
                    { q: "Preciso ser gênio de matemática para entrar?", a: "Não precisa ser gênio, mas precisa amar matemática e física. O ciclo básico ensina do zero, mas a dedicação é intensa. Se você curte resolver problemas complexos passo a passo, vai se encaixar muito bem." },
                    { q: "Quantas universidades no Brasil oferecem Engenharia Aeroespacial?", a: "Muito poucas. A UnB Gama é uma das mais bem equipadas do país, com laboratórios de propulsão química reais e uma das únicas equipes universitárias de foguetes híbridos da América Latina." },
                    { q: "Posso trabalhar fora do Brasil?", a: "Sim, e essa é uma das grandes vantagens. A física de voo é universal. Com o diploma da UnB e inglês técnico sólido, você pode concorrer a vagas na Boeing, Airbus, SpaceX ou ESA (Agência Espacial Europeia)." },
                    { q: "Como funciona o Capital Rocket Team?", a: "É uma equipe estudantil oficial do campus Gama. Alunos de todos os semestres participam voluntariamente, construindo foguetes reais que competem em campeonatos como o Latin American Space Challenge. O time já foi campeão." },
                    { q: "Há bolsas de pesquisa disponíveis?", a: "Sim. Projetos aeroespaciais da UnB recebem financiamento da Agência Espacial Brasileira (AEB), FAPDF e programas internos como PIBIC e PIBEX. O Lab de Propulsão Química frequentemente abre bolsas para alunos interessados." }
                ]
            },
            {
                name: "Engenharia Automotiva",
                profile: [10, 80, 20, 40],
                icon: "directions_car",
                iconBg: "toys",
                tags: ["Elétricos", "Autônomos", "Powertrain"],
                shortDesc: "Acelere o Futuro da Mobilidade e da Tecnologia.",
                longDesc: "A indústria automotiva vive sua maior revolução em mais de um século, migrando rapidamente dos combustíveis fósseis para a eletrificação, sistemas autônomos e segurança inteligente. No curso de Engenharia Automotiva da UnB (Campus Gama), você não aprende apenas como os carros funcionam; você é treinado para projetar o futuro da mobilidade, unindo mecânica de alta performance com inovação digital.<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Automotiva vs. Mecânica</h4>Enquanto a Engenharia Mecânica lida com máquinas industriais gerais, engrenagens e turbinas, a Automotiva tem um foco exclusivo e superespecializado em <strong>veículos terrestres, dinâmica veicular e eletrônica embarcada</strong>. O grau de integração tecnológica é altíssimo: o foco está em sistemas de controle, injeção eletrônica, híbridos e veículos 100% elétricos, além da otimização para linhas de montagem em massa. A disciplina que mais impressiona é <strong>Sistemas de Controle</strong>, onde o estudante usa a eletrônica para corrigir a trajetória de um veículo derrapando (como no projeto ESC-SIM).<br><br><h4 style='color:var(--on-surface); font-weight: 700; margin: 16px 0 8px 0;'>Ecossistema Mão na Graxa e Digital</h4><ul style='margin-left: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px;'><li><strong>🏎️ Fórmula Gama Racing:</strong> Construção do zero de um carro de Fórmula 100% elétrico para competição nacional.</li><li><strong>🏜️ UnBaja (Piratas do Cerrado):</strong> Projeto de veículo off-road resistente para saltos e terrenos extremos.</li><li><strong>🎮 Simulador de Ponta (Stellantis):</strong> 1º centro do hemisfério sul com um simulador de dinâmica veicular deste nível em universidade.</li><li><strong>🔥 Lab de Motores (LEM):</strong> Testes com dinamômetro DYNOmite e injeções FuelTech FT300 reais.</li></ul>",
                mission: "Simular virtualmente e corrigir a derrapagem de um veículo autônomo usando a lógica de Sistemas de Controle (ESC-SIM).",
                missionTitle: "Controle de Estabilidade",
                missionStats: { stat1Title: "Status", stat1Value: "Simulado", stat2Title: "Veículo", stat2Value: "Autônomo" },
                image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
                link: "https://fcte.unb.br/index.php/graduacao/engenharia-automotiva",
                myth: { common: '"É só curso de mecânico e oficina."', truth: "É alta tecnologia de eletrificação, dinâmica veicular em simuladores e desenvolvimento de carros autônomos." },
                market: { salary: "Faixa vari?vel por setor", tags: ["BYD", "Stellantis", "EVs"] },
                disciplines: {
                    base: ["Cálculo 1, 2 e 3", "Física Básica e Aplicada", "Álgebra Linear", "Ciência dos Materiais"],
                    specific: ["Dinâmica Veicular", "Sistemas Automotivos", "Controle e Eletrônica", "Arquitetura de Motores"]
                },
                matchPoints: [
                    { icon: "directions_car", text: "Paixão por mobilidade e veículos" },
                    { icon: "memory", text: "Interesse em eletrificação e controle" },
                    { icon: "speed", text: "Foco em alta performance" }
                ],
                labs: [
                    { title: "Fórmula Gama Racing", desc: "Equipe que projeta e constrói carro de Fórmula 100% elétrico.", tag: "Competição", img: "https://images.unsplash.com/photo-1503376712344-90a880290515?auto=format&fit=crop&w=600&q=80" },
                    { title: "Simulador Stellantis", desc: "Primeiro simulador universitário de dinâmica veicular avançada do hemisfério sul.", tag: "Inovação", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80" },
                    { title: "Lab de Motores (LEM)", desc: "Bancada com dinamômetro real e injeções programáveis para testes de potência.", tag: "Laboratório", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80" }
                ],
                employability: {
                    stats: [
                        { value: "R$ 7.6k", label: "Piso Inicial" },
                        { value: "Em Alta", label: "Polo DF e Bahia" },
                        { value: "BYD Day", label: "Recrutamento Direto" }
                    ],
                    text: "O engenheiro automotivo da UnB Gama é extremamente cobiçado, especialmente com a transição energética. A gigante BYD realiza recrutamento (BYD Day) presencialmente no campus. Há parcerias fortes com a Stellantis, Continental e Pirelli. Com salários iniciais robustos e tetos superiores a R$ 12.700,00, as vagas em eletrificação e controle automotivo estão fervendo, tanto no Centro-Oeste quanto em grandes polos industriais.",
                    source: "Fontes p?blicas de mercado e valida??o qualitativa futura"
                },
                quickFacts: [
                    { label: "Créditos", value: "215" },
                    { label: "Carga Horária", value: "3.225h" },
                    { label: "Seleção", value: "Fim do 1º Ano (CR)" },
                    { label: "Duração", value: "10 Semestres" }
                ],
                skills: [
                    { label: "Dinâmica Veicular", pct: 95 },
                    { label: "Sistemas de Powertrain (Elétrico/Combustão)", pct: 90 },
                    { label: "Sistemas de Controle & Eletrônica", pct: 88 },
                    { label: "Gestão e Integração de Montagem", pct: 82 },
                    { label: "Simulação Computacional", pct: 85 }
                ],
                timeline: [
                    { semester: "1º–2º Semestre", title: "Ciclo Básico (ABI)", desc: "Aulas comuns de Cálculo, Física e Álgebra Linear para construir o rigor analítico da engenharia." },
                    { semester: "3º Semestre", title: "Seleção de Habilitação", desc: "A escolha definitiva por Automotiva baseada no desempenho escolar (CR), focando no futuro da mobilidade." },
                    { semester: "4º–7º Semestre", title: "Mergulho Automotivo", desc: "Dinâmica Veicular, Motores, Sistemas de Controle. É a hora de entrar no FGR, UnBaja ou trabalhar com o Simulador da Stellantis." },
                    { semester: "8º–9º Semestre", title: "Integração e Estágio", desc: "Gestão de Produção, simulações avançadas no LEM, e início do TCC. Estágio obrigatório em parceiros da indústria." },
                    { semester: "10º Semestre", title: "TCC e Formação", desc: "Apresentação do TCC (muitas vezes ligado a desafios reais de empresas como a BYD) e diplomação de elite." }
                ],
                faq: [
                    { q: "Qual a diferença para a Engenharia Mecânica?", a: "A Engenharia Automotiva é focada especificamente no veículo em sua completude, envolvendo dinâmica de fluidos, design aerodinâmico e muita eletrônica embarcada. A mecânica foca mais em componentes isolados, máquinas industriais e manufatura genérica." },
                    { q: "Vou trabalhar só com motores a combustão?", a: "De forma alguma! O currículo está super atualizado para a era dos veículos elétricos (EVs) e híbridos, envolvendo baterias, powertrain elétrico e sistemas autônomos." },
                    { q: "É possível estagiar nas grandes montadoras?", a: "Sim, e é comum. A UnB tem parcerias com Stellantis (Fiat, Jeep), Continental e Pirelli, e sedia eventos de recrutamento como o 'BYD Day' direto no campus." },
                    { q: "Existem equipes de competição prática?", a: "Muitas. As mais famosas são a Fórmula Gama Racing (carro elétrico de fórmula) e a UnBaja (off-road), além da Empresa Júnior Engrena. Todas formam profissionais altamente resilientes." }
                ]
            },
            {
                name: "Engenharia de Energia",
                profile: [20, 90, 50, 85],
                icon: "bolt",
                iconBg: "solar_power",
                tags: ["Transição Energética", "Sustentabilidade", "Smart Grids"],
                shortDesc: "A escolha que ilumina o seu futuro e transforma o planeta.",
                longDesc: "A matriz energética global atravessa sua maior revolução histórica. O curso de Engenharia de Energia da UnB (Campus Gama) prepara mentes inquietas para liderar a transição rumo à sustentabilidade. Descubra como projetar o futuro, dominar tecnologias renováveis e garantir uma carreira à prova de crises.<br><br><strong>O que você vai fazer:</strong><br>O engenheiro de energia projeta, dimensiona e faz a gestão de usinas de geração (solares, eólicas offshore, hidrelétricas). Você vai desenvolver sistemas de biocombustíveis, otimizar o uso da energia em centros urbanos e desenhar políticas de eficiência energética para a indústria.<br><br><strong>Por que escolher Energia?</strong><br>Enquanto as engenharias clássicas competem em infraestrutura estática, o engenheiro de energia atua na artéria vital da civilização, unindo termodinâmica e descarbonização em escala global.",
                mission: "Produzir biodiesel a partir do óleo residual de fritura oriundo do Distrito Federal (Projeto BioGama) e utilizá-lo na prática para abastecer e mover a frota de ônibus da própria Universidade de Brasília.",
                missionTitle: "Biocombustível na Prática",
                missionStats: { stat1Title: "Insumo", stat1Value: "Óleo Residual", stat2Title: "Aplicação", stat2Value: "Frota da UnB" },
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgutFhf1cBDkgYFj-Nh2_7pOriEvkXQ7JixkksV5O2nrfQHPu3GmU7pthETfqlVd2qoO3EAFNf_nzidqbDWr-Z9oHH9O1auff3H6jCnpRuAKljNEe15yvW7yME-eQTyDuEiRii9sq9fCSRZ00yhUXSXC9m1XHlp36nq3An8_8TnuFbuQWs8FzW69_1FuvVvRbmDvNm2PmJluAB5E7yw5Ik3GEuKf8yigQKcrZlviN58fLjjzuzY98AJ--q3OnzEkHe8vH68pGYHU",
                link: "https://fcte.unb.br/index.php/graduacao/engenharia-de-energia",
                myth: { common: '"É a mesma coisa que Engenharia Elétrica."', truth: "Elétrica foca no fluxo de elétrons e circuitos. Energia foca na matriz, conversão e origem das fontes (vento, biomassa, solar)." },
                market: { salary: "Faixa vari?vel por setor", tags: ["Mercado Livre de Energia", "Mobilidade Elétrica", "Data Centers"] },
                disciplines: {
                    base: ["Termodinâmica Aplicada", "Mecânica dos Fluidos", "Física Clássica e Moderna", "Cálculo Diferencial"],
                    specific: ["Energia Solar Fotovoltaica e Térmica", "Sistemas Eólicos", "Tecnologia de Biocombustíveis", "Planejamento Econômico Setorial"]
                },
                matchPoints: [
                    { icon: "public", text: "Protagonismo na Descarbonização" },
                    { icon: "electric_car", text: "Liderança na Nova Mobilidade (EVs)" },
                    { icon: "monitoring", text: "Inteligência do Mercado Livre" }
                ],
                labs: [
                    { title: "Lab-NanoTec", desc: "Revolução dos nanomateriais e próxima geração de células solares.", tag: "Nanotecnologia", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk04FTwoeS_bL8d0pQTlv7Zw6-ZQuMT-tnhMczislpDA-vACrvXMNe7ioghQfkygKzEZIUWoy-O09cSp_PN8DMKvjkh1J-tMixNBuYvvajfj-Hfu8RfkajWyNLReO6Fk7Pa6uaP8D4rq6UgacH9Jg-HRXb9wm6k2l6_iA3ZfWprKlml1YsCHbKrfjJNiG4H3jpotozXxcJwH4kymLnZKFOdttT7fcCA9YQSW_0fIFWOnxIbbpb2U4gdOkEMqFGrzHw_CBRbBCkkmE" },
                    { title: "LATAME & BioGama", desc: "Berço das inovações em tecnologias ambientais, biomassa e biodiesel.", tag: "Pesquisa", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1P4P_OLu9UyniqisPV6KwzG0XqUIqAqS0ccjyAJjpogyn1P1g6014-QLkbmR3AiHsktJ-fM86czYvgqCf4KC8TfgG5tki-Z7_83GIXNWAaeuQ730tHspEDqNzaEBQe8TfbLk9pZ6X_lss1VvLB9NW-wABUD9DoaKgp1BKh7dweGkoUVGljsUdDU-OgB720mSfN-fJ6fOFt2S0SEBYK2WXSAiuZbts2Ib7SPtP-8exle4FRtoUyDgb-I-x3uYAZ56dBRjlvWTUTs" },
                    { title: "Capital Rocket Team", desc: "Foguetes com motor híbrido impresso em 3D e resfriamento ativo.", tag: "Competição", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFIMygtR7R5Omo0A60JV6OyWXIkjjAKhj66OCCV-GGIy-OCvi21KjlAHuNKy_CFn06QfU6FVT6BZYr2grolVWD9mvIw4da9NAk-VRBeLOMqHhCTjHVvReDqiPEvAJwBbl4IO5c5jFiHCQ17XCold7Mb18WfEmCPZSLe8TrNOlUlHjTf_2ZfciGjWTsvQWOGAAjw38jEHtrd952x9peivXUqBunIeZMO3BebGAzU1EPfCNg1EJWxiQY2cr_Gw-S_f313ME-upo4CUs" }
                ],
                employability: {
                    stats: [
                        { value: "100%", label: "Resiliência de Carreira" },
                        { value: "Extrema", label: "Demanda por Analíticos" },
                        { value: "Em Alta", label: "Data Centers e Fintechs" }
                    ],
                    text: "A transição energética global causou uma escassez severa de talentos analíticos no setor. A Engenharia de Energia da UnB não restringe opções; ela qualifica o profissional para o nicho mais resiliente da macroeconomia. As empresas disputam os egressos para preencher vagas em novos Data Centers, na nascente indústria de Mobilidade Elétrica (EVs) no Brasil e nas 'Fintechs da Eletricidade' operando no Mercado Livre de Energia.",
                    source: "Balanço Energético Nacional (EPE) e Ministério de Minas e Energia (2026)"
                },
                quickFacts: [
                    { label: 'Duração', value: '10 Semestres' },
                    { label: 'Campus', value: 'FCTE/Gama' },
                    { label: 'Mercado', value: 'Transição Energética' },
                    { label: 'Turno', value: 'Diurno' }
                ],
                skills: [
                    { label: 'Sistemas de Potência Elétrica', pct: 92 },
                    { label: 'Energia Solar & Eólica', pct: 88 },
                    { label: 'Smart Grids & IoT', pct: 80 },
                    { label: 'Eficiência Energética', pct: 85 },
                    { label: 'Mercado Livre de Energia', pct: 78 }
                ],
                timeline: [
                    { semester: '1º–3º Semestre', title: 'Ciclo Básico Comum (ABI)', desc: 'Matemática, Cálculo, Física e Algoritmos compartilhados com as 5 engenharias do campus Gama.' },
                    { semester: '3º Semestre', title: 'Ingresso em Energia', desc: 'Escolha da habilitação pelo CR. O estudante mergulha nos fundamentos da Engenharia Elétrica e de Potência.' },
                    { semester: '4º–7º Semestre', title: 'Especialização em Sistemas Energéticos', desc: 'Fontes renováveis, eletrônica de potência, Smart Grids, LATAME, BioGama e Capital Rocket Team.' },
                    { semester: '8º–9º Semestre', title: 'Estágio Técnico', desc: 'Estágio em concessionárias de energia, startups de cleantech, data centers ou indústrias do Mercado Livre.' },
                    { semester: '10º Semestre', title: 'TCC & Colação de Grau', desc: 'Projeto de conclusão frequentemente voltado para soluções energéticas reais com impacto no setor.' }
                ],
                faq: [
                    { q: 'Engenharia de Energia é igual a Engenharia Elétrica?', a: 'Não. Engenharia de Energia tem um foco estratégico na geração, distribuição e eficiência energética global, especialmente fontes renováveis. A Engenharia Elétrica é mais ampla e abrange circuitos, eletrônica e telecomunicações.' },
                    { q: 'Existe mercado para Engenheiro de Energia no Brasil?', a: 'Crescendo exponencialmente. A expansão de data centers, a frota de veículos elétricos (EVs), e o Mercado Livre de Energia (que já tem mais de 12.000 consumidores livres) são os principais vetores de demanda.' },
                    { q: 'O campus Gama tem infraestrutura para estudo de energia?', a: 'Sim. O campus conta com laboratórios especializados, o grupo LATAME (tecnologias ambientais e energéticas), e o BioGama (biomassa e biodiesel). A Capital Rocket Team também usa propulsão híbrida que envolve conhecimentos de energia.' },
                    { q: 'Quais saíram profissional? É reconhecida pelo MEC?', a: 'Sim, o curso é reconhecido e avaliado positivamente. O ENADE e as avaliações do MEC colocam a FCTE entre as instituições de referência em engenharia do Centro-Oeste.' }
                ]
            }
        ];

        const profileAnalyses = {
            "Engenharia de Software": {
                "Engenharia Eletrônica": "Seu forte interesse em lógica abstrata e criação de soluções digitais escaláveis foi o principal motor para a compatibilidade com Software. No entanto, sua curiosidade por entender como o código interage com o mundo físico gerou uma proximidade notável com a Eletrônica, sugerindo um perfil que transita bem entre o virtual e o hardware.",
                "Engenharia Aeroespacial": "Sua aptidão para modelagem lógica e inteligência artificial aponta fortemente para Software, enquanto sua atração por sistemas complexos e simulação de dinâmica física encontra eco na Engenharia Aeroespacial.",
                "Engenharia Automotiva": "Você demonstra grande afinidade com arquitetura de software e sistemas lógicos, mas também mostra forte interesse em telemetria, sensores e processamento de dados veiculares na Engenharia Automotiva.",
                "Engenharia de Energia": "Sua mente lógica busca a criação de sistemas e código limpo, mas a sensibilidade para redes inteligentes e monitoramento inteligente de dados aproxima você da Engenharia de Energia.",
                "default": "Seu forte interesse em algoritmos, lógica abstrata e criação de soluções digitais escaláveis direcionou sua maior afinidade para Engenharia de Software."
            },
            "Engenharia Eletrônica": {
                "Engenharia de Software": "Seu perfil foca no projeto de hardware, circuitos e microcontroladores na Eletrônica, mas sua forte proximidade com algoritmos e programação cria um elo direto com a Engenharia de Software.",
                "Engenharia Aeroespacial": "O domínio de circuitos e eletrônica embarcada é seu ponto forte, complementado por um grande interesse na aplicação desses sistemas em veículos espaciais e aeronáutica.",
                "Engenharia Automotiva": "Seu perfil transita pelo design de circuitos eletrônicos, integrando-se diretamente à eletrônica embarcada, redes de sensores (CAN) e sistemas eletrônicos veiculares.",
                "Engenharia de Energia": "Sua aptidão para o estudo de sinais e circuitos elétricos se alinha com a eletrônica industrial, encontrando um ponto de convergência com sistemas elétricos de potência e fontes de energia.",
                "default": "Seu perfil é caracterizado pela paixão por circuitos integrados, microprocessadores e o projeto de hardware inteligente na Engenharia Eletrônica."
            },
            "Engenharia de Energia": {
                "Engenharia de Software": "Sua mente se divide entre projetar sistemas de eficiência energética e o desenvolvimento de algoritmos de otimização de rede, criando uma excelente ponte com Engenharia de Software.",
                "Engenharia Eletrônica": "O controle de potência, eficiência de geração e conversores na Engenharia de Energia se alinham diretamente com o estudo de circuitos de potência e automação na Eletrônica.",
                "Engenharia Aeroespacial": "Você tem interesse em grandes matrizes e sistemas sustentáveis, mas também demonstra atração pela engenharia de propulsão e alimentação solar de sistemas orbitais.",
                "Engenharia Automotiva": "Seu foco em sustentabilidade e eficiência energética encontra aplicação imediata na eletrificação de frotas e powertrains de veículos híbridos/elétricos.",
                "default": "Seu perfil aponta para a liderança na transição energética, com forte afinidade por fontes renováveis de energia, redes inteligentes e sustentabilidade ambiental."
            },
            "Engenharia Aeroespacial": {
                "Engenharia de Software": "Seu perfil é voltado para a física aeroespacial e dinâmica de voo, com uma base sólida em computação para rodar simulações orbitais complexas e sistemas embarcados.",
                "Engenharia Eletrônica": "A engenharia de satélites e aeronaves de alto desempenho atrai você, especialmente no que tange a sensores eletrônicos, antenas e telemetria orbital de alta fidelidade.",
                "Engenharia Automotiva": "A aerodinâmica e o uso de novos materiais de alta resistência unem seu interesse aeroespacial à otimização e dinâmica de veículos terrestres de alta performance.",
                "Engenharia de Energia": "Seu foco na estabilidade aeroespacial se une a uma preocupação de vanguarda com matrizes energéticas limpas para a alimentação contínua de bases e satélites no espaço.",
                "default": "Você demonstra fascínio por aerodinâmica, física orbital, propulsão e a engenharia de alta performance voltada para aeronaves, foguetes e drones."
            },
            "Engenharia Automotiva": {
                "Engenharia de Software": "Sua paixão por veículos é complementada por um interesse em direção autônoma, telemetria em tempo real e inteligência artificial embarcada na Engenharia de Software.",
                "Engenharia Eletrônica": "Você é atraído por sistemas veiculares e mecânica, com um interesse acentuado nas redes de computação de bordo, atuadores e sensores eletrônicos inteligentes.",
                "Engenharia Aeroespacial": "Seu interesse em dinâmica e aerodinâmica veicular compartilha fundamentos profundos de mecânica dos fluidos e materiais leves com a Engenharia Aeroespacial.",
                "Engenharia de Energia": "A busca por motores eficientes, novos powertrains elétricos e hidrogênio verde aproxima sua visão automotiva do campo de energias renováveis e sustentabilidade.",
                "default": "Seu perfil combina paixão pela engenharia de movimento, dinâmica veicular, powertrains elétricos/combustão e o design estrutural de automóveis e sistemas móveis."
            }
        };

        const intersections = {
            "Engenharia de Software-Engenharia Eletrônica": "Automação, Robótica e Internet das Coisas (IoT) são os pontos onde hardware e código se integram.",
            "Engenharia de Software-Engenharia Aeroespacial": "Sistemas de voo autônomo, simulação orbital e computação embarcada em satélites e foguetes.",
            "Engenharia de Software-Engenharia Automotiva": "Direção autônoma, telemetria veicular em tempo real e software de controle para sistemas automotivos.",
            "Engenharia de Software-Engenharia de Energia": "Smart Grids (redes inteligentes), algoritmos de eficiência e monitoramento digital de sistemas de energia.",
            
            "Engenharia Eletrônica-Engenharia de Software": "Automação, Robótica e Internet das Coisas (IoT) são os pontos onde hardware e código se integram.",
            "Engenharia Eletrônica-Engenharia Aeroespacial": "Aviônica, sensores espaciais e sistemas de comunicação por rádio em satélites e aeronaves.",
            "Engenharia Eletrônica-Engenharia Automotiva": "Redes de comunicação veicular (CAN), unidades de controle eletrônico (ECUs) e sensores embarcados.",
            "Engenharia Eletrônica-Engenharia de Energia": "Eletrônica de potência, controle de conversores e gerenciamento eletrônico de baterias.",
            
            "Engenharia Aeroespacial-Engenharia de Software": "Sistemas de voo autônomo, simulação orbital e computação embarcada em satélites e foguetes.",
            "Engenharia Aeroespacial-Engenharia Eletrônica": "Aviônica, sensores espaciais e sistemas de comunicação por rádio em satélites e aeronaves.",
            "Engenharia Aeroespacial-Engenharia Automotiva": "Dinâmica de fluidos (CFD), túnel de vento, aerodinâmica e estruturas leves de fibra de carbono.",
            "Engenharia Aeroespacial-Engenharia de Energia": "Alimentação solar de satélites, propulsão elétrica e sistemas sustentáveis em bases isoladas.",
            
            "Engenharia Automotiva-Engenharia de Software": "Direção autônoma, telemetria veicular em tempo real e software de controle para sistemas automotivos.",
            "Engenharia Automotiva-Engenharia Eletrônica": "Redes de comunicação veicular (CAN), unidades de controle eletrônico (ECUs) e sensores embarcados.",
            "Engenharia Automotiva-Engenharia Aeroespacial": "Dinâmica de fluidos (CFD), túnel de vento, aerodinâmica e estruturas leves de fibra de carbono.",
            "Engenharia Automotiva-Engenharia de Energia": "Sistemas de tração elétrica (powertrain elétrico), eficiência de baterias e células de combustível de hidrogênio.",
            
            "Engenharia de Energia-Engenharia de Software": "Smart Grids (redes inteligentes), algoritmos de eficiência e monitoramento digital de sistemas de energia.",
            "Engenharia de Energia-Engenharia Eletrônica": "Eletrônica de potência, controle de conversores e gerenciamento eletrônico de baterias.",
            "Engenharia de Energia-Engenharia Aeroespacial": "Alimentação solar de satélites, propulsão elétrica e sistemas sustentáveis em bases isoladas.",
            "Engenharia de Energia-Engenharia Automotiva": "Sistemas de tração elétrica (powertrain elétrico), eficiência de baterias e células de combustível de hidrogênio."
        };

        const optionToCourse = [
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia Aeroespacial" ], // Q1
            [ "Engenharia de Energia", "Engenharia Eletrônica", "Engenharia de Software" ], // Q2
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia Automotiva" ], // Q3
            [ "Engenharia de Software", "Engenharia Automotiva", "Engenharia Aeroespacial" ], // Q4
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia de Energia" ], // Q5
            [ "Engenharia de Software", "Engenharia Aeroespacial", "Engenharia Automotiva" ], // Q6
            [ "Engenharia de Software", "Engenharia Aeroespacial", "Engenharia de Energia" ], // Q7
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia Automotiva" ], // Q8
            [ "Engenharia Aeroespacial", "Engenharia Eletrônica", "Engenharia de Software" ], // Q9
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia de Energia" ], // Q10
            [ "Engenharia de Software", "Engenharia Aeroespacial", "Engenharia de Energia" ], // Q11
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia Automotiva" ], // Q12
            [ "Engenharia de Software", "Engenharia de Energia", "Engenharia Eletrônica" ], // Q13
            [ "Engenharia Aeroespacial", "Engenharia de Software", "Engenharia Automotiva" ], // Q14
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia Automotiva" ], // Q15
            [ "Engenharia Eletrônica", "Engenharia de Software", "Engenharia de Energia" ], // Q16
            [ "Engenharia Eletrônica", "Engenharia Aeroespacial", "Engenharia de Software" ], // Q17
            [ "Engenharia de Software", "Engenharia Automotiva", "Engenharia de Energia" ], // Q18
            [ "Engenharia de Software", "Engenharia Aeroespacial", "Engenharia Automotiva" ], // Q19
            [ "Engenharia de Software", "Engenharia Eletrônica", "Engenharia de Energia" ]  // Q20
        ];
