"""
Exercícios de algoritmos com strings.

Conteúdos:
- Manipulação de strings
- Métodos de texto
- Busca de caracteres
- Conversão de letras
- Concatenação
- Separação de textos
"""


# Exercício 01: Contar vogais
#
# Crie uma função que receba uma palavra ou frase e retorne
# a quantidade de vogais existentes no texto.
#
# Exemplo:
# contar_vogais("Python") -> 1
# contar_vogais("Programacao") -> 5
#
# Requisitos:
# - Considere vogais maiúsculas e minúsculas.
# - Considere apenas as vogais a, e, i, o, u.
# - Retorne a quantidade encontrada.
#
def contar_vogais(texto):
    vogais = "aeiouAEIOU"
    quantidade = 0
    for caractere in texto:
        if caractere in vogais:
            quantidade += 1
    return quantidade


# Exercício 02: Inverter texto
#
# Crie uma função que receba uma palavra ou frase e retorne
# o texto com os caracteres na ordem inversa.
#
# Exemplo:
# inverter_texto("Python") -> "nohtyP"
# inverter_texto("DIO") -> "OID"
#
# Requisitos:
# - Não utilize o recurso de fatiamento [::-1].
# - Percorra os caracteres do texto.
# - Retorne uma nova string invertida.
#
def inverter_texto(texto):
    invertido = ""
    for caractere in texto:
        invertido = caractere + invertido
    return invertido


# Exercício 03: Contar palavras
#
# Crie uma função que receba uma frase e retorne
# a quantidade de palavras existentes nela.
#
# Exemplo:
# contar_palavras("Estou aprendendo Python") -> 3
# contar_palavras("Estudando algoritmos na DIO") -> 4
#
# Requisitos:
# - Utilize o método split() para separar as palavras.
# - Considere espaços extras entre as palavras.
# - Retorne a quantidade de palavras.
#
def contar_palavras(texto):
    return len(texto.split())
