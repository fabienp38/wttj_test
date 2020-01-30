// ***********************************************
// This  commands_param_user.js shows you how to
// change the user parameters
//
// ***********************************************

Cypress.Commands.add('changeUserLanguage', (language) => {
  cy.get('#user_default_language').select(language)
  cy.get('input[name="commit"]').click()
  cy.wait(3000)
})
