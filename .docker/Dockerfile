FROM alpine:latest

RUN apk add --no-cache nodejs-current npm go \
    && go install github.com/wailsapp/wails/v2/cmd/wails@latest

ENTRYPOINT ["sleep", "infinity"]
