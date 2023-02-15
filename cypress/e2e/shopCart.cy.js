import { homePageSelectors, cartPageSelectors } from "../support/constants/selectors";
const globals = require('../support/constants/globals');

describe('Shop Cart', () => {

  beforeEach(function () {
    cy.loginViaUI(globals.happyUser.username, globals.happyUser.password);
  });

  it('Badge Functionality', () => {
    cy.xpath(homePageSelectors.addBackpackToCartButton).click();
    cy.xpath(homePageSelectors.cartButton)
      .within(() => {
        return cy.get('span').as('badge').should('contain', 1);
      });
    cy.xpath(homePageSelectors.removeBackpackFromCartButton).click();
    cy.get('@badge').should('not.exist');
  });

  it('Add items to cart', () => {
    cy.xpath(homePageSelectors.addBackpackToCartButton).click();
    cy.xpath(homePageSelectors.cartButton).click();
    cy.xpath(cartPageSelectors.firstCartItem).should('contain', 'Sauce Labs Backpack');
  });
});