import { loginPageSelectors } from "./constants/selectors"

Cypress.Commands.add('loginViaUI', (username, password) => {
    cy.visit("/");
    if (username) cy.get(loginPageSelectors.usernameInput).type(username);
    if (password) cy.get(loginPageSelectors.passwordInput).type(password);
    cy.get(loginPageSelectors.loginButton).click();
});