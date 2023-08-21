class RemoveEventMethods {
	static chooseEventToBeDeleted(eventIdentifier) {
		cy.xpath(
			'//div[contains(text(),' + "'" + eventIdentifier + "'" + ')]',
		).click()
		cy.xpath("//span[text()='delete']").click()
	}
	static selectEventandRemove(eventStartTime, updatedCount) {
		this.chooseEventToBeDeleted(eventStartTime)
		localStorage.setItem('count', updatedCount - 1)
	}
	static checkCountOfEventsPresentInRed(countOfEvents) {
		cy.xpath("//div[contains(text(),'Final Interview Slot')]").and(
			'have.length',
			countOfEvents,
		)
	}
	static checkIfScreeningEventPresent(eventIdentifier) {
		cy.xpath(
			'//div[contains(text(),' + "'" + eventIdentifier + "'" + ')]',
		).should('be.visible')
	}
	static chooseScreeningEventAndDelete(eventIdentifier) {
		this.chooseEventToBeDeleted(eventIdentifier)
	}
}
export default RemoveEventMethods
