describe('Post Detail Page', () => {
    it('should display post content correctly', () => {
      cy.visit('/posts')
      
      cy.get('li').first().click()
      
      cy.get('h1').should('exist')
      cy.get('img').should('be.visible')
      cy.contains('ChatGPT').should('exist')
      
      cy.url().then((url) => {
        if (url.includes('fim-da-aventura-fabio-apanhado')) {
          cy.get('audio').should('exist')
        }
      })
    })
  
    it('should navigate back to posts list', () => {
      cy.visit('/posts/fim-da-aventura-fabio-apanhado')
      cy.contains('Voltar').click()
      cy.url().should('include', '/posts')
    })
  })