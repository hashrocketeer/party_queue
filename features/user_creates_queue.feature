Feature: User creates a music queue

  Scenario: User creates a music queue
    Given I am logged in with Google
    Then I see the welcome page
    And I create a music queue
    Then another music queue exists
    Then I am on my music queue page

  # TODO User logs into Google with invalid credentials
