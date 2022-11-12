FROM node:14-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]