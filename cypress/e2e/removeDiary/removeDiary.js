import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import CommonMethods from '../common/commonMethods'
import RemoveEventMethods from '../common/removeEventMethods'
import AddDiarySection from '../common/addDiarySection'

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
	'I have {int} events created of {string} on {int} August',
	(count, eventType, dateOfFinalInterview) => {
		cy.setLocalStorage('count', count)
		cy.get('body').then((body) => {
			if (body.find("div[class*='bg-red-200']").length === 0) {
				AddDiarySection.addEventsinDiary(
					dateOfFinalInterview,
					'2:00PM BST',
					'3:00PM BST',
					eventType,
				)
				AddDiarySection.addEventsinDiary(
					dateOfFinalInterview,
					'1:00PM BST',
					'2:00PM BST',
					eventType,
				)
				AddDiarySection.addEventsinDiary(
					dateOfFinalInterview,
					'3:30PM BST',
					'4:30PM BST',
					eventType,
				)
			}
		})
		cy.get("div[class*='bg-red-200']").should('have.length', count)
	},
)

When('I remove event for time {string}', (starttime) => {
	RemoveEventMethods.selectEventandRemove(
		starttime,
		localStorage.getItem('count'),
	)
})
Then('I can see {int} event is present', (countOfEvents) => {
	RemoveEventMethods.checkCountOfEventsPresentInRed(countOfEvents)
})
after(() => {
	cy.clearAllLocalStorage()
	cy.clearLocalStorageSnapshot()
})
When(
	'I see event of {string} created on {int} August for {string}',
	(eventType, dateOfScreening, description) => {
		cy.get('body').then((body) => {
			if (body.find("div[class*='bg-indigo-200']").length === 0) {
				AddDiarySection.addEventinDiary(
					dateOfScreening,
					eventType,
					description,
				)
			}
		})
		RemoveEventMethods.checkIfScreeningEventPresent(eventType)
	},
)
Then('I remove event {string}', (eventType) => {
	RemoveEventMethods.chooseScreeningEventAndDelete(eventType)
})
