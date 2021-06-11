# Typescript Notes and Playground
This project is for my own notes on typescript, also setting an enviroment to use it with ExpressJS to create a simple web server and put in practice what I am learning

## Set Up
We start with a yarn init -y to create a package.json
Then we install typescript with yarn add typescript
After installation we run tsc init to create a tsconfig.json

#### Run files 
```bash
npx ts-node ./src/filename.ts
```

### Spin up a server
ts-node-dev is set up as yarn script and will run a simple server on port 3000
```json
"dev:server": "ts-node-dev --respawn --transpile-only ./src/index.ts"
```
