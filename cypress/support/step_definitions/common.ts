/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("Casie is on the Calendar page", () => {
  cy.visit("/");
})