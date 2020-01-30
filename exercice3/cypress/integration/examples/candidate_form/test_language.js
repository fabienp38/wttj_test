/// <reference types="Cypress" />

context('Test the accesibility to the candidate form', () => {
  beforeEach(() => {
    cy.openSession(String(Cypress.env('SESSION_ID')))
    cy.visit('dashboard/users/edit')
    cy.changeUserLanguage('fr')
    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm/new-candidate/964317')
  })

  it('checks the candidate form with the French language', () => {

    // Check title
    cy.get('h1.card-form-title')
      .should('have.text', 'Ajouter un nouveau candidat')
    cy.get('form.card-form-form').within(($form) => {

      // Check all section title
      cy.get('h2').should(($lis) => {
        expect($lis).to.have.length(3)
        expect($lis.eq(0), 'first section name:').to.contain('Informations générales')
        expect($lis.eq(1), 'Second section name:').to.contain('Sa présence sur Internet')
        expect($lis.eq(2), 'Third section name:').to.contain('Sa candidature')
      })

      // Name information fields
      cy.checkLabel('label[for="firstname"]', 'Nom*')
      cy.get('input[name="firstname"]')
        .should('be.visible')
      cy.get('input[name="lastname"]')
        .should('be.visible')

      // Subtitle  information fields
      cy.checkLabel('.subtitle > .form-label > span', 'Poste actuel')
      cy.get('input[name="subtitle"]')
        .should('be.visible')

      // Email information fields
      cy.checkLabel('.email > .form-label', 'Email*')
      cy.get('input[name="email"]')
        .should('be.visible')

      // Phone information fields
      cy.checkLabel('.phone > .form-label', 'Téléphone')
      cy.get('input[name="phone"]')
        .should('be.visible')

      // Profile picture fields
      cy.checkLabel(':nth-child(6) > .form-file-input > :nth-child(1) > .form-label', 'Photo de profil')
      cy.get(':nth-child(6) > .form-file-input > :nth-child(1) > div > .file-input-btn')
        .should('have.text', 'Importer une image')

      // Address information fields
      cy.checkLabel('.address > .form-label', 'Adresse')
      cy.get('input[name="address"]')
        .should('be.visible')

      // City information fields
      cy.checkLabel('.city > .form-label', 'Ville')
      cy.get('input[name="city"]')
        .should('be.visible')

      // ZIP code information fields
      cy.checkLabel('.zip_code > .form-label', 'Code postal')
      cy.get('input[name="zip_code"]')
        .should('be.visible')
      
      // Country information fields
      cy.checkLabel('[for="country_code"] > span', 'Pays')
      cy.get('.searchable-select > :nth-child(1) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .should('be.visible')
    })

  })
})
