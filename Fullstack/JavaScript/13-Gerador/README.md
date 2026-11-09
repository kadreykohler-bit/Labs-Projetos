# Desafio de Projeto 03 - Gerador de QR Code e Senhas 🔐

Este projeto é uma ferramenta de linha de comando (CLI) interativa para a geração de senhas seguras e QR Codes. A interface foi construída com a biblioteca `@clack/prompts` para oferecer uma experiência de usuário moderna e agradável no terminal.

## ✨ Funcionalidades

A ferramenta oferece duas funcionalidades principais:

- **Gerador de Senha:**
  - Pede ao usuário o número de caracteres desejado.
  - Gera uma senha aleatória combinando letras maiúsculas, minúsculas, números e símbolos.
  - Exibe a senha gerada diretamente no terminal.

- **Gerador de QR Code:**
  - Solicita ao usuário o texto ou link que deseja transformar em QR Code.
  - Pede o caminho e o nome do arquivo onde o QR Code deve ser salvo (ex: `./qrcode.png`).
  - Gera a imagem do QR Code e a salva no local especificado.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução.
- **JavaScript (ES Modules):** Código modularizado com `import`/`export`.
- **`@clack/prompts`**: Biblioteca para criar interfaces de linha de comando bonitas e intuitivas.
- **`qrcode`**: Biblioteca para a geração dos QR Codes.
- **`chalk`**: Para estilizar a saída do terminal com cores.

## 🚀 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/03-desafio-de-projeto
    ```

2.  **Instale as dependências:**
    Diferente dos projetos anteriores, este utiliza pacotes externos. Você precisa instalá-los com o `npm`.
    ```bash
    npm install
    ```

3.  **Execute o gerador:**
    Use o script `start` definido no `package.json`.
    ```bash
    npm start
    ```

4.  **Siga as instruções** no seu terminal para escolher a opção e gerar sua senha ou QR Code.
