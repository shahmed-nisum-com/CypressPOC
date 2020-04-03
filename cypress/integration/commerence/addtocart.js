import SearchProduct from './nopcommerce_website/SearchProduct';
import RegisterPage from './nopcommerce_website/RegisterPage';
import UserAccount from './nopcommerce_website/UserAccount';

import LoginPage from './nopcommerce_website/LoginPage';





const spObj=new SearchProduct();
const RgObj=new RegisterPage();
const UAObj=new UserAccount();
const lp=new LoginPage();




describe('Register Suite Test',()=>{
    it('Open the register page',()=>{
        spObj.visit();
        RgObj.visitRegisterLink();
    });

    it('validate HTTP ', () =>{
        spObj.validateHTTPProtocol();
    })

    it('URL should have substring --nopcommerce',()=>{

        spObj.validateURL();

    });

    it('Verify page title',()=>{
        RgObj.verifyRegisterTitleVisible();
    });

    it('Verify personal title',()=>{
        RgObj.verifyPersonalTitleVisible();
    });

    it('Insert Register form',()=>{
        RgObj.fillRegisterForm();
    });

});



describe('Test Suit Search product and add into cart',function(){

    it('Go to site',function(){
        
        spObj.visit();
       
    });

    it('validate HTTP ', () =>{
        spObj.validateHTTPProtocol();
    })

    it('URL should have substring --nopcommerce',()=>{

        spObj.validateURL();

    });



    it('Search a product',() =>{
        spObj.getSearchField('Apple MacBook Pro 13-inch');
    });

    it('Click on search button',() =>{
        spObj.getSearchButton();
    });

    it('Click on Add-to-Cart Button',()=>{
        spObj.getAddToCartButton();
    });

    it('Get Increase quantity field and change it',() =>{
        spObj.getIncrementQuantityButton('2');
    });

    it('Click Again Add-to-Cart Button After changing the quantity',()=>{
        spObj.getAddtoCartAfterIncreaseQuantity();
    });

    it('Click on Shopping cart screen',()=>{
        spObj.goToShoppingCartScreen();
    });

    it('validate unite price and sub total price',()=>{
        spObj.validateUnitePriceandSubscription();
    });

    it('Click on checkout button',()=>{
        spObj.findCheckoutButton();
    });

    it('close Term aggrement',()=>{
        spObj.closeTermPopup();
    });

    it('Click on checkout button after accepting terms and conditions',()=>{
        spObj.findCheckoutButton();
    });

    // it('Checkout as a guest User',()=>{
    //     spObj.findCheckOutAsGuestUser();
    // })


});


describe('User Account Suite Test',()=>{
    it('Go to User account Link',()=>{
        spObj.visit();
        UAObj.getUserLoginLink();
    });

    it('Get Email and send value',()=>{
        UAObj.getEmailSingIn('ali.raza@gmail.com')
    });

    it('Get Password and send value',()=>{
        UAObj.getPasswordSingIn('abcdef');
    });

    it('Click on login button',()=>{
        UAObj.getLoginButton();
    });

    // it('Trace User Account link',()=>{

    //     UAObj.getUserAccountLink();
    // });

    // it('Trace and validate User account heading',()=>{

    //     UAObj.validateAccountHeading();
    // });

    // it('Trace and Click on User account link',()=>{

    //     UAObj.getUserAddressesLink();
    // });
    // it('Trace and click on Add New Address',()=>{
    //     UAObj.getAddNewAddress();
    // });

    // it('Fill the address form',()=>{


    //     UAObj.getFirstNameAddress('shakeel');
    //     UAObj.getLastNameAddress('ahmed');
    //     UAObj.getEmailAddress('ali.raza@gmail.com');
    //     UAObj.getCountry('Pakistan');
    //     UAObj.getCity('Hyderabad');
    //     UAObj.getAddressOne('ABCD');
    //     UAObj.getZipCode('72010');
    //     UAObj.getPhoneNumber('03062541421');
    //     UAObj.getSaveButton();
    // });
    // it('Trace Order and Click on it',()=>{

    //     UAObj.getOrderLinks();

    // });
    // it('Trace Downloadable Product and Click on it',()=>{

    //     UAObj.getDownloadLinks();

    // });
    // it('Trace Back In Stock and Click on it',()=>{

    //     UAObj.getBackInStockLinks();
    // });
    // it('Trace Reward Points and Click on it',()=>{
    //     UAObj.getRewardPointLinks();
    // });
    // it('Trace My Product Review and Click on it',()=>{

    //     UAObj.getCustomerReviewLinks();
    // });
    // it('Trace LogOut and Click on it',()=>{

    //     UAObj.getLogOutLinks();
    // });

});


describe('Login page',function(){

    
    it('First Test',function(){
        
        lp.visit();
        lp.findEmailField("admin@yourstore.com");
        lp.findPasswordField("admin");
        lp.findLoginButton();
    });

    it('validate HTTP ', () =>{
        lp.validateHTTPProtocol();
    })

    it('URL should have substring --nopcommerce',()=>{

        lp.validateURL();
    });
});


