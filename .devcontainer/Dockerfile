ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# RUN su node -c "npm install -g <your-package-list -here>"

COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
 
# ENV PATH="/usr/local/go/bin:${PATH}"
