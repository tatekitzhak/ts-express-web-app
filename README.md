# How to Setup a TypeScript, Node.js and Express Web Application Project

# Structure of a Web Application
```bash
├── build
├── src
│   ├── controllers
│   │   ├── Api
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── Auth
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── Account.ts
│   │   └── Home.ts
│   ├── database 
│   │   ├── Database.ts
│   │   └── NativeEvent.ts
│   ├── exception 
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── interfaces
│   │   ├── models
│   │   │   └── Schema.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── models
│   │   └── User.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── routes
│   │   ├── Api.ts
│   │   └── Web.ts
│   ├── services
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── index.ts
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

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