/// <reference types="Cypress" />
const elCheckoutPage = require('./elements').ELEMENTS
let brand = Cypress.env('brand')
let country = Cypress.env('country')
let regressionEnv = Cypress.env('environment')
let accountName;

if (country == "CL" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.cl"
}
if (country == "CL" && regressionEnv == "QAS") {
  accountName = "uatcheckout.tiendabelcorp.com"
}

if (country == "CO" && regressionEnv == "QAS") {
  accountName = "uatcheckout.tiendabelcorp.com.co"
}

if (country == "CO" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.co"
}

if (country == "MX" && regressionEnv == "QAS") {
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
class Checkout {

    accessCartPageToCheckout(sku, quantity) {
        cy.visit(
          `https://${accountName}/checkout/cart/add?sc=1&sku=` +
            sku +
            '&qty=' +
            quantity +
            '&seller=1'
        )
      }

    checkNewsLetter() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkBox)
            .eq(2)
            .check({force: true})
        cy.wait(1000)
    }
    
    checkTermsAndConditions() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkBox)
            .eq(3)
            .check({force: true})
        cy.wait(1000)
    }

    checkTermsAndConditionsCO() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
            .check({force: true})
        cy.wait(1000)
    }

    typeClientPreEmailProfile(clientPreEmail) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
          .should('exist')
          .clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
          .should('exist')
          .focus()
          .type(clientPreEmail, { force: true })
      }

      typeClientEmailProfile(clientEmail) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail).clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail)
          .should('exist')
          .type(clientEmail, { force: true })
      }
    
      typeFirstNameProfile(firstName) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
          .should('be.enabled')
          .focus()
          .type(firstName, { force: true })
      }
    
      typeLastNameProfile(lastName) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
          .should('be.enabled')
          .focus()
          .type(lastName, { force: true })
      }
    
      typeDocumentProfile(document) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
          .should('be.enabled')
          .focus()
          .type(document, { force: true })
      }
    
      typePhoneProfile(phone) {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
          .should('be.enabled')
          .focus()
          .type(phone, { force: true })
      }
    
      chkTermsAndConditions(action) {
        switch (action) {
          case 'check':
            cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
              .should('be.enabled')
              .check()
            cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
              'be.checked'
            )
            break
          case 'uncheck':
            cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
              .should('be.enabled')
              .uncheck()
            cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
              'not.be.checked'
            )
            break
        }
      }
    
      clickBtnPreEmail() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnClientPreEmail)
          .should('be.enabled')
          .click({ force: true })
      }
    
      clickBtnGoToShipping() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnGoToShipping)
          .should('be.enabled')
          .click({ force: true })
      }

      clickBtnGoToShippingDisabled() {
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnGoToShipping)
          .should('be.disabled')
          .click({ force: true })
      }
    
      selectAddressTypeShipping(addressType) {
        cy.wait(3500)
        cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
          .should('be.enabled')
          .select(addressType)
      }
    
      typeCustomStreetShipping(customStreet) {
        cy.wait(4500)
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
          .should('be.enabled')
          .clear({ force: true })
       cy.wait(3500)
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
          .should('be.enabled')
          .focus()
          .type(customStreet, { force: true })
      }
    
      typeCustomNumberShipping(typeCustomNumberShipping) {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
          .should('be.enabled')
          .focus()
          .type(typeCustomNumberShipping, { force: true })
      }
    
    
      typeCustomStreetNumberShipping(customStreetNumber) {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
          .should('be.enabled')
          .clear()
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
          .should('be.enabled')
          .focus()
          .type(customStreetNumber)
      }
    
      typeCustomStreetComplementShipping(customStreetComplement) {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
          .should('be.enabled')
          .clear()
        cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
          .should('be.enabled')
          .focus()
          .type(customStreetComplement)
      }
    
      typeComplementShipping(complement) {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
          .should('be.enabled')
          .focus()
          .type(complement, { force: true })
      }
    
      typeNeighborhoodShipping(neighborhood) {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
          .should('be.enabled')
          .clear()
        cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
          .should('be.enabled')
          .focus()
          .type(neighborhood)
      }
    
      typeFullNameShipping(fullName) {
        cy.wait(2500)
        cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
          .should('be.enabled')
          .clear({ force: true })
        cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
          .should('be.enabled')
          .focus()
          .type(fullName + '{enter}', { force: true })
      }
    
      clearFullNameShipping() {
        cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
          .should('be.enabled')
          .clear({ force: true })
      }

      clickBtnEditPayment() {
        cy.wait(3000)
        cy.get(elCheckoutPage.PAYMENT.editPayment)
            .should('be.visible')
            .click({ force: true})
      }
    
      clickBtnGoToPayment() {
        cy.get(elCheckoutPage.SHIPPING_DATA.btnGoToPayment)
          .should('be.enabled')
          .click({ force: true })
      }
    
      selectWebPay() {
        cy.get(elCheckoutPage.PAYMENT.selectWebPay)
          .should('be.visible')
          .click({ force: true })
      }
    
      selectBankInvoiceEfecty() {
        cy.get(elCheckoutPage.PAYMENT.BANK.bankInvoiceEfecty)
          .should('be.visible')
          .click({ force: true })
      }
    
      selectCreditCardPayment() {
        cy.wait(2000)
        cy.get(elCheckoutPage.PAYMENT.selectCreditCard)
            .should('be.visible').click({ force: true })
      }

      typeCardNumberVisa(CardNumberVisa) {
        cy.wait(4000)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardpayment-card-0Number')
          .should('be.visible')
          .type(CardNumberVisa, { force: true })
      }

      selectExpirationDateMonth(expirationDateMonth) {
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardpayment-card-0Month')
          .should('be.visible')
          .select(expirationDateMonth, { force: true })
      }

      selectExpirationDateYear(expirationDateYear) {
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
        .iframe(elCheckoutPage.PAYMENT.selectExpirationDateYear)
          .should('be.visible')
          .select(expirationDateYear, { force: true })
      }

      clickIdentifierUserBtn() {
        cy.get(elCheckoutPage.PAYMENT.identifierUserBtn)
          .should('be.visible')
          .click({force: true})
      }

      typeCardCvv(cvvNumber) {
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
        .iframe(elCheckoutPage.PAYMENT.fieldCvv)
          .should('be.visible')
          .type(cvvNumber)
      }

      typeCardFullName(fieldCardFullName) {
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
        .iframe(elCheckoutPage.PAYMENT.fieldCardFullName)
          .should('be.visible')
          .type(fieldCardFullName)
      }

      clickSubmitPaymentBtn() {
        cy.get(elCheckoutPage.PAYMENT.btnPayment)
          .should('exist')
          .click({force: true})
      }      

      checkOrderNumber(purchaseUrl) {
        cy.intercept(purchaseUrl).as('purchaseUrl')
        cy.wait('@purchaseUrl', {timeout:60000})

        cy.url().then(url => {
          const orderNumber = url.substring(url.indexOf('g') + 2)
          
          cy.get(elCheckoutPage.PAYMENT.orderNumber)
              .should('be.visible')
              .should( 'have.text' , `Orden #${orderNumber.substring(0,10)}-01`)
        });
      }

      checkOrderEmail(userEmailBelcorp) {
        cy.get(elCheckoutPage.PAYMENT.orderEmail)
            .should('be.visible')
            .should('have.text', userEmailBelcorp)  
      }
    
      typeCardNumber(cardNumber) {
        cy.wait(2000)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardpayment-card-0Number')
          .should('exist')
          .type(cardNumber, { force: true })
      }

      typeCardNumberAmericanExpress(CardNumberAmericanExpress) {
        cy.wait(2000)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardpayment-card-0Number')
          .should('exist')
          .type(CardNumberAmericanExpress, { force: true })
      }
    
      typeCardNumberMasterCard(CardNumberMasterCard) {
        cy.wait(2000)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardpayment-card-0Number')
          .should('exist')
          .type(CardNumberMasterCard, { force: true })
      }

      // typeCardNumberMasterCard(CardNumberMasterCard) {
      //   cy.wait(2000)
      //   cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      //     .iframe('#creditCardpayment-card-0Number')
      //     .should('exist')
      //     .type(CardNumberMasterCard, { force: true })
      // }
    
      validateCardNumberVisa() {
        cy.wait(500)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardselectedCard0cc-0')
          .should('be.checked')
      }
    
      // validateCardNumberAmericanExpress() {
      //   cy.wait(500)
      //   cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      //     .iframe('#creditCardselectedCard1cc-0')
      //     .should('be.checked')
      // }
    
      validateCardNumberMastercard() {
        cy.wait(500)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardselectedCard1cc-0')
          .should('be.checked')
      }

      validateCardNumberMastercardCO() {
        cy.wait(500)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardselectedCard1cc-0')
          .should('be.checked')
      }

      validateCardNumberAmericanExpressCO() {
        cy.wait(500)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardselectedCard1cc-0')
          .should('be.checked')
      }

      validateCardNumberDinersCO() {
        cy.wait(500)
        cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
          .iframe('#creditCardselectedCard1cc-0')
          .should('be.checked')
      }

      validateInvoice() {
        cy.wait(1000)
        cy.get(elCheckoutPage.PAYMENT.invoice)
          .should('be.visible')
          .click({force: true})
      }

      checkInvoiceDescription(invoiceMessage) {
        if (country === "MX") {
          cy.wait(1000)
        cy.get(elCheckoutPage.PAYMENT.invoiceDescription)
          .should('be.visible')
          .eq(0)
          .should('have.text', invoiceMessage)
        } else {
          cy.wait(1000)
          cy.get(elCheckoutPage.PAYMENT.invoiceDescription)
            .should('be.visible')
            .eq(1)
            .should('have.text', invoiceMessage)
        }
      }

      validateCOD() {
        cy.wait(1000)
        cy.get(elCheckoutPage.PAYMENT.codOption)
          .should('be.visible')
          .click({force: true})
      }

      checkCODDescription(codMessage) {
        cy.wait(1000)
        cy.get(elCheckoutPage.PAYMENT.codDescription)
          .should('be.visible')
          .eq(0)
          .should('have.text', codMessage)
      }

      checkCODPrice() {
        cy.wait(1000)
        cy.get('.installments > .sight > span')
          .should('be.visible')
          .should('not.be.empty')
      }

      checkInvoicePrice() {
        cy.wait(1000)
        cy.get('p.sight > span:nth-child(2)')
          .should('be.visible')
          .should('not.be.empty')
      }

      validatePseMessage() {
        cy.wait(1000)
        cy.get(elCheckoutPage.PAYMENT.pseOption)
          .should('be.visible')
          .click({force: true})
      }

      checkPseDescription(pseMessage) {
        cy.wait(1000)
        cy.xpath(elCheckoutPage.PAYMENT.pseDescription)
          .should('be.visible')
          .should('have.text', pseMessage)
      }

      checkPsePrice() {
        cy.wait(1000)
        cy.get('.sight > span')
          .should('be.visible')
          .should('not.be.empty')
      }

      checkCheckoutProductPrice(sellingPrice) {
        cy.get(elCheckoutPage.PAYMENT.price)
          .should('be.visible')
          .should('have.text', sellingPrice)
      }
    
      validateFirstNameAlert() {
        cy.wait(1000)
        cy.get(elCheckoutPage.ALERT.firstNameAlert)
            .should('be.visible')
            .should('have.text', 'Este campo es obligatorio.')
      }
    
      validateLastNameAlert() {
        cy.wait(1000)
        cy.get(elCheckoutPage.ALERT.lastNameAlert)
            .should('be.visible')
            .should('have.text', 'Este campo es obligatorio.')
      }
    
      validateDocumentAlert() {
        cy.wait(1000)
        cy.get(elCheckoutPage.ALERT.documentAlert)
            .eq(4)
            .should('be.visible')
            .should('have.text', 'Este campo es obligatorio.')
      }
    
      validatePhoneAlert() {
        cy.wait(1000)
        cy.get(elCheckoutPage.ALERT.phoneAlert)
            .should('be.visible')
            .should('have.text', 'Este campo es obligatorio.')
      }
    
      clickBtnBuyNow() {
        cy.get(elCheckoutPage.PAYMENT.btnBuyNow)
          .should('be.visible')
          .click({ force: true })
      }
    
      selectCmbState(state) {
        cy.get(elCheckoutPage.SHIPPING_DATA.cbmState)
          .should('be.enabled')
          .select(state, { force: true })
        cy.wait(2500)

        // * workaround: select State CL works only when selected twice
        cy.get(elCheckoutPage.SHIPPING_DATA.cbmState)
          .should('be.enabled')
          .select(state, { force: true })
        cy.wait(2500)
      }
    
      selectCmbCity(city) {
        cy.get(elCheckoutPage.SHIPPING_DATA.cbmCity)
          .should('be.enabled')
          .select(city, { force: true })
      }

      selectCmbCityCO(city) {
        cy.get(elCheckoutPage.SHIPPING_DATA.cbmCityCO)
          .should('be.enabled')
          .select(city, { force: true })
      }
    
      selectCmbDirection(addressType) {
        cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
          .should('be.enabled')
          .select(addressType, { force: true })
      }
    
      clickChangeShippingDataModal() {
        cy.get(elCheckoutPage.ALERT.changeShippingData)
          .should('be.visible')
          .click({ force: true })
      }    
}

export default new Checkout()