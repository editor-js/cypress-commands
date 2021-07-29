# getEditor command

Command to get Editor.js container HTML element

## Signature

```typescript
interface Chainable {
  getEditor(options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>>;
}
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ---|
| `options` | `Partial<Loggable>` | _Optional_ Object with `log` parameter. If `log` passed as `false` will not log into Cypress steps

## Usage

```javascript
cy.getEditor()
  .then(editorContianer => {
    // do smth with container
    
    return editorContianer;
  })
  .find('some-selector')
```
