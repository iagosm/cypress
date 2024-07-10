describe('Exercicio 2', () => {
  beforeEach(() => {
    //  antes de cada caso de teste, rode os seguintes comandos
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
  })
  it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('teste');
    cy.get('[data-test="input-loginPassword"]').type('12321321321321');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  });
});