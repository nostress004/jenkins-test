describe('describe 1', () => {
    it('visits telex.hu', () => {
        cy.on('uncaught:exception', () => {
            return false;
        });

        cy.visit('www.telex.hu');
        cy.wait(500);
        cy.contains('Kereső');
    });

});