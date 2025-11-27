FROM node:22-alpine

WORKDIR /mymonty-frontend-new

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
