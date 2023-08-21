import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

import ViewPage from '../common/viewDiaryMonths'
import CommonMethods from '../common/commonMethods'
import {
	CURRENT_MONTH,
	CURRENT_MONTH_IN_NUMBER,
	NEXT,
	NEXT_MONTH,
	NEXT_MONTH_IN_NUMBER,
	PREVIOUS,
	PREVIOUS_MONTH,
	PREVIOUS_MONTH_IN_NUMBER,
} from '../helpers/constants'
import { BACKWARD, FORWARD } from '../helpers/locators'

let data

beforeEach(function () {
	cy.fixture('months-days.json').then((days_data) => {
		data = days_data
	})
})

Given('I am an unauthenticated user', () => {
	cy.clearAllCookies()
})
When('I open the Calendar app', () => {
	CommonMethods.visitSite()
})

And('I click on the {string} month button in the main header', (choice) => {
	switch (choice) {
		case NEXT:
			ViewPage.clickTraversingButtons(FORWARD)
			break
		case PREVIOUS:
			ViewPage.clickTraversingButtons(BACKWARD);
			break
	}
})
Then(
	'I should see the {string} month displayed in both the side card and main view',
	(choice) => {
		switch (choice) {
			case NEXT:
				cy.get('h2').should('contain', NEXT_MONTH)
				ViewPage.viewMonthInSidePanel().should('contain', NEXT_MONTH)
				break
			case PREVIOUS:
				cy.get('h2').should('contain', PREVIOUS_MONTH)
				ViewPage.viewMonthInSidePanel().should(
					'contain',
					PREVIOUS_MONTH,
				)
				break
			default:
				cy.get('h2').should('contain', CURRENT_MONTH)
				ViewPage.viewMonthInSidePanel().should('contain', CURRENT_MONTH)
				break
		}
	},
)

And('The days of the {string} month should be visible', function (choice) {
	switch (choice) {
		case 'current':
			let currentMonthInNumber = CURRENT_MONTH_IN_NUMBER.toString()
			if (currentMonthInNumber === '7') {
				ViewPage.clickTraversingButtons(FORWARD);
			}
			ViewPage.checkMaximumDatePresent(data[currentMonthInNumber])
			break

		case 'previous':
			let previousMonthInNumber = PREVIOUS_MONTH_IN_NUMBER.toString()
			if (previousMonthInNumber === '7') {
				ViewPage.clickTraversingButtons(FORWARD)
			}
			ViewPage.checkMaximumDatePresent(data[previousMonthInNumber])
			break
		case 'next':
			let nextMonthInNumber = NEXT_MONTH_IN_NUMBER.toString()
			if (nextMonthInNumber === '7') {
				ViewPage.clickTraversingButtons(FORWARD);
			}
			ViewPage.checkMaximumDatePresent(data[nextMonthInNumber])
			break
	}
})
When('I click on Today', () => {
	ViewPage.clickToday()
})
