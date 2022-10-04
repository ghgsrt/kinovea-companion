# ARG VARIANT=16-bullseye
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# # RUN su node -c "npm install -g <your-package-list -here>"

# COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
 
# ENV PATH="/usr/local/go/bin:${PATH}"

FROM golang:1.13-alpine

RUN apk add --no-cache bash git nodejs-current npm
RUN sed -i -e "s/bin\/ash/bin\/bash/" /etc/passwd

ARG USER=dev
ARG GROUP=docker

RUN addgroup --system ${GROUP} \
    && adduser --system ${USER} --ingroup ${GROUP} 

USER ${USER}

# ENTRYPOINT [ "sleep", "infinity" ]
