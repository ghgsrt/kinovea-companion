FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y sudo git-core nodejs golang

RUN go install github.com/wailsapp/wails/v2/cmd/wails@latest

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
