import dayjs from 'dayjs'
export const CURRENT_MONTH = dayjs().format('MMMM')
export const CURRENT_YEAR_IN_NUMBER = parseInt(dayjs().format('yyyy'))
export let CURRENT_MONTH_IN_NUMBER = parseInt(dayjs().format('MM'))
export const DATES = dayjs()
export const NEXT_MONTH = DATES.add(1, 'month').format('MMMM')
export let NEXT_MONTH_IN_NUMBER = parseInt(DATES.add(1, 'month').format('MM'))
export const PREVIOUS_MONTH = DATES.subtract(1, 'month').format('MMMM')
export let PREVIOUS_MONTH_IN_NUMBER = parseInt(
	DATES.subtract(1, 'month').format('MM'),
)
export const SCREENING_EVENT_TITLE = 'Mudit Maheshwari'
export const MAX_EVENTS = 3
export const FINAL_INTERVIEW_TITLE = 'Final Interview Slot'
export const NEXT = 'next'
export const PREVIOUS = 'previous'
