FROM node:10-alpine

WORKDIR /app

RUN apk add --no-cache --virtual .gyp python make g++
ADD package.json /app
RUN yarn
ADD . /app
RUN yarn run build
RUN apk del .gyp

EXPOSE 8080

CMD yarn run start
