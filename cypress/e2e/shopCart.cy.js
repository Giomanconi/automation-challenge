import { homePageSelectors } from "../support/constants/homePage"
const globals = require('../support/constants/globals')

describe('Shop Cart', () => {

  beforeEach(function () {
    console.log("top beforeEach");
  });

  it.only('Add item to cart - positive', () => {
    cy.loginViaUi(globals.happyUser.username, globals.happyUser.password)
    cy.get(homePageSelectors.cartIcon).should('be.visible')
  })

  it('Password is required', () => {
    cy.loginViaUi(globals.happyUser.username)
    cy.get(loginPageSelectors.loginErrorBanner).should('contain', loginPageTexts.emptyPassword)
  })
})