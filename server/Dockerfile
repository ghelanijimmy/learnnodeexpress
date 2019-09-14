FROM node:latest

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package.json /usr/src/server

RUN npm install

COPY . .

CMD ["npm", "start"]