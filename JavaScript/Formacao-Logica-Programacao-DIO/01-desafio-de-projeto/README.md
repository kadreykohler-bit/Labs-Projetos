# Desafio de Projeto 01 - Simulador de Corrida de Kart 🏁

Este projeto é um simples simulador de corrida de karts executado no terminal. Dois personagens são sorteados para competir em uma pista de 5 rodadas, onde diferentes tipos de trechos e a sorte nos dados definem o grande vencedor.

## 🕹️ Funcionalidades

- **Seleção Aleatória de Competidores:** A cada execução, dois personagens diferentes (de um total de seis) são escolhidos para a disputa.
- **Pistas Dinâmicas:** Em cada rodada, um trecho de pista é sorteado, podendo ser uma "Reta", uma "Curva" ou um "Confronto".
- **Atributos Únicos:** Cada personagem possui seus próprios atributos de `VELOCIDADE`, `MANOBRABILIDADE` e `PODER`.
  - A **Velocidade** é crucial em trechos de **Reta**.
  - A **Manobrabilidade** é decisiva nas **Curvas**.
  - O **Poder** é usado nos **Confrontos** para tentar fazer o adversário perder pontos.
- **Sistema de Pontuação:** O vencedor de cada rodada (exceto em confrontos) ganha um ponto. Em confrontos, o vencedor pode fazer o adversário perder um ponto.
- **Exibição do Vencedor:** Ao final das 5 rodadas, o placar é exibido e o personagem com mais pontos é declarado o campeão.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+):** O código utiliza conceitos modernos de JavaScript, como `Classes` para modelar os personagens e `async/await` para gerenciar o fluxo da corrida.
- **Node.js:** O ambiente de execução para o script.

## 🚀 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Desafios-de-projeto/01-desafio-de-projeto
    ```
2.  **Execute o script:**
    Como este projeto não possui dependências externas, você pode executá-lo diretamente com o Node.js.

    ```bash
    node src/index.js
    ```
3.  **Veja a mágica acontecer!** A cada execução, uma nova corrida será simulada no seu terminal.
