describe('Api Adopet', ()=> {
  // Pegar Token do armazenamento Local para realizar a verificação
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyMDkxNzA4NSwiZXhwIjoxNzIxMTc2Mjg1fQ.FpF2HV2NFyua3Mas0Z0DGzweeq3U6exADCmrnMdhbWU`

  it('Mensagens da API', ()=> {
    cy.request({
      method: 'GET' ,
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: { authorization }
    }).then((res) => { 
      expect(res.status).to.be.equal(200) // se é igual a 200
      expect(res.body).is.not.empty // se não é vazio
      expect(res.body).to.have.property('msg') // se tem 'msg'
    })
  })
})