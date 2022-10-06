cd frontend \
    && go install -v golang.org/x/tools/gopls@latest golang.org/x/tools/div@latest golang.org/x/tools/staticcheck@latest \
    && go get github.com/wailsapp/wails/v2/cmd/wails@latest \
    && npm i \
    && npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint \
    && npm run build \
    && cd ../