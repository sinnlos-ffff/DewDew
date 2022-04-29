FROM node:16

WORKDIR /frontend

COPY package*.json ./

RUN yarn install
COPY . .
RUN yarn build
