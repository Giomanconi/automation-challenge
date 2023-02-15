import { loginPageSelectors, loginPageTexts, homePageSelectors } from "../support/constants/selectors";
const globals = require('../support/constants/globals');

describe('Login', () => {

  it('Valid credentials', () => {
    cy.loginViaUI(globals.happyUser.username, globals.happyUser.password);
    cy.xpath(homePageSelectors.cartButton)
      .should('be.visible');
  });

  it('Password is required', () => {
    cy.loginViaUI(globals.happyUser.username);
    cy.get(loginPageSelectors.loginErrorBanner)
      .should('contain', loginPageTexts.emptyPassword);
  });

  it('Valid credentials - deliberated failed test', () => {
    cy.loginViaUI(globals.lockedOutUser.username, globals.lockedOutUser.password);
    cy.xpath(homePageSelectors.cartButton)
      .should('be.visible');
  });
});