import { When } from 'cypress-cucumber-preprocessor/steps';
import { kebabCase } from '../../commands';

When('I see the {} external link', (externalLink: string) => {
  cy.getCypressElement(`${kebabCase(externalLink)}-external-link-button`);
});
