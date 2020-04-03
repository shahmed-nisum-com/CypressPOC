describe('Validate office address',() =>{

    it('Open google URL',() =>{

        cy.visit('https://www.google.com');


        cy.get('.gLFyf').type('Nisum Karachi');
        cy.get('.gLFyf').type('{enter}');
        //cy.get('.gNO89b').click({force: true});
        cy.contains("Address:").should('be.visible');
       
        cy.get('[data-dtype="d3ifr"]>span.LrzXr').first().invoke('text').should('eq','Building # 28-C، Jami Commercial Street 2، Phase VII D.H.A، Phase 2 Commercial Area Defence Housing Authority, Karachi, Karachi City, Sindh 75500');
        
        //cy.wait(5000);

        //cy.get('[data-ved="2ahUKEwit0Zj-qcvoAhXlSxUIHR5UBU4QFSgAMAB6BAgEEAA"]').click();

        //cy.scrollTo(0,0);
        //cy.url().reload();
        //cy.get('div.rc[data-hveid="CAQQAA"]').first().click();
        cy.get('[href="https://www.nisum.com/"] > .LC20lb').invoke('removeAttr','target').dblclick();
        

        // var address=cy.get('[data-attrid="kc:/location/location:address"] > .Z1hOCe > .zloOqf > .LrzXr').should('contain','Jami Commercial');
        //cy.get('[data-attrid="kc:/location/location:address"] > .Z1hOCe > .zloOqf > .LrzXr').invoke('text').should('be.visible');
        // cy.get('[data-attrid="kc:/location/location:address"] > .Z1hOCe > .zloOqf > .LrzXr').then((el)=>{
        //     assert.equal(el.text,'Jami Commercial');
        // });
        // console.log(address);

        //cy.get('cite.iUh30.tjvcx').click({multiple:true});

    });


});