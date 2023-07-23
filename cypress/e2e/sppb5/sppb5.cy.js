describe('test sp page builder 5', () => {
  it('clear page data', () => {
    cy.visit('https://try.sppagebuilder.com')
    cy.get('.sp-pagebuilder-page-edit').click()
    cy.wait(1000)
    cy.get('.builder-panel-items > :nth-child(2)').click()
    cy.get('.builder-justify-content-between > .builder-position-relative > .builder-button').click()
    cy.get('.builder-list-item-delete').click()
    cy.get('.builder-close-button').click()
    cy.get('iframe')
    // cy.get('#sp-pagebuilder-view').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
  })

  // it('add new row', () => {
  //   cy.visit('https://try.sppagebuilder.com')
  //   cy.get('.sp-pagebuilder-page-edit').click()
  //   cy.wait(300)
  //   cy.get('.builder-panel-items > :nth-child(2)').click()
  //   cy.get('.builder-justify-content-between > .builder-position-relative > .builder-button').click()
  //   cy.get('.builder-list-item-delete').click()
  //   cy.get('.builder-close-button').click()
  //   cy.get('.builder-panel-items > [role="button"]').click()
  //   cy.get('#sp-pagebuilder-view')
  //   cy.get('iframe')
  // })
   
})