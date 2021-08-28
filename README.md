![](https://badgen.net/badge/Editor.js/v2.0/blue)

# @editorjs/cypress-commands 

Set of [Cypress](https://cypress.io) commands for [Editor.js](https://editorjs.io) testing purposes

## Installation

Install the package using `yarn` or `npm`

```shell
yarn add -D @editorjs/cypress-commands

npm install --save-dev @editorjs/cypress-commands
```

Add import to `cypress/support/index` file:

```javascript
import '@editorjs/cypress-commands'
```

## List of commands

| Name | Description |
| ---- | ----------- |
| [initEditorJS](./cypress/support/commands/initEditorJS/README.md) | Loads fixture html page with initalized EditorJS |
| [getEditor](./cypress/support/commands/getEditor/README.md) | Yelds EditorJS HTMLElement container |
| [getBlock](./cypress/support/commands/getBlock/README.md) | Yelds EditorJS block HTMLElement |
| [openBlockSettings](./cypress/support/commands/openBlockSettings/README.md) | Opens settings popover for Block and yelds it's HTMLElement |

## Access to EditorJS instance

You can access EditorJS object with API methods via `EditorJS` alias:

```javascript
cy.get<EditorJS>('@EditorJS')
  .then(async editor => {
    await editor.save();
  });
```

## Loading your tool

Fixture HTML page contains `loadScript` method to allow you to load your Tool on the page.

Also package provide a task to resolve path to package

```javascript
before(() => {
  cy.task('resolvePathToPackage', 'my-tool-package-name', (pathToPackage) => {
    cy.window()
      .then(async win => {
        await win.loadScript(pathToPackage, 'script-id');

        cy.initEditorJS({
          tools: {
            myTool: win.MyTool
          }
        });
      });  
  });
});
```
