/// <reference types="Cypress" />
const elCartPage = require('./elements').ELEMENTS
const baseUrl = Cypress.config("baseUrl")
let brand = Cypress.env('brand')
let country = Cypress.env('country')
let regressionEnv = Cypress.env('environment')
let accountName;

if (country == "CL" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.cl"
}
if (regressionEnv == "QAS" && country == "CL") {
  accountName = "uatcheckout.tiendabelcorp.com";
}
if (regressionEnv == "QAS" && country == "CO") {
  accountName = "uatcheckout.tiendabelcorp.com.co";
}
if (country == "CO" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.co"
}
if (country == "MX" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.mx"
}
if (country == "PE" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.pe"
}
if (country == "EC" && regressionEnv == "PRD") {
  accountName = "https://belcorpecuador.myvtex.com"
}
class Cart {

  validateFnImgProduct1(status, sku, imgUrl) {
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    switch (status) {
      case 'visible':
        cy.get(elCartPage.elCartFull).should('be.visible')
        cy.get(elCartPage.fnImgProducNew(sku))
            .should('be.visible')
            .should('have.attr', 'src', imgUrl)
            break
            case 'not visible':
                cy.get(elCartPage.elCartFull).should('not.be.visible')
                break
            }
    }      

  validateProductUrlName1(sku, product) {
    cy.get(elCartPage.productName(sku))
        .should('exist')
        .should('have.text', product)
  }

  clickBtnCartToOrderForm() {
    cy.get(elCartPage.btnCartToOrderForm)
        .should('exist')
        .click({ force: true })
    cy.wait(2000)
  }

  checkProductPrice(sellingPrice) {
    cy.get(elCartPage.productPrice)
      .should('exist')
      .should('have.text', sellingPrice)
  }

  checkProductPriceMobile(sellingPrice) {
    cy.get(elCartPage.productPriceMobile)
      .should('be.visible')
      .should('have.text', sellingPrice)
  }

  accessCartPage() {
    cy.visit(
      baseUrl + 'checkout#/cart'
    )
  }

  accessCartMTOURL (store) {
      cy.visit(`https://${accountName}/checkout?utmi_cp=${store}#/cart`)
  }

  setCookieConsultant(storeUrl) {
    cy.setCookie('consultantUrl', storeUrl)
  }

  getCookieConsultant(storeUrl) {
    cy.wait(3500)
    cy.getCookie('consultantUrl')
      .should('have.property', 'value', storeUrl)
  }

  accessCartPageWithProduct1(sku, quantity) {
    cy.visit(
      `https://${accountName}/` + 'checkout/cart/add?sc=1&sku=' +
        sku +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }
  
  accessCartPageWithProducts1and2(SKUIDProduct1, SKUIDProduct2, quantity) {
    cy.visit(
      `https://${accountName}/` + 'checkout/cart/add?sc=1&sku=' +
        SKUIDProduct1 +
        '&qty=' +
        quantity +
        '&seller=1&sku=' +
        SKUIDProduct2 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  clickFnItemRemove(sku) {
    cy.wait(1000)
    cy.get(elCartPage.itemRemoveProduct(sku))
        .should('exist')
        .click({force:true})
    cy.wait(2500)
  }

  checkEmptyCart() {
    cy.get(elCartPage.itemEmptyCartTitle)
        .should('exist')
        .should('have.text', 'Su carrito está vacio.')
  }

  clickXpFnIncrementQuantity(sku) {
    cy.get(elCartPage.itemPlusSign(sku))
        .click({force:true})
  }

  clickXpFnDecrementQuantity(sku) {
    cy.get(elCartPage.itemMinusSign(sku))
        .click({force:true})
  }

  checkQuantity(sku) {
    cy.get(elCartPage.itemQuantity(sku))
      .invoke('val')
      .should('eq', '3')
  }

  checkQuantity2(sku) {
    cy.get(elCartPage.itemQuantity(sku))
      .invoke('val')
      .should('eq', '2')
  }

  typeCoupon(coupon) {
    cy.get(elCartPage.itemClickCoupon)
        .scrollIntoView()
        .click({force: true})
    cy.get(elCartPage.inputCoupon)
        .type(coupon,  { force: true })
    cy.wait(2000)
    cy.get(elCartPage.btnCoupon)
        .click({force: true})
    cy.wait(2000)
    
  }

  invalidMessageCoupon(couponInvalid) {
    cy.get(elCartPage.msgInvalidDiscountCoupon)
        .should('be.visible')
        .should('have.text', 'Cupón ' + couponInvalid + ' inválido')
  }

  invalidMessageCouponMobile(couponInvalid) {
    cy.get(elCartPage.msgInvalidDiscountCouponMobile)
        .should('be.visible')
        .should('have.text', '\n   - Cupón ' + couponInvalid + ' inválido\n')
  }

  validFieldCoupon() {
    cy.get(elCartPage.itemCouponField)
        .scrollIntoView()
        .should('be.visible')
  }

  removeValidCoupon() {
    cy.get(elCartPage.itemRemoveCoupon)
      .should('exist')
    cy.wait(2000)
    cy.get(elCartPage.itemRemoveCoupon)
      .click({force: true})
  }

  checkPromoMoreForLessPrice(firstItemPrice, secondItemPrice) {
    cy.get(elCartPage.itemPromoFirstItemPrice)
      .should('be.visible')
      .should('have.text', firstItemPrice)

    cy.get(elCartPage.itemPromoFree)
      .should('be.visible')
      .should('have.text', secondItemPrice)   
  }

  checkProductsRightPrice(firstItemPrice, secondItemPrice) {
    cy.get(elCartPage.itemPromoFirstItemPrice)
      .should('be.visible')
      .should('have.text', firstItemPrice)

    cy.get(elCartPage.itemPromoSecondItemPrice)
      .should('be.visible')
      .should('have.text', secondItemPrice)   
  }

  checkCartSubTotal(subTotal) {
    cy.get(elCartPage.itemSubTotal)
      .should('be.visible')
      .should('have.text', subTotal)
  }

  checkCartDiscount(discount) {
    cy.get(elCartPage.itemDiscount)
      .should('be.visible')
      .should('have.text', discount)
  }

  checkCartTotal(total) {
    cy.get(elCartPage.itemTotal)
      .should('be.visible')
      .should('have.text', total)
  }

  calculateValidShip(state, city) {    
    // cy.get(elCartPage.itemShipState)
    //   .should('be.visible')
    //   .select(state)

    if (country == "CL") {
      cy.get(elCartPage.itemShipState)
      .should('be.visible')
      .select(state)
      cy.get(elCartPage.itemShipNeighbor)
      .should('be.visible')
      .select(city)
    } else if( country === "MX") {
      cy.get(elCartPage.itemZipCode)
      .should('be.visible')
      .select(city)
    } else {
    cy.get(elCartPage.itemShipState)
      .should('be.visible')
      .select(state)
    cy.get(elCartPage.itemShipCity)
      .should('be.visible')
      .select(city)
    }
  }

  calculateValidShipPE(state, city, district) {
    cy.get(elCartPage.itemShipState)
      .should('exist')
      .select(state)

      cy.get(elCartPage.itemShipCity)
      .should('exist')
      .select(city)

      cy.get(elCartPage.itemShipNeighbor)
      .should('exist')
      .select(district)
  }

  calculateValidZipCode(zipcode) {
    cy.get(elCartPage.itemZipCode)
    .should('be.visible')
    .type(zipcode)
  }

  checkPriceValidShip() {
    cy.get(elCartPage.itemShipMessage)
      .should('exist')
  }

  checkShipNotFree() {
    cy.get(elCartPage.itemShippingValue)
      .should('exist')
      .should('not.contain', 'Gratis')
  }

  checkShipFree() {
    cy.get(elCartPage.itemShippingValue)
      .should('exist')
      .should('contain', 'Gratis')
  }

  checkGiftName() {
    cy.get(elCartPage.itemGiftName)
      .should('be.visible')
      .should('have.text', 'Colonia Ritualeza Avellana, 100 ml')
  }

  clickCalculateBtn() {
    cy.get(elCartPage.itemShipCalculateBtn)
      .should('exist')
      .click({force: true})
  }

  clickCalculateBtn2() {
    cy.get(elCartPage.itemShipCalculateBtn2)
      .should('exist')
      .click({force: true})
  }

  clickCalculateBtnMX() {
    cy.get(elCartPage.itemShipCalculateBtnMX)
      .should('exist')
      .click({force: true})
  }

  checkPriceValidShipNotDisplay() {
    cy.get(elCartPage.itemShipMessage)
      .should('not.exist')
  }

  fillFieldRegion(state) {
    cy.get(elCartPage.itemShipState)
      .should('exist')
      .select(state)
  }

}

export default new Cart()
