import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import AddDiarySection from '../common/addDiarySection';
import CommonMethods from '../common/commonMethods';
import { SCREENING_EVENT_TITLE } from '../helpers/constants';

before(() => {
    cy.clearAllLocalStorage();
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage('savedEvents');
})
Given("The app is running", () => {
    CommonMethods.visitSite();
})
And("I am logged in as a valid user", () => {
    cy.restoreLocalStorage('savedEvents');
})
beforeEach(() => {
    cy.restoreLocalStorage('savedEvents');
})
afterEach(() => {
    cy.saveLocalStorage('savedEvents');
})
When("I add single diary events named {string} {string} DONE on the {int} August", (myName,eventDescription,dateOfscreening) => {
    AddDiarySection.addEventinDiary(dateOfscreening,myName,eventDescription);
})
When("I add three diary events named {string} {string} - {string} on the {int} August", (eventType,startTime, endTime, dateOfFinalInterview) => {
    AddDiarySection.addEventsinDiary(dateOfFinalInterview, startTime, endTime,eventType)
})

Then("The diary event {string} should be visible on the main page", (choice) => {
    switch(choice){
        case SCREENING_EVENT_TITLE:
            AddDiarySection.viewtheAddedEvent(choice);
            break;
        case 'Final Interview Slot':
            AddDiarySection.assertFinalInterviewEventsCreated(choice);
    }
})
And("The diary event {string} should have {string} color", (eventType,color) => {
    switch(eventType){
        case SCREENING_EVENT_TITLE:
            AddDiarySection.assertDefaultColorForScreeningEvent(eventType,color);
            break;
        case 'Final Interview Slot':
            AddDiarySection.assertRedColorForFinalInterviewEvent(eventType,color)
    }
    
})


