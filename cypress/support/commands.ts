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
    }
  }
}

/**************************************************************
 * ADDING COMMANDS TO CYPRESS
 **************************************************************/
Cypress.Commands.add('getCypressElement', getCypressElement);
Cypress.Commands.add('elementShouldBeVisible', elementShouldBeVisible);

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
