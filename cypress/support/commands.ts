/**************************************************************
 * CYPRESS NAMESPACE
 **************************************************************/
export { };
declare global {
  namespace Cypress {
    interface Chainable {
      /**************************************************************
       * COMMON
       **************************************************************/
      getCypressElement: typeof getCypressElement;

      /**************************************************************
       * ELEMENT ASSERTIONS
       **************************************************************/
      elementShouldBeVisible: typeof elementShouldBeVisible;

      /**************************************************************
       * USER INTERACTION
       **************************************************************/
      clickElement: typeof clickElement;
    }
  }
}

/**************************************************************
 * ADDING COMMANDS TO CYPRESS
 **************************************************************/
Cypress.Commands.add('getCypressElement', getCypressElement);
Cypress.Commands.add('elementShouldBeVisible', elementShouldBeVisible);
Cypress.Commands.add('clickElement', clickElement);

/**************************************************************
 * CUSTOM COMMAND DEFINITIONS
 **************************************************************/

/**
 * Get elements with the cypress tag
 * @param elementRef
 */
export function getCypressElement(elementRef: string) {
  return cy.get(cyTag(elementRef));
}

/**
 * Click specified element
 * @param elementRef
 */
export function clickElement(elementRef: string) {
  return getCypressElement(elementRef).click();
}

/**
 * Element should be visible
 * @param elementRef
 */
export function elementShouldBeVisible(elementRef: string) {
  return getCypressElement(elementRef).should('be.visible');
}

/**************************************************************
 * HELPER FUNCTIONS
 **************************************************************/

/**
 * Convert the element reference to the correct tag
 * @param elRef
 */
function cyTag(elRef: string) {
  return `[${Cypress.env('cypress-tag')}=${elRef}]`;
}

/**
 * Convert string to kebab case
 * @param str
 */
export function kebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}
