// ***********************************************
// This  commands_param_user.js shows you how to
// change the user parameters
//
// ***********************************************

Cypress.Commands.add('checkLabel', (selector, expected) => {
  cy.get(selector)
    .scrollIntoView()
    .should('have.text', expected)
})
