import Chainable = Cypress.Chainable;

declare global {
  namespace Cypress {
    // eslint-disable-next-line no-unused-vars
    interface Chainable<Subject = any> {
      openBlockSettings(): Chainable<JQuery<HTMLDivElement>>;
    }
  }
}

export default Cypress.Commands.add('openBlockSettings', { prevSubject: 'element' }, (prevSubject: JQuery<HTMLDivElement>): Chainable<JQuery<HTMLDivElement>> => {
  const element = prevSubject.get(0);

  if (!element.classList.contains('ce-block')) {
    throw new Error('openBlockSettings() should get Editor\'s block as a previous subject');
  }

  cy.log('openBlockSettings', prevSubject.get(0));

  cy.wrap(prevSubject, { log: false })
    .click({ log: false });

  return cy.getEditor({ log: false })
    .find<HTMLDivElement>('.ce-toolbar__actions', { log: false })
    .click({ log: false })
    .find('.ce-settings', { log: false });
});
