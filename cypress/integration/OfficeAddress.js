describe('Validate office address',() =>{

    
    it('Open google URL',() =>{

        cy.visit('https://www.google.com');


        cy.get('.gLFyf').type('Nisum Karachi');
        cy.get('.gLFyf').type('{enter}');
        
        cy.contains("Address:").should('be.visible');
       
        cy.get('[data-dtype="d3ifr"]>span.LrzXr').first().invoke('text').should('eq','Building # 28-C، Jami Commercial Street 2، Phase VII D.H.A، Phase 2 Commercial Area Defence Housing Authority, Karachi, Karachi City, Sindh 75500');
       
       
        cy.get('[href="https://www.nisum.com/"] > .LC20lb');
       
    });

    it('Navigate to Nisum website',()=>{

        cy.visit('https://www.nisum.com/');
       
        cy.contains('PAKISTAN').click();
        cy.get('#pills-pakistan > .row > .col-md-4 > :nth-child(2) > :nth-child(1) > span')
        .invoke('text').should('eq','Plot #28-C, Jami Commercial Street 2\nPhase VII, DHA. Karachi');


    });

});