import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import CommonMethods from '../common/commonMethods'
import RemoveEventMethods from '../common/removeEventMethods'

Given('The app is running', () => {
	CommonMethods.visitSite()
})
And('I am logged in as a valid user', () => {
	cy.restoreLocalStorage()
})
beforeEach(() => {
	cy.restoreLocalStorage('savedEvents')
})
afterEach(() => {
	cy.saveLocalStorage('savedEvents')
})

When(
	'I have upto {int} events created for {string} on {int} August',
	(count) => {
		cy.get("div[class*='bg-red-200']").should('have.length.at.most', count)
	},
)

Then('I remove event for {string}', (eventIdentifier) => {
	RemoveEventMethods.selectEventandRemove(eventIdentifier)
})
Then('I can see {int} event is present', (countOfEvents) => {
	RemoveEventMethods.checkCountOfEventsPresentInRed(countOfEvents)
})

When('I see event of {string} created on 10 August', (eventType) => {
	RemoveEventMethods.checkIfScreeningEventPresent(eventType)
})
Then('I remove event {string}', (eventType) => {
	RemoveEventMethods.chooseScreeningEventAndDelete(eventType)
})
And('I verify that {string} event has been removed', (eventIdentifier) => {
	RemoveEventMethods.verifyTheEventHasBeenRemoved(eventIdentifier)
})
after(() => {
	cy.clearAllLocalStorage()
	cy.clearLocalStorageSnapshot()
})
