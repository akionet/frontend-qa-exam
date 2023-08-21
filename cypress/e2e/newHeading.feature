Feature: New Heading
  As an unauthenticated user
  I want to see the name Catendar instead of Calendar in the header of the app
  So that I am aware of the fact that this version of the app is feline-friendly

    Scenario: Verification that header contains Catendar
        Given I am an unauthenticated user
        When  I open the Calendar app
        Then The heading "Catendar" is visible
