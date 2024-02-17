/// <reference types="cypress" />

import { EMAIL, PASSWORD, selectors } from '../support/constants';

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.intercept('POST', 'login', { fixture: 'login.json' }).as('login');
    cy.intercept('GET', 'ingredients', { fixture: 'ingredients.json' }).as('ingredients');
    cy.intercept('POST', 'orders', { fixture: 'order.json' }).as('order');

    cy.visit('/');

    cy.wait('@ingredients');
    cy.get(selectors.card).should('have.lengthOf', 6);
  });

  it('should drag-n-drop and order', () => {
    //drag-n-drop
    cy.get(selectors.card).eq(0).trigger('dragstart');
    cy.get(selectors.dropZone).trigger('drop');

    cy.get(selectors.card).eq(2).trigger('dragstart');
    cy.get(selectors.dropZone).trigger('drop');

    cy.get(selectors.card).eq(1).trigger('dragstart');
    cy.get(selectors.dropZone).trigger('drop');

    cy.get(selectors.card).eq(5).trigger('dragstart');
    cy.get(selectors.dropZone).trigger('drop');

    cy.get(selectors.ingredient).should('have.length', 2);
    cy.get(selectors.bun).should('have.length', 2);

    //login
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Вход');

    cy.get(selectors.email).type(EMAIL);
    cy.get(selectors.email).should('have.value', EMAIL);
    cy.get(selectors.password).type(PASSWORD);
    cy.get(selectors.password).should('have.value', PASSWORD);
    cy.contains('Войти').click();

    cy.wait('@login').its('request.body').should('deep.eq', {
      email: EMAIL,
      password: PASSWORD,
    });

    //order
    cy.get('button').contains('Оформить заказ').click();
    cy.get(selectors.order_details).should('be.visible');
    cy.get(selectors.closeButton).click();
    cy.get(selectors.order_details).should('not.exist');
  });

  it('should show and close ingredient after click on 1st card', () => {
    cy.get(selectors.card).eq(0).click();
    cy.get(selectors.modal_ingredient).should('be.visible').contains('Краторная булка N-200i');

    cy.get(selectors.closeButton).click();
    cy.get(selectors.modal_ingredient).should('not.exist');
  });
});
