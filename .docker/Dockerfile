FROM alpine:latest

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apk add --no-cache nodejs-current npm go shadow \
    && go install github.com/wailsapp/wails/v2/cmd/wails@latest \
    && groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

ENTRYPOINT ["sleep", "infinity"]
