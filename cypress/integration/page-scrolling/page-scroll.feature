Feature: Panel scroll

  I want to scroll between splash page and the info page

  Scenario: I scroll to the info page
    Given I open the page
    And I see the scroll down button
    When I click on the scroll down button
    Then I see the info page

  Scenario: I scroll to the splash page
    Given I open the info page
    And I see the scroll up button
    When I click on the scroll up button
    Then I see the splash page