describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })
    it('count is clicked', () => {
        cy.get('#increase_button').click().click().click().click().click().click().click().click().click().click().click().click()
        cy.get('#decrease_button').click().click().click().click().click().click().click()
    })
  })