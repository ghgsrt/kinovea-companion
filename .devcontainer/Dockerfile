FROM golang
RUN go get -u -v golang.org/x/tools/cmd/gopls 2>&1

ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# RUN su node -c "npm install -g <your-package-list -here>"
