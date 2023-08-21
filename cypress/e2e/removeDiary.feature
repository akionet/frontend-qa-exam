Feature: Removing a Diary Event
  Background:
    Given The app is running
    And I am logged in as a valid user


  Scenario: Remove Screening Event
    When I see event of "Mudit Maheshwari" created on 10 August 
    Then I remove event for "Mudit Maheshwari"
    And I verify that "Mudit Maheshwari" event has been removed
    
  
  Scenario Outline: Remove the events
    When I have upto <count> events created for "Final Interview Slot" on 28 August
    Then I remove event for "<start time>"
    Then I can see <eventsLeft> event is present
    And I verify that "Final Interview Slot <start time>" event has been removed
    Examples:
      | start time | count | eventsLeft |
      | 1:00PM BST | 3 | 2 |
      | 3:30PM BST | 2 | 1 |

