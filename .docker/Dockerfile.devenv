# syntax=docker/dockerfile:1
FROM node:18.7.0
FROM golang
CMD ["go", "install", "github.com/wailsapp/wails/v2/cmd/wails@latest"]

RUN useradd -s /bin/bash -m vscode \
    && groupadd docker \
    && usermod -aG docker vscode

USER vscode

# WORKDIR /frontend
# COPY package.json package.json
# COPY package-lock.json package-lock.json
# RUN npm install
# COPY . .

ENTRYPOINT ["sleep", "infinity"]
