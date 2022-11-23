/// <reference types="Cypress" />

const elFooter = require('./elements').ELEMENTS
const url = Cypress.config("baseUrl")
let brand = Cypress.env('brand')
let country = Cypress.env('country')

class Footer {

    hasFooter() {
        cy.scrollTo('bottom')
        cy.get(elFooter.footer)
            .should('be.visible')
    }

    hasFooterMobile() {
        cy.scrollTo('bottom')
        cy.get(elFooter.footerMobile)
            .should('be.visible')
    }    

    validateFooterTitles(categoryClass, categoryTitle) {
        cy.get(elFooter.itemFooter(categoryClass))
        .should('be.visible')
        .should("have.text", categoryTitle)
    }

    validateFooterTitlesMobile(categoryClass, categoryTitle) {
        cy.get(elFooter.itemFooterMobile(categoryClass))
        .should('be.visible')
        .should("have.text", categoryTitle)
    }

    validateFooterSubTitles(subTitle, subTitleText, url) {
        if (brand != "Cyzone") {
            cy.get(elFooter.itemFooterSubTitles(subTitle))
                .should('be.visible')
                .should("have.text", subTitleText)
                .should('have.attr', 'href', url)
        }
            cy.get(elFooter.itemFooterSubTitles(subTitle))
            .should('be.visible')
            .should("have.text", subTitleText)
            .should('have.attr', 'href').should('not.be.empty')
        
    }

    validateFooterSubTitlesMobile1(subTitleAnswer, subTitleText, url) {        
        cy.xpath(elFooter.itemFooterSubTitleMobile(subTitleText))
        .should('exist')
        .should("have.text", subTitleText)
        //.should('have.attr', 'href', url)
    }

    validateFooterSubTitlesMobile2(subTitleAnswer, subTitleText) {
        cy.get(elFooter.itemFooterSubTitleMobile(subTitleAnswer))
        .should('be.visible')
        .should("have.text", subTitleText)
    }

    validateFooterSubTitlesMobile3(subTitleAnswer, subTitleText) {
        cy.get(elFooter.itemFooterSubTitleMobile(subTitleAnswer))
        .should('be.visible')
        .should("have.text", subTitleText)
    }

    validateFooterDropDown(arrowDown) {
        cy.get(elFooter.itemFooterArrowDown(arrowDown))
        .click({force: true})
    }

    validateFooterDropUp(arrowUp) {
        cy.get(elFooter.itemFooterArrowUp(arrowUp))
        .click({force: true})
    }

    validateFooterSocialMedia(socialMedia, socialMediaLink) {
        cy.get(elFooter.itemFooterSocialMedia(socialMedia))
        .should('be.visible')
        .should('have.attr', 'href')
            .and('equal', socialMediaLink)
    }

    validateFooterBenefitsLogo(benefitsLogo) {
        cy.get(elFooter.itemFooterBenefitsLogo(benefitsLogo))
        .should('be.visible')
    }

    validateFooterBenefitsLogoMobile(benefitsLogoMobile) {
        cy.get(elFooter.itemFooterBenefitsLogoMobile(benefitsLogoMobile))
        .should('be.visible')
    }

    validateFooterBenefitsText(benefits, benefitsText) {        
        cy.xpath(elFooter.itemFooterBenefitsText(benefitsText))        
        .should('be.visible')
        .should("have.text", benefitsText)        
    }

    validateFooterPaymentsText(paymentsText) {
        cy.get(elFooter.itemFooterPaymentsText)
        .should('be.visible')
        .should("have.text", paymentsText)
    }

    validateFooterPaymentsTextMobile(paymentsText) {
        cy.get(elFooter.itemFooterPaymentsTextMobile)
        .should('be.visible')
        .should("have.text", paymentsText)
    }

    validateFooterPaymentsLogo(payments) {
        cy.get(elFooter.itemFooterPaymentsLogo(payments))
        .should('be.visible')
    }
}

export default new Footer()