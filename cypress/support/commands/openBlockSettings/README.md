# getEditor command

Command to get Editor.js container HTML element

## Signature

```typescript
interface Chainable {
  openBlockSettings(options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>>;
}
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ---|
| `options` | `Partial<Loggable>` | _Optional_ Object with `log` parameter. If `log` passed as `false` will not log into Cypress steps

## Usage

```javascript
cy.getBlock(0)
  .openBlockSettings()
  .then(blockSettingsPopover => {
    const element = blockSettingsPopover.get(0);
    
    // do smth with blockSettingsPopover
    
    return blockSettingsPopover;
  })
  .find('.my-tune-button')
  .click();
```
