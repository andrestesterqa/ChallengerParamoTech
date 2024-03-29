import LoginPage from '../PageObjects/loginPage';

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

Cypress.Commands.add("authenticateWithReCaptcha", () => {

    cy.window().then(currentWindow => {
        const params = new URLSearchParams(currentWindow.location.search);
        if (params.has("reCaptcha") &&
            currentWindow.document
            .querySelector("iframe[src*='recaptcha']") &&
            getComputedStyle(currentWindow.document
                .querySelector("iframe[src*='recaptcha']")).visibility === "visible") {
            cy.window().invoke("submitForm");
        }
    });
});

Cypress.Commands.add("LoginSession", () => {
    const loginPage = new LoginPage();
    loginPage.UserInput().type("andytestqa@mail.com");
    loginPage.passwordInput().type("Ab123456");
    loginPage.submitButton();

});
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