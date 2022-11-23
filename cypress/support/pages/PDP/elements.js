export const ELEMENTS = {
    PRODUCT: {
        itemProductName: '.pr0 > .vtex-store-components-3-x-productNameContainer > .vtex-store-components-3-x-productBrand',
        itemProductNameMobile: '.pr0-ns > .vtex-store-components-3-x-productNameContainer > .vtex-store-components-3-x-productBrand',
        itemAgregarBtn: '.mt4 > .pr0 > .vtex-button > .vtex-button__label',
        itemMiniCartNumber: '.belcorp-header-cart-button-0-x-quantityDot',
        itemMiniCartNumberMobile: '.belcorp-header-cart-button-0-x-quantityDot',
        itemPriceBlock: '//span[@class="vtex-product-price-1-x-listPrice vtex-product-price-1-x-listPrice--pdp"]',
        itemCurrentPrice: ':nth-child(2) > .vtex-product-price-1-x-sellingPrice > .vtex-product-price-1-x-sellingPriceValue > .vtex-product-price-1-x-currencyContainer > .vtex-product-price-1-x-currencyInteger',
        itemCurrentPriceCL: ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .belcorp-belcorp-product-price-0-x-sellingPriceValue',
        itemCurrentPriceMX: ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .belcorp-belcorp-product-price-0-x-sellingPriceValue',
        itemCurrentPriceCO: ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .belcorp-belcorp-product-price-0-x-sellingPriceValue >',
                             
        itemCurrentPriceSign:   ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .belcorp-belcorp-product-price-0-x-sellingPriceValue > .belcorp-belcorp-product-price-0-x-currencyContainer > .belcorp-belcorp-product-price-0-x-currencyCode',
        itemCurrentPriceSignMXCL: ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .belcorp-belcorp-product-price-0-x-sellingPriceValue > .belcorp-belcorp-product-price-0-x-currencyContainer > .belcorp-belcorp-product-price-0-x-currencyCode',
        itemOriginalPrice: ':nth-child(4) > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(1) > .vtex-product-price-1-x-listPrice',
        itemSavingAmount: '.belcorp-belcorp-product-price-0-x-savingsPriceValue',
        itemSavingAmountMXCL: '.belcorp-belcorp-product-price-0-x-savingsPriceValue > .belcorp-belcorp-product-price-0-x-currencyContainer > .belcorp-belcorp-product-price-0-x-currencyInteger',
        itemSavingAmountCO: '.belcorp-belcorp-product-price-0-x-savingsPriceContainer',
        itemReviewStars: '.vtex-reviews-and-ratings-3-x-starsContainer',
        itemReviewStarRating: '.vtex-reviews-and-ratings-3-x-starsContainer > .vtex-reviews-and-ratings-3-x-stars',
        itemReviewBtn: '.vtex-reviews-and-ratings-3-x-writeReviewButton',
        itemReviewComments: '.vtex-reviews-and-ratings-3-x-reviewCommentsContainer',
        itemProductImage: ':nth-child(1) > .belcorp-product-images-custom-0-x-productImage > .relative > div > .belcorp-product-images-custom-0-x-productImageTag',
        itemProductImageMobile: '.swiper-slide-active > .belcorp-product-images-custom-0-x-productImage > .relative > div > .belcorp-product-images-custom-0-x-productImageTag',
        itemProductStamp: '.vtex-product-highlights-2-x-productHighlightText'
    },

    FIXED_BAR: {
        itemFixedBar: '.vtex-flex-layout-0-x-flexRow--fixedBarDesktop > .vtex-store-components-3-x-container',
        itemFixedBarMobile: '.vtex-flex-layout-0-x-flexRow--fixedBarMobile > .vtex-store-components-3-x-container',
        itemFixedBarMobileCO:  '.vtex-flex-layout-0-x-flexRow--fixedBarMobile > .vtex-store-components-3-x-container',
        itemFixedBarProductName: '.vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-store-components-3-x-productNameContainer > .vtex-store-components-3-x-productBrand',
        itemFixedBarAgregarBtn: '.vtex-button > .vtex-button__label',
        itemFixedBarAgregarBtnMobile: 'div.vtex-button__label.flex.items-center.justify-center.h-100.ph6.w-100.border-box',
        itemoriginalPrice: '//span[@class="vtex-product-price-1-x-listPrice vtex-product-price-1-x-listPrice--pdp"]',
        itemcurrentPrice: '//span[@class="belcorp-belcorp-product-price-0-x-sellingPriceValue belcorp-belcorp-product-price-0-x-sellingPriceValue--pdp"]',
        itemFixedBarQuantity: ':nth-child(2) > .vtex-product-quantity-1-x-quantitySelectorContainer > .vtex-product-quantity-1-x-quantitySelectorStepper > .vtex-numeric-stepper-wrapper > .vtex-numeric-stepper-container',
        itemFixedBarQuantityMobile: 'select.o-0.absolute.top-0.left-0.h-100.w-100.bottom-0.t-body.pointer',
        itemFixedBarPlus: 'body > div.render-container.render-route-store-product > div > div.vtex-store__template.bg-base > div > div > div > div:nth-child(6) > div > div:nth-child(3) > div > section > div > div:nth-child(2) > div > div.vtex-product-quantity-1-x-quantitySelectorStepper > div > div > div.vtex-numeric-stepper__plus-button-container.numeric-stepper__plus-button-container.z-2.order-2.flex-none > button',
        itemFixedBarMinus: '.vtex-numeric-stepper__minus-button',
        itemFixedBarNumber: '.vtex-numeric-stepper__input',
    }
}