/// <reference types="Cypress" />

context('Test the language for the candidate form', () => {
  beforeEach(() => {
    cy.openSession(String(Cypress.env('SESSION_ID')))
    cy.visit('dashboard/users/edit')
  })

  it('checks the candidate form with the French language', () => {
   
    cy.changeUserLanguage('fr')
    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm/new-candidate/964317')

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
      
      // Website information fields
      cy.checkLabel(':nth-child(4) > :nth-child(2) > label > span', 'Site internet')
      cy.get('#media_website')
        .should('be.visible')
      
      // Linkedin information fields
       cy.checkLabel(':nth-child(3) > label > span', 'Linkedin')
       cy.get('#media_linkedin')
         .should('be.visible')

      // Twitter information fields
      cy.checkLabel(':nth-child(8) > label > span', 'Twitter')
      cy.get('#media_twitter')
        .should('be.visible')
      
      // Link afficher tous les champs
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > span')
        .scrollIntoView()
        .should('have.text', 'Afficher tous les champs')
      
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > .zmdi')
        .first()
        .scrollIntoView()
        .invoke('click')

      // Link afficher tous les champs
      cy.checkLabel(':nth-child(4) > label > span', 'Dribbble')
      cy.get('#media_dribbble')
        .should('be.visible')

      // Github afficher tous les champs
      cy.checkLabel(':nth-child(4) > :nth-child(5) > label > span', 'Github')
      cy.get('#media_github')
        .should('be.visible')
      
      // Behance afficher tous les champs
      cy.checkLabel(':nth-child(4) > :nth-child(6) > label > span', 'Behance')
      cy.get('#media_behance')
        .should('be.visible')

      // Stackoverflow afficher tous les champs [BUG DETECTED IN LABEL StackOverfow => StackOverflow]
      cy.checkLabel(':nth-child(7) > label > span', 'StackOverfow')
      cy.get('#media_stackoverflow')
        .should('be.visible')
      
      // Xing afficher tous les champs
      cy.checkLabel(':nth-child(9) > label > span', 'Xing')
      cy.get('#media_xing')
        .should('be.visible')
      
      // Link afficher tous les champs
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > span')
        .scrollIntoView()
        .should('have.text', 'Masquer les champs')
      
      // Statut information fields
      cy.checkLabel('[for="job_stage_id"] > span', 'Statut')
      cy.get(':nth-child(2) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .should('be.visible')

      // CV information fields
      cy.checkLabel('.resume > :nth-child(1) > .form-label > span', 'CV')
      cy.get('.resume > :nth-child(1) > div > .file-input-btn > span')
        .should('have.text', 'Importer un fichier')

      // Portfolio information fields
      cy.checkLabel('.portfolio > :nth-child(1) > .form-label > span', 'Portfolio')
      cy.get('.portfolio > :nth-child(1) > div > .file-input-btn > span')
        .should('have.text', 'Importer un fichier')
      
      // Lettre de motivation information fields
      cy.checkLabel(':nth-child(5) > :nth-child(5) > label > span', 'Lettre de motivation')
      cy.get('[name="cover_letter"]')
        .should('be.visible')
      
      // Origine information fields
      cy.checkLabel('.referrer > label > span', 'Origine')
      cy.get('.react-autosuggest__input')
        .should('be.visible')
      
      // Enregistrer button
      cy.get('.form-actions > .btn > span')
        .scrollIntoView()
        .should('have.text', 'Enregistrer')
    })
  })

  it('checks the candidate form with the English language', () => {
   
    cy.changeUserLanguage('en')
    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm/new-candidate/964317')

    // Check title
    cy.get('h1.card-form-title')
      .should('have.text', 'Add a new applicant')
    cy.get('form.card-form-form').within(($form) => {

      // Check all section title
      cy.get('h2').should(($lis) => {
        expect($lis).to.have.length(3)
        expect($lis.eq(0), 'first section name:').to.contain('General Information')
        expect($lis.eq(1), 'Second section name:').to.contain('Web presence')
        expect($lis.eq(2), 'Third section name:').to.contain('Application')
      })

      // Name information fields
      cy.checkLabel('label[for="firstname"]', 'Name*')
      cy.get('input[name="firstname"]')
        .should('be.visible')
      cy.get('input[name="lastname"]')
        .should('be.visible')

      // Subtitle  information fields
      cy.checkLabel('.subtitle > .form-label > span', 'Current position')
      cy.get('input[name="subtitle"]')
        .should('be.visible')

      // Email information fields
      cy.checkLabel('.email > .form-label', 'Email*')
      cy.get('input[name="email"]')
        .should('be.visible')

      // Phone information fields
      cy.checkLabel('.phone > .form-label', 'Phone number')
      cy.get('input[name="phone"]')
        .should('be.visible')

      // Profile picture fields
      cy.checkLabel(':nth-child(6) > .form-file-input > :nth-child(1) > .form-label', 'Profile picture')
      cy.get(':nth-child(6) > .form-file-input > :nth-child(1) > div > .file-input-btn')
        .should('have.text', 'Upload an image')

      // Address information fields
      cy.checkLabel('.address > .form-label', 'Address')
      cy.get('input[name="address"]')
        .should('be.visible')

      // City information fields
      cy.checkLabel('.city > .form-label', 'City')
      cy.get('input[name="city"]')
        .should('be.visible')

      // ZIP code information fields
      cy.checkLabel('.zip_code > .form-label', 'ZIP code')
      cy.get('input[name="zip_code"]')
        .should('be.visible')
      
      // Country information fields
      cy.checkLabel('[for="country_code"] > span', 'Country')
      cy.get('.searchable-select > :nth-child(1) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .should('be.visible')
      
      // Website information fields
      cy.checkLabel(':nth-child(4) > :nth-child(2) > label > span', 'Website')
      cy.get('#media_website')
        .should('be.visible')
      
      // Linkedin information fields
       cy.checkLabel(':nth-child(3) > label > span', 'LinkedIn')
       cy.get('#media_linkedin')
         .should('be.visible')

      // Twitter information fields
      cy.checkLabel(':nth-child(8) > label > span', 'Twitter')
      cy.get('#media_twitter')
        .should('be.visible')
      
      // Link afficher tous les champs
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > span')
        .scrollIntoView()
        .should('have.text', 'Display all fields')
      
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > .zmdi')
        .first()
        .scrollIntoView()
        .invoke('click')

      // Link afficher tous les champs
      cy.checkLabel(':nth-child(4) > label > span', 'Dribbble')
      cy.get('#media_dribbble')
        .should('be.visible')

      // Github afficher tous les champs
      cy.checkLabel(':nth-child(4) > :nth-child(5) > label > span', 'Github')
      cy.get('#media_github')
        .should('be.visible')
      
      // Behance afficher tous les champs
      cy.checkLabel(':nth-child(4) > :nth-child(6) > label > span', 'Behance')
      cy.get('#media_behance')
        .should('be.visible')

      // Stackoverflow afficher tous les champs [BUG DETECTED IN LABEL StackOverfow => StackOverflow]
      cy.checkLabel(':nth-child(7) > label > span', 'StackOverflow')
      cy.get('#media_stackoverflow')
        .should('be.visible')
      
      // Xing afficher tous les champs
      cy.checkLabel(':nth-child(9) > label > span', 'Xing')
      cy.get('#media_xing')
        .should('be.visible')
      
      // Link afficher tous les champs
      cy.get('.card-form-toggle-fields-link > :nth-child(1) > span')
        .scrollIntoView()
        .should('have.text', 'Hide fields')
      
      // Statut information fields
      cy.checkLabel('[for="job_stage_id"] > span', 'Status')
      cy.get(':nth-child(2) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .should('be.visible')

      // CV information fields
      cy.checkLabel('.resume > :nth-child(1) > .form-label > span', 'Resume/CV')
      cy.get('.resume > :nth-child(1) > div > .file-input-btn > span')
        .should('have.text', 'Upload a file')

      // Portfolio information fields
      cy.checkLabel('.portfolio > :nth-child(1) > .form-label > span', 'Portfolio')
      cy.get('.portfolio > :nth-child(1) > div > .file-input-btn > span')
        .should('have.text', 'Upload a file')
      
      // Lettre de motivation information fields
      cy.checkLabel(':nth-child(5) > :nth-child(5) > label > span', 'Cover Letter')
      cy.get('[name="cover_letter"]')
        .should('be.visible')
      
      // Origine information fields
      cy.checkLabel('.referrer > label > span', 'Source')
      cy.get('.react-autosuggest__input')
        .should('be.visible')
      
      // Enregistrer button
      cy.get('.form-actions > .btn > span')
        .scrollIntoView()
        .should('have.text', 'Save')
    })
  })
})
