import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CommonMethods from '../common/commonMethods'

Given('I am an unauthenticated user', () => {
	cy.clearAllCookies()
	cy.clearAllSessionStorage()
	cy.clearAllLocalStorage()
})
When('I open the Calendar app', () => {
	CommonMethods.visitSite()
})
Then('The heading {string} is visible', (newheader) => {
	cy.get('header').contains(newheader).should('be.visible')
})
