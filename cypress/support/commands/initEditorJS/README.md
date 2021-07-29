# getEditor command

Command to get Editor.js container HTML element

## Signature

```typescript
interface Chainable {
  initEditorJS(config?: EditorConfig, options?: Partial<Loggable>): Chainable<EditorJS>;
}
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ---|
| `config` | EditorConfig | _Optional_ EditorJS configuration, empty by default
| `options` | `Partial<Loggable>` | _Optional_ Object with `log` parameter. If `log` passed as `false` will not log into Cypress steps

## Usage

```javascript
cy.initEditorJS()
  .then(editorInstance => {
    // do smth with Editor APIs
  });

cy.window()
  .then(win => {
    cy.initEditorJS({
      tools: {
        myTool: win.MyTool,
      },
      data: {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'Some pre-set text'
            }
          }
        ]
      }
    })
  });
```

You might want to call this command inside `beforeEach` hook:

```javascript
beforeEach(() => {
  cy.initEditorJS();
});
```
