describe('Posts Page', () => {
    beforeEach(() => {
      cy.visit('/posts')
    })
  
    it('should display posts grid', () => {
      cy.get('ul').should('exist')
      cy.get('li').should('have.length.at.least', 1)
    })
  
    it('should navigate to post detail page', () => {
      cy.get('li').first().click()
      cy.url().should('match', /\/posts\/[\w-]+/)
      cy.get('h1').should('exist')
      cy.get('img').should('be.visible')
    })
  })