# Podcast Menager

### Descrição
Um app ao estuilo netflix, onde possa centralizar diferentes podcats separados por categorias

### Domínio
canal aulas feitos em video

### Features
- Listar os episódios em sessões de categorias
    - [aulas, tech,masterclass]
- Filtrar episódios por nomes de aulas

## Como


#### Feature:
 - Listar os episódios em sessões de categorias
### Como vou implementar:
GET: Retorna lista de episódios

Response: 

```js
[
    {
        canalName: "Descomplica Faculdade Digital",
        episode: "Decolando para o sucesso! 🚀 Semana Inaugural 2023.3 | Turma de julho",
        videoId: "rgSG8ArTrgk",
        cover: "https://i.ytimg.com/vi/rgSG8ArTrgk/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=rgSG8ArTrgk",
        category: ["aulas", "tech"]
    },
    {
        canalName: "Descomplica Faculdade Digital",
        episode: "COLAÇÃO DA FACULDADE DESCOMPLICA",
        videoId: "9Qo-EG26Zh0",
        cover: "https://i.ytimg.com/vi/9Qo-EG26Zh0/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=9Qo-EG26Zh0",
        category: ["diploma", "colação de grau"]
    },
]
```

GET: Retorna lista de episódios baseado em um parametro enviado 
pelo cliente do nome do episódio