/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')
import HomePage from '../pages/Homepage'
import Category from '../pages/Category'
// import authCookie from '../../fixtures/auth.json'

/*FIXTURES*/
// import itemAuth from '../../fixtures/auth.json'
let itemsCategory = require('../../fixtures/Chile/itemsCategory.json')
let itemsCategoryCy = require('../../fixtures/Chile/itemsCategoryCy.json')
let itemsCategoryLbel = require('../../fixtures/Chile/itemsCategoryLbel.json')
let itemsCategoryPRDMX = require('../../fixtures/Mexico/itemsCategoryMXPRD.json')
let itemsCategoryLbelPRDMX = require('../../fixtures/Mexico/itemsCategoryLbelMXPRD.json')
let itemsCategoryCyMXPRD = require('../../fixtures/Mexico/itemsCategoryCyMXPRD.json')
let itemsCategoryPRDCO = require('../../fixtures/Colombia/itemsCategoryPRD.json')
let itemsCategoryPRDPE = require('../../fixtures/Peru/itemsCategoryPRD.json')
let itemsCategoryCyPRDPE = require('../../fixtures/Peru/itemsCategoryCyPRD.json')
let itemsHeader = require('../../fixtures/Chile/itemsHeader.json');
let itemsHeaderCy = require('../../fixtures/Chile/itemsHeaderCy.json');
let itemsHeaderLbel = require('../../fixtures/Chile/itemsHeaderLbel.json');

let itemsHeaderLbelPRDPA = require('../../fixtures/Panama/itemsHeaderLbelPRD.json');
let itemsCategoryLbelPRDPA = require('../../fixtures/Panama/itemsCategoryLbelPAPRD.json')

let accessData = require('../../fixtures/Chile/accessData.json')
let accessDataCO = require('../../fixtures/Colombia/accessData.json')
let accessDataMX = require('../../fixtures/Mexico/accessData.json')
let accessDataPE = require('../../fixtures/Peru/accessData.json')
let accessDataPA = require('../../fixtures/Panama/accessData.json')

if (country == "CO") {
    accessData = accessDataCO
}
if (country == "MX") {
    accessData = accessDataMX
}
if (country == "PE") {
    accessData = accessDataPE
}
if (country == "PA") {
    accessData = accessDataPA
}

if (brand == "Lbel" && country =="PA")  {
    itemsHeader = itemsHeaderLbelPRDPA
    itemsCategory = itemsCategoryLbelPRDPA
}

if (brand == "Esika" && country =="PE") {
    itemsHeader = itemsHeader;
    itemsCategory = itemsCategoryPRDPE;
}

if (brand == "Cyzone" && country =="PE") {
    itemsHeader = itemsHeader;
    itemsCategory = itemsCategoryCyPRDPE;
}

if (brand == "Esika" && country =="CL") {
    itemsHeader = itemsHeader;
    itemsCategory = itemsCategory;
}

if (brand == "Cyzone" && country =="CL") {
    itemsHeader = itemsHeaderCy;
    itemsCategory = itemsCategoryCy;
}

if (brand == "Lbel" && country =="CL")  {
    itemsHeader = itemsHeaderLbel
    itemsCategory = itemsCategoryLbel
}

if (brand == "Esika" && country =="MX")  {
    // itemsHeader = itemsHeaderLbel
    itemsCategory = itemsCategoryPRDMX
}

if (brand == "Lbel" && country =="MX")  {
    itemsHeader = itemsHeaderLbel
    itemsCategory = itemsCategoryLbelPRDMX
}

if (brand == "Cyzone" && country =="MX")  {
    itemsHeader = itemsHeaderCy
    itemsCategory = itemsCategoryCyMXPRD
}


if (brand == "Esika" && country =="CO")  {
    itemsHeader = itemsHeader
    itemsCategory = itemsCategoryPRDCO
}

Given('I access the {} category page', (category) => {
    Category.accessCategoryPage(category.toLowerCase())
    
})

Given('At {} I go the {} category page', (device, category) => {
    let indexCategory = Category.getIndexbyCategory(category, itemsHeader[8])
    Category.clickCategorySection(device, category, indexCategory)
    
})

Given('I go to consultants store {}', (store) => {
    cy.log(country)
    HomePage.addMTOURL(accessData[2].storeUrl);
    
})

Given('I add the consultants store {}', (storeUrl) => {
    HomePage.addMTOstore(accessData[2].storeUrl);
    
})

// ======================== CATEGORY DESKTOP ========================
// Scenario: 0000 [Category][Desktop] Validate Category Main Banner
Then('there is one category banner-image', () => {
    Category.hasCategoryBanner(itemsCategory[0][0].categoryMainBannerUrl)
});

// Scenario: 0000 [Category][Desktop] Validate show more button layout
When('I scroll to the end of the page', () => {
    cy.scrollTo('bottom')
});

Then('it has a button with the text Ver más productos', () => {
    cy.scrollTo('bottom')
    Category.hasCategoryBtnMore()
    Category.checkCategoryBtnMoreText(itemsCategory[1][0].categoryBtnMoreText)
});

// Scenario: 0000 [Category][Desktop] Validate breadcrumb
When('I check the breadcrumb', () => {
    Category.hasBreadCrumbCategory()
});

Then('it has a home icon and the name of the {} category structure', (category) => {
    cy.wait(2500)
    Category.hasBreadCrumbCategoryHome()
    Category.hasBreadCrumbCategoryName(category)
});

And('I must be redirected to the {} category page selected after click', (category) => {
    Category.hasBreadCrumbCategoryUrl(category.toLowerCase())
});

// Scenario: 13171 [Category][Desktop] Validate Sort by options
When('I click on the "Ordenar por" option', () => {
    Category.hasCategoryOrderTitle(itemsCategory[2][0].categoryOrderTitle)
    Category.hasCategoryOrderArrow()
    // guarantte Order Btn will be visible
    cy.scrollTo('top')
    Category.clickCategoryOrderBtn()
});

Then('it must appear a list with the options "relevancia", "Ventas", "Más reciente", "Descuento", "Precio más alto" and "Precio más bajo"', () => {
    //Category.hasCategoryOrderFirstOption(itemsCategory[2][0].categoryFirstOption)
    itemsCategory[3].forEach((item) => {
        Category.hasCategoryOrderOptions(item.categoryOrderIndex, item.categoryOrderOptions)
    })
});

// Scenario: 0000 [Category][Desktop] Validate Product Card
When('I check the product card', () => {
    Category.hasCategoryProductCard()
});

Then('it has image, title, price and button', () => {
    Category.hasCategoryProductImage()
    Category.hasCategoryProductName()
    Category.hasCategoryProducPrice()
    Category.hasCategoryProducBtn()
});

// Scenario: 17841 [Category][Desktop] Validate Sort by Ventas
And('I sort by "Ventas"', () => {
    Category.clickCategoryOrderOptions(itemsCategory[3][0].categoryOrderIndex)
})

Then('The url must be reset to sort by "Ventas"', () => {
    cy.wait(1500)
    Category.checkCategoryOrderOptionsUrl(itemsCategory[3][0].categoryOrderUrlVentas)
});

// Scenario: 17842 [Category][Desktop] Validate Sort by Más reciente
And('I sort by "Más reciente"', () => {
    cy.wait(2000)
    Category.clickCategoryOrderOptions(itemsCategory[3][1].categoryOrderIndex)
})

Then('I validate the page sorting by "Más reciente"', () => {
    Category.checkCategoryOrderOptionsUrl(itemsCategory[3][1].categoryOrderUrlReciente)
});

// Scenario: 18528 [Category][Desktop][MTO] Validate Sort by Precio más bajo
And('I sort by "Precio más bajo"', () => {
    cy.wait(2000)
    Category.clickCategoryOrderOptions(itemsCategory[3][4].categoryOrderIndex)
})

Then('I validate the page sorting by "Precio más bajo"', () => {
    Category.checkCategoryOrderOptionsUrl(itemsCategory[3][4].categoryOrderUrlLowPrices)
});

// ======================== CATEGORY MOBILE ========================

// Scenario: 0000 [Category][Mobile] Validate Category Main Banner
Then('there is one category banner-image Mobile', () => {
    Category.hasCategoryBannerMobile(itemsCategory[0][0].categoryMainBannerUrlMobile)
});

// Scenario: 0000 [Category][Mobile] Validate Order by options
When('I click on the "Ordenar por" option Mobile', () => {
    Category.hasCategoryOrderTitleMobile(itemsCategory[2][0].categoryOrderTitle)
    Category.hasCategoryOrderArrow()
    // guarantte Order Btn will be visible
    cy.scrollTo('top')
    Category.clickCategoryOrderBtnMobile()
});
