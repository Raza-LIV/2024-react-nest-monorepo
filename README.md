# React.js + Nest.js + MongoBD

## Project overview
-Placeholder-

## How to start
Initially, project is build on `Node` version `22.5.1` and `Yarn` version `4.5.0`.

To install all necessary dependencies just run:
```bash
yarn install
```

## Backend
The backend is developed using NestJS, following best practices and patterns recommended in the official [NestJS documentation](https://docs.nestjs.com). This ensures a modular and maintainable structure for scalable applications.

### Base description
The application runs by default on port `8080`, but this can be modified according to your needs by configuring the environment variables.

### Start guide
Make sure that yu have `.env` file on a same level as `/src` directory. Also, make sure that you have all packages installed and you have `node_modules` directory on a global project level. If don't, let's start with installing all monorepo packages (You can do it form global level or from specific `/packages` directory levels).

Install packages:
```bash
yarn install
```

Then, make sure that yuo are in `/packages/backend` directory
```bash
cd /packages/backend
```

Let's build our application:
```bash
yarn build
```

And start app in `dev` or `prod` mode (with or without hot reloads):
```bash
yarn start:dev
```

In the `.env` file, we have specified `PORT` variable which have been used via `main.ts` file, and initially, the the app is going to be hosted on port `8080`

### Add new Module | Controller | Service
To add new base entity ([Module](https://docs.nestjs.com/modules), [Controller](https://docs.nestjs.com/controllers) or [Service](https://docs.nestjs.com/providers#services)) we use to have [Nest CLI](https://docs.nestjs.com/cli/overview) installed globally on our machine.

To install Nest CLI globally, run the following command:
```bash
yarn add -g @nestjs/cli
```

To create new `Module` via `/modules` folder, let's run:
```bash
nest g module modules/test
``` 
This going to create you a `/modules/test` directory with `test.module.ts` entrypoint file

To create `Controller` run the following command:
```bash
nest g controller modules/test
```
This going to create you a `test.controller.ts` entrypoint

To create `Service` run:
```bash
nest g service modules/test
```
This going to create you a `test.service.ts` entrypoint

## Frontend
The frontend is developed using `React` powered by `TypeScript`, providing a strong foundation for building maintainable and scalable applications. To enhance the development experience, Vite is used as the build tool, offering fast bundling and hot module replacement (HMR) for seamless development workflows.

### Base description
The application runs by default on port `3000`, but this can be modified according to your needs by configuring the environment variables.

### Start guide
Make sure that yu have `.env` file on a same level as `/src` directory. Also, make sure that you have all packages installed and you have `node_modules` directory on a global project level. If don't, let's start with installing all monorepo packages (You can do it form global level or from specific `/packages` directory levels).

Install packages:
```bash
yarn install
```

Then, make sure that you are in `/packages/frontend` directory
```bash
cd /packages/frontend
```

Let's build our application:
```bash
yarn build
```

And start app in `dev` or `prod` mode (with or without hot reloads):
```bash
yarn start:dev
```

### Folder structure
The project is structured following the [Feature-Sliced Design (FSD) methodology](https://feature-sliced.design/docs/get-started/overview). This architectural pattern is focused on dividing the codebase by features, ensuring that each feature remains independent and modular. FSD promotes better scalability, separation of concerns, and maintainability as the application grows.

### Build details
The frontend is pre-configured with [Vite](https://vite.dev) default setup, enabling fast builds and minimal configuration. The project structure is optimized for maintainability and growth, aligning with the principles of FSD to ensure a well-organized and scalable application.

# Environment Variables
Environment-specific settings are managed using `.env` files. All crucial configuration values such as database credentials, API keys, and other sensitive information should be defined within the `.env` file located at the root of the project. The default environment is considered to be the development environment.

For more specific environments like staging or production, separate configuration files such as `.env.staging` or `.env.production` should be created and utilized. This helps in cleanly separating environment configurations and ensuring that sensitive production variables are not mixed with development configurations. The backend uses MongoDB as the primary database, document-oriented database known for its scalability and flexibility.

Additionally, make sure that these environment files are appropriately handled and excluded from version control by adding them to your `.gitignore` file, thus preventing sensitive data from being exposed in the repository.
