# ARG VARIANT=16-bullseye
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# # RUN su node -c "npm install -g <your-package-list -here>"

# COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
 
# ENV PATH="/usr/local/go/bin:${PATH}"

FROM golang:1.13-alpine

RUN apk add --no-cache git nodejs-current npm

ARG USER=dev
ARG GROUP=docker

RUN addgroup --system ${GROUP} \
    && adduser --system --no-password ${USER} --ingroup ${GROUP} 

# RUN sed -i -e "s/bin\/ash/bin\/bash/" /etc/passwd

USER ${USER}

RUN apk add --no-cache bash

# ENTRYPOINT [ "sleep", "infinity" ]
