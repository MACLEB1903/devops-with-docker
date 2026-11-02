FROM golang:alpine
WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download

COPY . ./

RUN go build
RUN go test ./...

ENV PORT=8080
EXPOSE $PORT
CMD ["./server"]
