/// <reference types="cypress" />

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-card=drop-zone]').should('exist');
  });

  it('should drag and drop', () => {
    cy.get('[data-card=card]').eq(0).trigger('dragstart');
    cy.get('[data-card=drop-zone]').trigger('drop');

    cy.get('[data-card=card]').eq(2).trigger('dragstart');
    cy.get('[data-card=drop-zone]').trigger('drop');

    cy.get('[data-card=card]').eq(1).trigger('dragstart');
    cy.get('[data-card=drop-zone]').trigger('drop');

    cy.get('[data-card=card]').eq(5).trigger('dragstart');
    cy.get('[data-card=drop-zone]').trigger('drop');
  });
});
