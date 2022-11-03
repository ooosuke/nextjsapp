FROM node:14-alpine

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]