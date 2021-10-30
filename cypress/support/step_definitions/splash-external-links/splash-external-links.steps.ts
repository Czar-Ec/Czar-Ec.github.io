import { When } from 'cypress-cucumber-preprocessor/steps';
import { kebabCase } from '../../commands';

When('I click on the {} external link', (externalLink: string) => {
  cy.clickElement(`${kebabCase(externalLink)}-external-link-button`);
});
