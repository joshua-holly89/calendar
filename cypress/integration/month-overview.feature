Feature: Month Overview

  Scenario: Intitial view
    Given I have opened the app
    Then I see the month headline "February 2019"
    And I see 2 events

  Scenario: Go to next month
    Given I have opened the app
    And I go to next month
    Then I see the month headline "March 2019"
    And I see 3 events
    And I see the week headline "Mar 24 - Mar 30, 2019"

  Scenario: Go to previous month
    Given I have opened the app
    And I go to previous month
    Then I see the month headline "January 2019"
    And I see 0 events
    And I see the week headline "Jan 27 - Feb 2, 2019"
