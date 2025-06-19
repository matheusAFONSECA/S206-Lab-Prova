/// <reference types="cypress"/>

describe('Cenários de testes para a Prova', () => {

  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');

    const username = 'standard_user';
    const password = 'secret_sauce';

    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  })
  
  it('Realizar uma compra de todos os itens com sucesso', () => {

    // Fazer login
    cy.login();

    // colocar todos os itens no carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    // ir para o carrinho e realizar a compra
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.preencherCheckout();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');

    // Fazer logout
    cy.log_out();
  })

  it('Realizar a compra com o carrinho vazio', () => {

    // Fazer login
    cy.login();

    // Ir para o carrinho e fazer uma compra vazia
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="error"]').should('contain', 'Your cart is empty');
    
    // Fazer logout
    cy.log_out();

  })

   it('Realizar a compra de apenas um item', () => {

    // Fazer login
    cy.login();

    // escolher um item e adicionar ao carrinho
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    cy.get('[data-test="add-to-cart"]').click();

    // voltar para a página de produtos e conferir se o item foi adicionado ao carrinho
    cy.get('[data-test="back-to-products"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');

    // ir para o carrinho e realizar a compra
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.preencherCheckout();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');

    cy.log_out();
  })

})
