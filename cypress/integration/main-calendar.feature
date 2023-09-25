Feature: Main Calendar View

  Scenario: Intitial view
    Given I have opened the app
    Then I see the week headline "Feb 24 - Mar 2, 2019"
    And I see the weekdays "Sunday, Feb 24; Monday, Feb 25; Tuesday, Feb 26; Wednesday, Feb 27; Thursday, Feb 28; Friday, Mar 1; Saturday, Mar 2"
    And I see 2 events

  Scenario: Change to previous week
    Given I have opened the app
    And I go to previous week
    Then I see the week headline "Feb 17 - Feb 23, 2019"
    And I see the weekdays "Sunday, Feb 17; Monday, Feb 18; Tuesday, Feb 19; Wednesday, Feb 20; Thursday, Feb 21; Friday, Feb 22; Saturday, Feb 23"
    And I see 0 events

  Scenario: Change to next week
    Given I have opened the app
    And I go to next week
    Then I see the week headline "Mar 3 - Mar 9, 2019"
    And I see the weekdays "Sunday, Mar 3; Monday, Mar 4; Tuesday, Mar 5; Wednesday, Mar 6; Thursday, Mar 7; Friday, Mar 8; Saturday, Mar 9"
    And I see 1 events
    And I see the month headline "March 2019"
