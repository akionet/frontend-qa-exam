import { MAX_EVENTS } from '../helpers/constants'

const TITLE_BOX = "input[name='title']"
const DESCRIIPTION_BOX = "input[name='description']"
const SAVE_BUTTON = "//button[normalize-space()='Save']"
class AddDiarySection {
	static ClickCreate() {
		cy.contains('Create').click({ force: true })
	}

	static fillUpTheEventInfo(title, description) {
		cy.get(TITLE_BOX).type(title)
		cy.get(DESCRIIPTION_BOX).type(description)
	}
	static checkColorLabels(color) {
		cy.get('aside label span').should('contain', color)
	}
	static clickSave() {
		cy.xpath(SAVE_BUTTON).click()
	}
	static checkLabelsPresence(eventType) {
		return cy.xpath('//div[contains(text(),' + "'" + eventType + "'" + ')]')
	}
	static selectDateinMiniCalendar(date) {
		cy.xpath('//span[text()=' + "'" + date + "']/parent::button").click({
			force: true,
		})
	}
	static addEventinDiary(dateOfscreening, eventType, description) {
		this.selectDateinMiniCalendar(dateOfscreening)
		this.ClickCreate()
		this.fillUpTheEventInfo(eventType, description)
		this.clickSave()
	}
	static viewtheAddedEvent(eventType) {
		this.checkLabelsPresence(eventType).should('be.visible')
	}
	static assertDefaultColorForScreeningEvent(eventType, color) {
		this.checkLabelsPresence(eventType).should(
			'have.css',
			'background-color',
			'rgb(199, 210, 254)',
		)
		this.checkColorLabels(color)
	}
	static selectRedColor() {
		cy.get("span[class*='bg-red']").click({ force: true })
	}

	static addEventsinDiary(
		dateOfFinalInterview,
		startTime,
		endTime,
		eventType,
	) {
		this.selectDateinMiniCalendar(dateOfFinalInterview)
		this.ClickCreate()
		let eventDetails = eventType + '[' + startTime + '] - [' + endTime + ']'
		this.fillUpTheEventInfo(eventDetails, eventType)
		this.selectRedColor()
		this.clickSave()
	}
	static assertFinalInterviewEventsCreated(eventType) {
		this.checkLabelsPresence(eventType)
			.should('exist')
			.and('have.length.at.most', MAX_EVENTS)
	}
	static assertRedColorForFinalInterviewEvent(eventType, color) {
		this.checkLabelsPresence(eventType)
			.should('exist')
			.and('have.css', 'background-color')
			.and('eq', 'rgb(254, 202, 202)')
		this.checkColorLabels(color)
	}
}
export default AddDiarySection
