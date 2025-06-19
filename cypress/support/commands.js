// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.visit('https://www.saucedemo.com/');

  const username = 'standard_user';
  const password = 'secret_sauce';

  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('preencherCheckout', () => {
  const nomes = ['Ana', 'Lucas', 'Carla', 'João', 'Marina', 'Felipe'];
  const sobrenomes = ['Silva', 'Oliveira', 'Santos', 'Costa', 'Almeida', 'Ferreira'];

  const firstName = nomes[Math.floor(Math.random() * nomes.length)];
  const lastName = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  const zip = Math.floor(10000 + Math.random() * 90000).toString();

  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zip);
});

Cypress.Commands.add('log_out', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('[data-test="logout-sidebar-link"]').click();
  cy.url().should('include', 'https://www.saucedemo.com/');
});
