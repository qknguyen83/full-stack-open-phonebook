FROM node:16

RUN apt update

RUN apt install dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

USER node

CMD [ "dumb-init", "npm", "start" ]