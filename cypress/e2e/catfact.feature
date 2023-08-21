Feature: Verify the cat-friendly calendar application

    Background:
        Given Casie is on the Calendar page

    Scenario: Verify the page title is 'Catendar'
        When she verifies the page title
        Then the title should be 'Catendar'


    Scenario: Verify generation of random cat facts
        When she clicks on the random cat-fact genertor button
        Then the new random cat facts should be generated