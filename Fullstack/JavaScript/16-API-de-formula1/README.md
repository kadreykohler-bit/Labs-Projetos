# API de Fórmula 1 com Fastify

Projeto iniciado para estudar a criação de uma API de Fórmula 1 usando Fastify e TypeScript.

## Estado atual

A pasta contém as configurações de dependências, TypeScript e scripts do npm, mas ainda não inclui o código-fonte esperado em `src/`. Os scripts `start:dev`, `start:watch` e `dist` dependem desses arquivos de implementação; portanto, a API ainda não pode ser iniciada neste estado.

## Tecnologias e ferramentas configuradas

- Node.js e TypeScript.
- Fastify para a camada HTTP.
- `tsx` para execução em desenvolvimento.
- `tsup` para gerar o build.

## Próximos passos

1. Criar `src/server.ts` e implementar as rotas da API.
2. Definir os dados e os modelos de equipes e pilotos.
3. Configurar as variáveis de ambiente necessárias sem publicar credenciais.
4. Instalar as dependências com `npm install` e validar os scripts após adicionar o código.
