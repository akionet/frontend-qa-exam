Feature: Viewing Months and Days in Calendar
  As an unauthenticated user
  I want to be able to click through the months of the year
  So that I can view all the days of the month

  Background:
    Given I am an unauthenticated user
    When I open the Calendar app

  Scenario: Viewing the current month
    Then I should see the "current" month displayed in both the side card and main view
    And The days of the "current" month should be visible

  Scenario Outline: Viewing the other months
    And I click on the "<choice>" month button in the main header
    Then I should see the "<choice>" month displayed in both the side card and main view
    And The days of the "<choice>" month should be visible
    Examples:
        | choice | 
        | next  |
        | previous |
         
  Scenario: Display current month on clicking today
    When I click on Today
    Then I should see the "current" month displayed in both the side card and main view
