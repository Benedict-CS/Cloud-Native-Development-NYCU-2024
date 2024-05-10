FROM node:21-alpine3.18

ENV NODE_ENV production

WORKDIR /app

COPY package.json package-lock.json ./
COPY .env ./

RUN npm ci
RUN npm install
RUN npm install -g typescript

COPY . .
RUN npm run build

RUN npm prune --production

RUN apk add --no-cache mongodb-tools

EXPOSE 3000

CMD ["npm", "start"]