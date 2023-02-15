export const loginPageSelectors = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    loginErrorBanner: '[data-test="error"]',

}

export const loginPageTexts = {
    wrongCredentials: 'Epic sadface: Username and password do not match any user in this service',
    emptyUsername: 'Epic sadface: Username is required',
    emptyPassword: 'Epic sadface: Password is required',
    lockedOutUser: 'Epic sadface: Sorry, this user has been locked out',
}