describe('automation web', () => {
  const webpage = 'https://www.google.com'
  before(() => {
    //Set coockie to not display policy modal
    cy.setCookie('SOCS','CAESHAgCEhJnd3NfMjAyMjExMjEtMF9SQzMaAmVzIAEaBgiA3Z-cBg')
  })
  it('should take wikipedia page screenshot', () => {
    cy.visit(webpage);
    cy.get('input[class="gLFyf"]').type('automatizacion{enter}').then(() => {
      cy.contains('Wikipedia').click({force: true})
      cy.screenshot()
    })
  })
})
