FROM nginx

COPY ./docs-dist/ /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/zjx-ui.conf

EXPOSE 80