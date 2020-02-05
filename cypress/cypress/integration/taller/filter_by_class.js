describe('Filtrar por materia', () => {

  beforeEach(() => {
    cy.visit('https://losestudiantes.co/universidad-de-los-andes/matematicas/profesores/adolfo-jose-quiroz-salazar')
  })

  it('Se puede seleccionar los filtros', () => {
    cy.get('.materias input[type="checkbox"]').check().should('be.checked')
  })

  it('Filtrar por 1 materia', () => {
    cy.get('.materias').find('input[type="checkbox"]').first().check()
    cy.get('.post').contains('Calc.Integ-Ecuac.Diferen Compl')
  })
})