import Chainable = Cypress.Chainable;
import Loggable = Cypress.Loggable;

declare global {
  namespace Cypress {
    // eslint-disable-next-line no-unused-vars
    interface Chainable<Subject = any> {
      getEditor(options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>>;
    }
  }
}

export default Cypress.Commands.add('getEditor', (options?: Partial<Loggable>): Chainable<JQuery<HTMLDivElement>> => {
  if (options?.log !== false) {
    cy.log('Get EditorJS container');
  }

  return cy.get<HTMLDivElement>('[data-cy=editorjs]', { log: false });
});
