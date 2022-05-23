/// <reference types="cypress"/>

// Import WebElements from PageObjects
import SignUpPage from '../PageObjects/signUpPage';

//Library for generate data test
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
const password = faker.random.alphaNumeric(8);
const userName = faker.random.word();

describe('Registration Page', () => {
    let dataTest;
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1225, 937);
        cy.get('.modal__buttons > .button--t1').click();
        cy.fixture('dataTest').then(function(data) {
            dataTest = data;
        });

    });

    it('Registration with valid data', () => {
        // Instance of Registration Page
        const signUpPage = new SignUpPage();
        // Instance of Faker data
        let onlyPassword = password + 'Ab';
        let userInfo = userName + 'test';
        // Steps to complete the registration
        signUpPage.signUpButton();
        signUpPage.emailField().type(randomEmail);
        signUpPage.passwordField().type(onlyPassword);
        signUpPage.passwordConfirmationField().type(onlyPassword);
        signUpPage.currencySelect('EUR');
        signUpPage.termAndConditions();
        signUpPage.secretQuestion();
        signUpPage.secretAnswer(dataTest.secretAnswer);
        signUpPage.userInfo().type(userInfo);
        signUpPage.submitButton();
        // Assertions
        cy.url().should('include', '/registrationSuccess');
        cy.get('.notification__title').should('contain', 'Congratulations!');
        cy.get("div[class='user-info__profile-name']").should('contain', userInfo);
        cy.screenshot('Registration Success');
    });

});