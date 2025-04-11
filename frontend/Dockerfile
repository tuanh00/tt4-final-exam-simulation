# frontend/Dockerfile
FROM node:20

WORKDIR /app

COPY ./src/app/package*.json ./
RUN npm install

COPY ./src/app .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
