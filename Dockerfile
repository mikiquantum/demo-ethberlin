FROM nginx:1.12-alpine

COPY ./client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
