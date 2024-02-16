/// <reference types="cypress" />

describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept('POST', 'login', { fixture: 'login.json' }).as('login');
    cy.intercept('GET', 'ingredients', { fixture: 'ingredients.json' }).as('ingredients');
  });

  it('should drag-n-drop and order', () => {
    cy.get('[data-test=card]').eq(0).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(2).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(1).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=card]').eq(5).trigger('dragstart');
    cy.get('[data-test=drop-zone]').trigger('drop');

    cy.get('[data-test=ingredient]').should('have.length', 2);
    cy.get('[data-test=bun]').should('have.length', 2);

    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Вход');

    cy.get('[name=email]').type('qwe@qwerty.ru');
    cy.get('[name=email]').should('have.value', 'qwe@qwerty.ru');
    cy.get('[name=password]').type('1qaz2wsx');
    cy.get('[name=password]').should('have.value', '1qaz2wsx');
    cy.contains('Войти').click();

    cy.wait('@login').its('request.body').should('deep.eq', {
      email: 'qwe@qwerty.ru',
      password: '1qaz2wsx',
    });

    cy.get('button').contains('Оформить заказ').click();
  });

  // it('should show and close ingredient after click on 1st card', () => {
  //   cy.get('[data-test=card]').eq(0).click();
  //   cy.get('[data-test=modal-ingredient]').should('be.visible');

  //   cy.get('[data-test=close-button]').click();
  //   cy.get('[data-test=modal-ingredient]').should('not.exist');
  // });
});
