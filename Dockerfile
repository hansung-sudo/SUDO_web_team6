FROM nginx:alpine

# Copy static site into nginx html dir
COPY ./mainpage /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'" ]
