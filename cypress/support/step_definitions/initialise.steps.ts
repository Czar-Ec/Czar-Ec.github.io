import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I see the logo`, () => {
  cy.elementShouldBeVisible('czarec-logo');
});
