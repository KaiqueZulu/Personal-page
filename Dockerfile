FROM node:17
WORKDIR .
COPY package*.json ./
COPY . .
EXPOSE 8080 
CMD [ "node", "update" ]
CMD [ "node", "server.js" ]