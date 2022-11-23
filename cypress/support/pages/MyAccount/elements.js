export const ELEMENTS = {
  itemEmailField: '#email',
  itemPasswordField: '#password',
  itemBtnSend: '.form > .button_button__GOl5m',
  itemProfileCard: '.vtex-my-account-1-x-profileBoxContainer > .pb5 > .b--muted-4',
  itemProfileTab: ':nth-child(1) > .vtex-account_menu-link',
  itemProfileGreeting: '.vtex-my-account-1-x-userGreeting',
  itemDireccionesTab: ':nth-child(2) > .vtex-account_menu-link',
  itemOrderTab: ':nth-child(3) > .vtex-account_menu-link',
  itemDeleteAddressBtn: '.mt5 > .vtex-button > .vtex-button__label',
  itemDeleteAddressMsn: '.vtex-my-account-1-x-addressList .t-heading-4',

  lblEmail:
    '.vtex-my-account-1-x-emailContainer > .vtex-my-account-1-x-dataEntryChildren',
  optProfile: 'a[href="#/profile"]',
  optExit: 'div .vtex-my-account-1-x-menuLink',
  btnLogoutMobile:
    '.vtex-modal__confirmation > .bg-action-primary > .vtex-button__label',
    //Address
  btnAddNewAddress:
    '//div[@class="db-m dn"][not(contains(@style,"display:none"))]//a[(@href="#/addresses/new")]',
  btnAddNewAddressMobile: '.db > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__children > .newAddressButton > .vtex-button',
  btnEditAddress: '(//div[contains(@class,"vtex-button__label flex items-center justify-center h-100 ph5")][normalize-space()="Editar"])',
  labelEditAddress: '//span[@class="c-link pointer"]',
  btnSaveEditedAddress: '//div[normalize-space()="Guardar dirección"]',
  btnDeleteAddress: '//div[normalize-space()="Borrar dirección"]',
  btnSaveNewAddress: '//div[@class="vtex-button__label flex items-center justify-center h-100 ph5 w-100 border-box "]',
  cbState: 'select[name=state]',
  cbneighborhood: 'select[name=neighborhood]',
  cbcity: 'select[name=city]',
  inputStreet: 'input[name=street]',
  inputNumber: 'input[name=number]',
  inputComplement: 'input[name=complement]',
  inputnNeighborhood: 'input[name=neighborhood]',
  inputReceiverName: 'input[name=receiverName]',
  inputPostalCode: '.vtex-address-form-4-x-input',
  myAddressTable: 'div.vtex-my-account-1-x-addressBox',
  myAddressSavedStreet: '.vtex-my-account-1-x-boxContainerBody span.street',
  myAddressSavedComplement:
    '.vtex-my-account-1-x-boxContainerBody span.complement',
  myAddressSavedCity: '.vtex-my-account-1-x-boxContainerBody span.neighborhood',
  myAddressSavedCityCO: '.vtex-my-account-1-x-boxContainerBody span.city',
  myAddressSavedState: '.vtex-my-account-1-x-boxContainerBody span.state',
  myAddressSavedCountry: '.vtex-my-account-1-x-boxContainerBody span.country',

  //Personal Data
  editPersonalData: '//div[contains(text(),"Editar")]',
  inputName: 'input[name=firstName]',
  inputLastName: 'input[name=lastName]',
  inputDocument: 'input[name=document]',
  inputHomePhone: 'input[name=homePhone]',
  cbGender: 'select[name=gender]',
  inputBirthDate: 'input[name=birthDate]',
  btnSavePersonalData: '//div[normalize-space()="Guardar cambios"]',
  //Personal Data Saved
  nameSaved: 'div[class="mb8 flex-auto vtex-my-account-1-x-firstNameSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  lastNameSaved: 'div[class="mb8 w-50-ns vtex-my-account-1-x-lastNameSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  documentSaved: 'div[class="mb8 flex-auto vtex-my-account-1-x-documentsSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  genderSaved: 'div[class="mb8 w-50-ns vtex-my-account-1-x-genderSubContainer"] div[class="light c-on-disabled vtex-my-account-1-x-dataEntryChildren"]',
  birthDate: '.vtex-my-account-1-x-phoneNumberContainer > .flex-auto > .light',
  homePhone: '.vtex-my-account-1-x-phoneNumberContainer > .w-50-ns > .light',
  //MyOrders
  myOrdersLabel: '//div[contains(@class,"db-m dn")]//div[contains(@class,"vtex-pageHeader__title t-heading-2 order-0 flex-grow-1")][normalize-space()="Pedidos"]',
  myOrdersLabelMobile: '.db > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__title'
}
