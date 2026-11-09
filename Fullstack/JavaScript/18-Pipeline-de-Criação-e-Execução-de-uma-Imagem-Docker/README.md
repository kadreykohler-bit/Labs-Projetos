# Demonstração de Pipeline com Docker

Aplicação estática que apresenta visualmente as etapas de um pipeline de criação de imagem Docker. O Dockerfile usa Nginx para servir a página e seus arquivos CSS e JavaScript. O botão da página apenas atualiza uma mensagem de demonstração; ele não inicia uma build real nem configura automação de CI.

## Tecnologias

- HTML, CSS e JavaScript.
- Docker.
- Nginx Alpine como servidor web.

## Criar e executar a imagem

Execute os comandos na pasta deste projeto, onde está o `Dockerfile`:

```bash
docker build -t demonstracao-pipeline .
docker run --rm -p 8080:80 demonstracao-pipeline
```

Abra `http://localhost:8080` no navegador. Para encerrar, pressione `Ctrl+C` no terminal.

## Estrutura

- `Dockerfile`: copia os arquivos da aplicação para a imagem Nginx.
- `app/html/index.html`: página da demonstração.
- `app/css/style.css`: estilos da interface.
- `app/js/index.js`: interação do botão de demonstração.
