import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I see the splash logo`, () => {
  cy.elementShouldBeVisible('czarec-logo');
});
