describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to add 4 and 4', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should be able to add 4 and 4, subtract by 2 then multiply by 10', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '60')
  })

  it('should be able to subtract 1 and 5', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should be able to divide 5 and 2', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('should be able to multiply 9202 and 23534', () => {
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '216559868')
  })

  it('should cause an error when dividing by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })



})