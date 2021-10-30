import { When } from 'cypress-cucumber-preprocessor/steps';

When('I open the splash page', () => {
  cy.visit('/');
});

When('I open the info page', () => {
  cy.visit('#/info');
});

When('I open the projects page', () => {
  cy.server();
  cy.fixture('projects-page/stub-github-response').then(stub => {
    cy.route({
      method: 'GET',
      url: '/users/**/repos?**',
      headers: {
        // tslint:disable-next-line: max-line-length
        link: '<https://api.github.com/user/32554382/repos?page=2&per_page=10>; rel="next", <https://api.github.com/user/32554382/repos?page=2&per_page=10>; rel="last"'
      },
      response: stub
    }).as('stubGHRes');
  });


  cy.visit('#/info/projects');
  cy.wait('@stubGHRes').its('response').its('body').then(res => {
    expect(res).to.have.length(1);
  });
});
