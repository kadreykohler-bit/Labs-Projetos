# Desafio de Projeto 04 - API de Podcasts 🎙️

Este projeto consiste na criação de uma API RESTful para listar e filtrar episódios de podcast. A API foi desenvolvida do zero, utilizando apenas os módulos nativos do Node.js (`http`) e TypeScript, sem o uso de frameworks como Express ou Fastify.

O objetivo é demonstrar uma arquitetura de software bem definida e o uso de boas práticas no desenvolvimento back-end.

## 🏛️ Arquitetura

O projeto foi estruturado em uma arquitetura de camadas (layered architecture) para garantir a separação de responsabilidades, facilitar a manutenção e a testabilidade.

- **`server.ts`**: Ponto de entrada que inicializa e sobe o servidor HTTP.
- **`app.ts`**: O coração da aplicação, funciona como um roteador manual. Ele interpreta a URL e o método HTTP de cada requisição e a direciona para o Controller apropriado.
- **`routes`**: Define as rotas disponíveis na API.
- **`controllers`**: Camada responsável por receber a requisição (`req`) e a resposta (`res`), chamar os serviços correspondentes e formatar a resposta que será enviada ao cliente.
- **`services`**: Contém a lógica de negócio da aplicação. Orquestra as chamadas ao repositório e trata os dados antes de devolvê-los ao controller.
- **`repositories`**: Camada de acesso a dados. É a única parte do sistema que sabe como e onde os dados estão armazenados (neste caso, um arquivo `podcast.json`).
- **`models`**: Define as interfaces e tipos de dados (o "contrato") que são usados em toda a aplicação.

## 🌐 Endpoints da API

A API oferece dois endpoints principais:

#### 1. Listar todos os episódios

- **Método:** `GET`
- **URL:** `/api/list`
- **Descrição:** Retorna a lista completa de todos os episódios de podcast disponíveis no arquivo `podcast.json`.
- **Exemplo de uso (com `curl`):**
  ```bash
  curl http://localhost:3000/api/list
  ```

#### 2. Filtrar episódios por nome do canal

- **Método:** `GET`
- **URL:** `/api/episodes?canalName=<nome_do_canal>`
- **Descrição:** Retorna uma lista de episódios que pertencem ao canal especificado no parâmetro de busca `canalName`.
- **Exemplo de uso (com `curl`):**
  ```bash
  # Substitua "Digimon" pelo nome de um canal que exista no JSON
  curl "http://localhost:3000/api/episodes?canalName=Digimon"
  ```

## 🛠️ Tecnologias e Ferramentas

- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Node.js:** Ambiente de execução.
- **`tsx`**: Ferramenta para executar arquivos TypeScript diretamente em desenvolvimento, sem a necessidade de compilação prévia.
- **`tsup`**: Bundler utilizado para compilar o código TypeScript para JavaScript otimizado para produção.

## 🚀 Como Executar

1.  **Crie o arquivo de ambiente:**
    Na raiz do projeto (`04-desafio-de-projeto`), crie um arquivo chamado `.env` e adicione a porta em que o servidor irá rodar:
    ```env
    PORT=3000
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/04-desafio-de-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute em modo de desenvolvimento:**
    Este comando utiliza o `tsx` para reiniciar o servidor automaticamente a cada alteração no código.
    ```bash
    npm run start:watch
    ```

5.  **Build e execução para produção:**
    Para criar uma versão de produção otimizada:
    ```bash
    # 1. Compila o código para a pasta /dist
    npm run dist
    
    # 2. Executa a versão compilada
    npm run start:dist
    ```
