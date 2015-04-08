Feature: User votes on tracks

  Scenario: Placing an up vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote up for the track
    Then the track request's score increases by one

  Scenario: Placing a down vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote down for the track
    Then the track request's score decreases by one

  Scenario: Placing a second up vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote up for the track
    Then the track request's score increases by one
    And I try to vote up for the track
    Then the track request's score doesn't increase

  Scenario: Placing a second up vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote down for the track
    Then the track request's score decreases by one
    And I try to vote down for the track
    Then the track request's score doesn't decrease

  Scenario: Changing a down vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote down for the track
    And I change my vote to up
    Then the track request's score increases by one
    And I change my vote to down
    Then the track request's score decreases by one

  Scenario: Changing an up vote
    Given I have created a music queue
    And I add a track to the music queue
    And I vote up for the track
    And I change my vote to down
    Then the track request's score decreases by one
    And I change my vote to up
    Then the track request's score increases by one
