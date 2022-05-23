class HomePage {
    welcomeModalClose() {
        return cy.get('#welcome_modal > button');
    }
    signInHeader() {
        return cy.contains('Sign in').click().then(() => {
            return cy.get("[data-test='nav-login-head']").click();
        });
    }
}
export default HomePage;