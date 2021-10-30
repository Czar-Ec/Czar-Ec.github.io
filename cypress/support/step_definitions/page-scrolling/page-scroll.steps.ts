import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I see the see more button', () => {
  cy.elementShouldBeVisible('see-more-button');
});

When(`I click on the see more button`, () => {
  cy.getCypressElement('see-more-button')
  .click();
});

Then('I see the info page', () => {
  cy
  .get('#info')
  .should('be.visible');
});

Given('I open the info page', () => {
  cy.visit('/home#info');
});

Given('I see the see splash page button', () => {
  cy
  .get('.see-splash')
  .should('be.visible');
});

When(`I click on the see splash page button`, () => {
  cy
});

Then('I see the splash page', () => {
  cy
  .get('#splash')
  .should('be.visible');
});
