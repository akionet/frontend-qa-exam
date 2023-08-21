Feature: Adding a Diary Event
  As an authenticated user
  I want to be able to add a diary event to the calendar
  So that I can keep track of my appointments

  Background:
    Given The app is running
    And I am logged in as a valid user

  Scenario: Add a Single Diary Event
    When I add single diary events named "Mudit Maheshwari" "Screening Interview" DONE on the 10 August
    Then The diary event "Mudit Maheshwari" should be visible on the main page
    And The diary event "Mudit Maheshwari" should have "indigo" color


  Scenario Outline: Add Multiple Diary Events
    When I add three diary events named "Final Interview Slot" "<start time>" - "<end time>" on the <dateOfInterview> August
    Then The diary event "Final Interview Slot" should be visible on the main page
    And The diary event "Final Interview Slot" should have "red" color
    Examples:
      | start time | end time   | dateOfInterview |
      | 2:00PM BST | 3:00PM BST | 28              |
      | 1:00PM BST | 2:00PM BST | 28              |
      | 3:30PM BST | 4:30PM BST | 28              |

 