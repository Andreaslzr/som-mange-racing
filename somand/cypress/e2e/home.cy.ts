/// <reference types="cypress" />

const ld = {
  homeContainer: ()=> cy.get("#home-page"),
}

describe('Home Test', () => {
    beforeEach(()=>{
      cy.visit('/')
    })

    it('visiting home page', () => {
      ld.homeContainer().should("exist")
    })
  })