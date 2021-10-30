Feature: Panel scroll

  I want to scroll between splash page and the info page

  Scenario: I scroll to the info page
    Given I open the info page
    And I see the see more button
    When I click on the see more button
    Then I see the info page

  Scenario: I scroll to the splash page
    Given I open the info page
    And I see the see splash page button
    When I click on the see splash page button
    Then I see the splash page