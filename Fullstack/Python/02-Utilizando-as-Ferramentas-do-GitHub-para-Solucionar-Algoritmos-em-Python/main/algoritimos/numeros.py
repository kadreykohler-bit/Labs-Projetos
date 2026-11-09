"""
Exercícios de algoritmos com números.

Conteúdos:
- Operações matemáticas
- Números inteiros e decimais
- Operadores aritméticos
- Condições numéricas
- Sequências numéricas
"""


# =====================================================
# EXERCÍCIO 01 - IDENTIFICAR NÚMERO PAR OU ÍMPAR
# =====================================================

"""
Crie uma função chamada verificar_par_impar() que receba
um número inteiro e retorne se ele é par ou ímpar.

Exemplos:

verificar_par_impar(10) -> "Par"

verificar_par_impar(7) -> "Ímpar"

verificar_par_impar(0) -> "Par"

Requisitos:
- Utilizar uma função.
- Utilizar o operador módulo (%).
- Retornar "Par" ou "Ímpar".
"""


def verificar_par_impar(numero):
    if numero % 2 == 0:
        return "Par"
    return "Ímpar"


# =====================================================
# EXERCÍCIO 02 - CALCULAR O FATORIAL
# =====================================================

"""
Crie uma função chamada calcular_fatorial() que receba
um número inteiro não negativo e retorne seu fatorial.

O fatorial é o produto de todos os números inteiros
positivos menores ou iguais ao número informado.

Exemplos:

calcular_fatorial(5) -> 120

calcular_fatorial(4) -> 24

calcular_fatorial(0) -> 1

Requisitos:
- Utilizar uma função.
- Utilizar uma estrutura de repetição.
- Não utilizar bibliotecas externas.
- Considerar números inteiros não negativos.
"""


def calcular_fatorial(numero):
    fatorial = 1
    for valor in range(1, numero + 1):
        fatorial *= valor
    return fatorial


# =====================================================
# EXERCÍCIO 03 - SEQUÊNCIA DE FIBONACCI
# =====================================================

"""
Crie uma função chamada fibonacci() que receba um número
inteiro N e retorne uma lista com os primeiros N termos
da sequência de Fibonacci.

A sequência começa com 0 e 1. Cada próximo termo é
a soma dos dois anteriores.

Exemplos:

fibonacci(1) -> [0]

fibonacci(2) -> [0, 1]

fibonacci(6) -> [0, 1, 1, 2, 3, 5]

fibonacci(8) -> [0, 1, 1, 2, 3, 5, 8, 13]

Requisitos:
- Utilizar uma função.
- Utilizar uma estrutura de repetição.
- Retornar uma lista.
- Não utilizar bibliotecas externas.
- Considerar N maior ou igual a zero.
"""


def fibonacci(n):
    sequencia = []
    anterior, atual = 0, 1

    for _ in range(n):
        sequencia.append(anterior)
        anterior, atual = atual, anterior + atual
    return sequencia
