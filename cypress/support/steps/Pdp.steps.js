/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
const brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')


import Pdp from '../pages/Pdp';

/*FIXTURES*/

// CHILE DATA
let itemsPdp = require('../../fixtures/Chile/itemsPdp.json');
let itemsPdpPRD = require('../../fixtures/Chile/itemsPdpPRD.json');

let itemsPdpCy = require('../../fixtures/Chile/itemsPdpCy.json');
let itemsPdpCyPRD = require('../../fixtures/Chile/itemsPdpCyPRD.json');

let itemsPdpLbel = require('../../fixtures/Chile/itemsPdpLbel.json');
let itemsPdpLbelPRD = require('../../fixtures/Chile/itemsPdpLbelPRD.json');
// COLOMBIA DATA
let itemsPdpCO = require('../../fixtures/Colombia/itemsPdp.json');
let itemsPdpCOPRD = require('../../fixtures/Colombia/itemsPdpPRD.json');
let itemsPdpCOCyPRD = require('../../fixtures/Colombia/itemsPdpCyPRD.json');

// PERU DATA
let itemsPdpPEPRD = require('../../fixtures/Peru/itemsPdpPRD.json');
let itemsPdpPECyPRD = require('../../fixtures/Peru/itemsPdpCyPRD.json');

// MEXICO DATA
let itemsPdpMXPRD = require('../../fixtures/Mexico/itemsPdpPRD.json');
let itemsPdpLbelMXPRD = require('../../fixtures/Mexico/itemsPdpLbelPRD.json');
let itemsPdpCyMXPRD = require('../../fixtures/Mexico/itemsPdpCyPRD.json');

// PANAMA DATA
let itemsPdpLbelPAPRD = require('../../fixtures/PANAMA/itemsPdpLbelPRD.json');
// ECUADOR DATA
let itemsPdpLbelECPRD = require('../../fixtures/Ecuador/itemsPdpLbelPRD.json');

if (brand == "Lbel" && regressionEnv == "PRD" && country == "EC") {
    itemsPdp = itemsPdpLbelECPRD;
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "PA") {
    itemsPdp = itemsPdpLbelPAPRD;
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "PE") {
    itemsPdp = itemsPdpPEPRD;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "PE") {
    itemsPdp = itemsPdpPECyPRD;
}

if (brand == "Esika" && regressionEnv == "QAS" && country == "CO") {
    itemsPdp = itemsPdpCO;
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CO") {
    itemsPdp = itemsPdpCOPRD;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CO") {
    itemsPdp = itemsPdpCOCyPRD;
}

if (brand == "Esika" && regressionEnv == "QAS" && country == "CL") {
    itemsPdp = itemsPdp;
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CL") {
    itemsPdp = itemsPdpPRD;
}

if (brand == "Cyzone" && regressionEnv == "QAS" && country == "CL") {
    itemsPdp = itemsPdpCy;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CL") {
    itemsPdp = itemsPdpCyPRD;
}

if (brand == "Lbel" && regressionEnv == "QAS" && country == "CL") {
    itemsPdp = itemsPdpLbel;
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "CL") {
    itemsPdp = itemsPdpLbelPRD;
}

if (brand === "Esika" && regressionEnv === "PRD" && country === "MX") {
    itemsPdp = itemsPdpMXPRD;
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "MX") {
    itemsPdp = itemsPdpLbelMXPRD;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "MX") {
    itemsPdp = itemsPdpCyMXPRD;
}

// ======================== FAKER ========================

// ======================== PDP DESKTOP ========================
// Scenario: 13674 [PDP][Desktop] Validate product elements
Then('the product name is displayed correctly', () => {
    Pdp.hasProductName(itemsPdp[1][0].productName)
});

// Scenario: 13675 [PDP][Desktop] Validate fixed bar
When('the user checks the fixed bar', () => {
    Pdp.hasFixedBar()
});

Then('it must have the product name, original price, current price, quantity field, and add to cart button', () => {
    Pdp.hasFixedBarProductName(itemsPdp[1][0].productName)
    Pdp.hasFixedBarAgregarBtn(itemsPdp[1][0].fixedBarBtnText)
    Pdp.hasoriginalPrice(itemsPdp[1][0].originalPrice)
    Pdp.hascurrentPrice(itemsPdp[1][0].sellingPrice)
    Pdp.hasFixedBarQuantity()
});


// Scenario: 13676 [PDP][Desktop] Fixed bar - button behavior 
When('the user clicks on add to cart button', () => {
    Pdp.addProductToCart()
});

Then('the product is added to the cart with the righ amount', () => {
    Pdp.checkAddProductToCart()
});

// Scenario: 13677 [PDP][Desktop] Validate price informations 
When('the user checks the price information', () => {
    Pdp.hasPriceBlock()
});

Then('it must have the original price, current price and saving amount', () => {
    Pdp.hasCurrentPrice(itemsPdp[1][0].sellingPrice,itemsPdp[1][0].currentPriceSign)    
    Pdp.hasoriginalPrice(itemsPdp[1][0].originalPrice)
    Pdp.hasSavingAmount()
});

// Scenario: 17425 [PDP][Desktop] Validate block review - bottom
When('the user checks the review informations', () => {
    Pdp.hasReviewBlock()
});

Then('it must have title, stars, comments, and rating elements', () => {
    Pdp.hasReviewTitle()
    Pdp.hasReviewStars()
    Pdp.hasReviewStarRating()
    Pdp.hasReviewComments()
    Pdp.hasReviewBtn(itemsPdp[2][0].commentBtnText)
});

// Scenario: 17426 [PDP][Desktop] Validate image and stamps
When('the user checks the product image', () => {    
    Pdp.hasProductImage(itemsPdp[2][0].imageSrcStamp)
});

Then('it must have stamps', () => {
    cy.wait(2500);
    Pdp.hasProductStamp(itemsPdp[2][0].stampText)
});


// Scenario: 0000 [PDP][Desktop] Fixed bar - quantity block behavior  
// When('the user checks the fixed bar to change the quantity', () =>{
//     Pdp.hasFixedBarQuantity()
// });

// Then('it must add one after clicking on plus sign', ()=>{
//     Pdp.changeFixedBarQuantityPlus()
// });

// And('the same quantity is added to the cart', ()=>{
//     Pdp.addProductToCart()
//     Pdp.checkAddProductToCart2()
// });

// And('it must subtract one after clicking on minus sign', ()=>{
//     Pdp.changeFixedBarQuantityMinus()
// });

// ======================== PDP MOBILE ========================

// Scenario: 13678 [PDP][Mobile] Validate product elements
Then('the product name is displayed correctly Mobile', () => {
    Pdp.hasProductNameMobile(itemsPdp[1][0].productName)
});

// Scenario: 13679 [PDP][Mobile] Validate fixed bar
When('the user checks the fixed bar Mobile', () => {
    Pdp.hasFixedBarMobile()
});

Then('it must have the quantity field and add to cart button Mobile', () => {
    Pdp.hasFixedBarAgregarBtnMobile(itemsPdp[1][0].fixedBarBtnText)
    Pdp.hasFixedBarQuantityMobile()
});

// Scenario: 13681 [PDP][Mobile] Validate price informations 
When('the user checks the price information Mobile', () => {
    Pdp.hasPriceBlock()
});

Then('it must have the original price, current price and saving amount Mobile', () => {
    Pdp.hasCurrentPrice(itemsPdp[1][0].sellingPrice, itemsPdp[1][0].currentPriceSign)    
    Pdp.hasoriginalPrice(itemsPdp[1][0].originalPrice)
    Pdp.hasSavingAmount()

});

// Scenario: 13680 [PDP][Mobile] Fixed bar - button behavior
When('the user clicks on add to cart button Mobile', () => {
    Pdp.addProductToCartMobile()
});

Then('the product is added to the cart with the quantity selected Mobile', () => {
    Pdp.checkAddProductToCartMobile()
});
// Scenario: 0000 [PDP][Mobile] Validate image and stamps
When('the user checks the product image - Mobile', () => {
    //Pdp.hasProductImageMobile(itemsPdp[2][0].imageMobileSrc)
    Pdp.hasProductImageMobile(itemsPdp[2][0].imageSrcStamp)
});
