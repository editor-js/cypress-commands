import Chainable = Cypress.Chainable;
import Loggable = Cypress.Loggable;

declare global {
  namespace Cypress {
    // eslint-disable-next-line no-unused-vars
    interface Chainable<Subject = any> {
      getBlock(index?: number, options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>>
    }
  }
}

export default Cypress.Commands.add('getBlock', (index?: number, options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>> => {
  if (options?.log !== false) {
    cy.log(`Get block${index === undefined ? 's' : ` with index ${index}`}`);
  }

  const blocks = cy
    .getEditor({ log: false })
    .find<HTMLDivElement>('.ce-block', { log: false });

  if (index !== undefined) {
    return blocks.eq(index, { log: false });
  }

  return blocks;
});
