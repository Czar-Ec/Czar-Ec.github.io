import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I toggle dark mode', () => {
  cy.clickElement('dark-mode-toggle-button');
});

Then('the application theme should be in dark mode', () => {
  cy.getCypressElement('application-container')
  .should('have.class', 'dark-theme');
});

Then('the application theme should not be in dark mode', () => {
  cy.getCypressElement('application-container')
  .should('not.have.class', 'dark-theme');
});

