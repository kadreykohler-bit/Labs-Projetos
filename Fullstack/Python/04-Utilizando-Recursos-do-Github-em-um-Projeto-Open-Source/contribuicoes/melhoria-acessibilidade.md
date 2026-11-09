# Melhoria de Acessibilidade

## 1. Objetivo

Analisar e propor melhorias de acessibilidade no arquivo `profile/README.md` do repositório Universidade-Livre/.github.

## 2. Situação identificada

Durante a análise do README, foram identificadas imagens utilizadas no banner de apresentação e nos links das redes sociais.

Essas imagens não possuem atributos alternativos (`alt`).

## 3. Melhoria proposta

Adicionar descrições textuais às imagens utilizando o atributo `alt` do HTML.

Exemplo:

```html
<img
    src="URL_DA_IMAGEM"
    alt="Banner de apresentação da Universidade Brasileira Livre"
>
```

## 4. Benefícios esperados

- Melhorar a acessibilidade para pessoas que utilizam leitores de tela.
- Disponibilizar descrições alternativas para as imagens.
- Melhorar a compreensão do conteúdo.

## 5. Status

Em análise. A alteração ainda não foi aplicada ao README original.