# Bússola FCTE

Site estático para ajudar calouros da FCTE/UnB a explorar afinidades com as engenharias a partir de um diagnóstico interativo, uma função de afinidade inspirada em Cálculo I e páginas de exploração dos cursos.

## Objetivo

A Bússola não escolhe um curso pelo estudante. Ela transforma respostas sobre interesses, estilos de problema e preferências práticas em um ranking explicável de caminhos possíveis, incentivando exploração consciente antes da escolha de habilitação.

## Como Rodar Localmente

Este projeto não precisa de build.

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Também é possível abrir `index.html` diretamente no navegador, mas usar um servidor local simula melhor o ambiente de produção.

## Validação

```bash
python tools/validate_static.py
node --check src/js/main.js
node --check src/js/quiz.js
node --check src/data/questions.js
node --check src/data/courses.js
```

## Estrutura

```text
.
├── index.html              # Landing page
├── quiz.html               # Fluxo de diagnóstico e resultado
├── assets/images/          # Imagens locais do projeto
├── src/css/main.css        # Estilos globais
├── src/css/quiz.css        # Estilos específicos do diagnóstico
├── src/data/questions.js   # Perguntas e impactos do diagnóstico
├── src/data/courses.js     # Dados dos cursos e páginas de exploração
└── src/js/
    ├── main.js             # Interações da landing
    └── quiz.js             # Lógica do diagnóstico, cálculo e renderização
```

## Algoritmo

Cada resposta soma afinidade com perfis técnicos de curso. Ao final, o sistema calcula um vetor médio do estudante e compara esse vetor com cada engenharia.

A afinidade usa a função:

```latex
A(d) = 100e^{-kd^2}
```

Onde:

- `d` é a distância entre o perfil do estudante e o perfil de referência do curso.
- `k` controla a sensibilidade da queda de afinidade.
- `A(d)` é a pontuação final, de 0 a 100.

## Dados

Os dados editáveis ficam em:

- `src/data/questions.js`: perguntas, cenários e impacto de cada alternativa.
- `src/data/courses.js`: perfil de referência, descrições, disciplinas, projetos, mitos, mercado e mini missões.

Antes de publicar institucionalmente, revise dados de mercado, salários, empregabilidade e coordenação com fontes oficiais ou validação qualitativa com professores, coordenações e veteranos.

## Privacidade

O MVP não usa login, backend ou banco de dados. As respostas ficam apenas no navegador durante a sessão via `sessionStorage`.

Não há coleta de matrícula, nome, e-mail, telefone ou dados pessoais sensíveis.

## Produção

Por ser estático, pode ser publicado em:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Configuração recomendada:

```text
Build command: vazio
Output directory: .
```

## Manutenção

Manutenção mínima sugerida por semestre:

1. Revisar links oficiais dos cursos.
2. Atualizar coordenadores e projetos de extensão.
3. Validar dados de mercado.
4. Testar o diagnóstico em desktop e mobile.
5. Rodar a checklist em `docs/DEPLOY.md`.

## Licença

Este repositório usa a licença MIT. Veja `LICENSE`.
