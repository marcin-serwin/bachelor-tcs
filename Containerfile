FROM alpine:3.18.3

RUN apk upgrade --no-cache && \
    apk add --no-cache nodejs npm

WORKDIR /root
COPY . .

RUN sh build-book

CMD tar cz HTML
