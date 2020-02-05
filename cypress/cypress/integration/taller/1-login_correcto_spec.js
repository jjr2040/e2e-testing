describe('Los estudiantes login', () => {
    it('Visits los estudiantes and passes at login', () => {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("se-mende@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("PruebasTaller2")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.aviso').should('not.exist')
        cy.get('#cuenta').should('exist')
    })
  })