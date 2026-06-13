# Arquitetura

## Visão Geral

A Bússola FCTE é um site estático. A arquitetura foi mantida sem backend para reduzir custo, manutenção e risco de privacidade.

```text
HTML
├── CSS
├── dados locais em JavaScript
└── JavaScript de interação no navegador
```

## Páginas

- `index.html`: apresenta o projeto, contexto acadêmico, método e chamada para iniciar.
- `quiz.html`: executa o diagnóstico, calcula afinidades e renderiza o resultado.

## Camadas

### Apresentação

- `src/css/main.css`: tokens visuais, tipografia, componentes compartilhados e landing.
- `src/css/quiz.css`: layout do diagnóstico, dashboard de resultados e páginas de curso.

### Dados

- `src/data/questions.js`: cenários e alternativas.
- `src/data/courses.js`: perfis de referência e conteúdo dos cursos.

### Lógica

- `src/js/main.js`: rolagem suave e animações da landing.
- `src/js/quiz.js`: estado do diagnóstico, cálculo de afinidade, renderização de resultados e navegação para páginas de curso.

## Estado

O estado do diagnóstico usa `sessionStorage`:

- `selectedCourses`: escolhas acumuladas no quiz.
- `currentPhaseIndex`: etapa atual do diagnóstico.

Esse estado é temporário e fica apenas no navegador do usuário.

## Decisões Técnicas

### Sem Login

Login foi evitado no MVP para reduzir escopo, custo, LGPD e manutenção.

### Sem Banco

Os dados são versionados junto com o código, o que facilita revisão por pull request e publicação estática.

### Dados Locais

Os dados de cursos e perguntas estão em arquivos JavaScript globais para funcionar em hospedagem estática simples e também abrindo localmente.

## Pontos de Atenção

- O projeto usa CDNs para fontes, ícones, MathJax e Three.js.
- Os dados de mercado são orientativos e devem ser revisados antes de qualquer divulgação institucional.
- Conteúdo em `innerHTML` deve vir apenas dos arquivos versionados do projeto, nunca de entrada do usuário.
