Feature: Appointment Modal

  Scenario: Display of Appointment Modal
    Given I have opened the app
    And I click on the first event
    Then I see the date "Wednesday, February 27, 2019"
    And I see the time "11:00 AM"
    And I see the property name "Test"
    And I see the address "Lazarettstr. 3, 80636 München"
    And I see the landlord "Max Mustermann"
    And I see the attendee count "1 of 2"

  Scenario: Go to next appointment
    Given I have opened the app
    And I click on the first event
    And I go to next appointment
    Then I see the date "Thursday, February 28, 2019"
    And I see the time "11:00 AM"
    And I see the property name "Flat ohne name"
    And I see the address "Lazarettstr. 3, 80636 München"
    And I see the landlord "Max Mustermann"
    And I see the attendee count "1 of 3"

  Scenario: Go back to previous appointment
    Given I have opened the app
    And I click on the first event
    And I go to next appointment
    And I go to previous appointment
    Then I see the date "Wednesday, February 27, 2019"
    And I see the time "11:00 AM"
    And I see the property name "Test"
    And I see the address "Lazarettstr. 3, 80636 München"
    And I see the landlord "Max Mustermann"
    And I see the attendee count "1 of 2"
