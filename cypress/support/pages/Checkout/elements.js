export const ELEMENTS = {
    CART: {
        itemGoToOrderForm: '#cart-to-orderform'
    },

    CLIENT_PROFILE_DATA: {
      inputClientPreEmail: 'input#client-pre-email',
      btnClientPreEmail: '#btn-client-pre-email',
      inputClientEmail: 'input#client-email',
      inputFirstName: 'input#client-first-name',
      inputLastName: 'input#client-last-name',
      inputDocument: 'input#client-document',
      inputPhone: 'input#client-phone',
    //   chkTermsAndConditions: '#acepto-terminos-y-condiciones',
      chkBox: '[type="checkbox"]',
      chkTermsAndConditions: '#opt-in-política-privacidad',
      chkNewsLetter: '.newsletter-text',
      btnGoToShipping: '#go-to-shipping',
    },
  
    SHIPPING_DATA: {
      cbmState: 'select#ship-state',
      cbmCity: 'select#ship-neighborhood',
      cbmCityCO: '#ship-city',
      cmbAddressType: 'select#streetTypeSelector',
      inputCustomStreet: 'input#ship-street',
      inputCustomNumber: 'input#ship-number',
      inputCustomStreetNumber: 'input#customStreetNumber',
      inputCustomStreetComplement: 'input#customStreetComplement',
      inputComplement: 'input#ship-complement',
      inputNeighborhood: 'input#ship-neighborhood',
      inputFullName: 'input#ship-name',
      btnGoToPayment: 'button#btn-go-to-payment',
    },
  
    PAYMENT: {
      editPayment: '.payment-edit-link > .link-box-edit > .icon-edit',
      selectCreditCard: 'a#payment-group-creditCardPaymentGroup',
      selectWebPay: 'a#payment-group-webpayPaymentGroup',
      invoice: '#payment-group-bankInvoicePaymentGroup',
      invoiceDescription: '.payment-description',
      pseOption: '#payment-group-custom202PaymentGroupPaymentGroup',
      pseDescription: '(//p[@class="payment-description"])[1]',
      codOption: '#payment-group-custom201PaymentGroupPaymentGroup',
      codDescription: '.payment-description',
      price: '.price',
      BANK: {
        bankInvoiceEfecty: 'label.bank-invoice-item-efecty',
      },
      btnBuyNow: `button#payment-data-submit span[data-i18n='paymentData.confirm']`,
      iframeCreditCard: '#iframe-placeholder-creditCardPaymentGroup > iframe',
      fieldCardNumber:
        '.iframe-credit-card-payment-group div .CardForm div.PaymentCardNumber #creditCardpayment-card-0Number',
      selectExpirationDateMonth: '#creditCardpayment-card-0Month',
      selectExpirationDateYear: '#creditCardpayment-card-0Year',
      fieldCvv: '#creditCardpayment-card-0Code',
      fieldCardFullName: '#creditCardpayment-card-0Name',
      btnPayment: '#payment-data-submit',
      orderNumber: '.vtex-order-placed-2-x-orderNumber',
      orderEmail: '.vtex-order-placed-2-x-customerInfoListEmail',
      identifierUserBtn: '#btn-identified-user-button'
    },
    ALERT: {
      firstNameAlert: '.client-first-name > .help',
      lastNameAlert: '.client-last-name > .help',
      phoneAlert: '[data-bind="visible: !hasDifferentPhone()"] > .help',
      documentAlert: 'span.help.error',
      changeShippingData: '.unavailable-actions > [autofocus=""]',
    },
  }
  