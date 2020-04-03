class RegisterPage{

    visitRegisterLink(){
        cy.get('.ico-register').click();
    }

    verifyRegisterTitleVisible(){
        cy.contains('Register').should('be.visible');
    }

    verifyPersonalTitleVisible(){
        cy.contains('Your Personal Details').should('be.visible');
    }

    fillRegisterForm(){
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Shakeel');
        cy.get('#LastName').type('Ahmed');
        cy.get('[name=DateOfBirthDay]').select('2');
        cy.get('[name=DateOfBirthMonth]').select('April');
        cy.get('[name="DateOfBirthYear"]').select('1989');
        cy.get('#Email').type('ali.raza@gmail.com');
        cy.get('#Password').type('abcdef');
        cy.get('#ConfirmPassword').type('abcdef');
        cy.get('#register-button').click();
        cy.wait(3000);
        //cy.reload();
        //cy.contains('Your registration completed').should('be.visible');

    }

}

export default RegisterPage
