describe('loadScript method', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/index.html');
  });

  it('should be defined', () => {
    cy.window()
      .then(win => {

        expect(win.loadScript).not.to.be.undefined;
        expect(typeof win.loadScript).to.eq('function');
      });
  });

  it('should add script with passed script and id', () => {
    cy.window()
      .then(async win => {
        await win.loadScript('./dummy.js', 'dummy');

        cy.get('script#dummy')
          .should('exist');

        // @ts-ignore
        expect(win.dummy).to.equal(true);
      });
  });

  it('should use script filename as id if not passed', () => {
    cy.window()
      .then(async win => {
        await win.loadScript('./dummy.js');

        cy.get('script[id="dummy.js"]')
          .should('exist');

        // @ts-ignore
        expect(win.dummy).to.equal(true);
      });
  });

  it('should resolve true if script added', () => {
    cy.window()
      .then(async win => {
        const result = await win.loadScript('./dummy.js', 'dummy');

        expect(result).to.equal(true);
      });
  });

  it('should resolve false if script already exists and not added', () => {
    cy.window()
      .then(async win => {
        await win.loadScript('./dummy.js', 'dummy');
        const result = await win.loadScript('./dummy.js', 'dummy');

        expect(result).to.equal(false);
      });
  });

  it('should reject an error if script is not loaded', (done) => {
    cy.window()
      .then(async win => {
        win.loadScript('some/wrong/path')
          .catch(err => {
            expect(err).to.be.instanceOf(win.Error);

            done();
          });
      });
  });
});
