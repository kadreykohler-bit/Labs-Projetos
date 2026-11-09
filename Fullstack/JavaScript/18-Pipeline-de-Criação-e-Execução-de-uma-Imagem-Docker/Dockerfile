# Imagem base do servidor Nginx
FROM nginx:alpine

# Copia os arquivos HTML
COPY ./app/html/ /usr/share/nginx/html/

# Copia os arquivos CSS
COPY ./app/css/ /usr/share/nginx/html/css/

# Copia os arquivos JavaScript
COPY ./app/js/ /usr/share/nginx/html/js/

# Expõe a porta 80
EXPOSE 80