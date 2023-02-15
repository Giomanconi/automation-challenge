import { loginPageSelectors, loginPageTexts } from "../support/constants/loginPage"
import { homePageSelectors } from "../support/constants/homePage"
const globals = require('../support/constants/globals')

describe('Login', () => {

  it('Valid credentials', () => {
    cy.loginViaUi(globals.happyUser.username, globals.happyUser.password)
    cy.get(homePageSelectors.cartIcon)
      .should('be.visible')
  })

  it('Password is required', () => {
    cy.loginViaUi(globals.happyUser.username)
    cy.get(loginPageSelectors.loginErrorBanner)
      .should('contain', loginPageTexts.emptyPassword)
  })

  it('Valid credentials - deliberated failed test', () => {
    cy.loginViaUi(globals.lockedOutUser.username, globals.lockedOutUser.password)
    cy.get(loginPageSelectors.loginErrorBanner)
      .should('contain', loginPageTexts.emptyPassword)
  })

})