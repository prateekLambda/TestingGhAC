/// <reference types="Cypress" />
const elMyAccount = require('./elements').ELEMENTS
const baseUrl = Cypress.config("baseUrl")
let country = Cypress.env('country')
let brand = Cypress.env('brand')
let regressionEnv = Cypress.env('environment')
let accountName;

if (country=="CL" && regressionEnv == "QAS") {
  accountName = "uatcheckout.tiendabelcorp.com"
}

if (country=="CL" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.cl"
}

if (country=="CO" && regressionEnv == "QAS") {
  accountName = "uatcheckout.tiendabelcorp.com.co"
}

if (country=="CO" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.co"
}

if (country=="MX" && regressionEnv == "QAS") {
  accountName = "uatcheckout.tiendabelcorp.com.mx"
}

if (country=="MX" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.mx"
}

if (country=="PE" && regressionEnv == "PRD") {
  accountName = "compra.tiendabelcorp.com.pe"
}

if (country=="PA" && regressionEnv == "PRD") {
  accountName = "belcorppanama.myvtex.com"
  //accountName = "compra.tiendabelcorp.com.pa"
}

if (country=="EC" && regressionEnv == "PRD") {
  accountName = "belcorpecuador.myvtex.com"
  //accountName = "compra.tiendabelcorp.com.pa"
}

class MyAccount {
  validateUserLoggedMobile(Email, status, cookieAuth) {
    switch (status) {
      case 'logged':
        cy.get(elMyAccount.lblEmail).should('be.visible')
        cy.get(elMyAccount.lblEmail).contains(Email)
        cy.getCookie(cookieAuth).should('be.visible')
        break
      case 'not logged':
        cy.get(elMyAccount.lblEmail).should('not.be.visible')
        cy.getCookie(cookieAuth).should('not.be.visible')
    }
  }

  typeEmail(email) {
    cy.wait(2500)
    cy.get(elMyAccount.itemEmailField)
      .should('be.visible')
      .type(email)
  }

  typePassword(password) {
    cy.get(elMyAccount.itemPasswordField)
      .should('be.visible')
      .type(password)
  }

  clickBtnSend() {
    cy.get(elMyAccount.itemBtnSend)
      .should('be.visible')
      .click({force: true})
    cy.wait(5000)
  }

  checkProfielUrl() {    
    cy.on("url:changed", (newUrl) => {
        expect(newUrl).to.equal(`https://${accountName}/account` + '#/profile')
    })
  }

  hasProfileCard() {
    cy.get(elMyAccount.itemProfileCard)
      .should('be.visible')
  }
  
  hasProfileMobile() {
    cy.get(elMyAccount.itemProfileGreeting)
      .should('be.visible')
  }

  selectProfile() {
    cy.wait(2500)
    cy.get(elMyAccount.optProfile).should('be.visible').click({ force: true })
    cy.wait(2500)
  }

  accessMyAccountPage() {
    cy.wait(1000)
    cy.visit(`https://${accountName}/account`)
    cy.wait(2500)
  }

  visitAddress() {
    cy.wait(1000)
    cy.visit(`https://${accountName}/account` + '#/addresses')
    cy.wait(2500)
  }

  goToProfile() {
    cy.wait(1000)
    cy.get(elMyAccount.itemProfileTab)
    .click({force: true})
    cy.wait(1500)
  }

  goToAddress() {
    cy.wait(1000)
    cy.get(elMyAccount.itemDireccionesTab)
    .click({force: true})
    cy.wait(1500)
  }

  deleteAddress() {
    cy.wait(1000)
    cy.get(elMyAccount.itemDeleteAddressBtn)
    .click({force: true})
    cy.wait(100)
  }

  deleteAdressMessage() {
    cy.wait(1000)
    cy.get(elMyAccount.itemDeleteAddressMsn)
      .should('be.visible')
      .should('have.text', 'Usted no tiene ninguna de las direcciones registrado.')
  }
  
  visitMyOrders() {
    cy.wait(1000)
    cy.visit('/account#/orders')
    cy.wait(2500)
  }
  
  goToOrders() {
    cy.wait(1000)
    cy.get(elMyAccount.itemOrderTab)
    .click({force: true})
    cy.wait(1500)
  }

  visitProfile() {
    cy.wait(1000)
    cy.visit('/account#/profile')
    cy.wait(2500)
  }

  selectLogout() {
    cy.wait(2500)
    cy.get(elMyAccount.optExit).should('be.visible').click({ force: true })
    cy.wait(2500)
  }

  logoutConfirmationMobile() {
    cy.wait(2000)
    cy.get(elMyAccount.btnLogoutMobile)
      .should('be.visible')
      .click({ force: true })
    cy.wait(2000)
  }

  clickNewAddress() {
    cy.wait(1500)
    cy.xpath(elMyAccount.btnAddNewAddress)
      .should('be.visible')
      .click({ force: true })
    cy.wait(1500)
  }

  clickNewAddressMobile() {
    cy.wait(1500)
    cy.get(elMyAccount.btnAddNewAddressMobile)
      .should('be.visible')
      .click({ force: true })
    cy.wait(1500)
  }

  clickEditAddress() {
    cy.xpath(elMyAccount.btnEditAddress)
      .first()
      .should('be.visible')
      .click({ force: true })
    cy.wait(1500)
  }

  clickEditMoreDataAdress(){
    cy.xpath(elMyAccount.labelEditAddress)
      .should('be.visible')
      .click({ force: true })
    cy.wait(1500)
  }

  clickEditPersonalData(){
    cy.xpath(elMyAccount.editPersonalData).click()
  }

  selectState(state) {
    cy.get(elMyAccount.cbState).select(state, { force: true })
  }

  selectNighborhood(neighborhood) {
    cy.get(elMyAccount.cbneighborhood).select(neighborhood, { force: true })
  }

  selectCity(city) {
    cy.get(elMyAccount.cbcity).select(city, { force: true })
  }

  selectGender(Gender) {
    cy.get(elMyAccount.cbGender).select(Gender, { force: true })
  }

  typePostalCode(postalCode){
    cy.get(elMyAccount.inputPostalCode).clear({force: true})
    cy.wait(2000)
    cy.get(elMyAccount.inputPostalCode).type(postalCode, {force: true})
    cy.wait(2000)
  }

  typeStreet(Street) {
    cy.get(elMyAccount.inputStreet).clear({force: true})
    cy.get(elMyAccount.inputStreet).should('be.enabled').type(Street, {force: true})
  }

  typeNumber(Number) {
    cy.get(elMyAccount.inputNumber).clear({force: true})
    cy.get(elMyAccount.inputNumber).should('be.enabled').type(Number, {force: true})
  }

  typeComplement(Complement) {
    cy.get(elMyAccount.inputComplement).clear()
    cy.get(elMyAccount.inputComplement).should('be.enabled').type(Complement)
  }

  typeNeighborhood(Neighborhood) {
    cy.get(elMyAccount.inputnNeighborhood).clear()
    cy.get(elMyAccount.inputnNeighborhood).should('be.enabled').type(Neighborhood)
  }

  typeReceiverName(ReceiverName) {
    cy.get(elMyAccount.inputReceiverName).clear()
    cy.get(elMyAccount.inputReceiverName).should('be.enabled').type(ReceiverName)
  }

  typeName(Name) {
    cy.get(elMyAccount.inputName).clear()
    cy.get(elMyAccount.inputName).should('be.enabled').type(Name)
  }

  typeLastName(LastName) {
    cy.get(elMyAccount.inputLastName).clear()
    cy.get(elMyAccount.inputLastName).should('be.enabled').type(LastName)
  }

  typeDocument(Document) {
    if(country != "MX"){
      cy.get(elMyAccount.inputDocument).clear()
      cy.get(elMyAccount.inputDocument).should('be.enabled').type(Document)
    }
  }

  typeHomePhone(HomePhone) {
    cy.get(elMyAccount.inputHomePhone).clear()
    cy.get(elMyAccount.inputHomePhone).should('be.enabled').type(HomePhone)
  }

  typeBirthDate(BirthDate) {
    cy.get(elMyAccount.inputBirthDate).clear()
    cy.get(elMyAccount.inputBirthDate).should('be.enabled').type(BirthDate)
  }

  clickSaveNewAddress() {
    cy.xpath(elMyAccount.btnSaveNewAddress)
      .should('be.visible')
      .dblclick({ force: true })
    cy.wait(2500)
  }

  clickSaveEditedAddress() {
    cy.xpath(elMyAccount.btnSaveEditedAddress)
      .should('be.visible')
      .click({ force: true })
    cy.wait(2500)
  }

  clickDeleteAddress() {
    cy.xpath(elMyAccount.btnDeleteAddress)
      .should('be.visible')
      .click({ force: true })
    cy.wait(2500)
  }

  clickSavePersonalData() {
    cy.xpath(elMyAccount.btnSavePersonalData)
      .should('be.visible')
      .click({ force: true })
    cy.wait(2500)
  }

  validateAddressTable() {
    cy.wait(2500)
    cy.get(elMyAccount.myAddressTable).should('be.visible')
  }

  validateMyOrdersPage() {
    cy.wait(2500)
    cy.xpath(elMyAccount.myOrdersLabel).should('be.visible')
  }

  validateMyOrdersPageMobile() {
    cy.wait(2500)
    cy.get(elMyAccount.myOrdersLabelMobile).should('be.visible')
  }

  validateAddressSavedStreet(street) {
    cy.get(elMyAccount.myAddressSavedStreet).first().should('have.text', street)
  }

  validateDeletedAddressStreet(street) {
    cy.get(elMyAccount.myAddressSavedStreet).first().should('not.have.text', street)
  }

  validateAddressSavedComplement(complement) {
    cy.get(elMyAccount.myAddressSavedComplement).first().should('have.text', complement)
  }

  validateDeletedAddressComplement(complement) {
    cy.get(elMyAccount.myAddressSavedComplement).first().should('not.have.text', complement)
  }

  validateAddressSavedCity(city) {
    if (country != "CO") {
      cy.get(elMyAccount.myAddressSavedCity).first().should('have.text', city)
    }

    if (country == "CO") {
      cy.get(elMyAccount.myAddressSavedCityCO).first().should('have.text', city)
    }
  }

  validateDeletedAddressCity(city) {
    cy.get(elMyAccount.myAddressSavedCity).first().should('not.have.text', city)
  }

  validateAddressSavedState(state) {
    cy.get(elMyAccount.myAddressSavedState).first().should('have.text', state, { matchCase: false })
  }

  validateAddressSavedCountry(country) {
    cy.get(elMyAccount.myAddressSavedCountry).first().should('have.text', country)
  }

  validateNameSaved(Name) {
    cy.get(elMyAccount.nameSaved).first().should('have.text', Name)
  }

  validateLastNameSaved(LastNameSaved) {
    cy.get(elMyAccount.lastNameSaved).first().should('have.text', LastNameSaved)
  }

  validateDocumentSaved(DocumentSaved) {
    if (country !="MX"){
      cy.get(elMyAccount.documentSaved).first().should('have.text', DocumentSaved)
    }
  }

  validateGenderSaved(GenderSaved) {
    cy.get(elMyAccount.genderSaved).first().should('have.text', GenderSaved)
  }

  validateBirthDate(BirthDate) {
    cy.get(elMyAccount.birthDate).first().should('have.text', BirthDate)
  }

  validateHomePhone(HomePhone) {
    cy.get(elMyAccount.homePhone).first().should('have.text', HomePhone)
  }
}
export default new MyAccount()
