Feature: Verify the Calendar functionality

    #    As an unauthenticated user, Casie want to be able to click through the months of the year,
    #   so that she can view all the days of the month.

    Scenario: Browse through all the months present in the year 2023
        Given Casie is on the Calendar page
        When she traverses back to the first month of the year 2023
        Then she should see respective number of days for each month while traversing
            | month     | noOfDays |
            | January   | 31       |
            | February  | 28       |
            | March     | 31       |
            | April     | 30       |
            | May       | 31       |
            | June      | 30       |
            | July      | 31       |
            | August    | 31       |
            | September | 30       |
            | October   | 31       |
            | November  | 30       |
            | December  | 31       |

    # As an authenticated user, I want to be able to add a diary event to the calendar,
    #so that I can keep track of my appointments.

    Scenario: Adding a diary event for the Screening Round & 3 diary events for Final Interview Slots
        Given Casie is on the Calendar page
        When she books the below diary event for the given date
            | name                                     | date | labelColor |
            | Komal Hukmatani Screening Interview DONE | 11   | GREEN      |
            | Final Interview Slot 14:00 - 15:00       | 22   | RED        |
            | Final Interview Slot 15:00 - 16:00       | 22   | RED        |
            | Final Interview Slot 16:00 - 17:00       | 22   | RED        |
        Then the events should be created successfully
            | name                                     | date | labelColor |
            | Komal Hukmatani Screening Interview DONE | 11   | GREEN      |
            | Final Interview Slot 14:00 - 15:00       | 22   | RED        |
            | Final Interview Slot 15:00 - 16:00       | 22   | RED        |
            | Final Interview Slot 16:00 - 17:00       | 22   | RED        |


    #    As an authenticated user, I want to be able to delete a diary event that has already been created,
    #   so that I can remove a diary event that is no longer required.

    Scenario: Removing two Final Interview Slots that are no longer required
        Given Casie is on the Calendar page
        And she books the below diary event for the given date
            | name                               | date | labelColor |
            | Final Interview Slot 14:00 - 15:00 | 22   | RED        |
            | Final Interview Slot 15:00 - 16:00 | 22   | RED        |
            | Final Interview Slot 16:00 - 17:00 | 22   | RED        |
        When she removes the below diary events
            | name                               |
            | Final Interview Slot 15:00 - 16:00 |
            | Final Interview Slot 16:00 - 17:00 |
        Then the events should be removed successfully
            | name                               |
            | Final Interview Slot 15:00 - 16:00 |
            | Final Interview Slot 16:00 - 17:00 |