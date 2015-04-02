Feature: User adds a track to a music queue

  Scenario: Logged into a music service
    Given I have created a music queue
    And I search for "Hammer Time"
    Then I see search results
    When I click "Hammer Time"
    Then "Hammer Time" is added to the music queue
