import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import AddDiarySection from '../common/addDiarySection'
import CommonMethods from '../common/commonMethods'
import {
	FINAL_INTERVIEW_TITLE,
	SCREENING_EVENT_TITLE,
} from '../helpers/constants'

before(() => {
	cy.clearLocalStorageSnapshot()
	cy.clearLocalStorage("savedEvents")
})

beforeEach(() => {
	cy.restoreLocalStorage('savedEvents')
})
Given('The app is running', () => {
	CommonMethods.visitSite()
})
And('I am logged in as a valid user', () => {
	cy.restoreLocalStorage('savedEvents')
})
afterEach(() => {
	cy.saveLocalStorage('savedEvents')
})
When(
	'I add single diary events named {string} on the {int} August',
	(eventIdentifier,dateOfscreening) => {
		AddDiarySection.addEventinDiary(
			dateOfscreening,
			eventIdentifier
		)
	},
)
When(
	'I add three diary events named {string} {string} - {string} on the {int} August',
	(eventType, startTime, endTime, dateOfFinalInterview) => {
		AddDiarySection.addEventsinDiary(
			dateOfFinalInterview,
			startTime,
			endTime,
			eventType,
		)
	},
)

Then(
	'The diary event {string} should be visible on the main page',
	(choice) => {
		switch (choice) {
			case SCREENING_EVENT_TITLE:
				AddDiarySection.viewtheAddedEvent(choice)
				break
			case FINAL_INTERVIEW_TITLE:
				AddDiarySection.assertFinalInterviewEventsCreated(choice)
				break
		}
	},
)
And(
	'The diary event {string} should have {string} color',
	(eventType, color) => {
		switch (eventType) {
			case SCREENING_EVENT_TITLE:
				AddDiarySection.assertDefaultColorForScreeningEvent(
					eventType,
					color,
				)
				break
			case FINAL_INTERVIEW_TITLE:
				AddDiarySection.assertRedColorForFinalInterviewEvent(
					eventType,
					color,
				)
				break
		}
	},
)
