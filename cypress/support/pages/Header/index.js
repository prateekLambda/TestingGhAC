/// <reference types="Cypress" />

const elHeader = require('./elements').ELEMENTS
let baseUrl = Cypress.config("baseUrl")
let brand = Cypress.env('brand')

class Header {
    hasHeaderMobile() {
        cy.get(elHeader.itemHeaderMobile)
            .should('be.visible')
    }

    hasNavigationBar() {
        cy.get(elHeader.itemHeaderNavigationBar)
            .should('be.visible')
    }

    hasNavigationBarMobile() {
        cy.get(elHeader.itemHeaderNavigationBarMobile)
            .should('be.visible')
    }

    validateLogos(logo, logoImage) {
        cy.get(elHeader.itemHeaderLogos(logo))
        .should('be.visible')
        .should('have.attr', 'src', logoImage) 
    }

    validateLogosMobile(logoMobile, logoImageMobile) {
        cy.get(elHeader.itemHeaderLogosMobile(logoMobile))
        .should('be.visible')
        .should('have.attr', 'src', logoImageMobile) 
    }

    validateLogosLinks(logo, logoLink) {
        cy.wait(500)
        cy.get(elHeader.itemHeaderLogosBtn(logo))     
        .should('have.attr', 'href', logoLink) 
    }

    validateLogosLinksMobile(logoMobile, logoLink) {
        cy.wait(500)
        cy.get(elHeader.itemHeaderLogosBtnMobile(logoMobile))
        .should('have.attr', 'href', logoLink) 
    }

    clickMenuHamburguer() {
        cy.get(elHeader.itemHeaderMenuHamburguer)
            .should('be.visible')
            .click()
    }

    validateBecomConsultBtnText(consultBtnText) {
        cy.xpath(elHeader.itemHeaderBecomeConsultBtnText)
        .should('be.visible')
        .should('have.text', consultBtnText)
    }

    validateBecomConsultBtnTextMobile(consultBtnText) {
        cy.get(elHeader.itemHeaderBecomeConsultBtnMobile)
        .should('be.visible')
        .should('have.text', consultBtnText)
    }    

    validateBecomConsultBtnUrl(consultUrl) {
        cy.wait(1500)
        cy.xpath(elHeader.itemHeaderBecomeConsultBtnUrl)
        .should('be.visible')
            .click({force: true})
        cy.url()
        .should('contain', consultUrl)
    }    

    validateBecomConsultBtnUrlMobile(consultUrl) {
        cy.get(elHeader.itemHeaderBecomeConsultBtnMobile)
            .click()
        cy.on("url:changed", (newUrl) => {
            expect(newUrl).to.contain(consultUrl)
      })
    }

    validateBecomConsultBtnIconMobile() {
        cy.get(elHeader.itemHeaderBecomeConsultIcon)
        .should('be.visible')
    }

    validateFindConsultBtn() {
        cy.get(elHeader.itemHeaderFindConsultBtn)
        .should('be.visible')
    }

    validateFindConsultIcon(findConsultIcon) {
        cy.get(elHeader.itemHeaderFindConsultBtn)
            .should('be.visible')
            .should('have.attr', 'href', findConsultIcon)
    }

    valildateFindConsultText(findConsultText) {
        cy.get(elHeader.itemHeaderFindConsultText)
            .should('be.visible')
            .should('have.text', findConsultText)
    }

    validateFindConsultLink(findConsultLink) {
        cy.get(elHeader.itemHeaderFindConsultBtn)
            .click({force:true})
        cy.url()
            .should('eq', findConsultLink)
    }

    validateBrandLogo(brandLogo) {
        cy.get(elHeader.itemBrandLogo)
            .should('be.visible')
            .should('have.attr', 'src', brandLogo)
    }

    validateBrandLogoMobile(brandLogoMobile) {
        cy.get(elHeader.itemBrandLogoMobile)
            .should('be.visible')
            .should('have.attr', 'src', brandLogoMobile)
    }

    validateBrandLogoBtn(brandLogoLink) {
        cy.get(elHeader.itemBrandLogoBtn)
            .click()
        // cypress are not getting eq.(consultUrl)
        cy.on("url:changed", (newUrl) => {
            expect(newUrl).to.contain(brandLogoLink)
        })
    }
    validateBrandLogoBtnMobile(brandLogoLink) {
        cy.get(elHeader.itemBrandLogoBtnMobile)
            .click()
        // cypress are not getting eq.(consultUrl)
        cy.on("url:changed", (newUrl) => {
            expect(newUrl).to.contain(brandLogoLink)
        })
    }

    validateSearchBar() {
        cy.get(elHeader.itemSearchBar)
            .should('be.visible')
    }

    validateSearchBarMobile() {
        cy.get(elHeader.itemSearchBarMobile)
            .should('be.visible')
    }

    typeSearchBar(character) {
        cy.wait(2500)
        cy.get(elHeader.itemSearchBar)
          .should('be.enabled')
          .type(character)
    }

    typeSearchBarProduct(product) {
        cy.wait(2500)
        cy.get(elHeader.itemSearchBar)
          .should('be.enabled')
          .type(product + '{enter}', { force: true })
      }

      typeSearchBarProductMobile(product) {
        cy.wait(2500)
        cy.get(elHeader.itemSearchBarMobile)
          .should('be.enabled')
          .type(product + '{enter}', { force: true })
      }

    validateSearchBarPlaceholder(placeHolderText) {
        cy.get(elHeader.itemSearchBar)
            .invoke('attr', 'placeholder').should('contain', placeHolderText)
    }

    validateSearchBarPlaceholderMobile(placeHolderText) {
        cy.get(elHeader.itemSearchBarMobile)
            .invoke('attr', 'placeholder').should('contain', placeHolderText)
    }

    validateMenuCategoryName(index, categoryName) {
        cy.get('.vtex-menu-2-x-styledLinkContent--menu-link-desktop')
            .eq(index)
            .should('be.visible')
            .should('have.text', categoryName)
    }

    validateMenuCategoryNumber(index) {
        cy.get(elHeader.itemMenuCategoryNumber(index))
            .should('be.visible')
    }

    validateMenuCategoryNumberMobile(index, menuCategoryNameMobile) {
        cy.get(elHeader.itemMenuCategoryNumberMobile)
        .eq(index)
        .should('exist')
        // todo: should add category name after definition
        // .should('have.text', menuCategoryNameMobile)
    }

    validateMenuCategoryNumberMobile2(index, menuCategoryNameMobile2) {
        cy.get(elHeader.itemMenuCategoryNumberMobil2)
        .eq(index)
        .should('exist')
        // todo: should add category name2 after definition
        .should('have.text', menuCategoryNameMobile2)
    }

    clickSubMenuMobile() {
        cy.wait(1500)
        cy.get(elHeader.itemMenuCategoryNumberMobile)
        // ! eq index maybe will change after categories update 
        .eq(1)
        .click()
        cy.wait(1000)
    }

    validateSubMenuBannerMobile() {
        cy.wait(1500)
        cy.get(elHeader.itemMenuBannerMobile)
        .eq(0)
        .scrollIntoView()
        .should('be.visible')
        .should('have.attr', 'src')    
        cy.wait(1500)
        cy.get(elHeader.itemMenuBannerMobile)
        .eq(1)
        .scrollIntoView()
        .should('be.visible')
        .should('have.attr', 'src')         
    }

    validateMenuCloseBtnMobile() {
        cy.get(elHeader.itemMenuCloseBtnMobile)
            .should('be.visible')
    }


    // todo: should be refactor after definition of the categories
    // all componentes can only be tested while hover is active
    validateMenuComponentsOnHover() {
        cy.get(elHeader.itemMenuCategory1)
            .should('be.visible')
            .trigger('mouseover')
            cy.wait(2500)
        // cy.get(elHeader.itemMenuCategory2)
        //     .should('be.visible')
        //     .trigger('mouseover')
        cy.get(elHeader.itemMenuSubCategory)
            .should('be.visible')
            cy.wait(2500)
        //todo: Cypress are not finding all the elements after hover. Can be a bug! Check it!
        // cy.get(elHeader.itemSubMenuImage1)
        //     .should('be.visible')
        //     .should('have.attr', 'src', 'https://esika.vtexassets.com/arquivos/grupo-submenu-1.png')
        // cy.get(elHeader.itemSubMenuImageTitle1)
        //     .should('be.visible')
        //     .should('have.text', 'Lorem ipsum dolor sit amet, consectetur ad...')
        // cy.get(elHeader.itemSubMenuImageSubTitle1)
        //     .should('be.visible')
        //     .should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...')

         //cy.get(elHeader.itemSubMenuImage2)
         //    .should('be.visible')
         //   .should('have.attr', 'src', 'https://esika.vtexassets.com/arquivos/grupo-submenu-1.png')
         //cy.get(elHeader.itemSubMenuImageTitle2)
         //    .should('be.visible')
         //    .should('have.text', 'Lorem ipsum dolor sit amet, consectetur ad...')
         //cy.get(elHeader.itemSubMenuImageSubTitle2)
         //    .should('be.visible')
         //    .should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...')
    }

    validateChipsMenu() {
        cy.get(elHeader.itemHeaderChipsMenu)
            .should('be.visible')
    }

    validateChipsMenuNumber(index) {
        cy.get(elHeader.itemHeaderChipsMenuNumber(index))
            .scrollIntoView({ offset: { right: 150 } })
            .should('be.visible')
    }

    clickSearchBar() {
        cy.get(elHeader.SEARCH_BAR.itemSearchBar)
            .click()
            .wait(2000)
    }

    // validateSearchBarHistory() {
    //     cy.get(elHeader.SEARCH_BAR.historyFirstResult)
    //         .click()
    //         cy.on("url:changed", (newUrl) => {
    //             expect(newUrl).to.equal('https://esika.myvtex.com/perfume?map=ft&_q=perfume')
    //         })      
    // }
    
    Product(typeTwoChar) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBar)
        .click()
        .type(typeTwoChar)
    }

    typeSearchBarMobile(typeTwoChar) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarMobile)
        .click()
        .type(typeTwoChar)
    }
    
    // validateSearchBarType() {
    //     cy.get(elHeader.SEARCH_BAR.itemSearchBarType)
    //     .should('exist')
    //     .click()
    //     cy.on("url:changed", (newUrl) => {
    //         expect(newUrl).to.equal('https://esika.myvtex.com/perfume?_q=perfume&map=ft')
    //     })      
    // }
    
    typeSearchBarSinSugerencia(typeInvalidChar) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBar)
        .click()
        .type(typeInvalidChar)
    }

    typeSearchBarSinSugerenciaMobile(typeInvalidChar) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarMobile)
        .click()
        .type(typeInvalidChar)
    }

    validateSearchBarTypeNoSuggestions(noSuggestionText) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarNoSuggestions)
        .should('be.visible')
        .should('have.text', noSuggestionText)
    }
    
    validateSearchBarTypeNoSuggestionsMobile(noSuggestionText) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarNoSuggestionsMobile)
        .should('be.visible')
        .should('have.text', noSuggestionText)
    }

    validateNoProductFound() {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarProductNotFound)
            .should('be.visible')
    }

    validateProductFound() {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarProductFound)
        .eq(0)
        .should('be.visible')
        // .contains(product, {matchCase: false})
    }

    validateSearchBarMost(mostSearchUrl) {
        cy.get(elHeader.SEARCH_BAR.itemSearchBarMost)
            .click({force: true})

            cy.on("url:changed", (newUrl) => {
                expect(newUrl).to.equal(mostSearchUrl)
            })      
    }    
    
    validateSearchBarMostMobile(mostSearchUrl) {
        if (brand == "Cyzone") {
            cy.get(elHeader.SEARCH_BAR.itemSearchBarMostMobileCy)
                .click({force: true})            
        }
        if (brand == "Esika" || brand == "Lbel") {
            cy.get(elHeader.SEARCH_BAR.itemSearchBarMostMobile)
            .click({force: true})
        }
        cy.on("url:changed", (newUrl) => {
                expect(newUrl).to.equal(mostSearchUrl)
            })      
    }    

}

export default new Header()