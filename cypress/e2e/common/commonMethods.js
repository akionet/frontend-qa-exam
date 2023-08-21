class CommonMethods{
    static visitSite(){
        cy.visit(Cypress.config().baseUrl);
        }
}
export default CommonMethods;