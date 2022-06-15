/// <reference types="cypress"/>
describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport(1225, 937);
        cy.get('.modal__buttons > .button--t1').click();

    });

    it('Search Poker games with 100 results', () => {
        let text = 'Hell';
        cy.intercept('GET', 'https://demo.casino/games/game/search?query=' + text)
            .as('searchGames');
        cy.get("#btn-search").click();
        cy.get("input[placeholder='Search']").type(text);
        cy.wait('@searchGames').then((res) => {
            const lengthResult = res.response.body.games.length;
            expect(res.response.body.games.length).to.eq(lengthResult);
        });
        cy.get("[class='game-name']").should('contain', text);
        //cy.get("[data-game-id*='12164'] [class='game-buttons']").contains('Play').click();

    });
});