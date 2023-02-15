describe('API Testing', () => {

  it('Verify MercadoLibre endpoint', () => {
    cy.request({
      url: 'https://www.mercadolibre.com.ar/menu/departments',
      method: 'GET',
    }).then(res => {
      expect(res.body).to.have.property('departments');
    });
  });

});