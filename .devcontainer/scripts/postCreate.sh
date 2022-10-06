go install -v golang.org/x/tools/gopls@latest
go install github.com/wailsapp/wails/v2/cmd/wails@latest
cd frontend
npm i
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint
npm run build
cd ../