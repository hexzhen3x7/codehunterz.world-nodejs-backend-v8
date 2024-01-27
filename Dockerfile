# syntax=docker/dockerfile:experimental

FROM node:latest

WORKDIR /src/bin/app

COPY . .

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 8081