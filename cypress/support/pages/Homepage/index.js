/// <reference types="Cypress" />

const elHomepage = require('./elements').ELEMENTS
const elHomepagePE = require('./elementsPE').ELEMENTS_PE
const elHomepageCO = require('./elementsCO').ELEMENTS

let url = Cypress.config("baseUrl")
let brand = Cypress.env('brand')
let country = Cypress.env('country')


class HomePage {

    viewPortPDPIphoneXR() {
        cy.viewport('iphone-xr')
        cy.wait(1000)
    }

    viewPortIphone12() {
        cy.viewport(390, 844)
        cy.wait(1000)
    }

    viewPortSamsungS10() {
        cy.viewport('samsung-s10')
        cy.wait(1000)
    }

    accessHomepage() {
        cy.visit(url)
    }

    hasMainBanner() {
        cy.get(elHomepage.MAIN_BANNER.mainBanner)
            .should('be.visible')
    }

    hasArrows() {
        
        if (country == 'PE' || country === 'CL') {
            cy.get(elHomepagePE.MAIN_BANNER.leftArrow)
                .should('be.visible')
            cy.get(elHomepagePE.MAIN_BANNER.rightArrow)
                .should('be.visible')
        } else if (country == 'CO'){
            cy.get(elHomepageCO.MAIN_BANNER.leftArrow)
                .should('be.visible')
            cy.get(elHomepageCO.MAIN_BANNER.rightArrow)
                .should('be.visible')
        }
        else {
            cy.get(elHomepage.MAIN_BANNER.leftArrow)
                .should('be.visible')
            cy.get(elHomepage.MAIN_BANNER.rightArrow)
                .should('be.visible')
        }
    }

    hasArrowsMobile() {
        if (country === "PE" || country === 'CL') {
            cy.get(elHomepagePE.MAIN_BANNER.leftArrowMobile)
                .should('be.visible')
            cy.get(elHomepagePE.MAIN_BANNER.rightArrowMobile)
                .should('be.visible')
        } else if (country == 'CO'){
            cy.get(elHomepageCO.MAIN_BANNER.leftArrowMobile)
            .should('be.visible')
            cy.get(elHomepageCO.MAIN_BANNER.rightArrowMobile)
            .should('be.visible')
        }
        else {
            cy.get(elHomepage.MAIN_BANNER.leftArrowMobile)
                .should('be.visible')
            cy.get(elHomepage.MAIN_BANNER.rightArrowMobile)
                .should('be.visible')
        }
    }

    hasDots() {
        
        if (country === "PE" || country === "CL") {
            cy.get(elHomepagePE.MAIN_BANNER.firstDot)
                .should('be.visible')
            cy.get(elHomepagePE.MAIN_BANNER.secondDot)
                .should('be.visible')
        } else if (country == 'CO'){
            cy.get(elHomepageCO.MAIN_BANNER.firstDot)
                .should('be.visible')
            cy.get(elHomepageCO.MAIN_BANNER.secondDot)
                .should('be.visible')
        }
        else {
            cy.get(elHomepage.MAIN_BANNER.firstDot)
                .should('be.visible')
            cy.get(elHomepage.MAIN_BANNER.secondDot)
                .should('be.visible')
        }
    }

    hasDotsMobile() {
        if (country === "PE" || country === "CL") {
            cy.get(elHomepagePE.MAIN_BANNER.firstDotMobile)
                .should('be.visible')
            cy.get(elHomepagePE.MAIN_BANNER.secondDotMobile)
                .should('be.visible')
         } else if (country == 'CO'){
            cy.get(elHomepageCO.MAIN_BANNER.firstDotMobile)
                .should('be.visible')
            cy.get(elHomepageCO.MAIN_BANNER.secondDotMobile)
                .should('be.visible')
        }
        else {
            cy.get(elHomepage.MAIN_BANNER.firstDotMobile)
                .should('be.visible')
            cy.get(elHomepage.MAIN_BANNER.secondDotMobile)
                .should('be.visible')
        }
    }

    hasImages() {
        cy.get(elHomepage.MAIN_BANNER.firstImage)
            .should('exist')
            .should('have.attr', 'src')
            .should('not.be.empty')
        //  ? Should we validate this dynamic content?
        // .should( 'include' , "https://esika.vtexassets.com/assets/vtex.file-manager-graphql/images/9d879f0a-61b8-4a92-a734-f4954d6f2802___4804cba94eea9acb36cc2ca1588ad1fc.jpg");
        cy.wait(1000)
        // cy.get(elHomepage.MAIN_BANNER.rightArrow).click()
        // cy.get(elHomepage.MAIN_BANNER.secondImage)
        //     .should('exist')
        //     .should('have.attr', 'src')
        //     .should('not.be.empty')
        //  ? Should we validate this dynamic content?
        // .should( 'include' , "https://esika.vtexassets.com/assets/vtex.file-manager-graphql/images/f2fe77b8-7e78-4274-8f58-86adda1685dc___d48caf204ef264a941b6bd39497a1d4f.jpg");
    }

    hasImagesMobile() {
        cy.get(elHomepage.MAIN_BANNER.firstImageMobile)
            .should('be.visible')
            .should('have.attr', 'src')
            .should('not.be.empty')
        //  ? Should we validate this dynamic content?
        // .should( 'include' , "https://esika.vtexassets.com/arquivos/esika-banner-main-image-mobile.jpg");


        cy.get(elHomepage.MAIN_BANNER.paginationDotMobile)
            .eq(1)
            .click({ force: true });

        if (country === "PE" || country === "CL") {
            cy.xpath(elHomepagePE.MAIN_BANNER.secondImageMobile)
                .should('exist')
                .should('have.attr', 'src')
                .should('not.be.empty')
            //  ? Should we validate this dynamic content?
            // .should( 'include' , "https://esika.vtexassets.com/arquivos/esika-banner-main-image-mobile-2.jpg");
        } else if (country == 'CO'){
            cy.get(elHomepageCO.MAIN_BANNER.secondImageMobile)
            .should('exist')
            .should('have.attr', 'src')
            .should('not.be.empty')
        } 
        else {
            cy.get(elHomepage.MAIN_BANNER.secondImageMobile)
                .should('exist')
                .should('have.attr', 'src')
                .should('not.be.empty')
        }
    }

    hasCategorySection() {
        cy.get(elHomepage.CATEGORY_SECTION.categorySection)
            .should('be.visible')
            .scrollIntoView()
    }

    hasCategoryTitle(sectionTitleCateg) {
        if (country == 'PE' || country === 'CL') {
            if (brand == 'Cyzone'){
                cy.get(elHomepagePE.CATEGORY_SECTION.titleCyzone)
                .scrollIntoView()
                .should(
                    "have.text",
                    sectionTitleCateg)
            } else {
                cy.get(elHomepagePE.CATEGORY_SECTION.title)
                .scrollIntoView()
                .should(
                    "have.text",
                    sectionTitleCateg)
            }
           
        } else if (country == 'CO'){
            cy.get(elHomepageCO.CATEGORY_SECTION.title)
                .scrollIntoView()
                .should(
                    "have.text",
                    sectionTitleCateg)
        }
        else {
            cy.get(elHomepage.CATEGORY_SECTION.title)
                .scrollIntoView()
                .should(
                    "have.text",
                    sectionTitleCateg)
        }
    }

    hasCategorySubtitles(index, categoryName) {
        if (country == 'PE' || country === 'CL') {
            cy.get(elHomepagePE.CATEGORY_SECTION.categoryName(index))
                .eq(0)
                .should('be.visible')
                .should("have.text", categoryName);
        }
        else{
            cy.get(elHomepage.CATEGORY_SECTION.categoryName(index))
                //.scrollIntoView()
                .should('be.visible')
                .should("have.text", categoryName);
        }
    }

    hasCategoryImages(index) {
        cy.scrollTo('top')
        if (brand == "Cyzone"){
            if(country == "CL"){
                cy.xpath(elHomepage.CATEGORY_SECTION.imageCyzoneCL(index))
                //.scrollIntoView({ duration: 500 })
                .should('be.visible');
            }else{
                cy.get(elHomepage.CATEGORY_SECTION.imageCyzone(index))
                //.scrollIntoView({ duration: 500 })
                .should('be.visible');
            }
        }else if (brand == "Lbel"){
            cy.get(elHomepage.CATEGORY_SECTION.imageLbel(index))
            // .scrollIntoView({ duration: 500 })
            .should('be.visible');
        }else{
            cy.get(elHomepage.CATEGORY_SECTION.image(index))
            // .scrollIntoView({ duration: 500 })
            .should('be.visible');
        }
    }

    hasCategoryImagesLink(index, imageUrl) {
        if (brand == "Lbel"){
            cy.get(elHomepage.CATEGORY_SECTION.imageLbel(index))
                .then((el) => {
                    expect(el).have.attr('src').eq(imageUrl)
                })
        } else if (brand == "Cyzone"){
            if(country == "CL"){
                cy.xpath(elHomepage.CATEGORY_SECTION.imageCyzoneCL(index))
                .then((el) => {
                    expect(el).have.attr('src').eq(imageUrl)
                })
            }else{
                cy.get(elHomepage.CATEGORY_SECTION.imageCyzone(index))
                .then((el) => {
                    expect(el).have.attr('src').eq(imageUrl)
                })
            }
        }
        else {
            cy.get(elHomepage.CATEGORY_SECTION.image(index))
            .then((el) => {
                expect(el).have.attr('src').eq(imageUrl)
            })
        }
    }

    hasCarouselFirst() {        
        if (country == 'PE' || country === 'CL') {
            cy.get(elHomepagePE.CAROUSEL_FIRST.container)
                .eq(0)
                // scrollIntoView is been used to guarantee rate stars will be displayed
                .should('be.visible').scrollIntoView();
        } else if (country == 'CO'){
            cy.get(elHomepageCO.CAROUSEL_FIRST.container)
            .eq(0)
            // scrollIntoView is been used to guarantee rate stars will be displayed
            .should('be.visible').scrollIntoView();
        }
        else{
            cy.get(elHomepage.CAROUSEL_FIRST.container)
                .eq(0)
                // scrollIntoView is been used to guarantee rate stars will be displayed
                .should('be.visible').scrollIntoView();
        }
    }

    hasCarouselFirstMobile() {
        cy.get(elHomepage.CAROUSEL_FIRST.containerMobile)
            // scrollIntoView is been used to guarantee rate stars will be displayed
            .eq(0)
            .should('be.visible').scrollIntoView()

    }

    getCarouselFirstMobile() {
        cy.get(elHomepage.CAROUSEL_FIRST.containerMobile)
    }

    checkTitle(carouselFirstTitle) {
        cy.get(elHomepage.CAROUSEL_FIRST.title)
            .eq(0)
            .should(
                "have.text",
                carouselFirstTitle);
    }

    checkTitleMobile(carouselFirstTitle) {
        if (country == 'CO'){
            cy.get(elHomepageCO.CAROUSEL_FIRST.titleMobile)
            .should(
                "have.text",
                carouselFirstTitle);
        } else{
            cy.get(elHomepage.CAROUSEL_FIRST.titleMobile)
            .should(
                "have.text",
                carouselFirstTitle);
        }
    }

    checkSubTitle(carouselFirstSubTitle) {
        cy.get(elHomepage.CAROUSEL_FIRST.subTitle)
            .eq(0)
            .should(
                "have.text",
                carouselFirstSubTitle);
    }

    checkSubTitleMobile(carouselFirstSubTitle) {
        if (country == 'CO'){
            cy.get(elHomepageCO.CAROUSEL_FIRST.subTitleMobile)
            .should(
                "have.text",
                carouselFirstSubTitle);
        } else {
        cy.get(elHomepage.CAROUSEL_FIRST.subTitleMobile)
            .should(
                "have.text",
                carouselFirstSubTitle);
        }
    }

    hasCarouselArrows() {
        if (country == 'CO'){
            cy.get(elHomepage.CAROUSEL_FIRST.leftArrow)
            .should('be.visible')
            cy.get(elHomepage.CAROUSEL_FIRST.rightArrow)
            .should('be.visible') 
        } else {
            cy.get(elHomepage.CAROUSEL_FIRST.leftArrow)
                .should('be.visible')
            cy.get(elHomepage.CAROUSEL_FIRST.rightArrow)
                .should('be.visible')
        }
    }

    hasCarouselDots() {
        cy.get(elHomepage.CAROUSEL_FIRST.firstDot)
            .should('be.visible')
        cy.get(elHomepage.CAROUSEL_FIRST.secondDot)
            .should('be.visible')
    }

    checkCarouselImages() {
        if (country == 'CO'){
            cy.get(elHomepageCO.CAROUSEL_FIRST.imageSrc1)
            .eq(0)
            .scrollIntoView()
            .should('have.attr', 'src').should('not.be.empty');
            cy.get(elHomepageCO.CAROUSEL_FIRST.imageSrc2)
                .eq(0)
                // .scrollIntoView()
                .should('have.attr', 'src').should('not.be.empty');
            cy.get(elHomepageCO.CAROUSEL_FIRST.imageSrc3)
                .eq(0)
                .should('have.attr', 'src').should('not.be.empty');
            cy.get(elHomepageCO.CAROUSEL_FIRST.imageSrc4)
                .eq(0)
                .should('have.attr', 'src').should('not.be.empty')
            cy.get(elHomepageCO.CAROUSEL_FIRST.imageSrc5)
                .eq(0)
                .should('have.attr', 'src').should('not.be.empty');
        } else {
            if (brand == "Cyzone"){
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc1Cyzone)
                    .eq(0)
                    .scrollIntoView()
                    .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc2Cyzone)
                    .eq(0)
                    // .scrollIntoView()
                    .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc3Cyzone)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc4Cyzone)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty')
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc5Cyzone)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty');
            }else{
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc1)
                .eq(0)
                .scrollIntoView()
                .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc2)
                    .eq(0)
                    // .scrollIntoView()
                    .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc3)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty');
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc4)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty')
                cy.get(elHomepage.CAROUSEL_FIRST.imageSrc5)
                    .eq(0)
                    .should('have.attr', 'src').should('not.be.empty');
            }
        }
    }

    checkCarouselImagesMobile() {
        cy.get(elHomepage.CAROUSEL_FIRST.imageMobileSrc1)
            .eq(0)
            .should('have.attr', 'src').should('not.be.empty');
        cy.get(elHomepage.CAROUSEL_FIRST.imageMobileSrc2)
            .eq(0)
            .should('have.attr', 'src').should('not.be.empty');
    }

    checkSellingPrice(index) {
        cy.get(elHomepage.CAROUSEL_FIRST.sellingPrice)
            .eq(index)
           // .should('be.visible')
            .should('not.be.empty')
    }

    // checkProductPrice() {
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPrice1)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productDiscount)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPrice2)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPrice3)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPrice4)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPrice5)
    //     .should('not.be.empty');
    // }

    // checkProductPriceMobile() {
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPriceMobile1)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productDiscountMobile)
    //     .should('not.be.empty');
    //     cy.get(elHomepage.CAROUSEL_FIRST.productPriceMobile2)
    //     .should('not.be.empty');
    // }

    hasDetailBtnFirstLast(detailBtnText) {
        cy.get(elHomepage.CAROUSEL_FIRST.firstDetailBtn)
            .eq(0)
            .should('exist')
            .should('have.text', detailBtnText)

        cy.get(elHomepage.CAROUSEL_FIRST.lastDetailBtn)
            .eq(0)
            .should('exist')
            .should('have.text', detailBtnText)
    }

    hasDetailBtn(detailBtnText) {
        if(country == 'CO'){
            cy.get(elHomepageCO.CAROUSEL_FIRST.detailBtn)
            .eq(0)
            .should('exist')
            .should('have.text', detailBtnText)

        } else {
            cy.get(elHomepage.CAROUSEL_FIRST.detailBtn)
                .eq(0)
                .should('exist')
                .should('have.text', detailBtnText)
        }
    }

    hasRateStar(index) {
        cy.get(elHomepage.CAROUSEL_FIRST.rateStar)
            .eq(index)
            .should('exist')
    }

    checkProductCardLabel() {
        if (country !== "PE") {
            cy.get(elHomepage.CAROUSEL_FIRST.productCardLabel)
                .should('exist')
                .should('not.be.empty')
        }

        if (country === "PE") {
            cy.get(elHomepagePE.CAROUSEL_FIRST.productCardLabel)
                .should('exist')
                .should('not.be.empty')
        }
    }

    checkProductCardLabelMobile() {        
        if (country == 'PE' || country === 'CL') {
            cy.get(elHomepagePE.CAROUSEL_FIRST.productCardLabelMobile)
                .should('exist')
                .should('not.be.empty')
        }
        else {
            cy.get(elHomepage.CAROUSEL_FIRST.productCardLabelMobile)
                .should('exist')
                .should('not.be.empty')
        }
    }

    // hasRateStarMobile() {
    //     cy.get(elHomepage.CAROUSEL_FIRST.rateStarMobile1)
    //         .should('be.visible')
    //     cy.get(elHomepage.CAROUSEL_FIRST.rateStar2)
    //         .should('be.visible')
    // }

    hasYOSection() {        
        if (country == 'PE' || country === 'CL') {
            cy.get(elHomepagePE.YO_SECTION.container, {timeout: 5000})
                .scrollIntoView()
                .should('be.visible');
        }else if (country == 'CO'){
            cy.get(elHomepageCO.YO_SECTION.container, {timeout: 5000})
            .scrollIntoView()
            .should('be.visible');
        }
        else{
            cy.get(elHomepage.YO_SECTION.container)
                .scrollIntoView()
                .should('be.visible');
        }
    }

    hasYOTexts(yoElijoTitle, yoElijoSubTitle) {
        if (country == 'PE' || country === 'CL') {
            if (brand == 'Cyzone'){
                cy.get(elHomepagePE.YO_SECTION.titleCyzone)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoTitle);
            }else{
                cy.get(elHomepagePE.YO_SECTION.title)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoTitle);
            }
           
            cy.get(elHomepagePE.YO_SECTION.subTitle)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoSubTitle);

        }else if(country=="CO"){
            cy.get(elHomepageCO.YO_SECTION.title)
            .scrollIntoView()
            .should('be.visible')
            .should('have.text', yoElijoTitle);

            cy.get(elHomepageCO.YO_SECTION.subTitle)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoSubTitle);
        }
        else {
            cy.get(elHomepage.YO_SECTION.title)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoTitle);
            cy.get(elHomepage.YO_SECTION.subTitle)
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', yoElijoSubTitle);
        }
    }

    hasYOImages(yoElijoImage, yoElijoImageLogo) {
        if(brand == "Esika"){
            cy.get(elHomepage.YO_SECTION.image)
            .scrollIntoView()
            .should('have.attr', 'data-src')
            .should('include', yoElijoImage);

            cy.get(elHomepage.YO_SECTION.imageLogo)
            .scrollIntoView()
            .should('have.attr', 'data-src')
            .should('include', yoElijoImageLogo);

        } else if (brand == "Cyzone") {
            cy.get(elHomepage.YO_SECTION.image)
            .scrollIntoView()
            .should('have.attr', 'data-src')
            .should('include', yoElijoImage);

        } else{
            cy.get(elHomepage.YO_SECTION.imageLbel)
            .scrollIntoView()
            .should('have.attr', 'data-src')
            .should('include', yoElijoImage);
        }
    }

    hasSkinAdvisorContainer() {
        cy.get(elHomepage.SKIN_ADVISOR.container)
            .scrollIntoView()
            .should('be.visible');
    }

    hasQuotesSection() {    
        cy.get(elHomepage.QUOTES_SECTION.container)
            .scrollIntoView()
            .should('be.visible');
    }

    checkQuotesSectionElements(quoteTitle, quoteImage) {
        cy.scrollTo('bottom', { duration: 500 })
        cy.wait(2000)
        cy.get(elHomepage.QUOTES_SECTION.title)
        .invoke('text')
        .should('contain', quoteTitle)
        cy.scrollTo(0, -500)
        if (brand=="Cyzone" || brand=="Esika"){
            cy.get(elHomepage.QUOTES_SECTION.imageSrcCyzone)
            .should('have.attr', 'src')
            .should('include', quoteImage);
        } else{
            cy.get(elHomepage.QUOTES_SECTION.imageSrc)
            .should('have.attr', 'src')
            .should('include', quoteImage);
        }
    }

    hasBlogCatalogSection() {
        cy.get(elHomepage.BLOG_CATALOG_SECTION.container)
            .should('be.visible')
    }

    checkBlogCatalogImages(imageBlogUrl, imageCatalogUrl) {
        cy.scrollTo('bottom', { duration: 500 })
        cy.wait(2000)
        cy.get(elHomepage.MAIN_BANNER.mainBanner)
        cy.scrollTo(0, -250)
        if (brand == "Cyzone"){
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlogCyzone)
            .scrollIntoView()
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrl);
            
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalogCyzone)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrl);

        } else if (brand == "Lbel"){
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlogLbel)
            .scrollIntoView()
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrl);
            
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalogLbel)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrl);
        } else{
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlog)
            .scrollIntoView()
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrl);

            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalog)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrl);
        }
        
    }

    checkBlogCatalogImagesMobile(imageBlogUrlMobile, imageCatalogUrlMobile) {
        if (brand == "Cyzone"){
        cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlogMobileCyzone)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrlMobile);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalogMobileCyzone)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrlMobile);
        } else if (brand == "Lbel"){
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlogMobileLbel)
            .scrollIntoView()
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrlMobile);
            
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalogMobileLbel)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrlMobile);
        } else{
            cy.get(elHomepage.BLOG_CATALOG_SECTION.imageBlogMobile)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageBlogUrlMobile);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.imageCatalogMobile)
            .should('exist')
            .should('have.attr', 'data-src')
            .should('include', imageCatalogUrlMobile);
        }
    }

    checkBlogCatalogTexts(textTitleBlog, textSubTitleBlog, btnTextBlog, textTitleCatalog, textSubTitleCatalog, btnTextCatalog) {
        cy.scrollTo('bottom', { duration: 500 })
        if (brand == "Cyzone"){
        cy.get(elHomepage.BLOG_CATALOG_SECTION.titleBlogCyzone)
            .should(
                "have.text",
                textTitleBlog);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleBlogCyzone)
            .should(
                "have.text",
                textSubTitleBlog);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextBlogCyzone)
            .should(
                "have.text",
                btnTextBlog);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.titleCatalogCyzone)
            .should(
                "have.text",
                textTitleCatalog);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleCatalogCyzone)
            .should(
                "have.text",
                textSubTitleCatalog);

        cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextCatalogCyzone)
            .should(
                "have.text",
                btnTextCatalog);
        } else if (brand == "Lbel"){
            cy.get(elHomepage.BLOG_CATALOG_SECTION.titleBlogLbel)
                .should(
                    "have.text",
                    textTitleBlog);
    
            cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleBlogLbel)
                .should(
                    "have.text",
                    textSubTitleBlog);
    
            cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextBlogLbel)
                .should(
                    "have.text",
                    btnTextBlog);
    
            cy.get(elHomepage.BLOG_CATALOG_SECTION.titleCatalogLbel)
                .should(
                    "have.text",
                    textTitleCatalog);
    
            cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleCatalogLbel)
                .should(
                    "have.text",
                    textSubTitleCatalog);
    
            cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextCatalogLbel)
                .should(
                    "have.text",
                    btnTextCatalog);
        }else{
                cy.get(elHomepage.BLOG_CATALOG_SECTION.titleBlog)
                    .should(
                        "have.text",
                        textTitleBlog);                
                if (country == 'PE' || country === 'CL') {
                    cy.get(elHomepagePE.BLOG_CATALOG_SECTION.subTitleBlog)
                        .eq(0)
                        .should(
                            "have.text",
                            textSubTitleBlog);
                }
                else{
                    cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleBlog)
                        .should(
                            "have.text",
                            textSubTitleBlog);
                }

                cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextBlog)
                    .should(
                        "have.text",
                        btnTextBlog);

                cy.get(elHomepage.BLOG_CATALOG_SECTION.titleCatalog)
                    .should(
                        "have.text",
                        textTitleCatalog);                
                if (country == 'PE' || country === 'CL') {
                    cy.get(elHomepagePE.BLOG_CATALOG_SECTION.subTitleCatalog)
                        .eq(0)
                        .should(
                            "have.text",
                            textSubTitleCatalog);
                }
                else{
                    cy.get(elHomepage.BLOG_CATALOG_SECTION.subTitleCatalog)
                        .should(
                            "have.text",
                            textSubTitleCatalog);
                }

                cy.get(elHomepage.BLOG_CATALOG_SECTION.btnTextCatalog)
                    .should(
                        "have.text",
                        btnTextCatalog);
        }
        
    }

    hasBanner(storeName) {
        cy.wait(2500)
        cy.get(elHomepage.MAIN_BANNER.bannerconsultant)
            .should('be.visible')
        cy.get(elHomepage.MAIN_BANNER.bannerconsultant)
            .should("have.text", `Estás en la tienda online de:${storeName}`);
    }

    hasBannerMTO(storeName) {
        cy.wait(3500)
        cy.get(elHomepage.MAIN_BANNER.bannerconsultantMTO)
            .should('be.visible')
        cy.get(elHomepage.MAIN_BANNER.bannerconsultantMTO)
            .should("have.text", `Estás en la tienda online de:${storeName}`);
    }

    checkMTOURL(storeUrl) {
        cy.url().should('include', `utmi_cp=${storeUrl}`)
    }

    addMTOURL(store) {
        cy.visit(`${url}?utmi_cp=${store}`)
        cy.wait(1000)
    }

    addMTOstore(storeUrl) {
        cy.url().then(url => {
            cy.visit(url + '?utmi_cp=' + storeUrl)
        });
    }

}

export default new HomePage()