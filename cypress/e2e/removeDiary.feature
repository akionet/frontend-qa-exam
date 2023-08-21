Feature: Removing a Diary Event
  Background:
    Given The app is running
    And I am logged in as a valid user


  Scenario: Remove Screening Event
    When I see event of "Mudit Maheshwari" created on 10 August for "Screening Interview"
    Then I remove event "Mudit Maheshwari"
    
  
  Scenario Outline: Remove the events
    When I have <count> events created of "Final Interview Slot" on 28 August
    When I remove event for time "<start time>"
    Then I can see <eventsLeft> event is present
    Examples:
      | start time | count | eventsLeft |
      | 1:00PM BST | 3 | 2 |
      | 3:30PM BST | 2 | 1 |

