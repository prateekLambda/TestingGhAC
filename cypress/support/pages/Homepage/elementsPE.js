export const ELEMENTS_PE = {
    MAIN_BANNER: {
        mainBanner: '.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-slider-layout-0-x-imageElementLink > .vtex-slider-layout-0-x-imageElement',
        leftArrow: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        rightArrow: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderRightArrow',
        firstDot: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDot: ':nth-child(6) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',
        firstImage: '.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-slider-layout-0-x-imageElementLink > .vtex-slider-layout-0-x-imageElement',
        secondImage: 'div.w-100.vtex-slider-layout-0-x-sliderTrackContainer.vtex-slider-layout-0-x-sliderTrackContainer--main-banner-desktop.overflow-hidden > div > div:nth-child(3) > div > a > img',
        paginationDotMobile: '[data-testid=paginationDot]',
        firstImageMobile: 'img.vtex-store-components-3-x-imageElement',
        secondImageMobile: '//img[@alt="SETSFRAG"]',
        secondImageMobileCyzone: '',
        leftArrowMobile: '.vtex-slider-layout-0-x-sliderLeftArrow--main-banner-mobile',
        rightArrowMobile: '.vtex-slider-layout-0-x-sliderRightArrow--main-banner-mobile',
        firstDotMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDotMobile: '.flex-grow-1.w-100 > :nth-child(4) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',
        bannerconsultant: '.belcorp-belcorp-consultant-0-x-consultant',
        bannerconsultantMTO: '.belcorp-belcorp-consultant-0-x-consultant',
    },

    CATEGORY_SECTION: {
        categorySection: '.vtex-flex-layout-0-x-flexRowContent--categories-container',
        //category: (category) => `#menu-item-desktop-${category}`,
        category: (category) => `//div[contains(text(),'${category}')]`,
        categoryName: (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy`, 
        categoryNameDesktop: (category) => `//a[@href="/${category}/c"]`,
        categoryDesktop2: (category) => `(//div[@class="vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-link-desktop-submenu flex justify-between nowrap"])[${category}]`,
        title:       '.vtex-flex-layout-0-x-flexRowContent--categories-container > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
        titleCyzone: '.vtex-flex-layout-0-x-flexRowContent--categories-container > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        image:              (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-store-components-3-x-imageElementLink--image-categories-card > .vtex-store-components-3-x-imageElement`,
        imageLbel:          (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-store-components-3-x-imageElement--image-categories-card`,
        //imageCyzone:      (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-store-components-3-x-imageElement--image-categories-card-secondary`,
        imageCyzone:        (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement`,
        imageCyzoneCL:      (index) => `(//img[@class="vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--image-categories-card vtex-render-runtime-8-x-lazyload lazyloaded"])[${index}]`,
        //image: (index) => `(//img[@class="vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--image-categories-card vtex-render-runtime-8-x-lazyload lazyloaded"])[${index}]`,
        categoryNameMobile: (index) => `:nth-child(${index}) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy`,        
        imageMobile5: 'body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div:nth-child(2) > div > div:nth-child(7) > div > div > div > section > div > div > div > div:nth-child(2) > div > div > div:nth-child(5) > a > div > img.vtex-store-components-3-x-imageElement.vtex-store-components-3-x-imageElement--image-categories-card.vtex-render-runtime-8-x-lazyload',        
        },

    CAROUSEL_FIRST: {
        container: '.order-1 > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper',
        containerMobile: 'div.vtex-flex-layout-0-x-flexCol.vtex-flex-layout-0-x-flexCol--carousel-subcontainer.ml0.mr0.pl0.pr0.flex.flex-column.h-100.w-100',
        title: 'p.lh-copy.vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--carousel-title',
        titleMobile: ':nth-child(1) > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        subTitle: '[style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        subTitleMobile: '.vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        leftArrow: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderLeftArrow',
        rightArrow: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderRightArrow',
        firstDot: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .vtex-slider-layout-0-x-paginationDot--isActive',
        secondDot: ':nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-paginationDotsContainer > .bg-muted-3',

        imageMobileSrc1: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageMobileSrc2: '.vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        
        imageMobileSrc1Cyzone: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageMobileSrc2Cyzone: '.vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',

        imageSrc1: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > .vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc2: '[aria-label="2 of 6"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc3: '[aria-label="3 of 6"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc4: '[aria-label="4 of 6"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc5: '.vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',

        imageSrc1Cyzone: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > .vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc2Cyzone: '[aria-label="2 of 10"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc3Cyzone: '[aria-label="3 of 10"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc4Cyzone: '[aria-label="4 of 10"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',
        imageSrc5Cyzone: ':nth-child(2) > .vtex-flex-layout-0-x-flexRow--carousel-wrapper > .vtex-store-components-3-x-container > .vtex-flex-layout-0-x-flexRowContent--carousel-wrapper > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid=slider-track] > .vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal',


        rateStar: '.vtex-reviews-and-ratings-3-x-inlineContainer',
        sellingPrice: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-product-price-1-x-sellingPrice',
        firstDetailBtn: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-button > .vtex-button__label',
        lastDetailBtn: '.vtex-slider-layout-0-x-slide--lastVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-button > .vtex-button__label',
        detailBtn: '[aria-label="2 of 6"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-button > .vtex-button__label',

        productCardLabel: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .vtex-store-components-3-x-discountInsideContainer',
        productCardLabelMobile: '.vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .vtex-store-components-3-x-discountInsideContainer',
        
    },

    YO_SECTION: {
        container: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer',
        title: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
        titleCyzone:'.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy', 
        subTitle: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        imageLogo: ':nth-child(3) > .vtex-store-components-3-x-imageElement',
        image: '.vtex-flex-layout-0-x-flexCol--yoelijoesika-subcontainer > :nth-child(2) > .vtex-store-components-3-x-imageElement',
        imageLbel: ':nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement'

    },

    QUOTES_SECTION: {
        container: '[data-hydration-id="store.home/flex-layout.row#quotation-section"] > .vtex-flex-layout-0-x-flexRow',
        title: '.vtex-store-components-3-x-container > .mt0 > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
        imageSrc: '.vtex-store-components-3-x-container > .mt0 > :nth-child(1) > .vtex-store-components-3-x-imageElement',
        // imageSrcCyzone: '//img[@class="vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--quotation-image vtex-render-runtime-8-x-lazyload ls-is-cached lazyloaded"]',
        imageSrcCyzone: '.mt0 > :nth-child(1) > .vtex-store-components-3-x-imageElement'
    },

    BLOG_CATALOG_SECTION: {
        container: '.flex-grow-1 > :nth-child(13)',
        // imageBlog: 'img.vtex-store-components-3-x-imageElement.vtex-store-components-3-x-imageElement--card-image-one',
        imageBlog: '.mt0 > :nth-child(1) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
        imageBlogCyzone: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > [data-testid=half-image]',
        imageBlogLbel: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]',
        imageBlogMobile: '.flex-none > :nth-child(1) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
        imageBlogMobileCyzone: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > [data-testid=half-image]',
        imageBlogMobileLbel: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]',
        imageCatalog: ':nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
        imageCatalogCyzone: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > [data-testid=half-image]',
        imageCatalogLbel: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]',
        imagePromotionsLbel: ':nth-child(3) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]',
        
        imageCatalogMobile: ':nth-child(2) > .vtex-store-components-3-x-imageElementLink > .vtex-store-components-3-x-imageElement',
        imageCatalogMobileCyzone: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > [data-testid=half-image]',
        imageCatalogMobileLbel: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]',
        titleBlog: 'p.lh-copy.vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--top-text-one',
        titleCatalog: 'p.lh-copy.vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--top-text-two',
        subTitleBlog: ':nth-child(2) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
        subTitleCatalog: ':nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .vtex-rich-text-0-x-heading',
        btnTextBlog: 'span.vtex-store-link-0-x-label.vtex-store-link-0-x-label--card-button-one',
        btnTextCatalog: 'span.vtex-store-link-0-x-label.vtex-store-link-0-x-label--card-button-two',      
        
        titleBlogCyzone:    ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardHeadline',
        subTitleBlogCyzone: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardSubhead',
        btnTextBlogCyzone: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardCallActionContainer > .vtex-button > .vtex-button__label',    
        titleCatalogCyzone: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardHeadline',
        subTitleCatalogCyzone: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardSubhead',
        btnTextCatalogCyzone: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardCallActionContainer > .vtex-button > .vtex-button__label',

        titleBlogLbel:    ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardHeadline',
        subTitleBlogLbel: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardSubhead',
        btnTextBlogLbel: ':nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardCallActionContainer > .vtex-button > .vtex-button__label',    
        titleCatalogLbel: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardHeadline',
        subTitleCatalogLbel: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardSubhead',
        btnTextCatalogLbel: ':nth-child(2) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardCallActionContainer > .vtex-button > .vtex-button__label',
        titlePromotionsLbel: ':nth-child(3) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardHeadline',
        subTitlePromotionsLbel: ':nth-child(3) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardSubhead',
        btnTextPromotionsLbel: ':nth-child(3) > [data-testid=container] > .vtex-store-components-3-x-infoCardTextContainer > .vtex-store-components-3-x-infoCardCallActionContainer > .vtex-button > .vtex-button__label',
        
    
    }

}