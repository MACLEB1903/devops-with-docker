FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_BACKEND_URL=http://localhost:8080
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

RUN npm run build && \
    npm install -g serve

EXPOSE 5001

CMD ["serve", "-s", "-l", "5001", "build"]