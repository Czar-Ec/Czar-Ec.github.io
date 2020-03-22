Feature: Github project display

  The projects I have on my Github page is displayed on this page

  Scenario: I open the projects page
  Given I open the projects page
  Then I see the projects preview
  And the projects page spinner is not visible
  And the stub project should appear