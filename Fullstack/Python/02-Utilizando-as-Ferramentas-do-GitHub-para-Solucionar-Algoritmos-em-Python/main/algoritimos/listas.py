"""
Exercícios de algoritmos com listas.

Conteúdos:
- Criação de listas
- Acesso aos elementos
- Inserção e remoção
- Percorrer listas
- Métodos de listas
- Manipulação de elementos
"""


# =====================================================
# EXERCÍCIO 01 - SOMA DOS ELEMENTOS DE UMA LISTA
# =====================================================

"""
Crie uma função chamada somar_lista() que receba uma lista
de números inteiros e retorne a soma de todos os elementos.

Exemplos:

somar_lista([1, 2, 3, 4, 5]) -> 15

somar_lista([10, 20, 30]) -> 60

somar_lista([5, 5, 5]) -> 15

Requisitos:
- Utilizar uma função.
- Percorrer os elementos da lista.
- Retornar a soma dos valores.
- Não utilizar a função sum().
"""


def somar_lista(lista):
    total = 0
    for numero in lista:
        total += numero
    return total


# =====================================================
# EXERCÍCIO 02 - REMOVER ELEMENTOS DUPLICADOS
# =====================================================

"""
Crie uma função chamada remover_duplicados() que receba
uma lista e retorne uma nova lista sem elementos repetidos.

A ordem original dos elementos deve ser preservada.

Exemplos:

remover_duplicados([1, 2, 2, 3, 4, 4, 5])
-> [1, 2, 3, 4, 5]

remover_duplicados(["a", "b", "a", "c"])
-> ["a", "b", "c"]

remover_duplicados([1, 1, 1, 1])
-> [1]

Requisitos:
- Criar uma nova lista.
- Não alterar a lista original.
- Preservar a ordem dos elementos.
- Não utilizar set().
"""


def remover_duplicados(lista):
    resultado = []
    for elemento in lista:
        if elemento not in resultado:
            resultado.append(elemento)
    return resultado


# =====================================================
# EXERCÍCIO 03 - ENCONTRAR O MAIOR E O MENOR VALOR
# =====================================================

"""
Crie uma função chamada maior_menor() que receba uma lista
de números e retorne o maior e o menor elemento.

Exemplos:

maior_menor([10, 5, 20, 3, 15])
-> (20, 3)

maior_menor([8, 8, 8, 8])
-> (8, 8)

maior_menor([-5, -10, -2, -20])
-> (-2, -20)

Requisitos:
- Percorrer a lista.
- Identificar o maior e o menor valor.
- Retornar uma tupla com os resultados.
- Não utilizar max() ou min().
- Considere que a lista sempre terá pelo menos um elemento.
"""


def maior_menor(lista):
    maior = menor = lista[0]
    for numero in lista[1:]:
        if numero > maior:
            maior = numero
        if numero < menor:
            menor = numero
    return maior, menor
