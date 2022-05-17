FROM node:17
WORKDIR ~
COPY . .
EXPOSE 8080 
RUN npm i
CMD [ "node", "server.js" ]