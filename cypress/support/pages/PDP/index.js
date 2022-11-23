/// <reference types="Cypress" />

const elPdp = require('./elements').ELEMENTS
let regressionEnv = Cypress.env('environment')
let country = Cypress.env('country')

class Pdp {
    
    accessPdp(pdpUrl) {
        cy.visit(pdpUrl)
    }

    hasProductName(productName) {
        cy.get(elPdp.PRODUCT.itemProductName)
        .should('be.visible')
        .should('have.text', productName)
    }

    hasProductNameMobile(productName) {
        cy.get(elPdp.PRODUCT.itemProductNameMobile)
        .should('be.visible')
        .should('have.text', productName)
    }
    
    hasFixedBar() {
        cy.get(elPdp.FIXED_BAR.itemFixedBar)
        .should('be.visible')
    }
    
    hasFixedBarMobile() {     
            cy.get(elPdp.FIXED_BAR.itemFixedBarMobile)
            .should('be.visible')  
    }
    
    hasFixedBarProductName(productName) {
        cy.get(elPdp.FIXED_BAR.itemFixedBarProductName)
        .should('be.visible')
        .should('have.text', productName)
    }

    hasoriginalPrice(originalPrice) {
        cy.wait(1500)
        if (country == "CO" ) {
            cy.xpath(elPdp.FIXED_BAR.itemoriginalPrice)
            //.should('be.visible')
            .invoke('text')
            .invoke('replace', /\u00a0/g, '')
            .should('eq', originalPrice)            
        }
        if (country == "CL" || country == "MX") {
            cy.xpath(elPdp.FIXED_BAR.itemoriginalPrice)
           // .should('be.visible')
            .should('have.text', originalPrice)            
        }
        
    }

    hascurrentPrice(currentPrice) {
        if (country == "CO" ) {
            cy.xpath(elPdp.FIXED_BAR.itemcurrentPrice)
            //.should('be.visible')
            .invoke('text')
            .invoke('replace', /\u00a0/g, '')
            .should('eq', currentPrice)
        } 
        
        if (country == "CL" || country == "MX") {
            cy.xpath(elPdp.FIXED_BAR.itemcurrentPrice)
            .should('be.visible')
            .should('have.text', currentPrice)
        }       
    }

    hasFixedBarQuantity() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarQuantity)
        .should('be.visible')
    }
    
    hasFixedBarQuantityMobile() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarQuantityMobile)
        // 'be.visible' not working because oppacity === 0
        .should('exist')
    }

    hasFixedBarAgregarBtn(fixedBarBtnText) {
        cy.get(elPdp.FIXED_BAR.itemFixedBarAgregarBtn)
        .eq(1)
        .should('exist')
        .should('have.text', fixedBarBtnText)
    }
    
    hasFixedBarAgregarBtnMobile(fixedBarBtnText) {
        cy.get(elPdp.FIXED_BAR.itemFixedBarAgregarBtnMobile)
        .eq(1)
        .should('be.visible')
        .should('have.text', fixedBarBtnText)
    }

    addProductToCart() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarAgregarBtn)
        .eq(1)
        .should('exist')
        .wait(2500)
        // .trigger('click')
        .click({force: true})        
    }

    addProductToCartMobile() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarAgregarBtnMobile)
        .eq(1)
        .should('be.visible')
        .wait(2500)
        .click({force: true})
        .wait(2500)       
    }

    changeFixedBarQuantityPlus() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarPlus)
            .should('be.visible')
            .wait(1000)
            .click({force: true})
        
        cy.get(elPdp.FIXED_BAR.itemFixedBarNumber)
            .should('be.visible')
            .should('have.value', '2');
    }

    changeFixedBarQuantityPlusMobile() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarPlusMobile)
            .should('be.visible')
            .wait(1000)
            .click({force: true})
        
        cy.get(elPdp.FIXED_BAR.itemFixedBarNumber)
            .should('be.visible')
            .should('have.value', '2');
    }
    
    changeFixedBarQuantityMinus() {
        cy.get(elPdp.FIXED_BAR.itemFixedBarMinus)
            .should('be.visible')
            .click({force: true})
            .wait(200)
        
        cy.get(elPdp.FIXED_BAR.itemFixedBarNumber)
            .should('be.visible')
            .should('have.value', '1');
    }

    changeQuantityPlus() {
        cy.get(elPdp.PRODUCT.itemPlus)
            .should('be.visible')
            .click({force: true})
            .wait(200)
        
        cy.get(elPdp.PRODUCT.itemNumber)
            .should('be.visible')
            .should('have.value', '2');
    }

    changeQuantityMinus() {
        cy.get(elPdp.PRODUCT.itemMinus)
            .should('be.visible')
            .click({force: true})
            .wait(200)
        
        cy.get(elPdp.PRODUCT.itemNumber)
            .should('be.visible')
            .should('have.value', '1');
    }

    checkAddProductToCart() {
        cy.wait(2500)
        if (regressionEnv == "QAS") {
            cy.get(elPdp.PRODUCT.itemMiniCartNumber)
            .should('be.visible')
            .should('have.text', '1')        
        } 
        if (regressionEnv == "PRD") {            
            if (country == "MX") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumber)
                .should('be.visible')
                .should('have.text', '1')
            }
            if (country == "CO") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumber)
                .should('be.visible')
                .should('have.text', '1')
            }
            if (country == "CL") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumber)
                .should('be.visible')
                // workaround: most products has a gift on PRD
                .should('have.text', '2')
            }



        }
    }

    accessCartPage() {
        cy.get(elPdp.PRODUCT.itemMiniCartNumber)
        .should('be.visible')
        .click({force: true})
        .wait(3000) 
    }

    checkAddProductToCartMobile() {
        if (regressionEnv == "QAS") {
            cy.wait(2500)
            cy.get(elPdp.PRODUCT.itemMiniCartNumberMobile)
            .should('be.visible')
            .should('have.text', '1')
        }
        if (regressionEnv == "PRD") {
            cy.wait(2500)
            if (country == "MX") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumberMobile)
                .should('be.visible')                
                .should('have.text', '1')
            }
            if (country == "CO") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumberMobile)
                .should('be.visible')
                .should('have.text', '1')
            }
            if (country == "CL") {
                cy.get(elPdp.PRODUCT.itemMiniCartNumberMobile)
                .should('be.visible')
                // workaround: most products has a gift on PRD
                .should('have.text', '2')
            }
        }

    }

    // checkAddProductToCart2() {
    //     cy.wait(2500)
    //     cy.get(elPdp.PRODUCT.itemMiniCartNumber)
    //     .should('be.visible')
    //     .should('have.text', '1')
    // }

    hasPriceBlock() {
        cy.xpath(elPdp.PRODUCT.itemPriceBlock)
            //.should('be.visible')
    }

    hasCurrentPrice(currentPrice, currentPriceSign) {
        if (country == "CO") {
            cy.get(elPdp.PRODUCT.itemCurrentPriceCO)
            .invoke('text')
            .invoke('replace',/\u00a0/g, '')
            .should('eq', currentPrice)
        }
        if (country == "MX") {
            cy.get(elPdp.PRODUCT.itemCurrentPriceMX)
            //.should('be.visible')
            .should('have.text', currentPrice)

            cy.get(elPdp.PRODUCT.itemCurrentPriceSignMXCL)
            .should('be.visible')
            .should('have.text', currentPriceSign)
        }

        if (country == "CL") {
            cy.get(elPdp.PRODUCT.itemCurrentPriceCL)
            //.should('be.visible')
            .should('have.text', currentPrice)
        
            cy.get(elPdp.PRODUCT.itemCurrentPriceSign)
            .should('be.visible')
            .should('have.text', currentPriceSign)            
        }
    }

    hasSavingAmount() {
        if (country == "CO") {
        cy.get(elPdp.PRODUCT.itemSavingAmountCO)
            .should('be.visible')
            .should('not.be.empty')
        }
        if (country == "CL" || country == "MX") {
            cy.get(elPdp.PRODUCT.itemSavingAmountMXCL)
               // .should('be.visible')
                .should('not.be.empty')
            }
    }
/*
    hasOriginalPrice(originalPrice) {
        cy.get(elPdp.PRODUCT.itemOriginalPrice)
           // .should('be.visible')
            .should('have.text', originalPrice)
    }
*/
    hasReviewBlock() {
        cy.get(2500)
        cy.scrollTo('bottom')
        cy.get(2500)
        cy.scrollTo('bottom')
        cy.get('#reviews-main-container')
            .scrollIntoView()
            .should('be.visible')
        cy.get(2500)
    }

    hasReviewTitle() {
        cy.get('.vtex-reviews-and-ratings-3-x-reviewsHeading')
            .should('be.visible')
            .should('have.text', 'Comentarios')
        
    }

    hasReviewStars() {
        cy.get(elPdp.PRODUCT.itemReviewStars)
            .should('be.visible')
    }

    hasReviewStarRating() {
        cy.get(elPdp.PRODUCT.itemReviewStarRating)
            .should('be.visible')
    }

    hasReviewBtn(commentBtnText) {
        cy.get(elPdp.PRODUCT.itemReviewBtn)
            .should('be.visible')
            .should('have.text', commentBtnText)         

    }

    hasReviewComments() {
        cy.get(elPdp.PRODUCT.itemReviewComments)
            .should('be.visible')
    }

    hasProductImage(imageSrc) {        
        cy.get(elPdp.PRODUCT.itemProductImage)
           // .should('be.visible')
            .should('have.attr', 'src')
            .should( 'contains' , imageSrc);
    }

    hasProductImageMobile(imageMobileSrc) {
        cy.get(elPdp.PRODUCT.itemProductImageMobile)
            .should('be.visible')
            .should('have.attr', 'src')
            .should( 'contains' , imageMobileSrc);
    }

    hasProductStamp(stampText) {
        if (stampText > 0) {    
            cy.get(elPdp.PRODUCT.itemProductStamp)
            .eq('0')
            .should('be.visible')
            .should('have.text', stampText)  
        }
    }


}

export default new Pdp()