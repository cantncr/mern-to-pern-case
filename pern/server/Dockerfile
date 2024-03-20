FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5050

CMD [ "node", "server.js" ]
