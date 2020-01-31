/// <reference types="Cypress" />

context('Test create cadidate with form', () => {
  let candidate
  let exp_nb_candidate
  let name
  let fileName

  beforeEach(() => {
    name = Math.random().toString(36).substring(7);

    cy.openSession(String(Cypress.env('SESSION_ID')))

    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm').then((t)=> {
      cy.get(':nth-child(1) > .column > :nth-child(1) > .column-header > .column-header-title > .column-header-counter')
      .invoke('text').as('val')
    })
    
    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm/new-candidate/964317')

    cy.visit('dashboard/o/dkxzma3/jobs/WDTT_9KkrWmm/new-candidate/964317')
    cy.fixture('candidate')
      .then((c) => {
        candidate = c
      })
  })

  it('checks the displaying of the new candidate on the dashboard', function () {

      cy.get('form.card-form-form').within(($form) => {
        cy.get('input[name="firstname"]')
          .type(candidate.profile.firstname)

        cy.get('input[name="lastname"]')
          .type(name)

        cy.get('input[name="email"]')
          .type(candidate.profile.email)
        
        cy.get('.form-actions-sticky > .btn')
          .scrollIntoView()
          .invoke('click')

      })
     
      cy.reload()

      exp_nb_candidate = Number(this.val) + 1
 
      //Compare the value of counter before to add a candidate with the counter value after
      cy.get(':nth-child(1) > .column > :nth-child(1) > .column-header > .column-header-title > .column-header-counter')
        .should('have.text', exp_nb_candidate.toString())
      
      //Count number of card in a dashboard and compare with expected number of candidate
      cy.get('.card-thumbnail > .card-thumbnail-content > .card-thumbnail-infos')
        .should('have.length', exp_nb_candidate)
      
      //Check that the first card contains the name of the new candidate
      cy.get(':nth-child(1) > .card-thumbnail > .card-thumbnail-content > .card-thumbnail-infos > .card-thumbnail-name')
        .should('have.text', candidate.profile.firstname.concat(' ', name))
      
  })

  it('checks the candidate creation', function () {
    cy.get('form.card-form-form').within(($form) => {
      cy.get('input[name="firstname"]')
        .type(candidate.profile.firstname)

      cy.get('input[name="lastname"]')
        .type(name)

      cy.get('input[name="email"]')
        .type(candidate.profile.email)

      cy.get('input[name="subtitle"]')
        .type("QA engineer")

      cy.get('input[name="email"]')
        .type("test@a.com")

      cy.get('input[name="phone"]')
        .scrollIntoView()
        .type("0600000001")

      cy.get(':nth-child(6) > .form-file-input > :nth-child(1) > div > .file-input-btn')

      fileName = 'logo.png';
 
      cy.fixture(fileName).then(fileContent => {
        cy.get(':nth-child(6) > .form-file-input > :nth-child(1) > div > .file-input-btn')
          .upload(
            { fileContent, fileName, mimeType: 'image/png', encoding: 'base64'},
            { subjectType: 'drag-n-drop' },
          );
      });
     

      cy.get('input[name="address"]')
        .scrollIntoView()
        .type("1 chemin de la concorde")

      cy.get('input[name="city"]')
        .scrollIntoView()
        .type('Valence')

      cy.get('input[name="zip_code"]')
        .scrollIntoView()
        .type("26000")
      
      cy.get('.searchable-select > :nth-child(1) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .scrollIntoView()
        .type('France')
      
      cy.get('#media_website')
        .scrollIntoView()
        .type("www.google.fr")
      
       cy.get('#media_linkedin')
         .scrollIntoView()
         .type("www.linkedin.fr")

      cy.get('#media_twitter')
        .scrollIntoView()
        .type("www.twitter.fr")
      
      cy.get(':nth-child(2) > .jungle-select > :nth-child(1) > .jungle-select-controls > :nth-child(1) > .jungle-select-filter > input')
        .type("Nouveau")
      
      fileName = 'cv.docx';
 
      cy.fixture(fileName).then(fileContent => {
        cy.get('.resume > :nth-child(1) > div > .file-input-btn > span')
          .upload(
            { fileContent, fileName, mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', encoding: 'utf-8'},
            { subjectType: 'drag-n-drop' },
          );
      });
      
      cy.get('[name="cover_letter"]')
        .type("lwknclwxcnl x,c ,wx nwckkqqlksndklqnsldnqslndlqnsodql s  kj nk nv bqs fqskbjo sv qsjqs kqq")
      
      cy.get('.react-autosuggest__input')
        .type("facebook")
      
      cy.get('.form-actions > .btn')
        .scrollIntoView()
        .invoke('click')
    })
  })

  it('checks "Save" button is disabled when mandatory fields are empty', function () {
    cy.get('form.card-form-form').within(($form) => {
      var combination = [
        { lastname: '', firstname: '', email: '' },
        { lastname: '', firstname: '', email: 'a@a.com' },
        { lastname: '', firstname: 'Alain', email: '' },
        { lastname: '', firstname: 'Alain', email: 'a@a.com' },
        { lastname: 'Verse', firstname: '', email: '' },
        { lastname: 'Verse', firstname: '', email: 'a@a.com' },
        { lastname: 'Verse', firstname: 'Alain', email: '' },
      ];
      combination.forEach(function (res) {
        cy.get('input[name="lastname"]').clear()
        cy.get('input[name="firstname"]').clear()
        cy.get('input[name="email"]').clear()
        if (res.firstname) {
          cy.get('input[name="firstname"]')
            .type(res.firstname)
        }
        if (res.lastname) {
          cy.get('input[name="lastname"]')
            .type(res.lastname)
        }
        if (res.email) {
          cy.get('input[name="email"]')
            .type(res.email)
        }
        cy.get('.form-actions > .btn')
          .scrollIntoView()
          .should('be.disabled')
      })
    })
  })

  it('checks the "email" input format', function () {
    cy.get('form.card-form-form').within(($form) => {
      cy.get('input[name="firstname"]')
        .type(candidate.profile.firstname)

      cy.get('input[name="lastname"]')
        .type(candidate.profile.lastname)

      cy.get('input[name="email"]')
        .type("test")

      cy.get('.form-actions > .btn')
        .scrollIntoView()
        .should('be.disabled')

      cy.get('input[name="email"]')
        .type(candidate.profile.email)

      cy.get('.form-actions-sticky > .btn')
        .scrollIntoView()
        .should('be.enabled')
    })
  })
})