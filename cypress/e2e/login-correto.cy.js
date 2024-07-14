describe('Página de Login', () => {
  beforeEach(() => {
    //  antes de cada caso de teste, rode os seguintes comandos
    cy.visit('http://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos de login corretamente para autenticar o usuário na página', () => {
    cy.login('ana@email.com', 'Senha123')
  })
})