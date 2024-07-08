describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Jose Mendes Vieira');
    cy.get('input[name="email"]').type('iagosousa201486@gmail.com');
    cy.get('input[name="password"]').type('Aquaman08@');
    cy.get('input[name="confirm_password"]').type('Aquaman08@');
    cy.contains('button', 'Cadastrar').click()
  })
})