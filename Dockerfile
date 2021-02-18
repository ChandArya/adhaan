FROM node:alpine

WORKDIR /app

COPY package.json .


RUN npm install -g npm@7.5.4

COPY . .

EXPOSE 8001

CMD ["npm","start"]