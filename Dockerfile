FROM node:12.16.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

CMD ["npm", "run", "start"]