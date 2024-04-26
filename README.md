# How to Setup a TypeScript, Node.js and Express Web Applicaton Project

## Initial Setup and Configuring The Workspace
- `mkdir ts-express-web-app`
- `cd ts-express-web-app`
- `npm init -y`, this will setup the project package.json and add the dependencies.
- `npm install typescript --save-dev`, add TypeScript as a dev dependency. After `install typescript`, we get access to the command line TypeScript compiler through the `tsc` command.
- `npm install @types/node --save-dev`, Install ambient Node.js types for TypeScript.
- `touch tsconfig.json`, The tsconfig.json is where we define the TypeScript compiler options
- tsconfig.json should look like this:
{
    "compilerOptions": {
      "target": "ES2019",                          
      "module": "commonjs",                    
      "lib": ["ES2019"],                     
      "allowJs": true,
      "outDir": "build",                          
      "rootDir": "src",
      "strict": true,         
      "noImplicitAny": true,
      "esModuleInterop": true,
      "resolveJsonModule": true
    }
  }

- `mkdir src`
- `touch src/index.ts`