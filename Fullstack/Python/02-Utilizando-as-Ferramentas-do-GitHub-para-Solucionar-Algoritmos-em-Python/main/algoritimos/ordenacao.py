"""
Exercícios de algoritmos de ordenação.

Conteúdos:
- Ordenação crescente
- Ordenação decrescente
- Comparação de elementos
- Organização de listas
- Algoritmos de ordenação
"""


# Exercício 01: Ordenação crescente
#
# Crie uma função que receba uma lista de números e retorne
# uma nova lista organizada em ordem crescente.
#
# Exemplo:
# ordenar_crescente([5, 2, 8, 1, 3]) -> [1, 2, 3, 5, 8]
#
# Requisitos:
# - Não utilize sorted().
# - Não utilize o método sort().
# - Não modifique a lista original.
# - Utilize um algoritmo de ordenação.
#
def ordenar_crescente(lista):
    resultado = lista.copy()

    for indice in range(len(resultado)):
        menor_indice = indice
        for proximo in range(indice + 1, len(resultado)):
            if resultado[proximo] < resultado[menor_indice]:
                menor_indice = proximo
        resultado[indice], resultado[menor_indice] = (
            resultado[menor_indice],
            resultado[indice],
        )

    return resultado


# Exercício 02: Ordenação decrescente
#
# Crie uma função que receba uma lista de números e retorne
# uma nova lista organizada em ordem decrescente.
#
# Exemplo:
# ordenar_decrescente([5, 2, 8, 1, 3]) -> [8, 5, 3, 2, 1]
#
# Requisitos:
# - Não utilize sorted().
# - Não utilize o método sort().
# - Não modifique a lista original.
# - Utilize comparações entre os elementos.
#
def ordenar_decrescente(lista):
    resultado = lista.copy()

    for indice in range(len(resultado)):
        maior_indice = indice
        for proximo in range(indice + 1, len(resultado)):
            if resultado[proximo] > resultado[maior_indice]:
                maior_indice = proximo
        resultado[indice], resultado[maior_indice] = (
            resultado[maior_indice],
            resultado[indice],
        )

    return resultado


# Exercício 03: Mesclar listas ordenadas
#
# Crie uma função que receba duas listas já ordenadas
# em ordem crescente e retorne uma única lista também ordenada.
#
# Exemplo:
# mesclar_listas([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]
#
# Outro exemplo:
# mesclar_listas([1, 3, 7], [2, 3, 8]) -> [1, 2, 3, 3, 7, 8]
#
# Requisitos:
# - Não utilize sorted().
# - Não utilize o método sort().
# - Preserve os valores repetidos.
# - Não modifique as listas originais.
#
def mesclar_listas(lista1, lista2):
    resultado = []
    indice1 = 0
    indice2 = 0

    while indice1 < len(lista1) and indice2 < len(lista2):
        if lista1[indice1] <= lista2[indice2]:
            resultado.append(lista1[indice1])
            indice1 += 1
        else:
            resultado.append(lista2[indice2])
            indice2 += 1

    resultado.extend(lista1[indice1:])
    resultado.extend(lista2[indice2:])
    return resultado
