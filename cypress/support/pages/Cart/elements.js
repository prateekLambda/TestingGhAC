export const ELEMENTS = {
    loading: '.loading > .loading-img > .icon-spinner',
    fnImgProducNew: '#product-image-200098640',
    fnImgProduc: (sku) => `#product-image-${sku}`,
    fnImgProducNew2: '#product-image-200102727',
    productName: (sku) => `#product-name${sku}`,
    productPrice: '.new-product-price',
    productPriceMobile: '.total-selling-price',
    // productName2: '#product-name200102727',
    itemRemoveProduct: (sku) => `#item-remove-${sku}`,
    // itemRemoveProduct2: '#item-remove-200102727',
    itemEmptyCartTitle: '.empty-cart-title',
    itemPlusSign: (sku) => `#item-quantity-change-increment-${sku} > .icon`,
    itemMinusSign: (sku) => `#item-quantity-change-decrement-${sku} > .icon`,
    itemClickCoupon: '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > .coupon-data',
    itemQuantity: (sku) => `#item-quantity-${sku}`,
    itemCouponField: '#checkoutMainContainer > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.info',
    itemShipCalculateBtn: '.srp-data > #shipping-calculate-link',
    itemShipCalculateBtn2: '.vtex-shipping-preview-0-x-postalCodeSelect > #cart-shipping-calculate',
    itemShipCalculateBtnMX: '#cart-shipping-calculate',
    itemShipState: '#ship-state',
    itemShipNeighbor: '#ship-neighborhood',
    itemShipCity: '#ship-city',
    itemZipCode: '#ship-postalCode', 
    itemShipMessage: '.srp-shipping-current-single__sla',
    itemShipPrice: '.srp-shipping-current-single__price',
    itemRemoveCoupon: '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > .info > .delete > #cart-coupon-remove',
    itemPromoFirstItemPrice: ':nth-child(1) > .product-price > .best-price > .new-product-real-price',
    itemPromoSecondItemPrice: ':nth-child(2) > .product-price > .best-price > .new-product-real-price',
    itemPromoFree: '.full-cart > .summary-template-holder > .row-fluid > .cart-more-options > .cart-select-gift-placeholder > div[data-gift-list-id="1fa0a0b3-41ff-4d09-b1b4-9e29aae0d006"] > .available-gift-quantity',
    itemSubTotal: '#checkoutMainContainer > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary',
    itemDiscount: '#checkoutMainContainer > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Discounts > td.monetary',
    itemTotal: '#checkoutMainContainer > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary',
    itemShippingValue: '[data-testid=cheapest]',
    itemGiftName: '.full-cart > .summary-template-holder > .row-fluid > .cart-more-options > .cart-select-gift-placeholder > div[data-gift-list-id="90169726-d12b-4827-9278-24bcd3f8de3b"] > .table > .available-gift-items > .available-gift-item > .product-name > #product-name-200098638',



    btnCalculateShipping: 'button#shipping-calculate-link',
    cmbShipState: 'select#ship-state',
    cmbShipCity: 'select#ship-neighborhood',
    lblShippingCost: 'label.srp-shipping-current-single',
    btnCartToOrderForm: '#cart-to-orderform',
    fnImgProduct: (product) => `tr.product-item img[alt~=${product}]`,
    elCartFull: 'div#cartLoadedDiv div.cart',
    elCartEmpty: 'div#cartLoadedDiv div.empty-cart-content',
    inputCoupon: '#cart-coupon',
    btnCoupon: '#cart-coupon-add',
    msgInvalidDiscountCoupon: '.vtex-front-messages-detail',
    msgInvalidDiscountCouponMobile: '#checkoutMainContainer > div.vtex-front-messages-placeholder.vtex-front-messages-placeholder-opened > div',
    xpFnItemRemoveProduct1: (product1) =>
      `//div[@class='cart']//tr[@class='product-item']//img[contains(@alt, '${product1}')]/../../../td[@class='item-remove']`,
    xpFnItemRemoveProduct2: (product2) =>
      `//div[@class='cart']//tr[@class='product-item']//img[contains(@alt, '${product2}')]/../../../td[@class='item-remove']`,
    xpFnLoadingText: (product1) =>
      `//div[@class='cart']//tr[@class='product-item']//img[contains(@alt, '${product1}')]/../../../td[@class='item-remove']/i`,
    xpFnIncrementQuantity: (product1) =>
      `//tr[@class='product-item']//img[contains(@alt, '${product1}')]/../../..//a[contains(@class, 'item-quantity-change-increment')]/i`,
    xpFnDecrementQuantity: (product1) =>
      `//tr[@class='product-item']//img[contains(@alt, '${product1}')]/../../..//a[contains(@class, 'item-quantity-change-decrement')]/i`,
    xpFnItemQuantity: (product1) =>
      `//tr[@class='product-item']//img[contains(@alt, '${product1}')]/../../..//input[contains(@type, 'tel')]`,
  }
  