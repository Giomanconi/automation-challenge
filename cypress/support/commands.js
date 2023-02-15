import { loginPageSelectors } from "./constants/loginPage"

Cypress.Commands.add('loginViaUi', (username, password) => {
    cy.visit("/")
    if (username) cy.get(loginPageSelectors.usernameInput).type(username)
    if (password) cy.get(loginPageSelectors.passwordInput).type(password)
    cy.get(loginPageSelectors.loginButton).click()
})

Cypress.Commands.add('cleanUpCart', () => {
    cy.windows().then(() => {
        localStorage.removeItem('cart-contents')
    })
    cy.reload()
})