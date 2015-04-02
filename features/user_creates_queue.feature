Feature: User creates a music queue

  Scenario: As a Rocketeer
    Given I am logged in to Google
    Then I see the welcome page
    And I create a music queue
    Then another music queue exists
    Then I am on my music queue page

  Scenario: As a non Rocketeer
    Given I login to Google without a Hashrocket email
    Then I see the google sessions new page
    And I see a message "Access Denied"
