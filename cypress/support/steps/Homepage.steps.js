/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')

import HomePage from '../pages/Homepage'
import Footer from '../pages/Footer'

/*FIXTURES*/
let itemsHomepage = require('../../fixtures/Chile/itemsHomepage.json')
let itemsHomepagePRD = require('../../fixtures/Chile/itemsHomepagePRD.json')
let itemsHomepageCOPRD = require('../../fixtures/Colombia/itemsHomepagePRD.json')
let itemsHomepageCOCyPRD = require('../../fixtures/Colombia/itemsHomepageCyPRD.json')

let itemsHomepageLbelPRD = require('../../fixtures/Chile/itemsHomepageLbelPRD.json')
let itemsHomepageCyPRD = require('../../fixtures/Chile/itemsHomepageCyPRD.json')
let itemsHomepageMXLbelPRD = require('../../fixtures/Mexico/itemsHomepageLbelPRD.json')
let itemsHomepageMXCyPRD = require('../../fixtures/Mexico/itemsHomepageCyPRD.json')

let itemsHomepagePRDPE = require('../../fixtures/Peru/itemsHomepagePRD.json')
let itemsHomepageCyPRDPE = require('../../fixtures/Peru/itemsHomepageCyPRD.json')

let itemsHomepageLBELPRDPA = require('../../fixtures/Panama/itemsHomepageLbelPRD.json')

if (brand == "Lbel" && regressionEnv == "PRD" && country == "MX") {
    itemsHomepage = itemsHomepageMXLbelPRD
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "MX") {
    itemsHomepage = itemsHomepageMXCyPRD
}

if (brand == "Esika" && regressionEnv == "QAS" && country == "CO") {

}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CO") {
    itemsHomepage = itemsHomepageCOPRD
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CO") {
    itemsHomepage = itemsHomepageCOCyPRD
}


if (brand == "Esika" && regressionEnv == "PRD" && country == "PE") {
    itemsHomepage = itemsHomepagePRDPE
}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "PE") {
    itemsHomepage = itemsHomepageCyPRDPE
}

if (brand == "Esika" && regressionEnv == "PRD" && country == "CL") {
    itemsHomepage = itemsHomepagePRD
}

if (brand == "Cyzone" && regressionEnv == "QAS" && country == "CL") {

}

if (brand == "Cyzone" && regressionEnv == "PRD" && country == "CL") {
    itemsHomepage = itemsHomepageCyPRD;

}

if (brand == "Lbel" && regressionEnv == "QAS" && country == "CL") {

}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "CL") {
    itemsHomepage = itemsHomepageLbelPRD

}

if (brand == "Esika" && regressionEnv == "PRD" && country == "PE") {
    // itemsHomepage = itemsHomepageLbelPRD

}

if (brand == "Lbel" && regressionEnv == "PRD" && country == "PA") {
   itemsHomepage = itemsHomepageLBELPRDPA
}

// ======================== HOMEPAGE DESKTOP ========================

// Scenario: 11407 [Home][Desktop] Validate main banner
When('I check the main banner', () => {
    cy.wait(2000)
    HomePage.hasMainBanner();
})

Then('Main Banner has arrows and dots to slide and the main image with link', () => {
    HomePage.hasArrows()
    HomePage.hasDots()
    HomePage.hasImages()
});

// Scenario: 11408 [Home][Desktop] Validate category section 
When('I check the category section', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.scrollTo('bottom')
    Footer.hasFooter();
    cy.scrollTo('top')
    cy.wait(2000)
    HomePage.hasCategorySection();
})

Then('Section has a title, shows five images with links and text', () => {
    cy.wait(3000)
    HomePage.hasCategoryTitle(itemsHomepage[2][0].sectionTitleCateg);
    // HomePage.hasCategorySubtitles();
   
    itemsHomepage[1].forEach((item) => {
        HomePage.hasCategorySubtitles(item.index, item.categoryName);
    })
    itemsHomepage[0].forEach((item) => {
        HomePage.hasCategoryImages(item.index);
    }) 
    itemsHomepage[0].forEach((item) => {
        HomePage.hasCategoryImagesLink(item.index, item.imageUrl);
    })
   /**/
});

// Scenario: 11409 [Home][Desktop] Validate carousel (first)
When('I check the carousel', () => {
    // Workaround to guarantee homepage is fully loaded
     Footer.hasFooter();
     cy.scrollTo('top')
     cy.wait(2000)   
    HomePage.hasCarouselFirst()
})

Then('Carousel has arrows and dots to slide, a title, and shows 5 product images', () => {
    HomePage.hasCarouselArrows()
    HomePage.hasCarouselDots()
    HomePage.checkTitle(itemsHomepage[11][0].carouselFirstTitle)
    HomePage.checkSubTitle(itemsHomepage[11][0].carouselFirstSubTitle)
    HomePage.checkCarouselImages();
});

// 11410 [Home][Desktop] Validate carousel cards (first)

Then('Cards have the product names, product prices, price details, agregar btn, and rate stars', () => {
    // Workaround to guarantee homepage is fully loaded
    Footer.hasFooter();
    cy.wait(2000)
    cy.clock()
    itemsHomepage[8].forEach((item) => {
        HomePage.hasRateStar(item);
    })
    HomePage.hasDetailBtnFirstLast(itemsHomepage[9][0].detailBtnText);
    cy.wait(2000)
    itemsHomepage[8].forEach((item) => {
        HomePage.checkSellingPrice(item);
    })
    cy.wait(1500)
   
   HomePage.hasDetailBtn(itemsHomepage[9][0].detailBtnText)
   cy.tick(5000)
   
   HomePage.checkProductCardLabel();

   /**/
});

// Scenario: 11411 [Home][Desktop] Validate YO ELIJO ÉSIKA section
When('I check the yoelijoesika section', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.wait(3500)
    Footer.hasFooter();
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo(0,-3000)
    HomePage.hasYOSection()
})

Then('Section has an image, title, subtitle, and logo', () => {
    // Workaround to guarantee homepage is fully loaded
    Footer.hasFooter();
    cy.scrollTo(0,-1000)
    cy.wait(2000)
    HomePage.hasYOTexts(itemsHomepage[3][0].yoElijoTitle, itemsHomepage[3][0].yoElijoSubTitle)
    HomePage.hasYOImages(itemsHomepage[4][0].yoElijoImage, itemsHomepage[4][0].yoElijoImageLogo)
});

// Scenario: 11415 [Home][Desktop] Validate Quotation section
When('I check to validate quotation section', () => {
    // HomePage.hasQuotesSection()  
})

Then('Section has a phrase and a quote', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.scrollTo('bottom');
    Footer.hasFooter();
    cy.wait(2000)
    if( itemsHomepage[5][0].quoteTitle.length > 0 ){
        HomePage.checkQuotesSectionElements(itemsHomepage[5][0].quoteTitle, itemsHomepage[5][0].quoteImage)
    }
});

// Scenario: 11416 [Home][Desktop] Blog and catálogo section
When('I check the blog and catálogo section', () => {
    // HomePage.hasBlogCatalogSection()
})

Then('Section has two cards with title, subtitle, and a btn with link', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.scrollTo('bottom')
    Footer.hasFooter();
    cy.wait(3000)
    
    HomePage.checkBlogCatalogImages(itemsHomepage[6][0].imageBlogUrl, itemsHomepage[6][0].imageCatalogUrl);
    cy.wait(1500)
    HomePage.checkBlogCatalogTexts(
        itemsHomepage[7][0].textTitleBlog,
        itemsHomepage[7][0].textSubTitleBlog,
        itemsHomepage[7][0].btnTextBlog,
        itemsHomepage[7][0].textTitleCatalog,
        itemsHomepage[7][0].textSubTitleCatalog,
        itemsHomepage[7][0].btnTextCatalog
    )
});

// ======================== HOMEPAGE MOBILE ========================
When('I check the main banner mobile', () => {
    cy.wait(2000)
    HomePage.hasMainBanner();
})

Then('Main Banner has arrows and dots to slide and two images with links Mobile', () => {
    HomePage.hasArrowsMobile()
    HomePage.hasDotsMobile()
    HomePage.hasImagesMobile()
});

When('I check the category section mobile', () => {
    // Workaround to guarantee homepage is fully loaded
    Footer.hasFooter();
    cy.scrollTo('top')
    cy.wait(2000)
    HomePage.hasCategorySection();
})

Then('Section has a title, shows five images with links and text Mobile', () => {
    HomePage.hasCategoryTitle(itemsHomepage[2][0].sectionTitleCateg);
    itemsHomepage[1].forEach((item) => {
        HomePage.hasCategorySubtitles(item.index, item.categoryName);
    })
    itemsHomepage[0].forEach((item) => {
        HomePage.hasCategoryImages(item.index);
    })
    itemsHomepage[0].forEach((item) => {
        HomePage.hasCategoryImagesLink(item.index, item.imageUrl);
    })
    cy.wait(1000)
});

When('I check the carousel mobile', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.wait(3500)
    Footer.hasFooter();
    cy.scrollTo('top')
    cy.wait(2000)
    HomePage.hasCarouselFirstMobile()

})

Then('Carousel has arrows and dots to slide, a title, and shows 2 product images mobile', () => {
    HomePage.checkTitleMobile(itemsHomepage[11][0].carouselFirstTitle)
    HomePage.checkSubTitleMobile(itemsHomepage[11][0].carouselFirstSubTitle)
    HomePage.hasCarouselArrows()
    HomePage.hasCarouselDots()
    HomePage.checkCarouselImagesMobile();
    cy.wait(2500)
});

Then('Cards have the product names, product prices, price details, agregar btn, and rate stars mobile', () => {
    cy.wait(2000)
    itemsHomepage[10].forEach((item) => {
        HomePage.hasRateStar(item);
    })
    itemsHomepage[10].forEach((item) => {
        HomePage.checkSellingPrice(item);
    })
    cy.wait(2000)
    HomePage.hasDetailBtnFirstLast(itemsHomepage[9][0].detailBtnText);
   
    HomePage.hasDetailBtn(itemsHomepage[9][0].detailBtnText)
    cy.wait(1500)
    HomePage.checkProductCardLabelMobile()
});

When('I check the yoelijoesika section mobile', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.wait(3500)
    Footer.hasFooter();
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo(0,-3000)

    // cy.scrollTo('bottom')
    HomePage.hasYOSection()
})

Then('Section has an image, title, subtitle, and logo mobile', () => {
    HomePage.hasYOTexts(itemsHomepage[3][0].yoElijoTitle, itemsHomepage[3][0].yoElijoSubTitle)
    HomePage.hasYOImages(itemsHomepage[4][0].yoElijoImage, itemsHomepage[4][0].yoElijoImageLogo)
    cy.wait(2500)
});

Then('Section has title, subtitle, and Probar btn mobile', () => {
    HomePage.checkSkinAdvisorImages();
    HomePage.checkSkinAdvisorTexts();
});

When('I check to validate quotation section mobile', () => {
    // HomePage.hasQuotesSection()  
})

Then('Section has a phrase and a quote mobile', () => {
    // Workaround to guarantee homepage is fully loaded
    Footer.hasFooter();
    cy.wait(2000)
    if( itemsHomepage[5][0].quoteTitle.length > 0 ){
        HomePage.checkQuotesSectionElements(itemsHomepage[5][0].quoteTitle, itemsHomepage[5][0].quoteImage)
    }
});

When('I check the blog and catálogo section mobile', () => {
    // HomePage.hasBlogCatalogSection()
})

Then('Section has two cards with title, subtitle, and a btn with link mobile', () => {
    // Workaround to guarantee homepage is fully loaded
    cy.scrollTo('bottom')
    Footer.hasFooter();
    cy.wait(3000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')
    cy.wait(1500)
    cy.scrollTo('bottom')
    HomePage.checkBlogCatalogTexts(
        itemsHomepage[7][0].textTitleBlog,
        itemsHomepage[7][0].textSubTitleBlog,
        itemsHomepage[7][0].btnTextBlog,
        itemsHomepage[7][0].textTitleCatalog,
        itemsHomepage[7][0].textSubTitleCatalog,
        itemsHomepage[7][0].btnTextCatalog
    );
    HomePage.checkBlogCatalogImagesMobile(itemsHomepage[6][0].imageBlogUrlMobile, itemsHomepage[6][0].imageCatalogUrlMobile);
});