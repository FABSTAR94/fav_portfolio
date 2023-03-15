describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://faviolaportfolio.netlify.app/');
    cy.contains('About').click()
  })
})