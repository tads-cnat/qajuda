FROM node:alpine

WORKDIR /app/frontend

COPY . .

RUN yarn install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]


