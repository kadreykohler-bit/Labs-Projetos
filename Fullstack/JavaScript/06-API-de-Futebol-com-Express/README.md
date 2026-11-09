# Desafio de Projeto 06 - API de Futebol com Express.js ⚽

Este projeto finaliza a formação com a construção de uma API RESTful mais completa para gerenciar dados de clubes de futebol e jogadores. A API utiliza o **Express.js**, o framework web mais popular do ecossistema Node.js, e aplica a arquitetura em camadas (Controller-Service-Repository) vista em projetos anteriores.

## 🏛️ Arquitetura

A aplicação consolida os aprendizados de arquitetura, separando claramente as responsabilidades:

- **`app.ts`**: Configura a instância do Express, habilitando middlewares essenciais como `express.json()` para parsing de body e `cors` para segurança. Ele também registra o roteador principal.
- **`routes.ts`**: Centraliza a definição de todos os endpoints da API usando o `Router` do Express e os associa às suas respectivas funções no Controller.
- **`controllers`**: A camada que interage diretamente com o Express, recebendo os objetos `req` e `res`, processando as entradas e enviando a resposta final.
- **`services`**: Onde reside a lógica de negócio. Os serviços são chamados pelos controllers e orquestram as operações de acesso aos dados.
- **`repositories`**: A camada de abstração de dados, responsável por ler (e futuramente escrever) os dados a partir de fontes como arquivos `.json`.
- **`utils`**: Contém funções auxiliares, como o `http-helper`, para padronizar as respostas HTTP.

## 🌐 Endpoints da API

A API foi projetada para oferecer operações de CRUD (Create, Read, Update, Delete) para jogadores e de leitura para clubes.

#### Endpoints de Clubes

- **`GET /api/clubs`**
  - **Descrição:** Retorna a lista de todos os clubes de futebol.

#### Endpoints de Jogadores

- **`GET /api/players`**
  - **Descrição:** Retorna a lista de todos os jogadores.

- **`GET /api/players/:id`**
  - **Descrição:** Busca e retorna um jogador específico pelo seu `id`.

- **`POST /api/players`**
  - **Descrição:** Cria um novo jogador (requer um corpo de requisição com os dados do jogador).

- **`PATCH /api/players/:id`**
  - **Descrição:** Atualiza parcialmente os dados de um jogador existente.

- **`DELETE /api/players/:id`**
  - **Descrição:** Remove um jogador do sistema.

## 🛠️ Tecnologias Utilizadas

- **Express.js:** Framework web robusto e flexível para Node.js.
- **TypeScript:** Para um desenvolvimento mais seguro e escalável com tipagem estática.
- **`cors`**: Middleware para habilitar o Cross-Origin Resource Sharing.
- **`tsx` / `tsup`**: Ferramentas para desenvolvimento e build de projetos TypeScript.

## 🚀 Como Executar

1.  **Crie o arquivo de ambiente:**
    Na raiz do projeto (`06-desafio-de-projeto`), crie um arquivo chamado `.env` e defina a porta:
    ```env
    PORT=3000
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/06-desafio-de-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute em modo de desenvolvimento:**
    O servidor será iniciado na porta definida no `.env` e reiniciará a cada mudança no código.
    ```bash
    npm run start:watch
    ```
