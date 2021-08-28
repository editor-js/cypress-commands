# getBlock command

Command to get Editor.js Blocks' containers or particular Block container by index

## Signature

```typescript
interface Chainable {
  getBlock(index?: number, options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>>;
}
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ---|
| `index` | `number` | _Optional_ Index of Block to find
| `options` | `Partial<Loggable>` | _Optional_ Object with `log` parameter. If `log` passed as `false` will not log into Cypress steps

## Usage

```javascript
cy.getBlock()
  .then(blocks => {
    blocks.each((index) => {
      const element = block.get(index);
      // do smth with each block
    })
  })

cy.getBlock(2)
  .then(block => {
    element = block.get(0);
    
    // Do something with Block by index 2 (so it is actually third Block)
  })
```
