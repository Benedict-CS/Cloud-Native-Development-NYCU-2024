FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install -g typescript vite
RUN npm install
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
RUN apt-get install -y curl

COPY --from=build /app/dist /var/www/html/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
