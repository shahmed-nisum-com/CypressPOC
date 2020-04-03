class SearchProduct{
    visit(){
        cy.visit("https://demo.nopcommerce.com/")
    }

    validateHTTPProtocol(){
        cy.location('protocol').should('eq','https:') 
        return this;
    }

    validateURL(){

        cy.url().should('include','nopcommerce');
        return this;

    }

    getSearchField(value){
        var searchField=cy.get('#small-searchterms')
        searchField.clear();
        searchField.type(value);
        return this;
    }

    getSearchButton(){
        var searchbutton=cy.get(".search-box-button[value='Search']")
        searchbutton.click()
        return this
    }

    getAddToCartButton(){
        var addtocartbutton=cy.get('.product-box-add-to-cart-button')
        addtocartbutton.click()
        return this

    }

    getIncrementQuantityButton(value){
        var increaseitemquantity=cy.get("#addtocart_4_EnteredQuantity")
        increaseitemquantity.clear()
        increaseitemquantity.type(value)
        return this
    }

    getAddtoCartAfterIncreaseQuantity(){
        var addtocartafterincreasequantity=cy.get("#add-to-cart-button-4");
        addtocartafterincreasequantity.click()
        return this
    }

    goToShoppingCartScreen(){

        cy.wait(5000);
        var gotoshoppingcart=cy.get("#topcartlink>a>span.cart-label")
        gotoshoppingcart.click()
        cy.wait(3000);
        return this

    }

    validateUnitePriceandSubscription(){

        var unitprice= cy.get(".product-unit-price")
        unitprice.contains("$1,800.00");
        var subtotalprice=cy.get(".product-subtotal")
        subtotalprice.contains("$3,600.00");

    }

    findCheckoutButton(){
        cy.get('#checkout').click();
    }

    closeTermPopup(){
        cy.get('.ui-button').click();
        cy.wait(2000)
        cy.get('#termsofservice').click();
    }

    findCheckOutAsGuestUser(){
        cy.get('.checkout-as-guest-button').click();
    }


}

export default SearchProduct