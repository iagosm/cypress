describe('Página de Cadastro', () => {
  it('Deve preencher os campos de formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Jose Mendes Vieira');
    cy.get('[data-test="input-email"]').type('iagosousa201486@gmail.com');
    cy.get('[data-test="input-password"]').type('Aquaman08@');
    cy.get('[data-test="input-confirm-password"]').type('Aquaman08@');
    cy.get('[data-test="submit-button"]').click()
  })
})