FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i --force

CMD ["node", "index.js"]