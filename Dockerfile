FROM node:24

WORKDIR /api

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx knex migrate:latest && npx knex seed:run && npm run start"]