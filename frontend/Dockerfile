FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN yarn build

