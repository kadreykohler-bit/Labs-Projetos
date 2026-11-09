# Simulador de Corrida de Kart

Simulador de corrida executado no terminal, desenvolvido em JavaScript com Node.js. Em cada partida, dois competidores distintos são escolhidos aleatoriamente e disputam cinco rodadas.

## Como funciona

- Cada rodada sorteia um trecho: reta, curva ou confronto.
- Os competidores rolam um dado de seis lados e somam o atributo adequado ao trecho: velocidade, manobrabilidade ou poder.
- Vitórias em retas e curvas valem um ponto. Em confrontos, o competidor derrotado pode perder um ponto, sem que a pontuação fique negativa.
- Ao final, o placar e o resultado da corrida são exibidos; empates são possíveis.

## Como executar

É necessário ter o Node.js instalado. Na pasta deste projeto, execute:

```bash
node src/index.js
```

O projeto não possui dependências externas nem um comando de teste configurado no `package.json`.

## Estrutura

- `src/index.js`: personagens, regras das rodadas e execução da corrida.
- `docs/`: imagens GIF dos personagens.
- `package.json`: metadados do projeto.
