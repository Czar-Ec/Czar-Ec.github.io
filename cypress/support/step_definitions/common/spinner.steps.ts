import { Then } from 'cypress-cucumber-preprocessor/steps';
import { kebabCase } from '../../commands';

Then('the {} spinner is not visible', (spinnerRef: string) => {
  cy.elementShouldNotBeVisible(`${kebabCase(spinnerRef)}-spinner`);
});
