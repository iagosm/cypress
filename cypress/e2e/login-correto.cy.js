describe('Página de Login', () => {
    beforeEach(() => {
      //  antes de cada caso de teste, rode os seguintes comandos
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
  it('Deve preencher os campos de login corretamente para autenticar o usuário na página', () => {
    // cy.clearCookies();
    // cy.clearLocalStorage();
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})