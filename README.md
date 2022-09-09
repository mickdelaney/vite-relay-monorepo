# `turborepo` kitchen sink starter


## Relay Error


admin:dev: Failed to resolve import "./__generated__/UserItem_user.graphql" from "../../packages/ui/dist/index.mjs". Does the file exist?
admin:dev: Failed to resolve import "./__generated__/UserItem_user.graphql" from "../../packages/ui/dist/index.mjs". Does the file exist?
admin:dev: 22:31:50 [vite] Internal server error: Failed to resolve import "./__generated__/UserItem_user.graphql" from "../../packages/ui/dist/index.mjs". Does the file exist?
admin:dev:   Plugin: vite:import-analysis
admin:dev:   File: /Users/one/kitchen-sink/packages/ui/dist/index.mjs
admin:dev:   1  |  import _UserItem_user from "./__generated__/UserItem_user.graphql";
admin:dev:      |                              ^
admin:dev:   2  |  import RefreshRuntime from "/@react-refresh";
admin:dev:   3  |  let prevRefreshReg;
admin:dev:       at formatError (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:40782:46)
admin:dev:       at TransformContext.error (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:40778:19)
admin:dev:       at normalizeUrl (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37514:33)
admin:dev:       at async TransformContext.transform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37648:47)
admin:dev:       at async Object.transform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:41031:30)
admin:dev:       at async loadAndTransform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37292:29)
admin:dev: 22:31:53 [vite] Internal server error: Failed to resolve import "./__generated__/UserItem_user.graphql" from "../../packages/ui/dist/index.mjs". Does the file exist?
admin:dev:   Plugin: vite:import-analysis
admin:dev:   File: /Users/one/kitchen-sink/packages/ui/dist/index.mjs
admin:dev:   1  |  import _UserItem_user from "./__generated__/UserItem_user.graphql";
admin:dev:      |                              ^
admin:dev:   2  |  import RefreshRuntime from "/@react-refresh";
admin:dev:   3  |  let prevRefreshReg;
admin:dev:       at formatError (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:40782:46)
admin:dev:       at TransformContext.error (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:40778:19)
admin:dev:       at normalizeUrl (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37514:33)
admin:dev:       at async TransformContext.transform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37648:47)
admin:dev:       at async Object.transform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:41031:30)
admin:dev:       at async loadAndTransform (file:///Users/one/kitchen-sink/node_modules/vite/dist/node/chunks/dep-665b0112.js:37292:29)


### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and eslint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit vercel/turborepo/examples/kitchen-sink kitchen-sink
cd kitchen-sink
yarn install
git init . && git add . && git commit -m "Init"
```
