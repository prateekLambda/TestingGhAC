export const ELEMENTS = {

    MAIN_BANNER: {
        leftArrow: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        rightArrow: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderRightArrow',
        firstDot: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDot: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',

        secondImageMobile: '.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-slider-layout-0-x-imageElementLink > .vtex-slider-layout-0-x-imageElement',

        leftArrowMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        rightArrowMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderRightArrow',
        firstDotMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDotMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',
    },

    CATEGORY_SECTION: {
        title: '[style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
    },

    CAROUSEL_FIRST: {
        // container: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer',
        container: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper',
        titleMobile: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        subTitleMobile: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',

        leftArrow: ':nth-child(3) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        rightArrow: ':nth-child(3) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        firstDot: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDot: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',

        imageSrc1: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > .vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc2: '[aria-label="2 of 5"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc3: '[aria-label="3 of 5"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc4: '[aria-label="4 of 5"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc5: '.vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',

        detailBtn: '[aria-label="2 of 5"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-button > .vtex-button__label',
    },
    YO_SECTION: {
        container: '.order-1 > :nth-child(4)',
        title: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
        subTitle: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
    }
}