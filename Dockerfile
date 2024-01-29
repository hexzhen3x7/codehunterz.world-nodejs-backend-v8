# syntax=docker/dockerfile:experimental

FROM node:latest

WORKDIR /src/bin/app

COPY . .

RUN npm i

CMD [ "npm", "start" ]

EXPOSE 8081