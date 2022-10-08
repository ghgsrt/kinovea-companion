# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends wget software-properties-common apt-transport-https libgtk-3-dev libwebkit2gtk-4.0-dev nsis docker.io mesa-utils libgl1-mesa-glx && apt-get update \
    && wget https://go.dev/dl/go1.19.2.linux-amd64.tar.gz \
    && rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.2.linux-amd64.tar.gz

ARG OLD_USERN=node
ARG USERNAME=cock
ARG USER_UID=1337
ARG GROUP_NAME=balls
ARG USER_GID=${USER_UID}

RUN usermod --uid ${USER_UID} --login ${USERNAME} --home /home/${USERNAME} --move-home ${OLD_USERN} \
    && groupmod --gid ${USER_GID} --new-name ${USERNAME} ${OLD_USERN} \
    && chown -R ${USER_UID}:${USER_GID} /home/${USERNAME} \
    && chmod -R u+rwx /home/${USERNAME} \
    && echo "${USERNAME} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

USER ${USERNAME}

ENV GOROOT /usr/local/go
ENV GOPATH /home/${USERNAME}/go
ENV PATH ${GOPATH}/bin:${GOROOT}/bin:${PATH}

RUN go install -v golang.org/x/tools/gopls@latest \
    && go install github.com/wailsapp/wails/v2/cmd/wails@latest
# groupadd --system --gid $USER_GID $USERNAME \
    # && useradd --system --uid $USER_UID --gid $USER_GID -m $USERNAME \

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"
