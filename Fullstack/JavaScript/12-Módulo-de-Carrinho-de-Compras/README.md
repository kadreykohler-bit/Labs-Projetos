# Desafio de Projeto 02 - Módulo de Carrinho de Compras 🛒

Este projeto implementa um sistema de carrinho de compras interativo que funciona via linha de comando (CLI). O usuário pode adicionar itens, visualizar o carrinho, calcular o total e remover itens através de um menu simples.

## ⚙️ Funcionalidades

O sistema é modular e oferece as seguintes operações:

- **Adicionar Itens:** Permite que o usuário insira o nome, o preço e a quantidade de um novo item para adicionar ao carrinho.
- **Visualizar Carrinho:** Exibe uma lista de todos os itens atualmente no carrinho, com seus respectivos preços e quantidades.
- **Calcular Total:** Soma o subtotal de todos os itens (preço × quantidade) e exibe o valor total da compra.
- **Remover Itens:**
  - Se um item tiver quantidade maior que 1, remove uma unidade.
  - Se um item tiver quantidade 1, remove o item inteiro do carrinho.
- **Menu Interativo:** Utiliza a biblioteca `readline` do Node.js para criar uma experiência de usuário contínua no terminal.

## 📂 Estrutura de Arquivos

O código é organizado de forma modular para separar responsabilidades:

- **`src/service/index.js`**: O ponto de entrada da aplicação. Responsável por gerenciar o menu interativo e interagir com o usuário.
- **`src/service/cart.js`**: Contém toda a lógica de negócio do carrinho. As funções `addItem`, `calculateTotal`, `removeItem`, e `displayCart` são exportadas daqui.
- **`src/service/item.js`**: Exporta a função `createItem`, que atua como uma fábrica para criar objetos de item padronizados.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES Modules):** O projeto utiliza o sistema de módulos `import`/`export` para uma melhor organização do código.
- **Node.js:**
  - **`readline`**: Módulo nativo do Node.js para criar interfaces de linha de comando interativas.

## 🚀 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/02-desafio-de-projeto
    ```
2.  **Execute o script:**
    Como este projeto também não possui dependências externas, você pode executá-lo diretamente com o Node.js.

    ```bash
    node src/service/index.js
    ```
3.  **Interaja com o menu** para testar as funcionalidades do carrinho de compras.
