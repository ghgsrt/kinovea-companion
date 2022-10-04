# ARG VARIANT=16-bullseye
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# # RUN su node -c "npm install -g <your-package-list -here>"

# COPY --from=golang:1.13-alpine /usr/local/go/ /usr/local/go/
 
# ENV PATH="/usr/local/go/bin:${PATH}"

FROM golang:1.13-alpine

ARG USER=dev
ARG GROUP=docker
ENV HOME /home/$USER

RUN apk add --no-cache sudo git nodejs npm
    # && sed -i -e "s/bin\/ash/bin\/bash/" /etc/passwd

# RUN addgroup --system ${GROUP} \
#     && adduser --system ${USER} --ingroup ${GROUP} 
RUN adduser -D $USER \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER \
        && chmod 0440 /etc/sudoers.d/$USER

USER ${USER}

RUN apk add --no-cache bash

# ENTRYPOINT [ "sleep", "infinity" ]
