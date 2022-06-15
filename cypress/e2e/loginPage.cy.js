/// <reference types="cypress"/>

// Import the web elements from PageObjects
import HomePage from '../PageObjects/homePage';

describe('Login Page', () => {
    let login;
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1225, 937);
        // Close Welcome Modal
        cy.get('.modal__buttons > .button--t1').click({ force: true });
        // Instance data test login
        cy.fixture('loginData').then(function(data) {
            login = data;
        });

    });

    it.only('Login with valid data', () => {
        // Instance of Home and Login Page
        const homePage = new HomePage();
        // Enter Sign In section from header
        homePage.signInHeader();
        // Steps to complete the login
        cy.LoginSession();
        // Assertion
        cy.get("div[class='user-info__profile-name']").should('contain', login.nickName);
        cy.get('.header__layout').screenshot('Login Success');
    });

    it('Login with invalid data', () => {
        // Instance of Home and Login Page
        const homePage = new HomePage();
        // Enter Sign In section from header
        homePage.signInHeader();
        // Steps to complete the login with user and password invalid
        loginPage.UserInput().type("invalidUser");
        loginPage.passwordInput().type("invalidPass");
        loginPage.submitButton();
        // Assertion
        cy.get('[data-test="error-username"]').should('contain', 'Incorrect login, email, phone number or password.');
        cy.screenshot('Error Message');

    });

});