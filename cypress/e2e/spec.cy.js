describe('template spec', () => {
  beforeEach(() => {
    //  antes de cada caso de teste, rode os seguintes comandos
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
  })
  it('passes', () => {
    cy.get('input[name="nome"]').type('Jose Mendes Vieira');
    cy.get('input[name="email"]').type('iagosousa201486@gmail.com');
    cy.get('input[name="password"]').type('Aquaman08@');
    cy.get('input[name="confirm_password"]').type('Aquaman08@');
    cy.contains('button', 'Cadastrar').click()
  })
})