import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the page', () => {
  cy.visit('/');
});

Then(`I see the logo`, () => {
  cy
  .get('.logo-svg')
  .should('be.visible');
});
