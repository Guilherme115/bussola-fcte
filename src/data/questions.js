const questionsData = [
  {
    "id": "drone_entrega",
    "title": "Desafio 1: O Enxame de Drones",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #1a1a2e; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #0f3460;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #e94560; animation: blink 2s infinite;\">flight_takeoff</span></div>",
    "theoryHtml": "<p>Você está na sala de controle da Cruz Vermelha. Após um terremoto de magnitude 7.8 devastar uma cidade costeira, as ruas estão bloqueadas por escombros e 50 drones de carga precisam chegar a 12 hospitais de campanha. O problema: uma tempestade se aproxima com rajadas de vento de até 80 km/h, e o sistema anticolisão dos drones está travando porque os sensores ultrassônicos estão captando ecos falsos da chuva. Cada drone carrega insulina e plasma sanguíneo — se colidirem ou desviarem da rota, pessoas morrem.</p><ul><li>Os dados de telemetria indicam que o firmware de navegação pode ser reescrito para usar um modelo preditivo de rajadas baseado nos dados meteorológicos em tempo real do satélite.</li><li>Os sensores LiDAR de alcance longo, que operam por laser e não são afetados pela chuva, ainda estão funcionando e podem substituir os ultrassônicos se alguém reconfigurar o hardware dos drones manualmente.</li><li>Ajustar mecanicamente o centro de gravidade de cada drone, redistribuindo o peso da carga, aumenta a estabilidade aerodinâmica em vento cruzado sem precisar de qualquer mudança no software.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> A janela de tempo é de 18 minutos antes da tempestade fechar o espaço aéreo. Todas as abordagens do manual podem salvar as vidas dos pacientes. <strong>O que VOCÊ prefere fazer?</strong></p>",
    "options": [
      {
        "text": "Travar no computador reescrevendo o algoritmo de voo para prever o padrão das rajadas usando os dados meteorológicos do satélite em tempo real.",
        "impact": [25, 10, 20, 0]
      },
      {
        "text": "Pegar o kit de ferramentas, ir fisicamente até cada drone na pista e reconfigurar os cabos dos sensores LiDAR para substituir os ultrassônicos com defeito.",
        "impact": [-20, 20, 5, 20]
      },
      {
        "text": "Redistribuir manualmente o peso da carga dentro de cada drone, ajustando os compartimentos para baixar o centro de massa e ganhar estabilidade física no vento.",
        "impact": [-25, 15, -15, 5]
      }
    ]
  },
  {
    "id": "grid_inteligente",
    "title": "Desafio 2: Blackout na Metrópole",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #000; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #333;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #ffd700; animation: blink 1s infinite;\">bolt</span></div>",
    "theoryHtml": "<p>São Paulo, 18h de uma sexta-feira de verão. A temperatura bateu 42°C e 4 milhões de aparelhos de ar-condicionado foram ligados simultaneamente. A rede elétrica da cidade entrou em colapso em cascata: a Subestação Norte desligou, puxando as outras três. Agora, 11 milhões de pessoas estão sem luz. Hospitais estão na bateria. O metrô parou no meio dos trilhos. A causa raiz: o pico de 14.200 MW superou o limite da rede em 8% — menos de 1.200 MW de diferença entre o caos e a normalidade.</p><ul><li>Os 600.000 carros elétricos estacionados e conectados à rede em modo V2G (Vehicle-to-Grid) podem ser acionados remotamente para injetar coletivamente até 2.400 MW de volta à rede — energia suficiente para reverter o colapso em minutos, se o sistema de comando for ativado.</li><li>Um script de gerenciamento inteligente pode enviar um sinal para todos os termostatos conectados da cidade, elevando automaticamente a temperatura dos ares-condicionado de 20°C para 24°C por apenas 15 minutos, reduzindo o consumo em ~1.500 MW sem desligar nada.</li><li>Redirecionar manualmente o fluxo de carga entre as subestações ainda operacionais, abrindo e fechando disjuntores físicos de 138kV, pode equilibrar a distribuição e evitar novos colapsos em cascata.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> O sistema de UTI do Hospital das Clínicas tem bateria para 9 minutos. Todas as abordagens funcionam e a cidade precisa de você. <strong>O que VOCÊ prefere fazer?</strong></p>",
    "options": [
      {
        "text": "Sentar na frente do painel de controle e executar o script que manda o sinal para os 600.000 carros elétricos injetarem energia de volta na rede simultaneamente.",
        "impact": [25, 10, 20, 5]
      },
      {
        "text": "Pegar o rádio e coordenar a equipe de campo para abrir e fechar os disjuntores físicos de 138kV nas subestações e reequilibrar a carga manualmente.",
        "impact": [-25, 20, -10, 20]
      },
      {
        "text": "Rodar o algoritmo de gerenciamento térmico que ajusta os termostatos de toda a cidade automaticamente, cortando 1.500 MW de consumo em 30 segundos.",
        "impact": [20, 15, 20, 10]
      }
    ]
  },
  {
    "id": "rover_marte",
    "title": "Desafio 3: Sobrevivência em Marte",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #4a1e1e; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #8b0000;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #ff4500; animation: blink 3s infinite;\">precision_manufacturing</span></div>",
    "theoryHtml": "<p>Às 03h47 (horário de Houston), o Rover Perseverance II parou de responder. Uma tempestade de areia marciana — com partículas de óxido de ferro movendo-se a 140 km/h — enterrou os painéis solares e o rover ficou sem energia por 72 horas. Quando voltou, algo deu errado: os logs de telemetria mostram que o computador de bordo está enviando comandos, mas as rodas não se movem. A NASA tem uma janela de 4 horas antes que a bateria de backup esgote completamente e o rover congele para sempre a -80°C. Custo da missão: U$3,9 bilhões.</p><ul><li>Análise dos logs sugere que o kernel do sistema operacional do rover pode ter sofrido corrupção de memória por radiação cósmica durante a tempestade — reinicializar o sistema via linha de comando por rádio pode restaurar as funções motoras.</li><li>Os dados de corrente elétrica mostram uma leitura anômala de 0 ampères nos controladores dos motores das rodas traseiras — isso aponta para um fusível eletrônico queimado na placa de distribuição de potência, que pode ser substituído remotamente ativando um circuito de bypass redundante.</li><li>Imagens de câmera de alta resolução mostram que areia compactada está fisicamente travando o mecanismo de rotação das rodas — um protocolo de movimentação alternado (frente-ré em pulsos curtos) pode destravá-las mecanicamente.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> A equipe da NASA está dividida. Todas as abordagens podem salvar a missão. <strong>O que VOCÊ faria primeiro?</strong></p>",
    "options": [
      {
        "text": "Abrir o terminal de rádio e enviar os comandos para reiniciar o kernel do sistema operacional do rover, linha por linha, aguardando a confirmação de cada instrução.",
        "impact": [25, 15, 20, 0]
      },
      {
        "text": "Analisar os diagramas elétricos do rover e ativar o circuito de bypass redundante para contornar o fusível queimado nos controladores dos motores.",
        "impact": [5, 10, 20, -25]
      },
      {
        "text": "Programar uma sequência de pulsos de movimento frente-ré nos motores para destravá-los mecanicamente da areia compactada, sem tocar no software do sistema.",
        "impact": [-20, 20, -10, 10]
      }
    ]
  },
  {
    "id": "formula_e",
    "title": "Desafio 4: A Curva Perfeita",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #111; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #00ff00;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #00ff00; animation: blink 1.5s infinite;\">settings_input_component</span></div>",
    "theoryHtml": "<p>Monaco, circuito da Fórmula E. Faltam 2 voltas para o fim e o carro #7 da equipe brasileira está em 2º lugar, a 1.2 segundos do líder. O problema apareceu na curva Sainte-Dévote: toda vez que o piloto passa de 210 km/h e entra na curva, os pneus traseiros perdem aderência por 0.3 segundos — o suficiente para perder 0.8 segundos por volta. Os engenheiros no muro identificaram três causas possíveis que podem ser corrigidas agora mesmo, com o carro em movimento.</p><ul><li>Os dados do sistema de controle de tração mostram que a ECU (Unidade de Controle Eletrônica) está distribuindo torque de forma igual para as rodas traseiras mesmo em curva — reprogramar o mapa de torque via rádio para reduzir 18% de potência na roda externa durante curvas pode eliminar o deslizamento.</li><li>Os sensores de pressão das molas da suspensão traseira mostram que elas estão 3mm mais altas do que o ideal para o traçado de Monaco — o piloto pode ativar manualmente o ajuste de ride height no cockpit para baixar a traseira e aumentar o downforce mecânico.</li><li>Os aerofólios traseiros estão na posição de menor resistência (DRS aberto) configurados para as retas — mudar o ângulo de ataque das asas via controle de pit para 3 graus a mais vai gerar 180kg adicionais de força para baixo nas curvas.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> O piloto está esperando sua instrução pelo rádio. Todas as soluções funcionam. <strong>O que VOCÊ manda ele fazer?</strong></p>",
    "options": [
      {
        "text": "Reprogramar remotamente o mapa de torque da ECU do carro, ajustando a distribuição de potência entre as rodas traseiras para eliminar o deslizamento via código.",
        "impact": [20, 15, 20, -10]
      },
      {
        "text": "Mandar o piloto ativar o ajuste de ride height no cockpit para baixar mecanicamente a suspensão traseira 3mm e ganhar aderência física no asfalto.",
        "impact": [-25, 20, -15, -5]
      },
      {
        "text": "Acionar o controle de pit para fechar o DRS e mudar o ângulo das asas traseiras para 3 graus, aumentando o downforce aerodinâmico nas curvas.",
        "impact": [-15, 25, 10, 20]
      }
    ]
  },
  {
    "id": "data_center",
    "title": "Desafio 5: O Calor do Conhecimento",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #2c3e50; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #34495e;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #3498db; animation: blink 2s infinite;\">dns</span></div>",
    "theoryHtml": "<p>São 2h da manhã no datacenter da Petrobras em Macaé. Os sensores de temperatura dispararam: o Rack B-12, que hospeda os modelos sísmicos que guiam a perfuração de um poço de pré-sal a 7km de profundidade, está a 89°C — 14°C acima do limite seguro. Causa: uma das bombas do sistema de resfriamento líquido travou. Se o rack desligar por superaquecimento, os dados sísmicos se perdem e a perfuração precisa ser suspensa, custando R$2,3 milhões por dia de parada. Há três formas de evitar isso agora.</p><ul><li>Migrar o processamento do Rack B-12 para os servidores frios do Rack A-07 (que está a 61% de capacidade) via software de balanceamento de carga — isso reduz a carga térmica do rack problemático em 40% nos próximos 3 minutos.</li><li>Reduzir a voltagem dos processadores do Rack B-12 de 1.35V para 1.20V via BIOS remoto (undervolting) — isso corta o consumo de energia e a geração de calor em 22% sem desligar nada, mas exige ajuste manual nos parâmetros do firmware de cada servidor.</li><li>Abrir o painel traseiro do rack, direcionar os ventiladores industriais portáteis da sala diretamente para os dissipadores dos servidores mais quentes e aumentar o fluxo das bombas auxiliares manualmente.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> A temperatura subiu mais 2°C enquanto você lia o manual. Todas as abordagens salvam os dados. <strong>O que VOCÊ faz agora?</strong></p>",
    "options": [
      {
        "text": "Abrir o terminal de administração e migrar os processos de modelagem sísmica do rack quente para os servidores frios via comandos de balanceamento de carga.",
        "impact": [25, 10, 20, 5]
      },
      {
        "text": "Entrar no BIOS remoto de cada servidor e ajustar manualmente o parâmetro de voltagem de 1.35V para 1.20V para cortar a geração de calor no hardware.",
        "impact": [5, 10, 20, -25]
      },
      {
        "text": "Pegar os ventiladores industriais do depósito, abrir o rack e posicioná-los estrategicamente nos servidores mais quentes enquanto ajusta as bombas auxiliares.",
        "impact": [-20, 20, -5, 15]
      }
    ]
  },
  {
    "id": "foguete_reutilizavel",
    "title": "Desafio 6: Pouso Vertical",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #000814; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #003566;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #ffc300; animation: blink 0.5s infinite;\">rocket</span></div>",
    "theoryHtml": "<p>O primeiro estágio do Foguete Saturno V-R está a 4.200 metros de altitude, descendo a 180 m/s em direção à plataforma offshore no Atlântico. Faltam 23 segundos para o pouso. O problema: ventos laterais de 65 km/h estão empurrando o foguete 12 metros para fora da zona de pouso segura. Se tocar fora do círculo de 8 metros de diâmetro da plataforma, o foguete — que vale U$60 milhões — vai ao fundo do oceano. O computador de controle ainda está operacional, mas não consegue compensar o vento sozinho porque o algoritmo foi calibrado para condições de mar calmo.</p><ul><li>As 4 aletas de controle (grid fins) instaladas no corpo do foguete ainda respondem aos comandos e podem ser ajustadas manualmente via console de missão para criar resistência aerodinâmica assimétrica e corrigir a deriva lateral.</li><li>O algoritmo de controle preditivo pode ser substituído em tempo real por um novo conjunto de parâmetros calibrado para vento cruzado de 65km/h, que já foi testado em simulação — leva 8 segundos para fazer o upload e outros 6 para o sistema estabilizar.</li><li>Os 4 motores Merlin nas pernas de pouso têm capacidade de empuxo vetorial — ativar os motores externos em sequência assimétrica pode compensar o empurrão lateral do vento com força pura.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 23 segundos para o impacto. Todas as manobras podem salvar o foguete. <strong>Qual é o seu instinto?</strong></p>",
    "options": [
      {
        "text": "Dar o upload dos novos parâmetros do algoritmo de pouso calibrado para vento de 65km/h e deixar o computador de controle recalcular a trajetória automaticamente.",
        "impact": [25, 20, 20, 10]
      },
      {
        "text": "Assumir o controle manual das aletas de direção do foguete no console e ajustar o ângulo delas para criar resistência aerodinâmica do lado oposto ao vento.",
        "impact": [-20, 25, 10, 25]
      },
      {
        "text": "Ativar os motores das pernas de pouso em sequência assimétrica para usar o empuxo dos próprios motores como força de correção lateral contra o vento.",
        "impact": [-15, 20, -10, 15]
      }
    ]
  },
  {
    "id": "fazenda_eolica",
    "title": "Desafio 7: Tempestade no Mar",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #e1f5fe; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #01579b;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #0288d1; animation: blink 2s infinite;\">air</span></div>",
    "theoryHtml": "<p>A Fazenda Eólica Offshore Ventos do Atlântico, com 87 turbinas de 6 MW cada, está a 40km da costa do Ceará. Um ciclone extratropical inesperado está se aproximando com ventos de 130 km/h — 30% acima do limite operacional das turbinas de 100 km/h. Se as pás girarem nessa velocidade sem proteção, o torque vai destruir as caixas de câmbio, causando um prejuízo de R$340 milhões. A empresa fornece 18% da energia do Nordeste e não pode simplesmente desligar tudo de uma vez — o choque de rejeição de carga poderia desestabilizar toda a rede elétrica regional.</p><ul><li>Cada turbina tem um sistema de ajuste de passo (pitch control) que muda o ângulo de ataque das pás — girar as pás para a posição 'bandeira' (90°) faz o vento deslizar sem girar o rotor, desacelerando a turbina suavemente sem parada brusca.</li><li>Os conversores de potência de cada turbina podem ser configurados para dissipar o excesso de energia gerada pelo vento forte em bancos de resistores e baterias de armazenamento, em vez de rejeitar para a rede — isso permite operar no limite de forma controlada.</li><li>Um sistema de monitoramento por satélite pode automatizar o desligamento sequencial das 87 turbinas em grupos de 10, em intervalos de 90 segundos, minimizando o choque elétrico na rede enquanto protege os equipamentos.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> O ciclone chega em 40 minutos. Todas as abordagens protegem as turbinas. <strong>O que VOCÊ escolhe fazer?</strong></p>",
    "options": [
      {
        "text": "Desenvolver e executar o script de desligamento sequencial das 87 turbinas via sistema de monitoramento, automatizando a proteção de toda a fazenda de uma vez.",
        "impact": [25, 10, 20, 15]
      },
      {
        "text": "Acionar o sistema de pitch control de todas as turbinas para girar as pás para a posição de 90°, fazendo o vento deslizar pelas pás sem gerar torque destrutivo.",
        "impact": [-20, 20, 10, 25]
      },
      {
        "text": "Configurar os conversores de potência para desviar o excesso de energia gerada para os bancos de baterias e resistores, operando no limite de forma controlada.",
        "impact": [-10, 20, 5, 25]
      }
    ]
  },
  {
    "id": "carro_autonomo",
    "title": "Desafio 8: O Dilema do Cruzamento",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #333; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #555;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #fff; animation: blink 2s infinite;\">directions_car</span></div>",
    "theoryHtml": "<p>Um carro autônomo de nível 5 da Waymo está transportando uma grávida em trabalho de parto para o hospital em São Paulo. É meia-noite e uma chuva torrencial de 80mm/h apagou completamente as marcações da pista na Av. Paulista. As câmeras de visão computacional perderam as linhas de referência e o sistema entrou em modo de degradação — velocidade máxima de 25 km/h, risco de parada total. Um caminhão desgovernado cruza o sinal vermelho 60 metros à frente.</p><ul><li>O sistema de visão computacional pode ser complementado com um modelo de IA probabilística que reconstrói as bordas da pista usando dados de mapas HD armazenados localmente e a posição GPS centimétrica — leva 4 segundos para processar e devolve confiança de 94%.</li><li>Os radares de 77 GHz do carro ainda funcionam perfeitamente sob chuva e detectaram o caminhão com precisão — ativar o modo 'radar-only' e transferir o controle de direção para o sistema de radar desliga a dependência das câmeras.</li><li>Acionar o esterçamento ativo das quatro rodas em modo de máxima estabilidade e reduzir automaticamente para 15 km/h usando apenas os dados do radar para navegação até o hospital.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> O caminhão está a 60 metros. A passageira está em trabalho de parto. Todas as abordagens funcionam para desviar com segurança. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Ativar o processamento do modelo de IA que reconstrói a pista com dados de mapas HD e GPS centimétrico, devolvendo a visão ao sistema em 4 segundos.",
        "impact": [25, 15, 20, 0]
      },
      {
        "text": "Transferir o controle de navegação para o modo 'radar-only', aproveitando que os radares de 77GHz não são afetados pela chuva para desviar do caminhão.",
        "impact": [5, 10, 20, -25]
      },
      {
        "text": "Ativar o esterçamento ativo das quatro rodas e reduzir para 15 km/h, deixando o sistema navegar apenas pelos dados físicos de radar até o hospital.",
        "impact": [-20, 15, -10, -5]
      }
    ]
  },
  {
    "id": "satelite_com",
    "title": "Desafio 9: Conexão Global",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #000; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #1a237e;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #3f51b5; animation: blink 3s infinite;\">settings_input_antenna</span></div>",
    "theoryHtml": "<p>O satélite Amazônia-2, responsável por monitorar 100% do desmatamento da Amazônia em tempo real para o INPE, está perdendo o alinhamento com a estação receptora em Cuiabá. A causa: uma falha na roda de reação (gyroscope) que mantém a orientação do satélite em órbita a 620km de altitude. A câmera hiperespectral de detecção de queimadas ficará cega em 18 minutos se o alinhamento com a antena terrestre não for restaurado. O Brasil usa esses dados para multar fazendeiros ilegais em tempo real — perder o satélite significa cegar o monitoramento ambiental por 3 meses.</p><ul><li>Os micro-propulsores a nitrogênio gasoso do satélite ainda funcionam e podem ser acionados em sequência calculada para compensar a perda da roda de reação e reorientar o satélite em direção à estação de Cuiabá.</li><li>A antena de Cuiabá tem capacidade de rastreamento ativo — reprogramar o sistema de rastreamento da estação para seguir a nova trajetória derivada do satélite, em vez de exigir que o satélite se mova, pode manter a comunicação sem alterar a órbita.</li><li>Comprimir os dados de imagem com um algoritmo de compressão mais agressivo reduz a largura de banda necessária, permitindo transmissão mesmo com o alinhamento imperfeito e baixo ganho de sinal.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 18 minutos para a câmera ficar cega. Todas as abordagens mantêm o monitoramento ativo. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Calcular a sequência de disparos dos micro-propulsores e enviar os comandos para reorientar o satélite em direção à estação de Cuiabá.",
        "impact": [-20, 20, 15, 25]
      },
      {
        "text": "Reprogramar o sistema de rastreamento da antena terrestre para seguir ativamente a nova trajetória derivada do satélite e manter o link de comunicação.",
        "impact": [10, 10, 20, -25]
      },
      {
        "text": "Implementar um algoritmo de compressão de dados mais eficiente para transmitir as imagens mesmo com o sinal fraco do alinhamento imperfeito.",
        "impact": [25, 10, 20, 10]
      }
    ]
  },
  {
    "id": "implante_bio",
    "title": "Desafio 10: O Coração Eletrônico",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #fff5f5; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #ff8a80;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #d32f2f; animation: blink 1s infinite;\">monitor_heart</span></div>",
    "theoryHtml": "<p>É quinta-feira à noite no Instituto do Coração de São Paulo. O senhor Antônio, 67 anos, tem um marca-passo de última geração implantado há 2 anos. Seu cardiologista recebe um alerta no celular: o dispositivo detectou uma taquicardia ventricular de 230 bpm e disparou um choque de desfibrilação incorretamente — o algoritmo confundiu o estresse físico de uma caminhada intensa com uma arritmia fatal. Antônio está acordado, assustado e machucado pelo choque desnecessário. O problema: o firmware do marca-passo precisa ser atualizado à distância para corrigir o critério de decisão, mas qualquer erro no upload pode causar um segundo choque falso.</p><ul><li>O firmware de diagnóstico pode ser reescrito com um critério mais rigoroso — exigindo pelo menos 3 variáveis simultâneas (frequência + variabilidade + histórico de 48h) antes de autorizar um choque — e enviado via protocolo seguro de telemetria médica.</li><li>O circuito de desfibrilação pode ser configurado para operar em modo de 'somente alerta' temporariamente via comando remoto, desabilitando os choques automáticos enquanto o algoritmo é corrigido com segurança.</li><li>A bateria atual do dispositivo (prevista para durar 8 anos) pode ser monitorada remotamente e um novo plano de carga pode ser calculado para garantir que o dispositivo não entre em modo de economia durante situações críticas reais.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> Antônio está com medo e o dispositivo pode disparar novamente. Todas as abordagens protegem o paciente. <strong>O que VOCÊ faria primeiro?</strong></p>",
    "options": [
      {
        "text": "Enviar o firmware atualizado com o novo critério de decisão de 3 variáveis simultâneas via telemetria médica segura, corrigindo a raiz do problema.",
        "impact": [25, 10, 20, -10]
      },
      {
        "text": "Enviar o comando remoto para desabilitar o modo de choque automático e colocar o dispositivo em 'somente alerta' enquanto o algoritmo é corrigido com calma.",
        "impact": [5, 10, 20, -30]
      },
      {
        "text": "Recalcular o plano de carga da bateria remotamente e garantir que o dispositivo tenha energia suficiente para operar corretamente em uma eventual arritmia real.",
        "impact": [-10, 15, 5, -20]
      }
    ]
  },
  {
    "id": "trem_levitacao",
    "title": "Desafio 11: O Maglev Veloz",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #eceff1; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #cfd8dc;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #455a64; animation: blink 2s infinite;\">train</span></div>",
    "theoryHtml": "<p>O trem Maglev da linha São Paulo–Campinas, operando a 540 km/h com 380 passageiros a bordo, começou a apresentar vibrações laterais anômalas aos 12 minutos de viagem. Os acelerômetros registram oscilações de ±4mm — aparentemente pequenas, mas em alta frequência, capazes de induzir ressonância estrutural que pode descarrilhar o trem a essa velocidade. A origem: um dos 48 eletroímãs supercondutores da seção central do trem perdeu 8% da eficiência de levitação por aquecimento anômalo, criando assimetria na 'almofada magnética'.</p><ul><li>O sistema de controle de levitação pode redistribuir a corrente elétrica entre os 48 eletroímãs via software para compensar o ímã enfraquecido, restaurando a simetria da força magnética sem desacelerar o trem.</li><li>A geometria do nariz do trem pode ser ajustada via painéis aerodinâmicos ativos para criar resistência compensatória no lado que está vibrando mais, usando o próprio ar como amortecedor a 540 km/h.</li><li>O sistema de refrigeração do supercondutor afetado pode ser ativado em modo de emergência para reduzir a temperatura do ímã e restaurar sua supercondutividade e força magnética original.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> As vibrações estão aumentando. Todas as abordagens estabilizam o trem. <strong>O que VOCÊ faz?</strong></p>",
    "options": [
      {
        "text": "Acessar o sistema de controle de levitação e redistribuir a corrente elétrica entre os 48 eletroímãs via software para compensar o ímã enfraquecido.",
        "impact": [25, 15, 20, 5]
      },
      {
        "text": "Ajustar os painéis aerodinâmicos ativos do nariz do trem para usar o ar a 540km/h como amortecedor compensatório no lado que está vibrando.",
        "impact": [-20, 20, 10, 20]
      },
      {
        "text": "Ativar o sistema de refrigeração de emergência do supercondutor afetado para restaurar a supercondutividade e a força magnética original do ímã.",
        "impact": [-10, 20, 5, 20]
      }
    ]
  },
  {
    "id": "fabrica_robos",
    "title": "Desafio 12: Indústria 4.0",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #f5f5f5; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #9e9e9e;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #616161; animation: blink 2s infinite;\">precision_manufacturing</span></div>",
    "theoryHtml": "<p>A linha de montagem da fábrica da Embraer em São José dos Campos produz fuselagens do E195-E2 — cada peça vale R$2,8 milhões e exige tolerância de ±0.05mm. Às 14h de uma segunda-feira, 12 braços robóticos KUKA pararam simultaneamente na etapa de rebitagem do painel lateral. O diagnóstico: um erro de sincronia no protocolo de comunicação EtherCAT entre o controlador central e os robôs fez com que todos entrassem em modo de emergência ao mesmo tempo. A linha está parada há 47 minutos — cada hora de parada custa R$380.000.</p><ul><li>O código de orquestração do controlador central pode ser refatorado para reestabelecer a sincronia EtherCAT com os 12 robôs, resolvendo a causa raiz do problema e prevenindo que aconteça novamente na mesma linha.</li><li>Os drivers de potência dos motores de 3 dos 12 braços robóticos apresentam superaquecimento nos logs — trocar esses componentes eletrônicos físicos pode liberar os braços afetados do modo de emergência sem mexer no software.</li><li>Os eixos de precisão de dois braços robóticos mostram leituras de torque anômalas, sugerindo que a lubrificação das juntas secou — uma aplicação de graxa sintética especial nos pontos críticos pode restaurar a movimentação correta nesses braços.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> Cada minuto parado é R$6.300 de prejuízo. Todas as abordagens voltam a linha a funcionar. <strong>O que VOCÊ escolheria atacar?</strong></p>",
    "options": [
      {
        "text": "Mergulhar no código de orquestração do controlador central e refatorar o protocolo EtherCAT para reestabelecer a sincronia com todos os 12 braços de uma vez.",
        "impact": [25, 15, 20, 10]
      },
      {
        "text": "Pegar o kit de eletrônica, ir até os 3 braços com superaquecimento e substituir fisicamente os drivers de potência queimados nos motores.",
        "impact": [0, 10, 20, -25]
      },
      {
        "text": "Ir até os braços com torque anômalo, identificar os pontos de junção críticos e aplicar lubrificação especial para restaurar a movimentação mecânica.",
        "impact": [-25, 15, -25, -5]
      }
    ]
  },
  {
    "id": "hidreletrica",
    "title": "Desafio 13: A Força da Água",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #01579b; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #0288d1;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #81d4fa; animation: blink 2s infinite;\">waves</span></div>",
    "theoryHtml": "<p>Usina de Itaipu, 3h da manhã. O nível do reservatório subiu 4,7 metros em 6 horas por conta das chuvas históricas no Paraná — está a apenas 1,2 metros do vertedouro de emergência. Se a água passar pelo vertedouro de forma não controlada, a velocidade da correnteza pode erodir as fundações da barragem e criar risco estrutural. Ao mesmo tempo, os 14 geradores estão operando a 92% da carga máxima. Desligar geradores aumenta o risco da barragem; manter tudo ligado sobrecarrega a rede elétrica do Sul do Brasil.</p><ul><li>Rodar o modelo matemático de previsão hidráulica com os dados de precipitação das últimas 72h pode indicar com precisão quando o reservatório vai começar a cair naturalmente — isso permite calcular exatamente quanto e quando abrir as comportas sem risco de erosão.</li><li>Sincronizar gradualmente mais 2 geradores à rede elétrica nacional, aumentando a geração de 92% para 105% da capacidade por 4 horas, pode baixar o nível do reservatório 0.8 metros sem precisar abrir as comportas de emergência.</li><li>Monitorar os sensores de pressão instalados nas fundações da barragem e nas paredes do vertedouro em tempo real para detectar qualquer sinal precoce de erosão ou deformação estrutural antes que se torne crítico.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> A água sobe 0.2 metros por hora. Todas as abordagens protegem a barragem. <strong>O que VOCÊ prioriza?</strong></p>",
    "options": [
      {
        "text": "Rodar o modelo de previsão hidráulica com os dados das últimas 72h para calcular com precisão quando e quanto abrir as comportas com segurança.",
        "impact": [20, 10, 25, 20]
      },
      {
        "text": "Sincronizar mais 2 geradores à rede para operar a 105% da capacidade, usando a geração elétrica como 'bomba' para baixar o reservatório sem abrir comportas.",
        "impact": [-15, 25, 10, 30]
      },
      {
        "text": "Ficar de olho nos sensores de pressão das fundações e das paredes do vertedouro para detectar qualquer sinal precoce de erosão estrutural em tempo real.",
        "impact": [-20, 15, 5, 25]
      }
    ]
  },
  {
    "id": "aviao_solar",
    "title": "Desafio 14: Voo Eterno",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #87ceeb; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #4682b4;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #fff; animation: blink 2s infinite;\">wb_sunny</span></div>",
    "theoryHtml": "<p>O avião solar SolarImpulse BR — uma aeronave com envergadura de 72 metros e peso de apenas 2.300 kg — está atravessando o Atlântico Sul em missão para provar que é possível voar sem combustível fóssil. São 4h da manhã, altitude de 8.500 metros. O sol nasce em 2h10min. A bateria de íons de lítio de 633 kWh está em 5,8% — suficiente para apenas 2h12min de voo sem recarga solar. Se o piloto não tomar uma decisão certa agora, o avião cai no Atlântico faltando 340km para Natal, RN.</p><ul><li>O piloto pode desligar todos os sistemas não essenciais (Wi-Fi, instrumentação de pesquisa, aquecimento da cabine exceto o mínimo vital) e aumentar o ângulo de ataque das asas para 2.3° acima do ótimo para atingir uma corrente de ar ascendente identificada pelo meteorologista — isso reduz o consumo em 31% e pode alcançar o nascer do sol com bateria positiva.</li><li>Reprogramar o piloto automático para buscar a rota de menor arrasto aerodinâmico usando o modelo de vento em altitude — trocar a rota direta pela rota com ventos favoráveis de cauda de 15 km/h pode economizar 22% de energia mesmo voando mais distância.</li><li>Gerenciar watt a watt o consumo dos 4 motores elétricos — dois motores em modo de planador e dois em modo de propulsão alternando a cada 8 minutos — pode estender a autonomia em 34 minutos adicionais, suficiente para o sol nascer e recarregar.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> Bateria em 5,8%, sol em 2h10min. Todas as abordagens chegam a Natal. <strong>O que VOCÊ escolhe?</strong></p>",
    "options": [
      {
        "text": "Ajustar o ângulo de ataque das asas e desligar os sistemas não essenciais para entrar na corrente ascendente identificada e reduzir o consumo em 31%.",
        "impact": [-25, 25, 5, 25]
      },
      {
        "text": "Reprogramar o piloto automático para a rota de menor arrasto aerodinâmico com ventos de cauda favoráveis, economizando 22% mesmo voando mais distância.",
        "impact": [20, 15, 20, 10]
      },
      {
        "text": "Gerenciar os 4 motores manualmente, alternando dois em modo planador e dois em propulsão a cada 8 minutos para esticar a autonomia da bateria ao máximo.",
        "impact": [-10, 20, 15, 15]
      }
    ]
  },
  {
    "id": "microchip",
    "title": "Desafio 15: O Nanomundo",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #212121; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #424242;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #00e676; animation: blink 2s infinite;\">memory</span></div>",
    "theoryHtml": "<p>A TSMC acaba de fabricar o primeiro lote de processadores de 2nm para o próximo iPhone — mas os testes de controle de qualidade revelaram uma taxa de falha de 34% nos chips quando a temperatura passa de 72°C. O problema está em uma das 47 camadas de metal do processo de litografia: uma trilha de cobre de 8nm de largura está muito próxima de outra, causando interferência eletromagnética (crosstalk) que corrompe dados em frequências acima de 3.2 GHz. Apple precisa de 50 milhões de chips em 4 meses — reprojetar o processo de litografia leva 8 meses. Precisa de uma solução alternativa agora.</p><ul><li>Um firmware de baixo nível pode ser escrito para identificar os núcleos de processamento afetados pela interferência e desativá-los automaticamente quando o chip atingir 68°C — o processador roda com menos núcleos mas permanece estável e funcional.</li><li>Microscopias de elétrons identificaram que as trilhas problemáticas estão na camada Metal-4 — adicionar uma camada de dióxido de silício com 3nm de espessura entre elas no processo de deposição química (CVD) pode isolá-las eletricamente sem reprojetar todo o chip.</li><li>Os materiais de encapsulamento do chip podem ser substituídos por uma liga de nitreto de alumínio de alta condutividade térmica, reduzindo a temperatura de operação em 11°C e mantendo o chip abaixo do limite crítico de 72°C mesmo em carga máxima.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> Apple precisa de 50 milhões de chips. Todas as abordagens resolvem o problema. <strong>O que VOCÊ atacaria?</strong></p>",
    "options": [
      {
        "text": "Escrever um firmware que identifica e desativa os núcleos instáveis automaticamente acima de 68°C, entregando um chip funcional mesmo com a falha de hardware.",
        "impact": [30, 15, 20, -10]
      },
      {
        "text": "Adicionar uma camada de dióxido de silício de 3nm entre as trilhas problemáticas no processo CVD para isolá-las eletricamente e eliminar a interferência na raiz.",
        "impact": [10, 5, 25, -30]
      },
      {
        "text": "Substituir o encapsulamento do chip por nitreto de alumínio de alta condutividade para baixar a temperatura de operação em 11°C e manter tudo estável.",
        "impact": [5, 10, 20, -25]
      }
    ]
  },
  {
    "id": "carro_hidrogenio",
    "title": "Desafio 16: Explosão Controlada",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #e3f2fd; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #90caf9;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #1976d2; animation: blink 2s infinite;\">ev_station</span></div>",
    "theoryHtml": "<p>Toyota e Embraer firmaram uma parceria para lançar o primeiro ônibus de passageiros movido a hidrogênio no Brasil. O protótipo está em testes na pista de Gavião Peixoto quando um alerta crítico dispara: a pressão no tanque de H2 (armazenado a 700 bar — 700 vezes a pressão atmosférica) está oscilando ±40 bar a cada aceleração. Isso pode indicar micro-trincas na válvula de injeção ou instabilidade na célula de combustível. O hidrogênio é inodoro, incolor e extremamente inflamável — uma falha catastrófica poderia ser devastadora. O veículo está a 3km do hangar e não pode ser simplesmente abandonado.</p><ul><li>Os sensores de vazamento de H2 instalados no compartimento da célula de combustível podem ser monitorados remotamente via telemetria — se os valores estiverem dentro da normalidade, a oscilação de pressão pode ser um problema apenas na válvula reguladora, não no tanque em si.</li><li>O sistema de controle eletrônico da célula de combustível pode ajustar a taxa de fluxo de hidrogênio de forma suave e gradual via software, reduzindo a demanda de H2 durante a aceleração para eliminar os picos de pressão.</li><li>O motorista pode acionara válvula de alívio de pressão manual localizada no compartimento traseiro — isso reduz imediatamente a pressão do tanque de 700 para 600 bar, saindo da zona de risco enquanto o veículo retorna ao hangar em baixa velocidade.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 700 bar de H2, 3km do hangar, causa desconhecida. Todas as abordagens trazem o veículo seguro. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Monitorar remotamente os sensores de vazamento de H2 via telemetria para diagnosticar se o problema é na válvula ou no tanque antes de qualquer ação.",
        "impact": [5, 15, 20, -15]
      },
      {
        "text": "Ajustar via software a taxa de fluxo de hidrogênio para suavizar a demanda durante a aceleração e eliminar os picos de pressão oscilante.",
        "impact": [20, 15, 20, -10]
      },
      {
        "text": "Acionar a válvula de alívio de pressão manual para reduzir imediatamente os 700 bar para 600 bar e trazer o veículo de volta ao hangar em segurança.",
        "impact": [-30, 15, -25, -5]
      }
    ]
  },
  {
    "id": "estacao_espacial",
    "title": "Desafio 17: Oxigênio no Vácuo",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #000; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #fff;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #fff; animation: blink 3s infinite;\">biotech</span></div>",
    "theoryHtml": "<p>Estação Espacial Internacional, órbita a 408km de altitude. São 02h34min (horário UTC) quando o sistema CDRA (Carbon Dioxide Removal Assembly) — o 'pulmão' da ISS — para de funcionar. O CO2 expirado pelos 7 astronautas começa a se acumular. Em condições normais, o nível seguro é de 5.3 mmHg. O alarme soa às 9 mmHg — onde começa a dor de cabeça e redução cognitiva. Acima de 15 mmHg, perda de consciência em minutos. O nível atual: 6.1 mmHg e subindo 0.3 mmHg por hora. A Terra está a 45 minutos de comunicação de ida e volta — eles precisam resolver sozinhos.</p><ul><li>O sistema CDRA usa zeólita (um mineral adsorvente) para capturar o CO2 do ar — os logs indicam que a bomba de circulação de ar parou, mas o leito de zeólita ainda está funcionando. Reiniciar a bomba manualmente, abrindo o painel de acesso e trocando os fusíveis queimados, pode restaurar o sistema.</li><li>Os 7 astronautas podem ser realocados para os módulos de menor volume da estação (o módulo russo Zvezda) e reduzirem a atividade física ao mínimo — isso reduz a geração de CO2 em 40% e compra pelo menos 6 horas adicionais para resolver o problema.</li><li>Um modelo computacional pode calcular o consumo exato de O2 de cada membro da tripulação nas próximas 12 horas com base em sua atividade e massa corporal, permitindo um racionamento preciso das reservas de oxigênio disponíveis nos cilindros de emergência.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> CO2 a 6.1 mmHg e subindo. Sem comunicação com a Terra por 45 minutos. Todas as abordagens protegem a tripulação. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Abrir o painel do CDRA, identificar os fusíveis queimados da bomba de circulação de ar e substituí-los manualmente para restaurar o sistema original.",
        "impact": [-25, 20, 0, 25]
      },
      {
        "text": "Realocar a tripulação para o módulo menor e implementar um protocolo de mínima atividade física para reduzir a geração de CO2 em 40%.",
        "impact": [-15, 15, -10, 15]
      },
      {
        "text": "Codificar um modelo de previsão de consumo de O2 para cada astronauta e calcular o plano exato de racionamento das reservas de emergência.",
        "impact": [25, 10, 20, 10]
      }
    ]
  },
  {
    "id": "cidade_inteligente",
    "title": "Desafio 18: Trânsito Caótico",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #cfd8dc; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #455a64;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #263238; animation: blink 2s infinite;\">traffic</span></div>",
    "theoryHtml": "<p>Sexta-feira, 17h47 no centro expandido de São Paulo. Uma gestante em trabalho de parto prematuro com apenas 32 semanas de gestação está dentro da Ambulância UTI SP-4477, presa em um congestionamento de 14km na Av. 23 de Maio. O Hospital das Clínicas — que tem o único centro de UTI neonatal disponível — fica a 6,2km. A estimativa do GPS: 47 minutos no trânsito atual. A obstetrícia diz que ela tem no máximo 20 minutos antes que o bebê nasça sem assistência médica especializada.</p><ul><li>O sistema CET-SP de gerenciamento inteligente de semáforos pode criar uma 'onda verde' coordenada em tempo real ao longo de toda a rota da ambulância, sincronizando os 34 semáforos do trajeto para abrir verde 90 segundos antes da chegada.</li><li>O sistema de comunicação V2X (Vehicle-to-Everything) pode enviar um alerta de prioridade para todos os veículos conectados em um raio de 800 metros da ambulância, solicitando que abram passagem no corredor da faixa da direita.</li><li>O sistema de gestão de energia da CET pode assegurar que os semáforos e câmeras de monitoramento do corredor da ambulância não entrem em modo de economia de energia durante o período crítico, mantendo toda a infraestrutura funcionando no máximo.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 20 minutos. 6,2km. 34 semáforos. Todas as abordagens abrem caminho para a ambulância. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Acessar o sistema CET-SP e criar o algoritmo de onda verde em tempo real, sincronizando os 34 semáforos do trajeto para abrirem 90 segundos antes da ambulância chegar.",
        "impact": [25, 20, 20, 20]
      },
      {
        "text": "Ativar o sistema V2X para enviar o alerta de prioridade para todos os veículos conectados na rota, criando o corredor de emergência via comunicação carro-a-carro.",
        "impact": [-15, 10, -5, 0]
      },
      {
        "text": "Garantir que toda a infraestrutura elétrica da rota — semáforos, câmeras, painéis — esteja operando em carga máxima e sem risco de falha durante o trajeto crítico.",
        "impact": [-10, 15, 10, 25]
      }
    ]
  },
  {
    "id": "turbina_jato",
    "title": "Desafio 19: O Som do Trovão",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #263238; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #37474f;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #cfd8dc; animation: blink 0.5s infinite;\">mode_fan</span></div>",
    "theoryHtml": "<p>Voo TAM 8841, Airbus A350 decolando de Guarulhos para Paris com 312 passageiros. Ao atingir 11.000 metros de altitude sobre o Atlântico, os sensores FADEC (Full Authority Digital Engine Control) detectam que o motor GE9X-02 direito está consumindo 19,7% mais querosene do que o esquerdo para produzir o mesmo empuxo — uma anomalia que nunca foi registrada nessa aeronave. A 14.000km de Paris e sem aeroporto alternativo próximo, o capitão tem 40 minutos para decidir se continua ou desvia para o Recife. A solução pode salvar R$180.000 em combustível extra e evitar o desvio.</p><ul><li>Os dados de telemetria de 2.300 voos anteriores desse motor estão disponíveis — cruzar esses dados com os parâmetros atuais usando um algoritmo de detecção de anomalia pode identificar se o consumo extra é por desgaste das pás da turbina ou por problema no sistema de injeção de combustível.</li><li>O sistema de geometria variável das pás do compressor pode ser ajustado via FADEC — aumentar o ângulo de ataque das pás em 1.2° pode melhorar a eficiência de compressão do ar em 8%, compensando parte da perda de eficiência do motor.</li><li>Regular a relação ar-querosene da câmara de combustão direita de 52:1 para 48:1 via controle de injeção pode recuperar 12% da eficiência de queima se o problema estiver na mistura de combustível, não nas pás.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 40 minutos para decidir entre continuar ou desviar. Todas as abordagens podem recuperar a eficiência. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Cruzar os dados de telemetria de 2.300 voos anteriores com os parâmetros atuais para identificar a causa raiz do consumo extra antes de tomar qualquer ação.",
        "impact": [25, 10, 20, 15]
      },
      {
        "text": "Ajustar via FADEC o ângulo de ataque das pás do compressor em 1.2° para melhorar a eficiência de compressão do ar e compensar a perda do motor.",
        "impact": [-20, 25, 10, 25]
      },
      {
        "text": "Regular a relação ar-querosene de 52:1 para 48:1 no sistema de injeção para tentar recuperar a eficiência de queima na câmara de combustão direita.",
        "impact": [-25, 15, -20, 5]
      }
    ]
  },
  {
    "id": "supercomputador",
    "title": "Desafio 20: IA Conscienciosa",
    "animationHtml": "<div style=\"width: 100%; height: 160px; background: #000; border-radius: 16px; display: flex; justify-content: center; align-items: center; border: 4px solid #6200ea;\"><span class=\"material-symbols-outlined\" style=\"font-size: 80px; color: #b388ff; animation: blink 2s infinite;\">psychology</span></div>",
    "theoryHtml": "<p>O supercomputador Santos Dumont, do LNCC em Petrópolis, está rodando uma simulação que pode mudar a história da medicina: um modelo de proteína dobrada que pode ser a chave para uma vacina universal contra gripes mutantes. A simulação levou 8 meses para chegar a 94% de conclusão e tem mais 72 horas para terminar. Problema: uma falha de resfriamento fez a temperatura dos processadores de 512 nós subirem de 68°C para 79°C — acima dos 75°C de operação segura. Desligar a simulação agora significa perder 8 meses de trabalho. Manter ligado pode danificar os processadores irreversivelmente.</p><ul><li>O fluxo de dados entre os 512 nós pode ser reorganizado via software para criar 'ilhas computacionais' — clusters menores que processam de forma independente em rotação, deixando alguns nós 'descansar' enquanto outros processam, reduzindo a temperatura média em 7°C sem parar a simulação.</li><li>A latência física entre os processadores e os módulos de memória RAM de alta velocidade pode ser otimizada ajustando os parâmetros de temporização (timings) da memória — reduzir de DDR5-6400 para DDR5-5600 diminui o calor gerado pela memória e pelo cache em 9%, poupando os nós mais críticos.</li><li>O sistema de infraestrutura de energia ininterrupta (UPS) do datacenter pode ter sua carga redistribuída entre os 3 grupos de UPS disponíveis — isso permite desviar mais energia para os sistemas de resfriamento auxiliares sem afetar a potência de processamento dos nós.</li></ul>",
    "questionHtml": "<p style=\"font-size: 1.1rem; color: var(--on-surface-variant); text-align: left; line-height: 1.6;\"><strong>SITUAÇÃO CRÍTICA:</strong> 8 meses de simulação, 72h para terminar, temperatura subindo. Todas as abordagens salvam a simulação. <strong>O que VOCÊ faria?</strong></p>",
    "options": [
      {
        "text": "Reorganizar via software o fluxo de dados entre os 512 nós para criar clusters em rotação, reduzindo a temperatura média sem parar a simulação.",
        "impact": [30, 20, 25, 10]
      },
      {
        "text": "Ajustar os parâmetros de temporização da memória RAM de DDR5-6400 para DDR5-5600 para reduzir o calor gerado pelos módulos de memória dos nós críticos.",
        "impact": [5, 10, 20, -25]
      },
      {
        "text": "Redistribuir a carga dos sistemas de UPS para desviar mais energia para os resfriadores auxiliares sem afetar a potência de processamento.",
        "impact": [-10, 15, 5, 30]
      }
    ]
  }
]
;