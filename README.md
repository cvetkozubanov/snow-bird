# React Boilerplate

- [bulletproof-react](https://github.com/alan2207/bulletproof-react) is used as a reference for this react-boilerplate-app
- [Clean code](https://github.com/ryanmcdermott/clean-code-javascript)
- [Naming convention](https://github.com/kettanaito/naming-cheatsheet)

## Setting up the VSCode

- Install the prettier extension:

`CTRL + P` -> paste `ext install esbenp.prettier-vscode` -> press `Enter`

- Create the `.vscode/settings.json` file with the following content:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- Instal ESLint extension for VS code

- husky is used to control that we do not commit code with eslint errors. If commit is not working update node to 14.16.0 or higher

- Organize imports on save & delete unused imports (vscode)
  //Add in settings.json:
  "editor.codeActionsOnSave": [
  "source.organizeImports",
  ],

- Add missing imports on save TypeScript (vscode)
  //Add in settings.json:
  "editor.codeActionsOnSave": [
  "source.addMissingImports",
  ],
