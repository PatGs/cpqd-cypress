import homeInicial from '../../support/pageObjects/home.pageObjects'

describe('Acessar o site do CPQD e navegar na Home', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it.skip('Validar as tecnologias', () => {
    homeInicial.validartextoTec();
    homeInicial.validarTeciOT();
    homeInicial.voltarPagina();
    homeInicial.validarTecIA();
    homeInicial.voltarPagina();
    homeInicial.validarTecBlockchain();
    homeInicial.voltarPagina();
    homeInicial.validarTecConect();
    homeInicial.voltarPagina();
  });

  it('Validar as Soluções', () => {
    homeInicial.validartextoSol();
    homeInicial.validarTeciORBILL();
  });

})