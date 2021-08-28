import EditorJS, { EditorConfig } from '@editorjs/editorjs';
import Chainable = Cypress.Chainable;

declare global {
  namespace Cypress {
    // eslint-disable-next-line no-unused-vars
    interface Chainable<Subject = any> {
      initEditorJS(config?: EditorConfig): Chainable<EditorJS>
    }
  }
}

export default Cypress.Commands.add('initEditorJS', (config: EditorConfig = {}): Chainable<EditorJS> => {
  cy.log('Init EditorJS');

  cy.task<string>('resolvePathToFixture')
    .then(fixture => {
      cy.visit(fixture, { log: false });
    });

  return cy.window({ log: false })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Cypress will return EditorJS instance, but there is no way to outline it in TypeScript
    .then<EditorJS>(win => {
      cy.task<string>('resolvePathToPackage', '@editorjs/editorjs', { log: false })
        .then(pathToEditorJS => {
          return win.loadScript(pathToEditorJS, 'editorjs-bundle')
            .then((): Chainable<EditorJS> => {
              const editor = new win.EditorJS(config);

              return cy.wrap<EditorJS>(editor, { log: false }).as('EditorJS');
            });
        });
    });
});
