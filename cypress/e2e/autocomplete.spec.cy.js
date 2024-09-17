/// <reference types= "cypress" />

describe('Sugestões de Pesquisa - Autocomplete', () => {
    it('Deve sugerir resultados relevantes ao digitar na barra de pesquisa', () => {
      cy.visit('https://www.amazon.com.br')
      cy.get('#twotabsearchtextbox').type('iPhone')
      cy.get('.s-suggestion').should('have.length.greaterThan', 0)
    })
  
    it('Não deve sugerir resultados para uma sequência inválida', () => {
      cy.visit('https://www.amazon.com.br')
      cy.get('#twotabsearchtextbox').type('asdfghjkl')
      cy.get('.s-suggestion').should('not.exist')
    })
  })

