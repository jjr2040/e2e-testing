describe('Los estudiantes login', () => {
    it('Visits los estudiantes and passes at login', () => {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.profesor').first().click()
        cy.contains('Califica a este profesor')
    })
  })