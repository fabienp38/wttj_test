// ***********************************************
// This  commands_session.js shows you how to
// connect to the WTTJ session 
//
// ***********************************************

Cypress.Commands.add('openSession', (sessionid) => {
  cy.setCookie('wk_session', sessionid)
})
