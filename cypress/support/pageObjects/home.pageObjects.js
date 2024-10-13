class homeInicial{

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
          .contains('Soluções')  // Verifica que o h2 contém o texto "Tecnologias"
          .should('be.visible');    // Verifica se o elemento está visível
    }
    validarTeciORBILL() {
        cy.get('a.btn[href="https://cpqd.devhagens.com.br/solucoes/orbill/"]', { timeout: 15000 })  // Localiza o botão pelo seletor e aumenta o timeout
          .first()
          .scrollIntoView()  // Rola a página até o botão ficar visível
          .should('be.visible')  // Verifica se o botão está visível
          .click();  // Clica no botão "Saiba Mais" // Clica no botão "Saiba Mais"
                 
        cy.get('h1') // Seleciona o elemento h1 na nova página
          .should('contain.text', 'Inteligência para monetização, faturamento e gestão de parcerias.'); // Verifica o texto no h1
    }

    voltarPagina() {
        cy.go('back');  // Volta à página anterior
    }
    

}

export default new homeInicial();