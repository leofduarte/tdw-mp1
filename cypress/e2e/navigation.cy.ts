describe('Navigation', () => {
    it('should navigate through main pages', () => {
      cy.visit('/')
      
      cy.get('h1').contains('Fugas e Romances - As Aventuras de Vale de Judeus')
      
      cy.contains('Ver Notícias').click()
      cy.url().should('include', '/posts')
      cy.get('h1').contains('Notícias')
      
      cy.contains('Voltar').click()
      cy.url().should('not.include', '/posts')
    })
  })