class UserAccount{

    getUserLoginLink(){
        
        cy.get('.ico-login').click();
        return this;
    }

    getEmailSingIn(value){
        cy.get('#Email').type(value);
        return this;
    }

    getPasswordSingIn(value){
        cy.get('#Password').type(value);
        return this;
    }

    getLoginButton(){

        cy.get('input[value="Log in"]').should('be.visible');
        cy.get('input[value="Log in"]').click();
        return this;
        

    }

    getUserAccountLink(){
        cy.visit('https://demo.nopcommerce.com/order/history');
        cy.wait(10000);
        cy.get('.ico-account').click();
        return this;
    }

    validateAccountHeading(){
        cy.get('.page-title').should('be.visible');
        return this;
    }

    getUserAddressesLink(){
        cy.get('.customer-addresses').click();
        return this;
    }

    getAddNewAddress(){
        cy.get('input[value=Add new]').click();
        return this;
    }

    getFirstNameAddress(value){

        var firstName=cy.get('#Address_FirstName');
        firstName.should('be.visible');
        firstName.clear();
        firstName.type(value);
        return this;
    }

    getLastNameAddress(value){

        var LastName=cy.get('#Address_LastName');
        LastName.should('be.visible');
        LastName.clear();
        LastName.type(value);
        return this;
    }

    
    getEmailAddress(value){

        var EmailAddress =cy.get('#Address_Email');
        EmailAddress.should('be.visible');
        EmailAddress.clear();
        EmailAddress.type(value);
        return this;
    }

    getCountry(value){

        var Country =cy.get('#Address_CountryId');
        Country.should('be.visible');
        Country.clear();
        Country.type(value);
        return this;
    }

    getCity(value){

        var city =cy.get('#Address_City');
        city.should('be.visible');
        city.clear();
        city.type(value);
        return this;
    }
    getAddressOne(value){

        var addressOne =cy.get('#Address_Address1');
        addressOne.should('be.visible');
        addressOne.clear();
        addressOne.type(value);
        return this;
    }
    getZipCode(value){

        var zipCode =cy.get('#Address_ZipPostalCode');
        zipCode.should('be.visible');
        zipCode.clear();
        zipCode.type(value);
        return this;

    }

    getPhoneNumber(value){

        var phoneNumber =cy.get('#Address_PhoneNumber');
        phoneNumber.should('be.visible');
        phoneNumber.clear();
        phoneNumber.type(value);
        return this;
    }

    getSaveButton(){

        var saveButton =cy.get('.button-1');
        saveButton.should('be.visible');
        saveButton.click();
        return this;
    }

    getOrderLinks(){
        var orderLinks =cy.get('.customer-orders');
        orderLinks.click();
        cy.contains('No orders').should('be.visible');
        return this;
    
    }


    getDownloadLinks(){
        var downloadLinks =cy.get('.downloadable-products');
        downloadLinks.click();
        cy.contains('There are no downloadable products').should('be.visible');
        return this;
    }

    getBackInStockLinks(){
        var backInStockLinks =cy.get('.back-in-stock-subscriptions');
        backInStockLinks.click();
        cy.contains('You are not currently subscribed to any Back In Stock notification lists').should('be.visible');
        return this;
    }

    getRewardPointLinks(){
        var rewardPointLinks =cy.get('.reward-points');
        rewardPointLinks.click();
        cy.contains('There is no balance history yet').should('be.visible');
        return this;
    }

    getCustomerReviewLinks(){
        var reviewLinks =cy.get('.customer-reviews');
        reviewLinks.click();
        cy.contains('You haven\'t written any reviews yet').should('be.visible');
        return this;
    }

    getLogOutLinks(){
        var logOutLinks =cy.get('.ico-logout');
        logOutLinks.click();
        return this;
        //cy.contains('No orders').should('be.visible');
    }
}
export default UserAccount;
