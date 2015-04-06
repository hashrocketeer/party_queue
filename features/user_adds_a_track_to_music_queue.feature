Feature: User adds a track to a music queue

  Scenario: Logged into a music service
    Given I have created a music queue
    And I search for "Chop Suey!"
    Then I see search results
    When I click "Chop Suey!"
    Then "Chop Suey!" is added to the music queue

