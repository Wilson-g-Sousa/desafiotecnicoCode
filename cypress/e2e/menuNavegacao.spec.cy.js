/// <reference types= "cypress" />

describe('Menu de Navegação - Responsividade', () => {
    it('Deve funcionar corretamente em layout de tablet', () => {
      cy.viewport(1024, 768)
      cy.visit('https://www.amazon.com.br')
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible').should('be.visible')
    })
  
    it('Deve funcionar corretamente em layout de celular', () => {
      cy.viewport(375, 667)
      cy.visit('https://www.amazon.com.br')
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible').should('be.visible')
    })
  })
    