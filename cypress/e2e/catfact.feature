Feature: Verify the cat-friendly calendar application

    Scenario: Verify the page title is 'Catendar'
        Given Casie is on the Calendar page
        When she verifies the page title
        Then the title should be 'Catendar'


    Scenario: Verify generation of random cat facts
        Given Casie is on the Calendar page
        When she clicks on the random cat-fact genertor button
        Then the new random cat facts should be generated