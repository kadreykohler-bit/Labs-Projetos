# Portfólio de Desenvolvedor

Portfólio pessoal estático com apresentação profissional, formação, competências e projetos. A página carrega os dados do perfil a partir de um arquivo JSON e usa JavaScript para preencher as seções da interface.

## Tecnologias

- HTML, CSS e JavaScript.
- JSON para os dados do perfil.
- Google Fonts e Normalize.css carregados externamente.

## Como visualizar

A página principal está em `js-developer-portfolio/index.html`. Como o JavaScript busca `data/profile.json` com `fetch`, abra o projeto por um servidor HTTP local, em vez de usar diretamente o endereço `file://`.

No PowerShell:

```powershell
cd js-developer-portfolio
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`. Também é possível publicar o conteúdo da pasta `js-developer-portfolio` no GitHub Pages.

## Estrutura principal

- `js-developer-portfolio/index.html`: estrutura da página.
- `js-developer-portfolio/assets/css/`: estilos por seção.
- `js-developer-portfolio/assets/js/`: carregamento dos dados e interações.
- `js-developer-portfolio/data/profile.json`: conteúdo do perfil.
- `js-developer-portfolio/assets/img/`: foto, ícones e imagens.

## Personalização

Edite `data/profile.json` para atualizar as informações exibidas. Confira também as referências locais de foto e imagens para manter os caminhos válidos.
