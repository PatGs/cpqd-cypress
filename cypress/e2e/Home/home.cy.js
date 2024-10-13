import homeInicial from '../../support/pageObjects/home.pageObjects'

describe('Acessar o site do CPQD e navegar na Home', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Validar as tecnologias', () => {
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

  // it('Validar as Soluções', () => {
  //   homeInicial.validartextoSol();
  //   homeInicial.validarTeciORBILL();
  // });

  it('Validar o texto Sobre', () => {
    homeInicial.validartextSobre();
    homeInicial.voltarPagina(); 
  });
  // it.skip('Validar o formulário', () => {
  //   homeInicial.validarForm();    
  // });

  describe('Envio de formulário com várias opções do select', () => {
    // Valores do Select
    const opcoes = [
        'Agronegócio',
        'Cidades',
        'Indústria',
        'Varejo',
        'Serviços',
        'Utilities',
        'Outros'
    ];

    // Itera sobre cada opção do select
    opcoes.forEach((opcao) => {
        it(`Deve enviar o formulário com a opção ${opcao}`, () => {
            // Visitar a página onde o formulário está localizado
            cy.visit('/'); // Alterar conforme necessário
            
            // Preencher o campo nome
            homeInicial.inputName();
            // Preencher o campo email
            homeInicial.inputEMAIL();
            // Selecionar a opção no select
            cy.get('select[name="formacontato"]').select(opcao);
            // Clicar no checkbox de LGPD
            homeInicial.validarCheck();
            // Submeter o formulário
            homeInicial.btnSubmit();            
           
            // Verificar se o formulário foi enviado corretamente
            cy.get('form').should('not.exist'); // Exemplo: formulário desaparece
        });
    });
  });
})