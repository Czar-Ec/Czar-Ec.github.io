import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see the projects preview', () => {
  cy.elementShouldBeVisible('project-previews-container');
});

Then('the stub project should appear', () => {
  cy.elementShouldBeVisible('"Czar-Ec.github.io"');
});
