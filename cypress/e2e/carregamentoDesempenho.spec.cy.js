/// <reference types= "cypress" />

describe('Testando Carregamento da Página Inicial', () => {
  it('Deve carregar em menos de 5 segundos no desktop', () => {
    cy.visit('https://www.amazon.com.br', {
      onBeforeLoad: (win) => {
        win.performance.mark('start');
      },
      onLoad: (win) => {
        win.performance.mark('end');
        const measure = win.performance.measure('measure', 'start', 'end');
        expect(measure.duration).to.be.lessThan(5000);
      }
    });
  });

  it('Deve carregar em menos de 5 segundos no mobile', () => {
    cy.viewport(375, 667); // Resolução de mobile
    cy.visit('https://www.amazon.com.br', {
      onBeforeLoad: (win) => {
        win.performance.mark('start');
      },
      onLoad: (win) => {
        win.performance.mark('end');
        const measure = win.performance.measure('measure', 'start', 'end');
        expect(measure.duration).to.be.lessThan(5000);
      }
    });
  });
});
