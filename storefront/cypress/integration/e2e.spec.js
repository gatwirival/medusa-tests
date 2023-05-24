describe('Medusa App', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:8000')
      cy.contains('ACME')
    })
  })