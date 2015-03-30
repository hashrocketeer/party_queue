Feature: User creates a queue

  Scenario: User logged in
    Given I am logged in
    And I visit the homepage
    When I click 'Create Queue'
    Then I see the new queue page
    When I enter a name
    And click 'Create Queue'
    Then I see my queue
