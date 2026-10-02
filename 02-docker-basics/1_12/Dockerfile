FROM ubuntu:22.04

RUN apt-get update && apt-get install -y curl ca-certificates

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve

EXPOSE 5001

CMD ["serve", "-s", "-l", "5001", "build"]