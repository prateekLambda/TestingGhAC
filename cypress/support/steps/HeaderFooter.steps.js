/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')

import Footer from '../pages/Footer'
import Header from '../pages/Header'

/*FIXTURES*/

// CHILE DATA
let itemsFooter = require('../../fixtures/Chile/itemsFooter.json');
let itemsFooterCy = require('../../fixtures/Chile/itemsFooterCy.json');
let itemsFooterLbel = require('../../fixtures/Chile/itemsFooterLbel.json');

let itemsHeader = require('../../fixtures/Chile/itemsHeader.json');
let itemsHeaderCy = require('../../fixtures/Chile/itemsHeaderCy.json');
let itemsHeaderLbel = require('../../fixtures/Chile/itemsHeaderLbel.json');

let itemsHeaderPRD = require('../../fixtures/Chile/itemsHeaderPRD.json');
let itemsHeaderCyPRD = require('../../fixtures/Chile/itemsHeaderCyPRD.json');
let itemsHeaderLbelPRD = require('../../fixtures/Chile/itemsHeaderLbelPRD.json');

let product = require('../../fixtures/Chile/product.json');
let productPRD = require('../../fixtures/Chile/productPRD.json');
let productLbel = require('../../fixtures/Chile/productLbel.json');
let productLbelPRD = require('../../fixtures/Chile/productLbelPRD.json');
let productCy = require('../../fixtures/Chile/productCy.json');
let productCyPRD = require('../../fixtures/Chile/productCyPRD.json');


// COLOMBIA DATA
let itemsFooterCyCO = require('../../fixtures/Colombia/itemsFooterCy.json');
let itemsFooterEsikaCO = require('../../fixtures/Colombia/itemsFooterEsika.json');

let itemsHeaderEsikaPRDCO = require('../../fixtures/Colombia/itemsHeaderEsikaPRD.json');
let itemsHeaderCyPRDCO = require('../../fixtures/Colombia/itemsHeaderCyPRD.json');

let productCO = require('../../fixtures/Colombia/product.json');
let productCOPRD = require('../../fixtures/Colombia/productPRD.json');
let productCyCOPRD = require('../../fixtures/Colombia/productCyPRD.json');

// PERU DATA
let itemsFooterEsikaPE = require('../../fixtures/Peru/itemsFooterEsika.json');
let itemsFooterCyPE = require('../../fixtures/Peru/itemsFooterCy.json');

let itemsHeaderEsikaPRDPE = require('../../fixtures/Peru/itemsHeaderEsikaPRD.json');
let itemsHeaderCyPRDPE = require('../../fixtures/Peru/itemsHeaderCyPRD.json');

let productPRDPE = require('../../fixtures/Peru/productPRD.json');
let productCyPRDPE = require('../../fixtures/Peru/productCyPRD.json');

// MEXICO DATA
let itemsFooterMX = require('../../fixtures/Mexico/itemsFooter.json');
let itemsFooterCYMXPRD = require('../../fixtures/Mexico/itemsFooterCy.json');
let itemsHeaderPRDMX = require('../../fixtures/Mexico/itemsHeaderPRD.json');
let itemsHeaderLbelPRDMX = require('../../fixtures/Mexico/itemsHeaderLbelPRD.json');
let itemsHeaderCyPRDMX = require('../../fixtures/Mexico/itemsHeaderCyPRD.json');

let productMXPRD = require('../../fixtures/Mexico/productPRD.json');
let productLbelMXPRD = require('../../fixtures/Mexico/productLbelPRD.json');

// PANAMA DATA
let productLbelPRDPA = require('../../fixtures/Panama/productLbelPRD.json');
let itemsHeaderLbelPRDPA = require('../../fixtures/Panama/itemsHeaderLbelPRD.json');
let itemsFooterPA = require('../../fixtures/Panama/itemsFooter.json');

// ECUADOR DATA
let productLbelPRDEC = require('../../fixtures/Ecuador/productLbelPRD.json');
let itemsHeaderLbelPRDEC = require('../../fixtures/Ecuador/itemsHeaderLbelPRD.json');
let itemsFooterEC = require('../../fixtures/Ecuador/itemsFooter.json');

if (brand == "Lbel" && regressionEnv == "PRD" && country == "EC") {
    product = productLbelPRDEC,
    itemsHeader = itemsHeaderLbelPRDEC
    itemsFooter = itemsFooterEC
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "PA") {
    product = productLbelPRDPA,
    itemsHeader = itemsHeaderLbelPRDPA
    itemsFooter = itemsFooterPA
}

if (brand == "Esika" && regressionEnv === "PRD" && country === "MX") {
    product = productMXPRD
    itemsHeader = itemsHeaderPRDMX
    itemsFooter = itemsFooterMX
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "MX") {
    product = productLbelMXPRD,
    itemsHeader = itemsHeaderLbelPRDMX
    itemsFooter = itemsFooterMX
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "MX") {
    itemsHeader = itemsHeaderCyPRDMX
    product = productCyCOPRD;
    itemsFooter = itemsFooterCYMXPRD
}

if (brand == "Esika" && regressionEnv == "QAS" && country == "CO") {
    product = productCO;
    itemsFooter = itemsFooterEsikaCOterCO
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CO") {
    itemsHeader = itemsHeaderEsikaPRDCO
    itemsFooter = itemsFooterEsikaCO
    product = productCOPRD;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CO") {
    itemsHeader = itemsHeaderCyPRDCO
    product = productCyCOPRD;
    itemsFooter = itemsFooterCyCO
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "PE") {
    itemsHeader = itemsHeaderEsikaPRDPE
    itemsFooter = itemsFooterEsikaPE
    product = productPRDPE;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "PE") {
    itemsHeader = itemsHeaderCyPRDPE
    itemsFooter = itemsFooterCyPE
    product = productCyPRDPE;
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CL") {
    itemsHeader = itemsHeaderPRD
    product = productPRD;
}

if (brand == "Cyzone" && regressionEnv == "QAS" && country == "CL") {
    itemsHeader = itemsHeaderCy;
    itemsFooter = itemsFooterCy;
    product = productCy;
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CL") {
    itemsHeader = itemsHeaderCyPRD;
    itemsFooter = itemsFooterCy;
    product = productCyPRD;
}

if (brand == "Lbel" && regressionEnv == "QAS" && country == "CL") {
    itemsFooter = itemsFooterLbel;
    itemsHeader = itemsHeaderLbel;
    product = productLbel; 
}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "CL") {
    itemsHeader = itemsHeaderLbelPRD;
    itemsFooter = itemsFooterLbel;
    product = productLbelPRD;

}

// ======================== FOOTER DESKTOP ========================
When('I check the footer', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
});

// Scenario: 11773 [Footer][Desktop] Validate footer layout
Then('it must be located at the end of the page', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    Footer.hasFooter();
});

// Scenario: 11774 [Footer][Desktop] Validate social media link
Then('it must have 3 icons of social media Facebook, Instagram, Youtube with their respective links', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    itemsFooter[2].forEach((item) => {
        Footer.validateFooterSocialMedia(item.socialMedia, item.url)
    })
});

// Scenario: 11775 [Footer][Desktop] Validate list container
Then('it must have 3 list container sections Nuestras marcas, Legal, Contáctanos with their respective subsections', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    itemsFooter[0].forEach((item) => {
        // guarantees that all elements will be visible
        Footer.validateFooterTitles(item.title, item.text)
    })
    itemsFooter[1].forEach((item) => {
        Footer.validateFooterSubTitles(item.title, item.text, item.url)
    })
});

// Scenario: 11776 [Footer][Desktop] Validate payment icons
Then('it must have a text with 2 payment icons', () => {
    cy.scrollTo('bottom');
    cy.wait(3000)
    cy.scrollTo('bottom');
    itemsFooter[5].forEach((item) => {
        if(item.paymentsText !== ""){
            Footer.validateFooterPaymentsText(item.paymentsText);
        }        
    })
    itemsFooter[6].forEach((item) => {
        Footer.validateFooterPaymentsLogo(item.payments, item.url);
    })
});

// Scenario: 11777 [Footer][Desktop] Validate benefits
Then('it must have benefits icons and texts', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    cy.scrollTo('bottom');
    itemsFooter[3].forEach((item) => {
        Footer.validateFooterBenefitsLogo(item.benefitsLogo, item.url)
    })
    itemsFooter[4].forEach((item) => {
        Footer.validateFooterBenefitsText(item.benefits, item.text);
    })
});


// ======================== FOOTER ANDROID ========================
// Scenario: 11835 [Footer][Android] Validate footer layout
Then('it must be located at the end of the page Android', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    Footer.hasFooterMobile();
});

// Scenario: 11829 [Footer][Android] Validate social media link
Then('it must have 3 icons of social media Facebook, Instagram, Youtube with their respective links Android', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    itemsFooter[2].forEach((item) => {
        Footer.validateFooterSocialMedia(item.socialMedia, item.url)
    })
});

// Scenario: 11830 [Footer][Android] Validate list container
Then('it must have 3 list container sections Nuestras marcas, Legal, Contáctanos with their respective subsections Android', () => {
    // guarantees that all elements will be visible
    cy.scrollTo('bottom');
    cy.wait(2500)

    itemsFooter[7].forEach((item) => {
        Footer.validateFooterTitlesMobile(item.title, item.text)
    })

     Footer.validateFooterDropDown(itemsFooter[11][0].arrowDown)
     itemsFooter[8].forEach((item) => {
        cy.wait(500)
         Footer.validateFooterSubTitlesMobile1(item.answer, item.text, item.url)
     })
     cy.wait(1500)
     Footer.validateFooterDropUp(itemsFooter[11][0].arrowUp)
     Footer.validateFooterDropDown(itemsFooter[11][1].arrowDown)
     itemsFooter[9].forEach((item) => {
         Footer.validateFooterSubTitlesMobile1(item.answer, item.text)
     })
     Footer.validateFooterDropUp(itemsFooter[11][1].arrowUp)
     cy.wait(1500)
     Footer.validateFooterDropDown(itemsFooter[11][2].arrowDown)
     itemsFooter[10].forEach((item) => {
         Footer.validateFooterSubTitlesMobile1(item.answer, item.text)
     })
});

// Scenario: 11834 [Footer][Android] Validate payment icons
Then('it must have a text with 2 payment icons Android', () => {
    cy.scrollTo('bottom');
    cy.wait(3000)
    // guarantees that all elements will be visible
    cy.scrollTo('bottom');
    itemsFooter[5].forEach((item) => {
        if(item.paymentsText !== ""){
            Footer.validateFooterPaymentsTextMobile(item.paymentsText);
        }
    })
    itemsFooter[6].forEach((item) => {
        Footer.validateFooterPaymentsLogo(item.payments, item.url);
    })
});

// Scenario: 11836 [Footer][Android] Validate benefits
Then('it must have benefits icons and texts Android', () => {
    cy.scrollTo('bottom');
    cy.wait(2500)
    itemsFooter[3].forEach((item) => {
        Footer.validateFooterBenefitsLogoMobile(item.benefitsLogoMobile)
    })
    itemsFooter[4].forEach((item) => {
        Footer.validateFooterBenefitsText(item.benefits, item.text);
    })
});


// ======================== HEADER DESKTOP ========================
When('I check the navigation bar', () => {
    Header.hasNavigationBar()
});

// Scenario: 11893 [Header][Desktop] Validate navigation bar
Then('I see three buttons with Ésika, Lbel and Cyzone names and its respective links', () => {
    
    cy.log(brand)
    itemsHeader[0].forEach((item) => {
        Header.validateLogos(item.logo, item.logoImage);
    })
    itemsHeader[0].forEach((item) => {
        Header.validateLogosLinks(item.logo, item.logoLink);
    })
});


When('I check the header', () => {
    Header.hasNavigationBar()
});

// Scenario: 11896 [Header][Desktop] Validate button Become a consultant
Then('the button Be a consultant is on the header, with the text Quiero ser una consultora', () => {
    Header.validateBecomConsultBtnText(itemsHeader[1][0].consultBtnText);
    Header.validateBecomConsultBtnUrl(itemsHeader[1][0].consultUrl);
});


When('the user selects the Find a consultant option', () => {
    Header.validateFindConsultBtn()
});

// Scenario: 11899 [Header][Desktop] Validate top bar "Find a consultant"
Then('the button has the right text that takes the user to the page to choose a consultant', () => {
    Header.validateFindConsultIcon(itemsHeader[2][0].findConsultIcon)
    Header.valildateFindConsultText(itemsHeader[2][0].findConsultText)
    Header.validateFindConsultLink(itemsHeader[2][0].findConsultLink)
});


// Scenario: 11895 [Header][Desktop] Validate Brand logo behavior
When('I click on the Brand logo', () => {
    Header.validateBrandLogo(itemsHeader[3][0].brandLogo)
});

Then('I am redirected to Brands home page', () => {
    Header.validateBrandLogoBtn(itemsHeader[3][0].brandLogoLink)
});


// Scenario: 11894 [Header][Desktop] Validate search bar placeholder
When('I check the search bar', () => {
    Header.validateSearchBar()
});

Then('the placeholder is Estoy buscando...', () => {
    Header.validateSearchBarPlaceholder(itemsHeader[4][0].placeHolderText)

});

// Scenario: 11897 [Header][Desktop] Validate menu and submenu
When('I hover over the menu title', () => {
    itemsHeader[5][0].forEach((item) => {
        Header.validateMenuCategoryNumber(item)
    })
});

Then('is a tree category with the second and third levels, and two images with titles and descriptions on every category section', () => {
    Header.validateMenuComponentsOnHover()

});


// Scenario: 0000 [Header][Desktop] Validate search bar history behavior
// When('I select the search bar field', () => {
//     Header.clickSearchBar()
// });

// Then('I must be redirected to the search result page after click', ()=>{
//     Header.validateSearchBarHistory()
// });

// Scenario: 0000 [Header][Desktop/Mobile] Validate the search bar suggestion behavior
// When('I select the search bar field', () => {
//     Header.typeSearchBar()
// });

// And('I type at least one character', () => {

// });

// Then('I am redirected to the chosen result search page', ()=>{
//     Header.validateSearchBarType()
// });


// Scenario: 0000 [Header][Desktop] Validate the search bar without suggestions
When('I type on the search bar field', () => {
    Header.typeSearchBarSinSugerencia(itemsHeader[10][0].typeInvalidChar)
});

Then('it must appear Sin sugerencias', () => {
    Header.validateSearchBarTypeNoSuggestions(itemsHeader[10][0].noSuggestionText)
});

// Scenario: 0000 [Header][Desktop] Validate the most searched terms behavior
When('I type on the search bar field valid character', () => {
    Header.typeSearchBar(itemsHeader[10][0].typeTwoChar)
});

Then('I click on a most searched terms and redirect to the respective pages', () => {
    Header.validateSearchBarMost(itemsHeader[10][0].mostSearchUrl)
});

// Scenario: 0000 [Header][Desktop] Test the search bar with a non-existing product
When('I search for a non-existent product', () => {
    Header.typeSearchBarProduct(product[3].Product)
})

Then('it must load the OOPS page', () => {
    cy.wait(3000)
    Header.validateNoProductFound()
});

// Scenario: 0000 [Header][Desktop] Test the search bar with an existent product
When('I search for an existent product', () => {
    Header.typeSearchBarProduct(product[1].Product)
    cy.wait(3500)
})

Then('it must return a product', () => {
    cy.wait(3000)
    Header.validateProductFound()
});

// Scenario: 0000 [Home][Desktop] Browse for categories
When('I verify the categories available on menu', () => {
    cy.scrollTo('top')
    itemsHeader[11].forEach((item) => {
        Header.validateMenuCategoryName(
            item.index,
            item.menuCategoryName
        )
    })
})

//   itemsHeader[5][0].forEach((item) => {
//     Header.validateMenuCategoryNumber(item)
// })  


// ======================== HEADER MOBILE ========================
// Scenario: 0000 [Header][Mobile] Validate navigation bar
When('I check the navigation bar Mobile', () => {
    Header.hasNavigationBarMobile()
});

Then('I see three buttons with Ésika, Lbel and Cyzone names and its respective links Mobile', () => {
    itemsHeader[0].forEach((item) => {
        Header.validateLogosMobile(item.logo, item.logoImageMobile);
    })
    itemsHeader[0].forEach((item) => {
        Header.validateLogosLinksMobile(item.logo, item.logoLink);
    })
});

// Scenario: 0000 [Header][Mobile] Validate top bar "Find a consultant"
When('on header, the user selects the Find a consultant option Mobile', () => {
    Header.hasHeaderMobile()
    Header.validateFindConsultBtn()
});

Then('the button has the right text that takes the user to the page to choose a consultant Mobile', () => {
    Header.validateFindConsultIcon(itemsHeader[2][0].findConsultIcon)
    Header.valildateFindConsultText(itemsHeader[2][0].findConsultText)
    Header.validateFindConsultLink(itemsHeader[2][0].findConsultLink)
});

// Scenario: 11894 [Header][Desktop] Validate search bar placeholder
When('I check the search bar Mobile', () => {
    Header.validateSearchBarMobile()
});

Then('the placeholder is Estoy buscando... Mobile', () => {
    Header.validateSearchBarPlaceholderMobile(itemsHeader[4][0].placeHolderText)
});

// Scenario: 0000 [Header][Mobile] Validate button Become a consultant
When('I click Quiero ser consultora button on the header menu', () => {
    Header.clickMenuHamburguer()
    cy.wait(1000)
});

Then('the button has the right text and icon that takes the user to the page to choose a consultant', () => {
    Header.validateBecomConsultBtnIconMobile(itemsHeader[2][0].findConsultIcon)
    Header.validateBecomConsultBtnTextMobile(itemsHeader[1][0].consultBtnText)
    Header.validateBecomConsultBtnUrlMobile(itemsHeader[1][0].consultUrl);
});


// Scenario: 0000 [Header][Mobile] Validate menu chips layout
When('I check the menu chips', () => {
    Header.validateChipsMenu()
});

Then('must contain nine menu chips labels, with the same name as the categories names', () => {
    itemsHeader[6][0].forEach((item) => {
        Header.validateChipsMenuNumber(item)
    })
    // todo: name be code after definition of categories names    

});

And('the menu chip labels must have the right URL', () => {
    // todo: URL must be code after definition of categories names
    // cy.get('a.vtex-store-link-0-x-link.vtex-store-link-0-x-link--category-menu-mobile')
    // .eq('1')
    // .then((el) => {
    //     expect(el).have.attr('href').eq('#')
    // });    
});


// Scenario: 0000 [Header][Mobile] Validate button Become a consultant
When('I click the hamburguer menu', () => {
    Header.clickMenuHamburguer()
    cy.wait(1000)
});

Then('menu opens showing 10 categories and the title Explora las categorías', () => {
    itemsHeader[7].forEach((item) => {
        // todo: should add item.menuCategoryNameMobile after name definiton
        Header.validateMenuCategoryNumberMobile(item.index)
    })

    itemsHeader[8].forEach((item) => {
        // todo: should add item.menuCategoryNameMobile2 after name definiton
        Header.validateMenuCategoryNumberMobile(item.index)
    })
});


// Scenario: 0000 [Header][Mobile] Validate hamburguer submenu
When('In the menu, I select a category that has a second-level menu', () => {
    Header.clickMenuHamburguer()
    cy.wait(1000)
});

Then('must contain two banners, a close button on all pages of the menu', () => {
    Header.clickSubMenuMobile()
    Header.validateMenuCloseBtnMobile()
    Header.validateSubMenuBannerMobile(itemsHeader[9][0].menuBannerMobileUrl)

});

// Scenario: 0000 [Header][Mobile] Validate the search bar without suggestions
When('I type on the search bar field Mobile', () => {
    Header.typeSearchBarSinSugerenciaMobile(itemsHeader[10][0].typeInvalidChar)
    cy.wait(2500)
});

Then('it must appear Sin sugerencias Mobile', () => {
    Header.validateSearchBarTypeNoSuggestionsMobile(itemsHeader[10][0].noSuggestionText)
});

// Scenario: 0000 [Header][Mobile] Validate the most searched terms behavior
When('I type on the search bar field valid character Mobile', () => {
    Header.typeSearchBarMobile(itemsHeader[10][0].typeTwoChar)
});

Then('I click on a most searched terms and redirect to the respective pages Mobile', () => {
    Header.validateSearchBarMostMobile(itemsHeader[10][0].mostSearchUrl)
});

// Scenario: 0000 [Header][Mobile] Test the search bar with non inexistent product
When('I search for a non-existent product Mobile', () => {
    Header.typeSearchBarProductMobile(product[3].Product)
});

// Scenario: 0000 [Header][Mobile] Test the search bar with an existent product
When('I search for an existent product Mobile', () => {
    Header.typeSearchBarProductMobile(product[1].Product)
    cy.wait(3500)
})