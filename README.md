# iframe-modal-poc

This is a POC to showcase that communication is possible between a host window and an iframe.

You can view
- the hosted version at https://m6rmwj-5173.csb.app/.
- the code at https://github.com/svihpinc/iframe-modal-poc/tree/draft-2

Description:
1. The content on the left half is the current page you are viewing
2. The Content on right is the rendered iframe
3. The iframe shows its url in its content as a header
4. There are 2 radio buttons on the left side. These can be used to switch the url being displayed in the iframe
5. Inside the iframe, you can see 2 buttons. These will generate a random number and try to pass it to the parent window through specified method
6. You can see the number generated in the iframe. If communication was successful, same number will be shown on the left side too
7. When selecting the current url as the iframe's src, both CustomEvent and PostMessage methods will work
8. When selecting the different url, only PostMessage method will work. CustomEvent will throw error, which can be seen in the dev tool console

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
