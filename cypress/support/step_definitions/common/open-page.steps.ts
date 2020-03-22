import { When } from 'cypress-cucumber-preprocessor/steps';

When('I open the splash page', () => {
  cy.visit('/');
});

When('I open the info page', () => {
  cy.visit('/info');
});

When('I open the projects page', () => {
  cy.visit('/info/projects');
});
