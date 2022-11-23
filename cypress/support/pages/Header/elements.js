export const ELEMENTS = {

    itemHeaderNavigationBar: '.vtex-flex-layout-0-x-flexRow--banner-top',
    itemHeaderLogos: (itemHeaderLogos) => `.belcorp-belcorp-challenge-0-x-storeButtonImageDesktop${itemHeaderLogos}`,
    itemHeaderLogosBtn: (itemHeaderLogosBtn) => `.belcorp-belcorp-challenge-0-x-storeButtonAnchorDesktop${itemHeaderLogosBtn}`,
    itemHeaderBecomeConsultBtnText: '//span[@class="vtex-store-link-0-x-label vtex-store-link-0-x-label--became-consultant"]',
    itemHeaderBecomeConsultBtnUrl: `//span[contains(text(),'Quiero ser consultora')]`,
    itemHeaderFindConsultBtn: '.belcorp-belcorp-consultant-0-x-consultant',
    itemHeaderFindConsultIcon: 'body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--main-logo-esika > section > div > div:nth-child(1) > div > a > svg:nth-child(1)',
    itemHeaderFindConsultText: '.belcorp-belcorp-consultant-0-x-consultantText',
    itemBrandLogo: 'img.vtex-store-components-3-x-logoImage.vtex-store-components-3-x-logoImage--main-logo-esika.vtex-render-runtime-8-x-lazyload.lazyloaded',
    itemBrandLogoMobile: 'img.vtex-store-components-3-x-logoImage.vtex-store-components-3-x-logoImage--img-mobile-esika',
    itemBrandLogoBtn: '.vtex-flex-layout-0-x-flexColChild > .vtex-store-components-3-x-logoLink > .store-logo > .vtex-store-components-3-x-logoImage',
    itemBrandLogoBtnMobile: '.vtex-flex-layout-0-x-flexCol > :nth-child(1)',
    itemSearchBar: '#downshift-0-input',
    itemMenuCategoryNumber: (itemMenuCategoryNumber) => `div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(${itemMenuCategoryNumber})`,
    itemMenuCategory1: `div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3)`,
    itemMenuCategory2: `:nth-child(3) > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent`,
    itemMenuSubCategory: ':nth-child(3) > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
    
    itemSubMenuImage1: ':nth-child(3) > :nth-child(1) > .vtex-menu-2-x-menuItem > .vtex-menu-2-x-submenuContainer > .vtex-menu-2-x-submenuWrapper > .vtex-menu-2-x-submenu > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > .vtex-flex-layout-0-x-flexRow--categories-columns-images > .mt0 > :nth-child(1) > .vtex-flex-layout-0-x-flexCol > :nth-child(1) > .vtex-store-components-3-x-imageElement',
    itemSubMenuImageTitle1: 'body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3) > div > li > div.vtex-menu-2-x-submenuContainer.relative > div > section > nav > ul > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--categories-columns-images > div > div:nth-child(1) > div > div:nth-child(2) > div > div > p',
    itemSubMenuImageSubTitle1: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3) > li > div.vtex-menu-2-x-submenuContainer.relative > div > section > nav > ul > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--categories-columns-images > div > div:nth-child(1) > div > div:nth-child(3) > div > div > p',
    
    itemSubMenuImage2: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3) > div > li > div.vtex-menu-2-x-submenuContainer.relative > div > section > nav > ul > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--categories-columns-images > div > div:nth-child(2) > div > div:nth-child(1) > img',
    itemSubMenuImageTitle2: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3) > div > li > div.vtex-menu-2-x-submenuContainer.relative > div > section > nav > ul > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--categories-columns-images > div > div:nth-child(2) > div > div:nth-child(2) > div > div > p',
    itemSubMenuImageSubTitle2: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-link-desktop > section > div > div:nth-child(3) > div > li > div.vtex-menu-2-x-submenuContainer.relative > div > section > nav > ul > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--categories-columns-images > div > div:nth-child(2) > div > div:nth-child(3) > div > div > p',
    
    
    
    itemHeaderMobile: 'div.vtex-sticky-layout-0-x-wrapper.vtex-sticky-layout-0-x-wrapper--header-mobile-ly > div',
    itemHeaderNavigationBarMobile: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-mobile',
    itemHeaderLogosMobile: (itemHeaderLogosMobile) => `.belcorp-belcorp-challenge-0-x-storeButtonImageMobile${itemHeaderLogosMobile}`,
    itemHeaderLogosBtnMobile: (itemHeaderLogosBtnMobile) => `.belcorp-belcorp-challenge-0-x-storeButtonAnchorMobile${itemHeaderLogosBtnMobile}`,
    itemHeaderFindConsultTextMobile: '.esika-belcorp-consultant-0-x-consultantText',
    itemHeaderFindConsultIconMobile: 'img.vtex-render-runtime-8-x-lazyload.ls-is-cached.lazyloaded',
    itemHeaderFindConsultLinkMobile: 'a.esika-belcorp-consultant-bar-0-x-consultant',
    itemSearchBarMobile: '#downshift-1-input',
    itemHeaderMenuHamburguer: '.vtex-flex-layout-0-x-flexRow--main-header-mobile > .mt0 > :nth-child(1) > .pa4 > .vtex-store-drawer-0-x-menuIcon',
    itemHeaderBecomeConsultBtnMobile: '.vtex-flex-layout-0-x-flexRow--became-mobile > .flex-none > :nth-child(2) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-label',
    itemHeaderBecomeConsultIcon: '.vtex-flex-layout-0-x-flexColChild--img-became',

    itemHeaderChipsMenu: '.flex-grow-1 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow > .vtex-store-components-3-x-container',
    itemHeaderChipsMenuNumber: (itemHeaderChipsMenuNumber) => `:nth-child(${itemHeaderChipsMenuNumber}) > .belcorp-data-layer-injection-2-x-dataLayerWrapper > .vtex-store-link-0-x-link > .vtex-store-link-0-x-label`,
    itemHeaderChipsMenuNameUrl: 'a.vtex-store-link-0-x-link.vtex-store-link-0-x-link--category-menu-mobile',
    itemMenuCategoryNumberMobile: 'div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--menu-row',
    itemMenuCategoryNumberMobile2: (index) =>`(//div[@class="vtex-store-link-0-x-childrenContainer vtex-store-link-0-x-childrenContainer--menu-link-mobile-lvl-1"])[${index}]`,
    itemSubMenuCategoryNumberMobile: (index) =>`//div[@class="pa4 pointer vtex-store-drawer-0-x-openIconContainer vtex-store-drawer-0-x-openIconContainer--unleashed-mobile-menu-item-drawer-submenu"][${index}]`,
    itemSubMenuCategorySeeAll: `//div[contains(@class,'vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--header-category-title flex justify-between nowrap')]`,
    itemMenuBannerMobile: 'img.vtex-store-components-3-x-imageElement.vtex-store-components-3-x-imageElement--second-level-image-submenu01',
    itemMenuCloseBtnMobile: '.vtex-store-drawer-0-x-opened--unleashed-mobile-menu-item-drawer > .vtex-store-drawer-0-x-drawerContent > .vtex-store-drawer-0-x-closeIconContainer > .vtex-store-drawer-0-x-closeIconButton > .vtex-store-drawer-0-x-closeIcon',

    SEARCH_BAR: {
        itemSearchBar: '#downshift-0-input',
        itemSearchBarMobile: '#downshift-1-input',
        historyFirstResult: 'body > div.render-container.render-route-store-search > div > div.vtex-store__template.bg-base > div > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--main-logo-esika > section > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div > section > div > article.vtex-search-2-x-itemList.vtex-search-2-x-itemList--history > ol > li > a',
        itemSearchBarMost: 'body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--main-logo-esika > section > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div > section > div > article.vtex-search-2-x-itemList.vtex-search-2-x-itemList--top-search > ol > li:nth-child(1) > a',
        itemSearchBarMostMobile: ':nth-child(1) > .vtex-search-2-x-itemListLink > .vtex-search-2-x-itemListLinkTitle',
        itemSearchBarMostMobileCy: '.vtex-search-2-x-biggy-autocomplete > .vtex-search-2-x-itemList > .vtex-search-2-x-itemListTitle',
        itemSearchBarType: 'vtex-search-2-x-itemListItem',
        itemSearchBarNoSuggestions: '.vtex-search-2-x-itemListTitle',
        itemSearchBarNoSuggestionsMobile: '.vtex-search-2-x-biggy-autocomplete > .vtex-search-2-x-itemList > .vtex-search-2-x-itemListTitle',
        itemSearchBarProductFound: '.vtex-product-summary-2-x-productBrand',
        itemSearchBarProductNotFound: '.vtex-search-result-3-x-searchNotFoundInfo'
        
    }
}