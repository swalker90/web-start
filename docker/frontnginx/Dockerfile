
FROM nginx

RUN groupadd -r content && useradd --no-log-init -r -g content content

WORKDIR /home/content

COPY frontnginx/ .

RUN rm -rf /usr/share/nginx/html ; \
    rm -rf /usr/share/nginx/js ; \
    rm -rf /usr/share/nginx/css

RUN rm /etc/nginx/nginx.conf

RUN ln -s /home/content/html /usr/share/nginx/html; \
    ln -s /home/content/css /usr/share/nginx/css; \
    ln -s /home/content/js /usr/share/nginx/js; \
    ln -s /home/content/img /usr/share/nginx/img; \
    ln -s /home/content/nginx.conf /etc/nginx/nginx.conf;

EXPOSE 80
