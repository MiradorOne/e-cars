## What's in the stack

- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)
- [Mongodb](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/) ORM

| Package     | Version |
|-------------|---------|
| 🚀 React    | 18.2.0  |
| 💿 Remix    | 1.6.7   |
| 💨 Tailwind | 3.0.24  |
| 🚀 Prisma   | 5.1.1   |


## Development
      
Start dev server:

```sh
yarn dev
```

## Start MongoDB

Run to create Mongodb container:

```sh
docker-compose up -d
```

Create .env with variables from .env.example

```shell
touch .env
cp .env.example .env
```

Seed database

```sh
prisma db push
prisma db seed
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

### Types

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
