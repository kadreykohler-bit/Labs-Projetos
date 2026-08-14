# Desafio de Projeto 05 - Introdução à API com Fastify 🏎️

Este projeto é uma introdução ao desenvolvimento de APIs performáticas com o framework **Fastify**. A aplicação consiste em uma API REST simples que serve dados estáticos sobre equipes e pilotos de Fórmula 1.

O objetivo é demonstrar a simplicidade, a velocidade e a sintaxe moderna do Fastify para a criação de serviços back-end.

## ✨ Funcionalidades

A API é construída em um único arquivo (`src/server.ts`) e expõe os seguintes endpoints:

#### 1. Listar todas as equipes

- **Método:** `GET`
- **URL:** `/teams`
- **Descrição:** Retorna a lista completa de equipes de Fórmula 1.

#### 2. Listar todos os pilotos

- **Método:** `GET`
- **URL:** `/drivers`
- **Descrição:** Retorna a lista completa de pilotos.

#### 3. Buscar um piloto por ID

- **Método:** `GET`
- **URL:** `/drivers/:id`
- **Descrição:** Retorna os dados de um piloto específico com base no `id` fornecido na URL.
- **Resposta em caso de sucesso (200 OK):** Objeto com os dados do piloto.
- **Resposta em caso de falha (404 Not Found):** Mensagem de erro se o piloto não for encontrado.

## 🛠️ Tecnologias Utilizadas

- **Fastify:** Framework web para Node.js focado em alta performance e baixo overhead.
- **TypeScript:** Para adicionar tipagem estática e melhorar a robustez do código.
- **`@fastify/cors`**: Plugin oficial do Fastify para lidar com Cross-Origin Resource Sharing (CORS).
- **`tsx`**: Para execução direta de código TypeScript em ambiente de desenvolvimento.
- **`tsup`**: Para compilação e build do código para produção.

## 🚀 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/05-desafio-de-projeto
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute em modo de desenvolvimento:**
    O servidor será iniciado na porta `3333` e reiniciará automaticamente a cada alteração no código.
    ```bash
    npm run start:watch
    ```
    Você pode acessar os endpoints em `http://localhost:3333`.

4.  **Exemplo com `curl`:**
    ```bash
    # Listar equipes
    curl http://localhost:3333/teams

    # Buscar piloto com ID 2
    curl http://localhost:3333/drivers/2
    ```
