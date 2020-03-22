Feature: Dark mode toggle

  Users can toggle between dark mode and light mode

  Scenario: I toggle between light mode and dark mode
    Given I open the splash page
    Then I see the splash logo
    And the application theme should be in dark mode
    When I toggle dark mode
    Then the application theme should not be in dark mode
    When I toggle dark mode
    Then the application theme should be in dark mode
