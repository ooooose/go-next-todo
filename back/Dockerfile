FROM golang:1.23.4-alpine3.21
RUN apk update && apk add git

ENV TZ=/usr/share/zoneinfo/Asia/Tokyo

WORKDIR /app

COPY ./app/ /app/

RUN go mod download

RUN go install github.com/cosmtrek/air@v1.27.3

EXPOSE 5050

CMD ["air", "-c", ".air.toml"]
