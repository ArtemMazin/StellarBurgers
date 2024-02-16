/// <reference types="cypress" />

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1280, 720);
  });

  it('should drag and drop', () => {
    cy.get('[data-test=card]').eq(0).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(2).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(1).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(5).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');
  });

  it('should show ingredient after click on 1st card', () => {
    cy.get('[data-test=card]').eq(0).click();
    cy.get('[data-test=modal-ingredient]').should('be.visible');
  });
});
