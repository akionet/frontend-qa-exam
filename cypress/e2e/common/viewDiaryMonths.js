

class ViewDiaryMonths{
  
    static daysOfTheMonth(){
       return cy.get(".flex-1.grid.grid-cols-7.grid-rows-5 div[class='border border-gray-200 flex flex-col']")
    }
    static viewMonthInSidePanel(){
        return cy.get("aside p:first-child")
    }
    static checkMaximumDatePresent(dateCount){
        cy.get(".flex-1.grid.grid-cols-7.grid-rows-5 p:last-child").should('contain',dateCount)
    }
    static clickToday(){
        cy.contains("Today").click();
    }
}
export default ViewDiaryMonths;