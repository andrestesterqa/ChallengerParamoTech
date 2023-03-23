class SignUpPage {
    signUpButton() {
        return cy.get('[data-test="nav-reg-head"]').click();
    }
    emailField() {
        return cy.get('[data-test="input-email"]');
    }
    passwordField() {
        return cy.get('[data-test="input-password"]');
    }
    passwordConfirmationField() {
        return cy.get('[data-test="input-password_confirmation"]');
    }
    currencySelect(currency) {
        return cy.get("span[class='label']").contains('USD').click().then(() => {
            cy.get("ul li").contains(currency).click();
        });
    }
    termAndConditions() {
        return cy.get("label[for*='Form_RegistrationForm_terms_and_conditions']").click();
    }
    secretQuestion() {
        return cy.get("span[class='label']").contains('Secret question').click().then(() => {
            cy.get("div[class='form__input form__input--select select    ']:nth-child(7) ul li").contains('Set your own security word or phrase').click();
        });
    }
    secretAnswer(answer) {
        return cy.get('[data-test="input-secret_answer"]').type(answer);
    }
    userInfo() {
        return cy.get('[data-test="input-username"]');
    }
    submitButton() {
        return cy.get('[data-test="control-submit"]').click();
    }
}
export default SignUpPage;