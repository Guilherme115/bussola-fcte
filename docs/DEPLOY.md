# Checklist de Produção

Use esta checklist antes de publicar uma nova versão.

## Validação Local

```bash
python -m http.server 8000
```

Acessar:

```text
http://localhost:8000
```

Conferir:

- Landing carrega sem imagens quebradas.
- Botão "Começar diagnóstico" abre `quiz.html`.
- Quiz inicia, avança e mostra resultado.
- Botões de explorar curso funcionam.
- Imagens locais dos resultados aparecem.
- Layout funciona em mobile.

## Conteúdo

- Revisar nomes dos cursos.
- Revisar links oficiais da FCTE.
- Revisar coordenadores antes de citar publicamente.
- Revisar salários e indicadores de mercado.
- Evitar promessa de empregabilidade.
- Manter a frase de que a Bússola orienta, mas não decide pelo aluno.

## Privacidade

- Não adicionar nome, matrícula, e-mail ou telefone sem consentimento claro.
- Não enviar respostas para servidores externos no MVP.
- Não usar analytics sem aviso de privacidade.

## Deploy Estático

Configuração típica:

```text
Build command: vazio
Output directory: .
```

## Pós-Deploy

- Abrir a URL pública em aba anônima.
- Testar em celular.
- Testar o diagnóstico até o resultado.
- Confirmar que os assets carregam com caminho relativo.
