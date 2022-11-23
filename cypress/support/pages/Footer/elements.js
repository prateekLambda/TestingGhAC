export const ELEMENTS = {
    footer: '.vtex-store-footer-2-x-footerLayout',
    footerMobile: '.vtex-flex-layout-0-x-flexCol--footer-wrapper-mobile',
    titles: '.vtex-menu-2-x-menuItem--nuestras-title > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
    itemFooter: (itemFooter) => `div.vtex-menu-2-x-styledLinkContent.vtex-menu-2-x-styledLinkContent--${itemFooter}-title.flex.justify-between.nowrap`,
    itemFooterSubTitles: (itemFooterSubTitles) => `#footer-${itemFooterSubTitles}`,
    // itemFooterSubTitles: (itemFooterSubTitles) => `.vtex-menu-2-x-menuItem--footer-${itemFooterSubTitles} > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent`,
    itemFooterSocialMedia: (itemFooterSocialMedia) => `.vtex-store-footer-2-x-socialNetworkLink--${itemFooterSocialMedia}`,
    itemFooterBenefitsLogo: (itemFooterBenefitsLogo) => `.vtex-flex-layout-0-x-flexRow--footer-icons-desktop-${itemFooterBenefitsLogo}-container`,
    itemFooterBenefitsLogoMobile: (itemFooterBenefitsLogoMobile) => `.vtex-flex-layout-0-x-flexCol--${itemFooterBenefitsLogoMobile}-wrapper`,
    itemFooterBenefitsLogoMobile: (itemFooterBenefitsLogoMobile) => `.vtex-flex-layout-0-x-flexRowContent--productos-de-qualidad-wrapper`,
    itemFooterBenefitsText: (itemFooterBenefitsText) => `//h4[contains(text(),'${itemFooterBenefitsText}')]`,
    

    itemFooterPaymentsText: '.mt0 > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',
    itemFooterPaymentsTextMobile: 'div > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div.vtex-store-footer-2-x-footerLayout > div > section > div > div > div > div.vtex-flex-layout-0-x-flexColChild.vtex-flex-layout-0-x-flexColChild--footer-wrapper-mobile.pb0 > div > div.vtex-flex-layout-0-x-flexColChild.vtex-flex-layout-0-x-flexColChild--credit-card-flags-container-mobile.pb4 > div > div > p',
    itemFooterPaymentsLogo: (payments) => `[data-src="${payments}"]`,

    itemFooterMobile: (itemFooterMobile) => `p.lh-copy.vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--${itemFooterMobile}-question`,
    // itemFooterSubTitleMobile: (itemAnswer) => `.vtex-rich-text-0-x-container--${itemAnswer} > .vtex-rich-text-0-x-wrapper > .lh-copy`,    
    // itemFooterSubTitleMobile: (itemAnswer) => `vtex-rich-text-0-x-wrapper--${itemAnswer}`,
    itemFooterSubTitleMobile: (itemAnswer) => `//a[contains(text(),'${itemAnswer}')]`,
    itemFooterArrowDown: (itemFooterArrowDown) => `:nth-child(${itemFooterArrowDown}) > :nth-child(1) > .vtex-disclosure-layout-1-x-trigger > .vtex-store-icons-0-x-caretIcon`,
    itemFooterArrowUp: (itemFooterArrowUp) => `.vtex-disclosure-layout-1-x-trigger--${itemFooterArrowUp}-question--visible`
}
