const elem = require ('../elements/home.elements').ELEMENTS

class homeInicial{

    //Valida os textos da sessão de Tecnologia e clica em cada tecnologia
    validartextoTec() {
        cy.get('h2')
          .contains('Tecnologias')  // Verifica que o h2 contém o texto "Tecnologias"
          .should('be.visible');    // Verifica se o elemento está visível
    }
    validarTeciOT() {
        cy.get('a[href="/internet-das-coisas-iot/"]')
          .should('be.visible')
          .click()
        
        cy.get('h1') // Seleciona o elemento h1 na nova página
          .should('contain.text', 'Crie valor a partir da integração entre mundo físico e digital.'); // Verifica o texto no h1
    }
    validarTecIA() {
        cy.get('a[href="/inteligencia-artificial-ia/"]')
          .should('be.visible')
          .click()   
        
        cy.get('h1')// Seleciona o elemento h1 na nova página
          .should('contain.text', ' Amplie suas capacidades de personalização, previsão e tomada de decisão.'); // Verifica o texto no h1
    }
    validarTecBlockchain() {
        cy.get('a[href="/blockchain/"]')
          .should('be.visible')
          .click()   
        
        cy.get('h1')// Seleciona o elemento h1 na nova página
          .should('contain.text', ' Escale seu negócio com segurança, agilidade e confiança através do Blockchain.'); // Verifica o texto no h1
    }
    validarTecConect() {
        cy.get('a[href="/conectividade-inteligente/"]')
          .should('be.visible')
          .click()   
        
        cy.get('h1')// Seleciona o elemento h1 na nova página
          .should('contain.text', ' Explore um mundo hiperconectado, com inovações constantes.'); // Verifica o texto no h1
    }

    //Função que valida o carrossel de Soluções
    validartextoSol() {
        cy.get('h2')
          .contains('Soluções')          
          .should('be.visible');    // Verifica se o elemento está visível      
    }
    validarSolORBILL() {      
       cy.get('a[href="https://cpqd.devhagens.com.br/solucoes/orbill/"]', {timeout: 15000})
         .eq(1)
         .click() 

        cy.get('h1') // Seleciona o elemento h1 na nova página
          .should('contain.text', 'Inteligência para monetização, faturamento e gestão de parcerias.'); // Verifica o texto no h1
    }
    validarSolPailot(){
      cy.get('a[href="https://cpqd.devhagens.com.br/solucoes/pailot/"]', {timeout: 15000})
        .eq(1)
        .click() 

      cy.get('h1') // Seleciona o elemento h1 na nova página
        .should('contain.text', ' AI + IoT: inteligência de dados habilitando a indústria 4.0.');
    }
    validarSolID(){
      cy.get('a[href="https://cpqd.devhagens.com.br/solucoes/id/"]', {timeout: 15000})
        .eq(1)
        .click() 

      cy.get('h1') // Seleciona o elemento h1 na nova página
        .should('contain.text', ' Onboarding e autenticação digital: segurança e confiabilidade em cada passo.');
    }
    validarSolInterIntel(){
      cy.get('a[href="https://cpqd.devhagens.com.br/solucoes/interacao-inteligente/"]', {timeout: 15000})
        .eq(1)
        .click() 

      cy.get('h1') // Seleciona o elemento h1 na nova página
        .should('contain.text', 'Tecnologia de Voz e IA: soluções de interação inteligente para diferentes canais de atendimento.');
    }

    // Função para validar os textos de Sobre
    validartextSobre(){
        cy.get('h2', { timeout: 15000 })
        .should('contain.text', 'Sobre o ')

        cy.get('a[href="/sobre-o-cpqd/"]')
        .should('be.visible')
        .click()

        cy.get('h1')
          .contains('CONHEÇA NOSSA HISTÓRIA')
    }

    //Função para voltar a página anterior
    voltarPagina() {
        cy.go('back');
    }
    // Funções para os Inputs dos Formulário e a validação do envio
    inputName() {
      cy.get(elem.inputNome).type('Teste Desconsiderar').clear().type('Nome Teste');
    }
    inputEMAIL() {
      cy.get(elem.inputEMAIL).type('teste@teste.com.br').clear().type('teste@email.com');
    }
    validarCheck() {
      cy.get(elem.inputCheckBox).click()
    }
    btnSubmitHml() {
      cy.get('.wpcf7-response-output')
        .should('not.contain', 'Ocorreu um erro ao tentar enviar sua mensagem');

      cy.get(elem.btnSubmit).click()
    }
    btnSubmitProd() {
      cy.get('.wpcf7-response-output', { timeout: 15000 })
      .should('be.visible')
      .and('not.contain', 'Ocorreu um erro ao tentar enviar sua mensagem.')
      .and('contain', 'Agradecemos a sua mensagem.');
  }
    
}

export default new homeInicial();