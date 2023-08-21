/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { calendarPage } from "../../pageObjects/calendarPage";

When("she traverses back to the first month of the year 2023", () => {
  cy.get(calendarPage.todayLink).click();

  // Define a function to check if the current month is January
  const isJanuaryMonth = () => {
    return cy.get(calendarPage.smallCalendarHeader).invoke('text').then((text) => {
      return text.includes('January');
    });
  };

  // Define a recursive function to click the "chevron_left" button until January is found
  const traverseToJanuary: any = () => {
    cy.get(calendarPage.smallCalendarLeftArrow).first().click();
    cy.wait(100); // Added a short wait to allow the page to update (adjust as needed)

    return isJanuaryMonth().then((isJanuary) => {
      if (!isJanuary) {
        return traverseToJanuary(); // Continue recursively until January is found
      }
    });
  };

  // Start the recursive traversal
  return traverseToJanuary();
});

When("she should see respective number of days for each month while traversing", (dataTable: { hashes: () => any[] }) => {
  // Extract the data from the DataTable and perform actions
  dataTable.hashes().forEach((row: { month: string; noOfDays: string; }) => {
    cy.get(calendarPage.smallCalendarHeader).should('contain', row.month);
    cy.get(calendarPage.firstDateLink).first().click();
    cy.get(calendarPage.firstDateLink).last().should('contain', row.noOfDays);
    cy.get(calendarPage.smallCalendarRightArrow).first().click();
    cy.wait(100); // Added a short wait to allow the page to update (adjust as needed)
  });
});

When("she books the below diary event for the given date", (dataTable: { hashes: () => any[] }) => {
  // Extract the data from the DataTable and perform actions

  cy.get(calendarPage.todayLink).click();
  dataTable.hashes().forEach((row: { name: string; date: string; labelColor: string; }) => {
    cy.get('span:contains(' + row.date + ')').parent('button').click();
    cy.get(calendarPage.createBtn).click();
    cy.get(calendarPage.titleText).type(row.name);
    switch (row.labelColor) {

      case 'GREEN':
        cy.get(calendarPage.greenLabel).click();
        break;
      case 'RED':
        cy.get(calendarPage.redLabel).click();
        break;
      default:
        break;
    }
    cy.get(calendarPage.saveBtn).click();


  });
});

When("she removes the below diary events", (dataTable: { hashes: () => any[] }) => {
  // Extract the data from the DataTable and perform actions

  dataTable.hashes().forEach((row: { name: string;}) => {
    cy.get(calendarPage.eventContainer).children('div:contains(' + row.name + ')').click();
    cy.get(calendarPage.deleteBtn).click();
  });
});

When("the events should be created successfully", (dataTable: { hashes: () => any[] }) => {
  // Extract the data from the DataTable and perform actions

  dataTable.hashes().forEach((row: { name: string; date: string; labelColor: string; }) => {

    cy.get('p:contains(' + row.date + ')').parent('header').siblings('div').children('div').invoke('text').should('contain', row.name);

  });
});

When("the events should be removed successfully", (dataTable: { hashes: () => any[] }) => {
  // Extract the data from the DataTable and perform actions

  dataTable.hashes().forEach((row: { name: string; }) => {

    cy.get(calendarPage.redEvent).then(($el)=>{
      expect($el).to.not.contain.text(row.name);
    })

  });
});







