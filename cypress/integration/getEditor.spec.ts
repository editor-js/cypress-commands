describe('getEditor', () => {
  beforeEach(() => {
    cy.initEditorJS();
  });

  it('should resolve editor container', () => {
    cy.getEditor()
      .then(container => {
        const element = container.get(0);

        expect(element.id).to.eq('editorjs');
        expect(element.dataset.cy).to.eq('editorjs');
        cy.window()
          .then(win => {
            expect(element).to.be.instanceOf(win.HTMLDivElement);
          });
      });
  });
});
