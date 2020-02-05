describe('Busqueda de profesores', () => {

  beforeEach(() => {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
  })

  it('Encuentra el profesor', () => {
    cy.get('.Select-placeholder').click().type('Jose Manuel Barreto')
    cy.get('.Select-option-group-label').contains('profesores')
    cy.get('.Select-option-group').contains('Jose Manuel Barreto')
  })

  it('No encuentra ningun profesor', () => {
    cy.get('.Select-placeholder').click().type('jose manuelasdasd')
    cy.get('.Select-noresults').contains('No se encontraron profesores ni materias')
  })
})