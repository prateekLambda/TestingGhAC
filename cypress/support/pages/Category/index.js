/// <reference types="Cypress" />

const elCategory = require('./elements').ELEMENTS
const elHomepage = require('../Homepage/elements').ELEMENTS
const elHeader = require('../Header/elements').ELEMENTS
const url = Cypress.config("baseUrl")
const country = Cypress.env('country')
const regressionEnv = Cypress.env('environment')


class Category {

    accessCategoryPage(category) {
        cy.visit(`${url}${category}`)
    }

    clickCategorySection(device, category, indexCategory) {
        if (device == 'Desktop') {
            cy.xpath(elHomepage.CATEGORY_SECTION.category(category)).click()
            cy.xpath(elHomepage.CATEGORY_SECTION.categoryNameDesktop(category.toLowerCase())).click()
        } else {
            cy.get(elHeader.itemHeaderMenuHamburguer).click()
            cy.xpath(elHeader.itemMenuCategoryNumberMobile2(indexCategory)).click()
            cy.xpath(elHeader.itemSubMenuCategorySeeAll).click()
        }
        cy.wait(500)
    }

    hasCategoryBanner(categoryMainBannerUrl) {
        cy.get(elCategory.itemCategoryMainBanner)
        //workaround// .should('be.visible')
            .should('have.attr', 'src', categoryMainBannerUrl)
    }

    hasCategoryBannerMobile(categoryMainBannerUrlMobile) {
        cy.get(elCategory.itemCategoryMainBannerMobile)
        //workaround//    .should('be.visible')
            .should('have.attr', 'src', categoryMainBannerUrlMobile)
    }

    hasCategoryBtnMore() {
        cy.get(elCategory.itemCategoryBtnMore)
            .should('be.visible')
    }

    checkCategoryBtnMoreText(categoryBtnMoreText) {
        if (country !== "PE") {
            cy.get(elCategory.itemCategoryBtnMoreText)
                .should('be.visible')
                .should('have.text', categoryBtnMoreText)
        }   
        if (country === "PE") {
            cy.get(elCategory.itemCategoryBtnMoreTextPE)
                .should('be.visible')
                .should('have.text', categoryBtnMoreText)
        }   
    }

    hasBreadCrumbCategory() {
        cy.get(elCategory.itemCategoryBreadCrumb)
            .should('be.visible')
    }

    hasBreadCrumbCategoryHome() {
        cy.get(elCategory.itemCategoryBreadCrumbHome)
            .should('be.visible')
    }

    hasBreadCrumbCategoryName(breadCategoryName) {
        cy.get(elCategory.itemCategoryBreadCrumbName)
            .should('be.visible')
            .should('have.text', breadCategoryName)
    }

    hasBreadCrumbCategoryUrl(category) {
        cy.get(elCategory.itemCategoryBreadCrumbName)
            .should('be.visible')
            .click()

        cy.url().should('include', `${url}${category}`)
        // cy.on("url:changed", (newUrl) => {
        //     expect(newUrl).to.equal()
        // })
    }

    hasCategoryOrderTitle(categoryOrderTitle) {
        cy.wait(5000)
        cy.get(elCategory.itemCategoryOrderTitle)
            .should('be.visible')
            .should('have.text', categoryOrderTitle)
    }

    hasCategoryOrderTitleMobile(categoryOrderTitleMobile) {
        cy.wait(5000)
        cy.get(elCategory.itemCategoryOrderTitleMobile)
            .should('be.visible')
            .should('have.text', categoryOrderTitleMobile)
    }

    hasCategoryOrderArrow() {
        cy.get(elCategory.itemCategoryOrderArrow)
            .should('exist')
    }

    clickCategoryOrderBtn() {
        cy.get(elCategory.itemCategoryOrderBtn)
            .should('be.visible')
            .wait(500)
            // .trigger('click')
            .click({ force: true })
            .wait(500)
    }

    clickCategoryOrderBtnMobile() {
        cy.wait(5000)
        cy.get(elCategory.itemCategoryOrderBtnMobile)
            .should('be.visible')
            .wait(2000)
            .click({ force: true })
            .wait(500)
    }

    hasCategoryOrderFirstOption(categoryFirstOption) {
        cy.wait(3500)
        cy.get(elCategory.itemCategoryOrderFirstOption)
            .should('be.visible')
            .should('have.text', categoryFirstOption)
    }

    hasCategoryOrderOptions(categoryOrderIndex, categoryOptions) {
        cy.wait(3500)
        cy.get(elCategory.itemCategoryOrderOptions)
            .eq(categoryOrderIndex)
            .should('be.visible')
            .should('have.text', categoryOptions)
    }

    clickCategoryOrderOptions(categoryOrderIndex) {
        cy.get(elCategory.itemCategoryOrderOptions)
            .eq(categoryOrderIndex)
            .should('be.visible')
            .click({ force: true })
    }

    checkCategoryOrderOptionsUrl(categoryOrderUrl) {
        cy.url().should('include', categoryOrderUrl)
    }

    hasCategoryProductCard() {
        cy.get(elCategory.itemCategoryProductCard)
            .should('be.visible')
    }

    hasCategoryProductImage() {
        cy.get(elCategory.itemCategoryProductImage)
            .should('be.visible')
    }

    hasCategoryProductName() {
        cy.get(elCategory.itemCategoryProductName)
            .should('be.visible')
    }

    hasCategoryProducPrice() {
        cy.get(elCategory.itemCategoryProductPrice)
            .should('be.visible')
    }

    hasCategoryProducBtn() {
        cy.get(elCategory.itemCategoryProductBtn)
            .should('be.visible')
    }


    selectFilterBy(optionFilterBy) {
        cy.wait(2500)
        cy.xpath(elCategory.checkFilterOrderBy(optionFilterBy))
            .should('exist')
            .click({ force: true })
    }

    getIndexbyCategory(category, array) {
        let newArray = array.find(element => element.menuCategoryNameMobile2 == category);
        return newArray.index
    }


}

export default new Category()