/// <reference types="Cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { calendarPage } from "../../pageObjects/calendarPage";

const text='70% of your cat life is spent asleep!';

When("she verifies the page title", () => {
  cy.get(calendarPage.calTitle).should('be.visible');
});

Then("the title should be {string}", (calTitle) => {
  cy.get(calendarPage.calTitle).should('have.text',calTitle)
});

When("she clicks on the random cat-fact genertor button", () => {
  cy.get(calendarPage.randomCatFactBtn).click();
});

Then("the new random cat facts should be generated", () => {
  cy.get(calendarPage.randomCatFactText).invoke('text').should('not.equal',text);
});

