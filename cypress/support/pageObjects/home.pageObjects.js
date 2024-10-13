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
    validartextoSol() {
        cy.get('h2')
          .contains('Soluções')          
          .should('be.visible');    // Verifica se o elemento está visível      
    }
    validarTeciORBILL() {
        cy.get('h2').contains('Orbill', {timeout: 15000})  // Localiza o botão pelo seletor e aumenta o timeout
        .trigger('mouseover')
        .should('be.visible')  // Verifica se o botão está visível
          .click();  // Clica no botão "Saiba Mais" // Clica no botão "Saiba Mais"
        
          // cy.get('a.btn')
          // .contains('Saiba Mais')
          // .scrollIntoView()
          // .should('be.visible')
          // .click(); 

        cy.get('h1') // Seleciona o elemento h1 na nova página
          .should('contain.text', 'Inteligência para monetização, faturamento e gestão de parcerias.'); // Verifica o texto no h1
    }
    validartextSobre(){
        cy.get('h2', { timeout: 15000 })
        .should('contain.text', 'Sobre o ')

        cy.get('a[href="/sobre-o-cpqd/"]')
        .should('be.visible')
        .click()

        cy.get('h1')
          .contains('CONHEÇA NOSSA HISTÓRIA')
    }
    voltarPagina() {
        cy.go('back');  // Volta à página anterior
    }    
    inputName() {
      cy.get(elem.inputNome).type('Teste Desconsiderar').clear().type('Nome Teste');
    }
    inputEMAIL() {
      cy.get(elem.inputEMAIL).type('teste@teste.com.br').clear().type('teste@email.com');
    }
    // selectAtuacao() {
    //   cy.get(elem.areaAtuacao).click()
    // }
    validarCheck() {
      cy.get(elem.inputCheckBox).click()
    }
    btnSubmit() {
      cy.get(elem.btnSubmit).click()
    }

    
}

export default new homeInicial();







//Validação do Formulário que não foi usada
// validarForm() {
//   cy.get('h2')
//     .contains('Cadastre-se para receber conteúdos sobre soluções, informações sobre o mercado e novidades do CPQD.')

//     cy.get(elem.inputNome).type('Teste Desconsiderar').type('{enter}')

//     cy.get(elem.inputEMAIL).type('teste@teste.com.br').type('{enter}')
//     // Selecionar uma opção pelo valor do atributo 'value'
//     cy.get('select[name="formacontato"]').select('Agronegócio')

//     cy.get(elem.inputCheckBox).click()

//     cy.get(elem.btnSubmit).click()
// }