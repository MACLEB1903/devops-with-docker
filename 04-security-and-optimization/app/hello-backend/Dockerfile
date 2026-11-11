FROM golang
WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download

COPY . ./

ARG REQUEST_ORIGIN=http://localhost:5001
ENV REQUEST_ORIGIN=${REQUEST_ORIGIN}

RUN go build && \
    go test ./...

ARG PORT=8080
ENV PORT=${PORT}
EXPOSE $PORT

CMD ["./server"]

