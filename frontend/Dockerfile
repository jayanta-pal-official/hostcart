

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

RUN npm run build

# Use a web server to serve the built files
FROM node:20-alpine 

WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]