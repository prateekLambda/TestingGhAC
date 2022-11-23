/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')

import HomePage from '../pages/Homepage'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import Category from '../pages/Category'
import Pdp from '../pages/Pdp'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import MyAccount from '../pages/MyAccount'
// import LoginCDC from '../pages/Login'

/*FIXTURES*/
import financeData from '../../fixtures/financeData.json'
import authCookie from '../../fixtures/auth.json'

// CHILE DATA
let accessData = require('../../fixtures/Chile/accessData.json')

let addressData = require('../../fixtures/Chile/addressData.json')
let addressDataCO = require('../../fixtures/Colombia/addressData.json')

let itemsCategory = require('../../fixtures/Chile/itemsCategory.json')
let itemsCategoryCy = require('../../fixtures/Chile/itemsCategoryCy.json')

let itemsFooter = require('../../fixtures/Chile/itemsFooter.json');
let itemsFooterLbel = require('../../fixtures/Chile/itemsFooterLbel.json');
let itemsFooterCy = require('../../fixtures/Chile/itemsFooterCy.json');

let itemsHeader = require('../../fixtures/Chile/itemsHeader.json');
let itemsHeaderLbel = require('../../fixtures/Chile/itemsHeaderLbel.json');
let itemsHeaderCy = require('../../fixtures/Chile/itemsHeaderCy.json');
let itemsHeaderPRD = require('../../fixtures/Chile/itemsHeaderPRD.json');
let itemsHeaderLbelPRD = require('../../fixtures/Chile/itemsHeaderLbelPRD.json');
let itemsHeaderCyPRD = require('../../fixtures/Chile/itemsHeaderCyPRD.json');

let itemsHomepage = require('../../fixtures/Chile/itemsHomepage.json')
let itemsHomepagePRD = require('../../fixtures/Chile/itemsHomepagePRD.json')
let itemsHomepageLbelPRD = require('../../fixtures/Chile/itemsHomepageLbelPRD.json')
let itemsHomepageCyPRD = require('../../fixtures/Chile/itemsHomepageCyPRD.json')

let itemsPdp = require('../../fixtures/Chile/itemsPdp.json');
let itemsPdpLbel = require('../../fixtures/Chile/itemsPdpLbel.json');
let itemsPdpCy = require('../../fixtures/Chile/itemsPdpCy.json');
let itemsPdpPRD = require('../../fixtures/Chile/itemsPdpPRD.json');
let itemsPdpLbelPRD = require('../../fixtures/Chile/itemsPdpLbelPRD.json');
let itemsPdpCyPRD = require('../../fixtures/Chile/itemsPdpCyPRD.json');

let itemPromotion = require('../../fixtures/Chile/itemsPromotion.json')
let itemPromotionPRD = require('../../fixtures/Chile/itemsPromotionPRD.json')
let itemPromotionLbelPRD = require ('../../fixtures/Chile/itemsPromotionLbelPRD.json')
let itemPromotionCyPRD = require ('../../fixtures/Chile/itemsPromotionCyPRD.json')

let personalData = require('../../fixtures/Chile/personalData.json')

let product = require('../../fixtures/Chile/product.json');
let productLbel = require('../../fixtures/Chile/productLbel.json');
let productCy = require('../../fixtures/Chile/productCy.json');
let productPRD = require('../../fixtures/Chile/productPRD.json');
let productLbelPRD = require('../../fixtures/Chile/productLbelPRD.json');
let productCyPRD = require('../../fixtures/Chile/productCyPRD.json');

// COLOMBIA DATA
let accessDataCO = require('../../fixtures/Colombia/accessData.json')

let itemsCategoryCOPRD = require('../../fixtures/Colombia/itemsCategoryPRD.json')

let itemsFooterEsikaCO = require('../../fixtures/Colombia/itemsFooterEsika.json');
let itemsFooterCyCO = require('../../fixtures/Colombia/itemsFooterCy.json');

let itemsHeaderCyPRDCO = require('../../fixtures/Colombia/itemsHeaderCyPRD.json');
let itemsHeaderEsikaPRDCO = require('../../fixtures/Colombia/itemsHeaderEsikaPRD.json');

let itemsHomepageCOPRD = require('../../fixtures/Colombia/itemsHomepagePRD.json')
let itemsHomepageCOCyPRD = require('../../fixtures/Colombia/itemsHomepageCyPRD.json')

let itemsPdpCO = require('../../fixtures/Colombia/itemsPdp.json');
let itemsPdpCOPRD = require('../../fixtures/Colombia/itemsPdpPRD.json');
let itemsPdpCOCyPRD = require('../../fixtures/Colombia/itemsPdpCyPRD.json');

let personalDataCO = require('../../fixtures/Colombia/personalData.json')

let productCO = require('../../fixtures/Colombia/product.json');
let productCOPRD = require('../../fixtures/Colombia/productPRD.json');
let productCyCOPRD = require('../../fixtures/Colombia/productCyPRD.json');

// PERU DATA
let accessDataPE = require('../../fixtures/Peru/accessData.json')
let addressDataPE = require('../../fixtures/Peru/addressData.json')

let itemsCategoryPRDPE = require('../../fixtures/Peru/itemsCategoryPRD.json');
let itemsCategoryCYPRD = require('../../fixtures/Peru/itemsCategoryCyPRD.json');

let itemsFooterEsikaPE = require('../../fixtures/Peru/itemsFooterEsika.json');
let itemsFooterCYPE = require('../../fixtures/Peru/itemsFooterCy.json');

let itemsHeaderEsikaPRDPE = require('../../fixtures/Peru/itemsHeaderEsikaPRD.json');
let itemsHeaderCyPRDPE = require('../../fixtures/Peru/itemsHeaderCyPRD.json');

let itemsPdpPRDPE = require('../../fixtures/Peru/itemsPdpPRD.json');
let itemsPdpCyPRDPE = require('../../fixtures/Peru/itemsPdpCyPRD.json');

let itemsHomepagePRDPE = require('../../fixtures/Peru/itemsHomepagePRD.json')

let personalDataPE = require('../../fixtures/Peru/personalData.json')

let productPRDPE = require('../../fixtures/Peru/productPRD.json');
let productCYPRD = require('../../fixtures/Peru/productCyPRD.json');

// MEXICO DATA
let accessDataMX = require('../../fixtures/Mexico/accessData.json')
let addressDataMX = require('../../fixtures/Mexico/addressData.json')

let itemsCategoryPRDMX = require('../../fixtures/Mexico/itemsCategoryMXPRD.json')
let itemsCategoryLbelMXPRD = require('../../fixtures/Mexico/itemsCategoryLbelMXPRD.json')
let itemsCategoryCyMXPRD = require('../../fixtures/Mexico/itemsCategoryCyMXPRD.json')

let itemsFooterMX = require('../../fixtures/Mexico/itemsFooter.json');

let itemsHeaderLbelPRDMX = require('../../fixtures/Mexico/itemsHeaderLbelPRD.json');
let itemsHeaderCyPRDMX = require('../../fixtures/Mexico/itemsHeaderCyPRD.json');

let itemsHomepageMXCyPRD = require('../../fixtures/Mexico/itemsHomepageCyPRD.json')
let itemsHomepageMXLbelPRD = require('../../fixtures/Mexico/itemsHomepageLbelPRD.json')

let itemsPdpMXPRD = require('../../fixtures/Mexico/itemsPdpPRD.json');
let itemsPdpLbelMXPRD = require('../../fixtures/Mexico/itemsPdpLbelPRD.json');
let itemsPdpCyMXPRD = require('../../fixtures/Mexico/itemsPdpCyPRD.json');

let productMXPRD = require('../../fixtures/Mexico/productPRD.json');
let productLbelMXPRD = require('../../fixtures/Mexico/productLbelPRD.json');
let productMXCyPRD = require('../../fixtures/Mexico/productCyPRD.json');

let personalDataMX = require('../../fixtures/Mexico/personalData.json')

// PANAMA DATA
let accessDataPA = require('../../fixtures/Panama/accessData.json');
let addressDataPA = require('../../fixtures/Panama/addressData.json');
let itemsCategoryLbelPAPRD = require('../../fixtures/Panama/itemsCategoryLbelPAPRD.json');
let itemsFooterPA = require('../../fixtures/Panama/itemsFooter.json');
let itemsHeaderLbelPRDPA = require('../../fixtures/Panama/itemsHeaderLbelPRD.json');
let itemsHomepagePALbelPRD = require('../../fixtures/Panama/itemsHomepageLbelPRD.json');
let itemsPdpLbelPAPRD = require('../../fixtures/Panama/itemsPdpLbelPRD.json');
let personalDataPA = require('../../fixtures/Panama/personalData.json');
let productLbelPAPRD = require('../../fixtures/Panama/productLbelPRD.json');

// ECUADOR DATA
let accessDataEC = require('../../fixtures/Ecuador/accessData.json');
let addressDataEC = require('../../fixtures/Ecuador/addressData.json');
let itemsPdpLbelECPRD = require('../../fixtures/Ecuador/itemsPdpLbelPRD.json');
let personalDataEC = require('../../fixtures/Ecuador/personalData.json');
let productLbelECPRD = require('../../fixtures/Ecuador/productLbelPRD.json');
let itemsFooterEC = require('../../fixtures/Ecuador/itemsFooter.json');
let itemsHeaderLbelPRDEC = require('../../fixtures/Ecuador/itemsHeaderLbelPRD.json');

if (brand === "Lbel" && regressionEnv === "PRD" && country === "EC") {
    accessData = accessDataEC
    addressData = addressDataEC
    itemsPdp = itemsPdpLbelECPRD
    personalData = personalDataEC
    product = productLbelECPRD
    itemsFooter = itemsFooterEC
    itemsHeader = itemsHeaderLbelPRDEC
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "PA") {
    itemsPdp = itemsPdpLbelPAPRD;
    itemsHomepage = itemsHomepagePALbelPRD
    product = productLbelPAPRD,
    addressData = addressDataPA
    itemsCategory = itemsCategoryLbelPAPRD
    accessData = accessDataPA
    itemsHeader = itemsHeaderLbelPRDPA
    itemsFooter = itemsFooterPA
    personalData = personalDataPA
}

if (brand === "Esika" && regressionEnv === "PRD" && country === "MX") {
    itemsPdp = itemsPdpMXPRD;
    // itemsHomepage = itemsHomepageMXLbelPRD
    product = productMXPRD,
    addressData = addressDataMX
    itemsCategory = itemsCategoryPRDMX
    accessData = accessDataMX
    // itemsHeader = itemsHeaderLbelPRDMX
    itemsFooter = itemsFooterMX
    personalData = personalDataMX
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "MX") {
    itemsPdp = itemsPdpLbelMXPRD;
    itemsHomepage = itemsHomepageMXLbelPRD
    product = productLbelMXPRD,
    addressData = addressDataMX
    itemsCategory = itemsCategoryLbelMXPRD
    accessData = accessDataMX
    itemsHeader = itemsHeaderLbelPRDMX
    itemsFooter = itemsFooterMX
    personalData = personalDataMX
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "MX") {
    itemsPdp = itemsPdpCyMXPRD;
    itemsHomepage = itemsHomepageMXCyPRD
    product = productMXCyPRD,
    addressData = addressDataMX
    itemsCategory = itemsCategoryCyMXPRD
    accessData = accessDataMX
    itemsHeader = itemsHeaderCyPRDMX
    itemsFooter = itemsFooterMX
    personalData = personalDataMX
}

if (brand == "Esika" && regressionEnv == "QAS" && country == "CO") {
    itemsPdp = itemsPdpCO;
    product = productCO;
    addressData = addressDataCO
    accessData = accessDataCO
    personalData = personalDataCO
    itemsFooter = itemsFooterEsikaCOterCO
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CO") {
    itemsHeader = itemsHeaderEsikaPRDCO
    itemsHomepage = itemsHomepageCOPRD
    itemPromotion = itemPromotionPRD
    itemsPdp = itemsPdpCOPRD;
    itemsCategory = itemsCategoryCOPRD
    product = productCOPRD;
    addressData = addressDataCO
    accessData = accessDataCO
    personalData = personalDataCO
    itemsFooter = itemsFooterEsikaCO
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CO") {
    itemsHeader = itemsHeaderCyPRDCO
    itemsHomepage = itemsHomepageCOCyPRD
    product = productCyCOPRD;
    addressData = addressDataCO
    accessData = accessDataCO
    personalData = personalDataCO
    itemsFooter = itemsFooterCyCO
    itemsPdp = itemsPdpCOCyPRD
    itemsCategory = itemsCategoryCOPRD
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "PE") {
    itemsHeader = itemsHeaderCyPRDPE
    itemPromotion = itemPromotionPRD
    itemsPdp = itemsPdpCyPRDPE;
    itemsCategory = itemsCategoryCYPRD
    product = productCYPRD;
    addressData = addressDataPE
    accessData = accessDataPE
    personalData = personalDataPE
    itemsFooter = itemsFooterCYPE
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "PE") {
    itemsHeader = itemsHeaderEsikaPRDPE
    // itemsHomepage = itemsHomepagePRDPE
    itemPromotion = itemPromotionPRD
    itemsPdp = itemsPdpPRDPE;
    itemsCategory = itemsCategoryPRDPE
    product = productPRDPE;
    addressData = addressDataPE
    accessData = accessDataPE
    personalData = personalDataPE
    itemsFooter = itemsFooterEsikaPE
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CL") {
    itemsPdp = itemsPdpPRD;
    product = productPRD;
    itemsHeader = itemsHeaderPRD
    itemsHomepage = itemsHomepagePRD
    itemPromotion = itemPromotionPRD
}

if (brand == "Cyzone" && regressionEnv == "QAS" && country == "CL") {
    itemsHeader = itemsHeaderCy;
    itemsFooter = itemsFooterCy;
    itemsCategory = itemsCategoryCy
    itemsPdp = itemsPdpCy;
    product = productCy;
    itemPromotion = itemPromotionCyPRD

}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CL") {
    itemsHeader = itemsHeaderCyPRD;
    itemsFooter = itemsFooterCy;
    itemsCategory = itemsCategoryCy
    itemsPdp = itemsPdpCyPRD;
    product = productCyPRD;
    itemPromotion = itemPromotionCyPRD
    itemsHomepage = itemsHomepageCyPRD;
}

if (brand == "Lbel" && regressionEnv == "QAS" && country == "CL") {
    itemsFooter = itemsFooterLbel;
    itemsHeader = itemsHeaderLbel;
    itemsPdp = itemsPdpLbel;
    product = productLbel;
    itemPromotion = itemPromotionLbelPRD   
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "CL") {
    itemsFooter = itemsFooterLbel;
    itemsHeader = itemsHeaderLbelPRD;
    itemsPdp = itemsPdpLbelPRD;
    product = productLbelPRD;
    itemsHomepage = itemsHomepageLbelPRD
    itemPromotion = itemPromotionLbelPRD

}

// ======================== FAKER ========================

import { faker } from '@faker-js/faker'
/*Personal Data*/
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const fullNameFaker = firstNameFaker + ' ' + lastNameFaker
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
    firstNameFaker,
    lastNameFaker,
    '@invalidprovider'
)
const passwordFaker = faker.internet.password(16)
//const documentFaker = faker.helpers.replaceSymbolWithNumber('#########K')
const phoneFaker = faker.helpers.replaceSymbolWithNumber('2########')
const phoneFakerCO = faker.helpers.replaceSymbolWithNumber('5#######')
const phoneFakerMX = faker.helpers.replaceSymbolWithNumber('55########')
const phoneFakerPE = faker.helpers.replaceSymbolWithNumber('9########')
/*Address Data*/
const customStreetFaker = faker.address.street()
//const customStreetNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
const customNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
//const customStreetComplementFaker = faker.helpers.replaceSymbolWithNumber('##')
const customCvvFaker = faker.finance.creditCardCVV()
const complementFaker = faker.address.direction()
///const neighborhookFaker = faker.lorem.word(12)
/*Cartões*/
const visaRandom = faker.helpers.replaceSymbolWithNumber('4000############')
const mastercardRandom = faker.helpers.replaceSymbolWithNumber('55##############')
const americanExpressRandom = faker.helpers.replaceSymbolWithNumber('37##############')
const dinersRandom = faker.helpers.replaceSymbolWithNumber('3007##########')
/*const mastercardRandom = faker.finance.creditCardNumber('mastercard')
//const visaRandom = faker.finance.creditCardNumber('visa')
//const dinersRandom = faker.finance.creditCardNumber('diners_club')
const americanExpressRandom = faker.finance.creditCardNumber('american_express')*/
//const cvvCardRandom = faker.helpers.replaceSymbolWithNumber('###')
/*Coupon*/
const invalidCoupon = faker.helpers.replaceSymbolWithNumber('TEST###')
// ======================== FAKER ========================

beforeEach(() => {
    if (country === "PA" || country === "EC") {
        cy.setCookie('VtexIdclientAutCookie', authCookie.authCookie)
    }
  })

Given('At {}', (device) => {
    switch (device) {
        case 'Desktop':
               
            break
        case 'Mobile':
             HomePage.viewPortSamsungS10()
             
            break
    }
})

Given('it must appear Mobile', () => {
    HomePage.hasBannerMTO(accessData[2].storeName)
})

Given('I am on the homepage with the correct URL', () => {
    HomePage.accessHomepage()
    
})

Given('I access to any page that is not checkout or my Account', () => {
    HomePage.accessHomepage()
})

Given('I am on a PDP', () => {
    if (country == "PE") {
        HomePage.accessHomepage()
    }
    Pdp.accessPdp(itemsPdp[0][0].pdpUrl);
})

Given('I am on a PDP stamps', () => {
    Pdp.accessPdp(itemsPdp[0][0].pdpUrlstamps);
})

Given('I am on a PDP stamps MTO', () => {
    Pdp.accessPdp(itemsPdp[0][0].pdpUrlstampsMTO);
})

Given('I am on a PDP for Cart', () => {
    Pdp.accessPdp(product[0].urlBaseCart)
})

Given('I force clean the cookies and the LocalStorage', () => {
    cy.wait(1500)
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.wait(1500)
})

Given('I clear cookies', () => {
    cy.clearCookies()
})

Given('I clear the local storage', () => {
    cy.clearLocalStorage()
})

And('I clear the local session', () => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
      })
})

// ======================== CART DESKTOP ========================
// Scenario: 14341 [Cart/Checkout][Desktop] Add item to cart
When('I add the product to the cart', () => {
    cy.wait(2500)
    Pdp.addProductToCart()
    cy.wait(3000)
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
    }
    Pdp.accessCartPage()
    cy.wait(2000)
})

Then('I validate if the product is in the cart', () => {
    CartPage.validateFnImgProduct1(product[0].SKU, product[0].imgUrl)
    CartPage.validateProductUrlName1(product[0].SKU, product[0].Product, product[0].url)
    cy.wait(2000)
})

And('I check if the price is correct', () => {
    if (country === "PE") {
        CartPage.checkProductPrice((itemsPdp[1][0].sellingPrice).slice(0, 2) + ' ' + (itemsPdp[1][0].sellingPrice).slice(2))
    } else {
        CartPage.checkProductPrice((itemsPdp[1][0].sellingPrice).slice(0, 1) + ' ' + (itemsPdp[1][0].sellingPrice).slice(1))
    }
    // workaround data
    // CartPage.checkProductPrice(itemsPdp[1][0].sellingPrice)

})

And('I go to checkout', () => {
    CartPage.clickBtnCartToOrderForm()
})

// Scenario: 14342 [Cart/Checkout][Desktop] Remove item from the cart
Given('I have one item in the cart with {} units', (quantity) => {
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
    }
    CartPage.accessCartPageWithProduct1(product[0].SKU, quantity)
    cy.wait(2000)
})

And('I remove the item from cart', () => {
    CartPage.clickFnItemRemove(product[0].SKU)
})

Then('I validate if the product is not in the cart', () => {
    CartPage.checkEmptyCart()
})

// Scenario: 14343 [Cart/Checkout][Desktop] Add two items to cart
When('I add two items in the cart', () => {
    Pdp.addProductToCart()
    cy.wait(2000)
    Pdp.accessPdp(itemsPdp[0][0].pdpUrl2)
    cy.wait(2000)
    Pdp.addProductToCart()
    cy.wait(2000)
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie')
    }
})

Then('I validate if the two items are in cart', () => {
    Pdp.accessCartPage()
    CartPage.validateFnImgProduct1(product[0].SKU, product[0].imgUrl)
    CartPage.validateFnImgProduct1(product[1].SKU, product[1].imgUrl)
    CartPage.validateProductUrlName1(product[0].SKU, product[0].Product, product[0].url)
    CartPage.validateProductUrlName1(product[1].SKU, product[1].Product, product[1].url)
})

// Scenario: 14344 [Cart/Checkout][Desktop] Clear all cart
When('I add two items to the cart by URL', () => {
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
    }
    CartPage.accessCartPageWithProducts1and2(product[0].SKU, product[1].SKU, '1')
})

When('I remove all items from cart', () => {
    // Pdp.accessCartPage()
    CartPage.clickFnItemRemove(product[1].SKU)
    cy.wait(1000)
    CartPage.clickFnItemRemove(product[0].SKU)
})

Then('I validate if is clean cart', () => {
    CartPage.checkEmptyCart()
})

// Scenario: 14345 [Cart/Checkout][Desktop] Add item with two units
And('I add the quantity for 3 units', () => {
    cy.wait(2000)
    CartPage.clickXpFnIncrementQuantity(product[0].SKU)
    cy.wait(4000)
    CartPage.clickXpFnIncrementQuantity(product[0].SKU)
    cy.wait(4000)
})

Then('I validate if the quantity has been changed to 3', () => {
    CartPage.checkQuantity(product[0].SKU)
})

// Scenario: 14346 [Cart/Checkout][Desktop] Reduce item units in the cart
And('I add 2 units to the cart', () => {
    cy.wait(1000)
    CartPage.clickXpFnIncrementQuantity(product[0].SKU)
    cy.wait(4000)
    CartPage.clickXpFnIncrementQuantity(product[0].SKU)
    cy.wait(1500)
})

And('I reduce the quantity for 2 units', () => {
    cy.wait(1500)
    CartPage.clickXpFnDecrementQuantity(product[0].SKU)
    cy.wait(1500)
})

Then('I validate if the quantity has been reset to 2', () => {
    CartPage.checkQuantity2(product[0].SKU)
})

// Scenario: 14347 [Cart/Checkout][Desktop] Add invalid discount coupon
And('I type a invalid discount coupon', () => {
    cy.wait(2000)
    CartPage.typeCoupon(product[0].couponInvalid)
    cy.wait(1000)
})

Then('The discount coupon should be invalid', () => {
    CartPage.invalidMessageCoupon(product[0].couponInvalid)
})

// Scenario: 14348 [Cart/Checkout][Desktop] Add and delete valid discount coupon
And('I type a valid discount coupon', () => {
    CartPage.typeCoupon(product[0].couponValid)
})

Then('The discount coupon should be valid', () => {
    CartPage.validFieldCoupon()    
    cy.wait(1000)
})

And('Delete the coupon', () => {
    CartPage.removeValidCoupon()
})

// Scenario: 14349 [Cart/Checkout][Desktop] Calculate valid shipping
And('I select a valid address', () => {
    cy.wait(4000)
    CartPage.clickCalculateBtn()
    if (country != "MX" || country != "PE") {
        CartPage.calculateValidShip(addressData[0].state, addressData[0].district)
    }
    if (country == "MX") {
        CartPage.calculateValidZipCode(addressData[0].zipcode)
    }
    if (country == "PE") {
        CartPage.calculateValidShipPE(addressData[0].state, addressData[0].district, addressData[0].city)
    }
})

Then('The shipping price is displayed', () => {
    if (country != "MX") {
        CartPage.checkPriceValidShip()
    }
    if (country == "MX") {
        CartPage.clickCalculateBtnMX()
        cy.wait(2000)
        CartPage.checkPriceValidShip()
    }
})

// Scenario: 14350 [Cart/Checkout][Desktop] Calculate valid shipping without required fields
And('I do not fill the required fields', () => {
    cy.wait(4000)
    CartPage.clickCalculateBtn()
})

Then('The shipping price is not displayed', () => {
    CartPage.checkPriceValidShipNotDisplay()
})

// Scenario: 14351 [Cart/Checkout][Desktop] Calculate valid shipping without Comuna field 
And('I do not fill the comuna field', () => {
    cy.wait(3000)
    CartPage.clickCalculateBtn()
    cy.wait(1000)
    CartPage.fillFieldRegion(addressData[0].state)
    cy.wait(1000)
    CartPage.clickCalculateBtn2()
})

// Scenario: 00000 [Cart][Desktop] Validate Promo More for Less
Given('I have {} units of the product', (quantity) => {
    CartPage.accessCartPageWithProduct1(itemPromotion[0].promoSKU, quantity)
})

Then('I see full price and free units', () => {
    CartPage.checkPromoMoreForLessPrice(itemPromotion[0].promoFullPrice, itemPromotion[0].promoFreePrice)
})

And('The purchase are according to the promotion rules', () => {
    CartPage.checkCartSubTotal(itemPromotion[0].promoSubTotal)
    CartPage.checkCartDiscount(itemPromotion[0].promoDiscount)
    CartPage.checkCartTotal(itemPromotion[0].promoTotal)
})

// Scenario: 00000 [Cart][Desktop] Validate Promo Buy Together
Given('I have {} unit of 2 promotion products', (quantity) => {
    CartPage.accessCartPageWithProducts1and2(itemPromotion[1].promoSKU, itemPromotion[1].promoSKU2, quantity)
})

Then('I see both products with the right prices', () => {
    CartPage.checkProductsRightPrice(itemPromotion[1].promoBuyTogetherPrice, itemPromotion[1].promoBuyTogetherPrice2)
})

And('The purchase are according to the Buy Together rules', () => {
    CartPage.checkCartSubTotal(itemPromotion[1].promoSubTotal)
    CartPage.checkCartDiscount(itemPromotion[1].promoDiscount)
    CartPage.checkCartTotal(itemPromotion[1].promoTotal)
})

// Scenario: 00000 [Cart][Desktop] Validate Promo Not Free Ship
Given('I have one item in the cart with {} units promotion', (quantity) => {
    CartPage.accessCartPageWithProduct1(itemPromotion[3].promoSKU, quantity)
    cy.wait(2000)
})
Then('The shipping price is not free', () => {
    CartPage.checkShipNotFree()
})

// Scenario: 00000 [Cart][Desktop] Validate Promo Free Ship
Then('The shipping price is free', () => {

    CartPage.checkShipFree()
})

// Scenario: 00000 [Cart][Desktop]  Validate Promo Gift
Given('I have one item in the cart with {} units for Gift', (quantity) => {
    CartPage.accessCartPageWithProduct1(itemPromotion[2].promoSKU, quantity)
})

Given('The Gift name is according to the promotion rules', () => {
    CartPage.checkGiftName()
})

// ======================== CART MOBILE ========================
// Scenario: 14352 [Cart/Checkout][Mobile] Add item to cart
When('I add the product to the cart Mobile', () => {
    Pdp.addProductToCartMobile()
    cy.wait(1000)
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
    }
    Pdp.accessCartPage()
    cy.wait(1000)
})

//   Scenario: 14354 [Cart/Checkout][Mobile] Add two items to cart
When('I add two items in the cart Mobile', () => {
    cy.wait(2000)
    Pdp.addProductToCartMobile()
    cy.wait(2000)
    Pdp.accessPdp(itemsPdp[0][0].pdpUrl2)
    cy.wait(2000)
    Pdp.addProductToCartMobile()
    cy.wait(2000)
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
    }
})

// Scenario: Add invalid discount coupon Mobile
Then('The discount coupon should be invalid Mobile', () => {
    CartPage.invalidMessageCouponMobile(product[0].couponInvalid)
})

And('I check if the price is correct Mobile', () => {
    //CartPage.checkProductPriceMobile((itemsPdp[1][0].sellingPrice).slice(0, 1) + ' ' + (itemsPdp[1][0].sellingPrice).slice(1))
    // workaround data
    if (country === "PE") {
        CartPage.checkProductPrice((itemsPdp[1][0].sellingPrice).slice(0, 2) + ' ' + (itemsPdp[1][0].sellingPrice).slice(2))
    } else {
    CartPage.checkProductPriceMobile((itemsPdp[1][0].sellingPrice).slice(0, 1) + ' ' + (itemsPdp[1][0].sellingPrice).slice(1))
    }
})

Then('the url must contain the following parameter {} in the final part for Consultant Page', (store) => {
    cy.wait(2000)
    HomePage.checkMTOURL(accessData[4].storeUrl)
});

// ======================== CART MTO ========================
// Scenario: 00000 [Cart][Desktop][MTO] Validate Promo More for Less
And('I set the Consultant cookie for {}', () => {
    CartPage.setCookieConsultant(accessData[2].storeUrl)
})

And('I check the consultant cookie for {}', (s) => {
    CartPage.getCookieConsultant(accessData[2].storeUrl)
})

// Scenario: Change the store  
Then('I Change the store', () => {
    Category.accessCategoryPage(itemsCategory[0][0].categoryNewUrlMTO)
    cy.wait(2000)
})

And('I go to cart', () => {
    Pdp.accessCartPage()
  })


// ======================== CHECKOUT ========================
And('I have one item in the cart with {} units for Checkout', (quantity) => {
    if (country === "PA") {
        cy.clearCookie('VtexIdclientAutCookie',  {timeout: 4000})
        CheckoutPage.accessCartPageToCheckout(product[0].SKU, quantity)
        cy.wait(2000)        
    } else {
        CheckoutPage.accessCartPageToCheckout(product[0].SKU, quantity)
        cy.wait(2000)
    }
})

And('I proceed to checkout', () => {
    CartPage.clickBtnCartToOrderForm()
    CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
    CheckoutPage.clickBtnPreEmail()
    cy.wait(1000)
})

//  Scenario: Fill all fields - Checkout
if (country == "CL") {
    When('I fill in the checkout data', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFaker)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "CO") {
    When('I fill in the checkout data', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerCO)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.checkTermsAndConditionsCO()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "MX") {
    When('I fill in the checkout data', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        // CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerMX)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        // CheckoutPage.checkTermsAndConditionsCO()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "PE") {
    When('I fill in the checkout data', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerPE)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "CL") {
    And('I fill the address data', () => {
        CheckoutPage.selectCmbState(addressData[0].state)
        CheckoutPage.selectCmbCity(addressData[0].city)
        CheckoutPage.typeCustomStreetShipping(customStreetFaker)
        CheckoutPage.typeCustomNumberShipping(customNumberFaker)
        CheckoutPage.typeComplementShipping(customNumberFaker)
        cy.scrollTo('bottom')   
    })    
}
if (country == "CO") {
    And('I fill the address data', () => {
        CheckoutPage.selectCmbState(addressData[0].state)
        CheckoutPage.selectCmbCityCO(addressData[0].district)
        CheckoutPage.typeCustomStreetShipping(customStreetFaker)
        CheckoutPage.typeCustomNumberShipping(customNumberFaker)
        CheckoutPage.typeComplementShipping(customNumberFaker)
        cy.scrollTo('bottom')
        cy.wait(2000)
    })    
}

if (country == "MX") {
    And('I fill the address data', () => {
        cy.wait(1000)
        CartPage.calculateValidZipCode(addressData[0].zipcode)
        // CheckoutPage.selectCmbState(addressData[0].state)
        // CheckoutPage.selectCmbCityCO(addressData[0].district)
        CheckoutPage.typeCustomStreetShipping(customStreetFaker)
        CheckoutPage.typeCustomNumberShipping(customNumberFaker)
        CheckoutPage.typeComplementShipping(customNumberFaker)
        CheckoutPage.selectCmbCity(addressData[0].city)
        // cy.scrollTo('bottom')
        cy.wait(2000)
    })    
}


if (country == "PE") {
    And('I fill the address data', () => {
        CheckoutPage.selectCmbState(addressData[0].state)
        cy.wait(1000)
        CheckoutPage.selectCmbCityCO(addressData[0].district)
        cy.wait(1000)
        CheckoutPage.selectCmbCity(addressData[0].city)
        CheckoutPage.typeCustomStreetShipping(customStreetFaker)
        CheckoutPage.typeCustomNumberShipping(customNumberFaker)
        CheckoutPage.typeComplementShipping(customNumberFaker)
        cy.scrollTo('bottom')
        cy.wait(2000)
    })    
}

Then('I select the payment option by web pay', () => {
    CheckoutPage.clickBtnEditPayment()
})

// Scenario: Validade visa
When('I fill visa card number', () => {
    // CheckoutPage.clickBtnEditPayment()
    CheckoutPage.clickBtnGoToPayment()
    CheckoutPage.selectCreditCardPayment()
    CheckoutPage.typeCardNumberVisa(visaRandom)
})

Then('checkbox VISA must be selected', () => {
    CheckoutPage.validateCardNumberVisa()
})

if (country !== "PE") {
    And('I check if the price is correct on Checkout', () => {
        CheckoutPage.checkCheckoutProductPrice((itemsPdp[1][0].sellingPrice).slice(0, 1) + ' ' + (itemsPdp[1][0].sellingPrice).slice(1))
    })
}

if (country === "PE") {
    And('I check if the price is correct on Checkout', () => {
        CheckoutPage.checkCheckoutProductPrice((itemsPdp[1][0].sellingPrice).slice(0, 2) + ' ' + (itemsPdp[1][0].sellingPrice).slice(2))
    })
}

// Scenario: Validate mastercard
When('I fill mastercard card number', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.selectCreditCardPayment()
    CheckoutPage.typeCardNumberMasterCard(mastercardRandom)
    cy.wait(2500)
})

if (country == "CL" || country == "MX" || country == "PE") {
    Then('checkbox MASTERCARD must be selected', () => {
        CheckoutPage.validateCardNumberMastercard()
    })
}
if (country == "CO") {
    Then('checkbox MASTERCARD must be selected', () => {
        CheckoutPage.validateCardNumberMastercardCO()
    })
}

When('I fill AmericanExpress card number', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.selectCreditCardPayment()
    CheckoutPage.typeCardNumberMasterCard(americanExpressRandom)
    cy.wait(2500)
})

Then('checkbox AMERICANEXPRESS must be selected', () => {
    CheckoutPage.validateCardNumberAmericanExpressCO()
})


When('I fill Diners card number', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.selectCreditCardPayment()
    CheckoutPage.typeCardNumber(dinersRandom)
    cy.wait(2500)
})

Then('checkbox DINERS must be selected', () => {
    CheckoutPage.validateCardNumberDinersCO()
})

When('I select Invoice option', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.validateInvoice()
})

When('I select PSE option', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.validatePseMessage()
})

When('I select COD option', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.validateCOD()
})

Then('The right message and price for COD option are displayed', () => {
    CheckoutPage.checkCODDescription(financeData.codMessage)
    // CheckoutPage.checkInvoicePrice()
})

Then('The right message and price for Invoice option are displayed', () => {
    CheckoutPage.checkInvoiceDescription(financeData.invoiceMessage)
    CheckoutPage.checkInvoicePrice()
})


Then('The right message and price for PSE option are displayed', () => {
    CheckoutPage.checkPseDescription(financeData.pseMessage)
    CheckoutPage.checkPsePrice()
})

Given('I add URL Consultant {}', (store) => {
    HomePage.addMTOURL(store);
})

Then('it must appear at top left the Consultants bar', () => {
    HomePage.hasBanner(accessData[2].storeName)
});

Then('the url must contain the following parameter {} in the final part', (store) => {
    cy.wait(2000)
    HomePage.checkMTOURL(accessData[2].storeUrl)
});

Then('the url must contain the following second parameter {} in the final part', (store) => {
    cy.wait(2000)
    HomePage.checkMTOURL(accessData[3].storeUrl)
});

// Scenario: Validate mandatory firstname alert is displayed
if (country == "CL") {
    And('I fill in the checkout data without firstname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFaker)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShippingDisabled()
    })
}

if (country == "CO") {
    And('I fill in the checkout data without firstname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerCO)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.checkTermsAndConditionsCO()
        CheckoutPage.clickBtnGoToShippingDisabled()
    })
}

if (country == "MX") {
    And('I fill in the checkout data without firstname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typePhoneProfile(phoneFakerMX)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShippingDisabled()
    })
}
if (country == "PE") {
    And('I fill in the checkout data without firstname', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        // CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerPE)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShippingDisabled()
    })
}

Then('mandatory firstname alert is displayed', () => {
    CheckoutPage.validateFirstNameAlert()
})

// Scenario: Validate mandatory lastname alert is displayed
if (country == "CL") {
    And('I fill in the checkout data without lastname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFaker)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShipping()
    })
}
if (country == "CO") {
    And('I fill in the checkout data without lastname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerCO)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.checkTermsAndConditionsCO()
        CheckoutPage.clickBtnGoToShipping()
    })
}
if (country == "MX") {
    And('I fill in the checkout data without lastname', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        // CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerMX)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "PE") {
    And('I fill in the checkout data without lastname', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        // CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerPE)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
        cy.wait(1000)
    })
}

Then('mandatory lastname alert is displayed', () => {
    CheckoutPage.validateLastNameAlert()
    // * Cypress are enabling the btn after select checkbox
    // * This workaround guarantees the btn will be set as disabled
    CheckoutPage.clickBtnGoToShipping()
    cy.wait(1000)
    CheckoutPage.clickBtnGoToShippingDisabled()
})

// Scenario: Validate mandatory document alert is displayed
if (country == "CL") {
    And('I fill in the checkout data without document', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typePhoneProfile(phoneFaker)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
        cy.wait(1000)
    })
}
if (country == "CO") {
    And('I fill in the checkout data without document', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typePhoneProfile(phoneFakerCO)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.checkTermsAndConditionsCO()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
        cy.wait(1000)
    })
}

if (country == "PE") {
    And('I fill in the checkout data without document', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        // CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.typePhoneProfile(phoneFakerPE)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
        cy.wait(1000)
    })
}

Then('mandatory document alert is displayed', () => {
    CheckoutPage.validateDocumentAlert()
    // * Cypress are enabling the btn after select checkbox
    // * This workaround guarantees the btn will be set as disabled
    CheckoutPage.clickBtnGoToShipping()
    cy.wait(1000)
    CheckoutPage.clickBtnGoToShippingDisabled()
})


// Scenario: Validate mandatory document alert is displayed
if (country == "CL") {
    And('I fill in the checkout data without phone number', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShipping()
    })
}
if (country == "CO") {
    And('I fill in the checkout data without phone number', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.checkTermsAndConditionsCO()
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "MX") {
    And('I fill in the checkout data without phone number', () => {
        CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.checkNewsLetter()
        CheckoutPage.checkTermsAndConditions()
        CheckoutPage.clickBtnGoToShipping()
    })
}

if (country == "PE") {
    And('I fill in the checkout data without phone number', () => {
        CheckoutPage.typeClientEmailProfile(correctEmailFaker)
        CheckoutPage.typeFirstNameProfile(firstNameFaker)
        CheckoutPage.typeLastNameProfile(lastNameFaker)
        CheckoutPage.typeDocumentProfile(personalData[0].documentID)
        // CheckoutPage.typePhoneProfile(phoneFakerPE)
        CheckoutPage.checkNewsLetter()
        cy.wait(1000)
        CheckoutPage.checkTermsAndConditions()
        cy.wait(1000)
        CheckoutPage.clickBtnGoToShipping()
    })
}


Then('mandatory phone number alert is displayed', () => {
    CheckoutPage.validatePhoneAlert()
    // * Cypress are enabling the btn after select checkbox
    // * This workaround guarantees the btn will be set as disabled
    CheckoutPage.clickBtnGoToShipping()
    cy.wait(1000)
    CheckoutPage.clickBtnGoToShippingDisabled()
})

// Scenario: Validate Finalizar Compra
if (country == "CL") {
    And('I proceed to checkout Belcorp user', () => {
        CartPage.clickBtnCartToOrderForm()
        CheckoutPage.typeClientPreEmailProfile(financeData.userEmailBelcorp)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.clickIdentifierUserBtn()
    
    })
}
if (country == "CO") {
    And('I proceed to checkout Belcorp user', () => {
        CartPage.clickBtnCartToOrderForm()
        CheckoutPage.typeClientPreEmailProfile(financeData.userEmailBelcorp)
        CheckoutPage.clickBtnPreEmail()
        cy.wait(2000)
        CheckoutPage.clickIdentifierUserBtn()
    
    })
}


When('I fill visa card number Belcorp', () => {
    CheckoutPage.clickBtnEditPayment()
    CheckoutPage.typeCardNumberVisa(financeData.visaNumberBelcorp)
})

And('I fill cvv Belcorp', () => {
    cy.wait(5500)
    CheckoutPage.typeCardCvv(financeData.CvvBelcorp)
    cy.wait(1500)
})

And('I click the payment submit button', () => {
    CheckoutPage.clickSubmitPaymentBtn()
    cy.wait(2000)
})

Then('I check purchase information', () => {
    CheckoutPage.checkOrderNumber(financeData.purchaseUrl)
    CheckoutPage.checkOrderEmail(financeData.userEmailBelcorp)
})