# Como Contribuir

Obrigado por querer melhorar a Bússola FCTE.

## Tipos de contribuição

- Revisão de textos dos cursos.
- Atualização de projetos, laboratórios e links oficiais.
- Melhoria nas perguntas do diagnóstico.
- Ajustes de acessibilidade e responsividade.
- Correções no algoritmo ou na explicação matemática.

## Regras de conteúdo

- Não prometa emprego, salário ou escolha correta de curso.
- Cite dados de mercado como indicativos e revise fontes.
- Prefira linguagem clara para calouros.
- Evite coletar dados pessoais.
- Preserve o objetivo: orientar exploração, não decidir pelo estudante.

## Fluxo sugerido

1. Abra uma issue descrevendo a mudança.
2. Faça a alteração em uma branch.
3. Teste localmente com `python -m http.server 8000`.
4. Abra um pull request com resumo e prints quando houver mudança visual.

## Dados dos cursos

Atualize `src/data/courses.js`.

## Perguntas do diagnóstico

Atualize `src/data/questions.js`.

Cada alternativa deve ter um vetor `impact` com 4 números. Esse vetor representa a direção técnica sugerida pela escolha.
