# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY ./src/app/package*.json ./
RUN npm install
COPY ./src/app ./
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
