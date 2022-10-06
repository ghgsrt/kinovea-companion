# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends wget software-properties-common apt-transport-https && apt-get update \
    # && add-apt-repository ppa:longsleep/golang-backports && apt-get update \
    # && apt-get install golang-1.18
    && wget https://go.dev/dl/go1.19.linux-amd64.tar.gz \
    && sudo tar -zxvf go1.19.linux-amd64.tar.gz -C /usr/local/ 
    # && sudo mv go /usr/local \ 
    # && export GOROOT=/usr/local/go \
    # && export GOPATH=$HOME/go \
    # && export PATH=$GOPATH/bin:$GOROOT/bin:$PATH \ 
    # && source ~/.bashrc
    # && apt-get -y install --no-install-recommends curl && apt-get update && curl 

ENV PATH /usr/local/go/bin:$PATH

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"
