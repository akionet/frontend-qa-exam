import { FINAL_INTERVIEW_TITLE, SCREENING_EVENT_TITLE } from "../helpers/constants"

class RemoveEventMethods {
	static chooseEventToBeDeleted(eventIdentifier) {
		cy.xpath(
			'//div[contains(text(),' + "'" + eventIdentifier + "'" + ')]',
		).click()
		cy.xpath("//span[text()='delete']").click()
	}
	static selectEventandRemove(eventIdentifier) {
		this.chooseEventToBeDeleted(eventIdentifier)
	}
	static checkCountOfEventsPresentInRed(countOfEvents) {
		cy.xpath("//div[contains(text()," + "'" + FINAL_INTERVIEW_TITLE + "'" + ")]").and('have.length', countOfEvents)
	}
	static getCountOfFinalInterviewEvents() {
		return cy.contains(FINAL_INTERVIEW_TITLE).its('length')
	}
	static getCountOfScreeningRound() {
		return cy.contains(SCREENING_EVENT_TITLE).its('length')
	}
	static checkIfScreeningEventPresent(eventIdentifier) {
		cy.xpath(
			'//div[contains(text(),' + "'" + eventIdentifier + "'" + ')]',
		).should('be.visible')
	}
	static chooseScreeningEventAndDelete(eventIdentifier) {
		this.chooseEventToBeDeleted(eventIdentifier)
	}
	static verifyTheEventHasBeenRemoved(eventIdentifier) {
		cy.contains(eventIdentifier).should('not.exist')
	}
}
export default RemoveEventMethods
