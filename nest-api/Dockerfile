FROM node:12.14.0-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY .  .

CMD ["yarn","start:dev"]