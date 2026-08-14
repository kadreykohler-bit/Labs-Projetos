# ⛏️ Desafio: Geração de Biomas e Mineração

## 📝 Sobre o Desafio
Este projeto simula a coleta de minérios em um mundo de blocos. O objetivo é representar cada golpe de uma picareta em uma rocha e determinar qual minério foi obtido, utilizando listas (arrays) e laços de repetição.

## 🕹️ Como Funciona
O usuário define a quantidade de golpes. O sistema então percorre um array de minerais pré-definidos:
1. **Carvão**
2. **Ferro**
3. **Diamante**
4. **Pedra**

Para garantir que o programa nunca tente acessar um mineral que não existe (erro de índice), utilizamos o **Operador de Módulo (`%`)**.

## 🛠️ Tecnologias e Aprendizados
* **JavaScript**: Lógica principal do desafio.
* **Operador de Módulo (`%`)**: Utilizado para criar um comportamento cíclico. Quando os golpes ultrapassam a quantidade de minerais na lista, o índice volta ao início automaticamente.
* **Template Strings**: Uso de `` ` `${i}: ${minerais[minaIndex]}` `` para uma saída de dados mais limpa.
* **Diferença de Ambientes**: Entendimento de que o `print()` é uma função global da plataforma DIO, enquanto o padrão do JavaScript para consoles profissionais é o `console.log()`.

## 🔗 Link do Desafio
- [Desafio de Código: Geração de Biomas - DIO](https://web.dio.me/coding/geracao-de-biomas-mundo-de-blocos/algorithm/geracao-de-biomas-mundo-de-blocos)

## 🚀 Exemplo de Saída
Se a entrada for `3`, o resultado será:
```text
1: Carvao
2: Ferro
3: Diamante
