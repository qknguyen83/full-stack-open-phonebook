FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL='http://localhost:3000/api'

RUN npm ci --only=production

RUN npm run build

RUN npm install -g serve

CMD [ "serve", "build" ]