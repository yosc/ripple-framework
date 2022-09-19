import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the landing page component with ID {int} should exist', (id: number) => {
  cy.get(`[data-component-id="${id}"]`).should('exist')
})

Then('the landing page component {string} should exist', (type: string) => {
  cy.get(`[data-component-type="${type}"]`).should('exist')
})

When(
  'I click the open all button on RplAccordion with ID {int}',
  (id: number) => {
    cy.get(`[data-component-id="${id}"]`).contains('Open all').click()
  }
)

Then(
  'all accordion items in accordion ID {int} should be visible',
  (id: number) => {
    cy.get(`[data-component-id="${id}"]`)
      .find('li > button')
      .each(($btn) => {
        cy.wrap($btn).should('have.attr', 'aria-expanded', 'true')
      })
    cy.get(`[data-component-id="${id}"]`)
      .find('.rpl-accordion__item-content')
      .each(($el) => {
        cy.wrap($el).should('be.visible')
      })
  }
)