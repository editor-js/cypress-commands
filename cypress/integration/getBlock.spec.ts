describe('getBlock', () => {
  beforeEach(() => {
    cy.initEditorJS({
      data: {
        blocks: [
          { type: 'paragraph',
            data: { text: '' } },
          { type: 'paragraph',
            data: { text: '' } },
          { type: 'paragraph',
            data: { text: '' } },
        ],
      },
    });
  });

  const checkIfElementIsEditorBlock = (element: HTMLElement): boolean => {
    return element.classList.contains('ce-block');
  };

  it('should return array of blocks', () => {
    cy.getBlock()
      .then(blocks => {
        expect(blocks.length).to.eq(3);

        blocks.each(index => {
          expect(checkIfElementIsEditorBlock(blocks.get(index))).to.be.true;
        });
      });
  });

  it('should get blocks by index', () => {
    const numberOfBlocks = 3;

    for (let i = 0; i < numberOfBlocks; i++) {
      cy.getBlock(i)
        .then(block => {
          expect(block.length).to.eq(1);

          const element = block.get(0);

          expect(checkIfElementIsEditorBlock(element)).to.be.true;
          expect(element.matches(`.ce-block:nth-child(${i + 1})`)).to.be.true;
        });
    }
  });
});
