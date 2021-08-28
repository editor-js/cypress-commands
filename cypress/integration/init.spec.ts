describe('init command', () => {
  beforeEach(() => {
    cy.initEditorJS();
  });

  it('should visit fixture html file', () => {
    cy.get('#editorjs')
      .should('exist');

    cy.get('[data-cy=editorjs]')
      .should('exist');
  });

  it('should define EditorJS in window', () => {
    cy.window()
      .then(win => {
        return win.EditorJS;
      })
      .should('not.be.undefined');
  });

  it('should define EditorJS alias', () => {
    cy.get('@EditorJS')
      .should('not.be.undefined');

    cy.window()
      .then(win => {
        cy.get('@EditorJS')
          .should('be.instanceOf', win.EditorJS);
      });
  });

  it('should apply passed configuration', () => {
    cy.initEditorJS({
      data: {
        blocks: [{
          type: 'paragraph',
          data: {
            text: 'Sample text'
          }
        }]
      }
    });

    cy.get('[data-cy=editorjs]')
      .contains('Sample text')
      .should('exist');
  });
});
