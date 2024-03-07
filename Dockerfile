# syntax=docker/dockerfile:experimental

FROM node:latest

WORKDIR /app

COPY . .

RUN npm install
COPY . .

CMD [ "npm", "run", "start" ]

EXPOSE 8081