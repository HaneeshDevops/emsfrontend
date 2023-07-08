FROM node:latest
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4200

CMD ["node", "--max-old-space-size=4096", "node_modules/@angular/cli/bin/ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
