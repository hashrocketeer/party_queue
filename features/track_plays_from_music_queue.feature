Feature: Track resumes playing from last position
  Scenario: Track is in the process of playing
    Given I have created a music queue
    And I add a track to the music queue
    Then the track plays from the beginning
    When I refresh the page
    Then the track resumes playing where it stopped
