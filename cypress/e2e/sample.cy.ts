/// <reference types="cypress" />

describe('Sample test', () => {
  beforeEach('visit resistration form', () => {
    cy.visit('http://localhost:3000')
  })

  it('check gender', () => {
    cy.get('[type="radio"]').first().check()
    cy.get('[type="radio"]').eq(1).check()
  })

  it('check email', () => {
    cy.get('#input-email')
    .type('dummy@email.com')
    .should('have.value', 'dummy@email.com')
    cy.get('#result-email')
    .should('have.text', 'dummy@email.com')
    cy.get('#input-email').clear()
    .type('test@email.com')
    .should('have.value', 'test@email.com')
  })

  it('check role', () => {
    cy.get('#select-role').select('管理者').should('have.value', '管理者')
    cy.get('#result-role').should('have.text', '管理者')
  })

  it('check submit', () => {
    cy.get('#submit').click()
  })
})