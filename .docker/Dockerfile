# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/windows/servercore:20H2

RUN powershell -NoProfile -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))"
RUN choco install -y nodejs

# FROM golang 
# RUN go install github.com/wailsapp/wails/v2/cmd/wails@latest

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
