Feature: Splash page links

  I want to find out more information

  Scenario: I open the CV
    Given I open the splash page
    Then I see the splash logo
    When I click on the CV external link

  Scenario: I open the Github link
    Given I open the splash page
    Then I see the splash logo
    When I click on the Github external link

  Scenario: I open the LinkedIn link
    Given I open the splash page
    Then I see the splash logo
    When I click on the LinkedIn external link