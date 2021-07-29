describe('openBlockSettings', () => {
  beforeEach(() => {
    cy.initEditorJS();
  });

  it('should open block settings', () => {
    cy.getBlock(0)
      .openBlockSettings()
      .should('have.class', 'ce-settings')
      .should('be.visible');
  });
});
