import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I see the scroll down button', () => {
  cy
  .get('.see-more')
  .should('be.visible');
});

When(`I click on the scroll down button`, () => {
  cy
  .get('.see-more button')
  .click();
});

Then('I see the info page', () => {
  cy
  .get('#info-panel')
  .should('be.visible');
});

Given('I open the info page', () => {
  cy.visit('/home#info-panel');
});

Given('I see the scroll up button', () => {
  cy
  .get('.see-splash')
  .should('be.visible');
});

When(`I click on the scroll up button`, () => {
  cy
  .get('.see-splash button')
  .click();
});

Then('I see the splash page', () => {
  cy
  .get('#splash-panel')
  .should('be.visible');
});
