FROM node:16-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm update & npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]