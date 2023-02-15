export const loginPageSelectors = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    loginErrorBanner: '[data-test="error"]',
};

export const loginPageTexts = {
    wrongCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
    emptyPassword: 'Epic sadface: Password is required',
    lockedOutUser: 'Epic sadface: Sorry, this user has been locked out',
};

export const homePageSelectors = {
    cartButton: '//*[@id="shopping_cart_container"]',
    addBackpackToCartButton: '//*[@id="add-to-cart-sauce-labs-backpack"]',
    removeBackpackFromCartButton: '//*[@id="remove-sauce-labs-backpack"]'
};

export const cartPageSelectors = {
    firstCartItem: '//*[@id="cart_contents_container"]/div/div[1]/div[3]',
};