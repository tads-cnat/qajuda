FROM node:alpine

WORKDIR /app/frontend

COPY . .

RUN yarn install

EXPOSE 1234

CMD [ "npm", "run", "dev" ]


