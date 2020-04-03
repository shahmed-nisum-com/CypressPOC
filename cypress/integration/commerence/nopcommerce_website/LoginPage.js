class LoginPage{

    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    findEmailField(value){
        const email=cy.get('input[name=Email]');
        email.clear();
        email.type(value);
        return this;
    }

    findPasswordField(value){
        const password=cy.get('input[name=Password]');
        password.clear();
        password.type(value);
        return this;
    }

    findLoginButton(){
        const button=cy.get('input[type=submit]');
        button.click();
        return this;
    }

    validateHTTPProtocol(){
        cy.location('protocol').should('eq','https:') 
        return this;
    }

    validateURL(){

        cy.url().should('include','nopcommerce');

    }




}

export default LoginPage;