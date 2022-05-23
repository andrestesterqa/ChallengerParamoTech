class LoginPage {
    UserInput() {
        return cy.get("[data-test='input-username']");
    }
    passwordInput() {
        return cy.get('[data-test="input-password"]');
    }
    submitButton() {
        return cy.get('[data-test="control-submit"]').click();
    }
}
export default LoginPage;