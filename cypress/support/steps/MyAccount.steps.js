/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let brand = Cypress.env('brand')
let environment = Cypress.env('environment')
let country = Cypress.env('country')

import MyAccount from '../pages/MyAccount'

/*FIXTURES*/
// CHILE DATA
let accessData = require('../../fixtures/Chile/accessData.json')
let addressData = require('../../fixtures/Chile/addressData.json')
let personalData = require('../../fixtures/Chile/personalData.json')

// COLOMBIA DATA
let accessDataCO = require('../../fixtures/Colombia/accessData.json')
let addressDataCO = require('../../fixtures/Colombia/addressData.json')
let personalDataCO = require('../../fixtures/Colombia/personalData.json')

// PERU DATA
let accessDataPE = require('../../fixtures/Peru/accessData.json')
let addressDataPE = require('../../fixtures/Peru/addressData.json')
let personalDataPE = require('../../fixtures/Peru/personalData.json')

// MEXICO DATA
let addressDataMX = require('../../fixtures/Mexico/addressData.json')
let personalDataMX = require('../../fixtures/Mexico/personalData.json')
let accessDataMX = require('../../fixtures/Mexico/accessData.json')

// PANAMA DATA
let accessDataPA = require('../../fixtures/Panama/accessData.json')
let addressDataPA = require('../../fixtures/Panama/addressData.json')
let personalDataPA = require('../../fixtures/Panama/personalData.json')

if (country == "CL") {
    accessData = accessData
    addressData = addressData
    personalData = personalData
}

if (country == "CO") {
    accessData = accessDataCO
    addressData = addressDataCO
    personalData = personalDataCO
}

if (country == "MX") {
    accessData = accessDataMX
    addressData = addressDataMX
    personalData = personalDataMX
}

if (country == "PE") {
    accessData = accessDataPE
    addressData = addressDataPE
    personalData = personalDataPE
}

if (country == "PA") {
    accessData = accessDataPA
    addressData = addressDataPA
    personalData = personalDataPA
}

// ======================== FAKER ========================
import { faker } from '@faker-js/faker'
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const fullNameFaker = firstNameFaker + ' ' + lastNameFaker
const customStreetFaker = faker.address.street()
const customNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
const complementFaker = faker.address.direction()
// ======================== FAKER ========================


// ======================== MY ACCOUNT DESKTOP ========================
// Background
And('I access the login page to My Account', () => {
    MyAccount.accessMyAccountPage()
})

And('I log in using the correct email and password to My Account', () => {
    MyAccount.typeEmail(accessData[1].correctEmail)
    MyAccount.typePassword(accessData[1].correctPassword)
    MyAccount.clickBtnSend()
})

// Then('I Access the profile page', () => {

// })

// Scenario: 15391 [My Account][Desktop] Validate login to My Account
Then('I see the profile page', () => {
    MyAccount.checkProfielUrl()
    MyAccount.hasProfileCard()
})

// Scenario: 15392 [My Account][Desktop] Edit personal data - Gender F
When('I edit my personal data - Gender F', () => {
    cy.wait(2000)
    MyAccount.clickEditPersonalData()
    MyAccount.typeName(firstNameFaker)
    MyAccount.typeLastName(lastNameFaker)
    MyAccount.typeDocument(personalData[1].documentID)
    MyAccount.typeHomePhone(personalData[1].phone)
    MyAccount.selectGender(personalData[1].gender)
    MyAccount.typeBirthDate(personalData[1].birthDate)
    MyAccount.clickSavePersonalData()
})

Then('I check if the personal data was edited correctly - Gender F', () => {
    cy.wait(2000)
    MyAccount.validateNameSaved(firstNameFaker)
    MyAccount.validateLastNameSaved(lastNameFaker)
    MyAccount.validateDocumentSaved(personalData[1].documentID)
    MyAccount.validateGenderSaved(personalData[1].gender)
    MyAccount.validateBirthDate(personalData[1].birthDate)
    MyAccount.validateHomePhone(personalData[1].phone)
})

// Scenario: 15393 [My Account][Desktop] Edit personal data - Gender M
When('I edit my personal data - Gender M', () => {
    MyAccount.clickEditPersonalData()
    MyAccount.typeName(firstNameFaker)
    MyAccount.typeLastName(lastNameFaker)
    MyAccount.typeDocument(personalData[0].documentID)
    MyAccount.typeHomePhone(personalData[0].phone)
    MyAccount.selectGender(personalData[0].gender)
    MyAccount.typeBirthDate(personalData[0].birthDate)
    MyAccount.clickSavePersonalData()
})

Then('I check if the personal data was edited correctly - Gender M', () => {
    MyAccount.validateNameSaved(firstNameFaker)
    MyAccount.validateLastNameSaved(lastNameFaker)
    MyAccount.validateDocumentSaved(personalData[0].documentID)
    MyAccount.validateGenderSaved(personalData[0].gender)
    MyAccount.validateBirthDate(personalData[0].birthDate)
    MyAccount.validateHomePhone(personalData[0].phone)
})


// Scenario: 15394 [My Account][Desktop] Add a new address
And('I Access the address page', () => {
    MyAccount.goToAddress()
})

And('I access the new address page', () => {
    MyAccount.clickNewAddress()
})

When('I add a new address', () => {
    if (country=="CL"){
        MyAccount.selectState(addressData[0].state)
        MyAccount.selectNighborhood(addressData[0].city)
    }
    if (country=="CO"){
        MyAccount.selectCity(addressData[0].district)
    }
    if (country=="PE"){
        MyAccount.selectState(addressData[0].state)
        MyAccount.selectCity(addressData[0].district)
        MyAccount.selectNighborhood(addressData[0].city)
    }
    if (country=="MX"){
        MyAccount.typePostalCode(addressData[0].zipcode)
        MyAccount.selectNighborhood(addressData[0].city)

    }
    MyAccount.typeStreet(customStreetFaker)
    MyAccount.typeNumber(customNumberFaker)
    MyAccount.typeComplement(complementFaker)
    MyAccount.typeReceiverName(fullNameFaker)
    MyAccount.clickSaveNewAddress()
})

Then('I check if the address was added correctly', () => {
    MyAccount.validateAddressTable()
    MyAccount.validateAddressSavedStreet(customStreetFaker)
    MyAccount.validateAddressSavedComplement(complementFaker)
    MyAccount.validateAddressSavedCity(addressData[0].city)
    //The state is showed in upper case in front-end, but cypress is case sensitive
    //MyAccount.validateAddressSavedState(state)
    MyAccount.validateAddressSavedCountry(addressData[0].country)

})

// Scenario: 15395 [My Account][Desktop] Edit an address
When('I edit an address', () => {
    MyAccount.clickEditAddress()
    MyAccount.clickEditMoreDataAdress()
    if (country=="CL"){
        MyAccount.selectState(addressData[1].state)
        MyAccount.selectNighborhood(addressData[1].city)
    }
    if (country=="CO"){
        MyAccount.selectCity(addressData[1].district)
    }
    if (country=="PE"){
        MyAccount.selectCity(addressData[1].district)
        MyAccount.selectNighborhood(addressData[1].city)
    }
    if (country=="MX"){
        // MyAccount.typePostalCode(addressData[0].zipcode)
        // MyAccount.selectNighborhood(addressData[1].city)

    }
    MyAccount.typeStreet(customStreetFaker)
    MyAccount.typeNumber(customNumberFaker)
    MyAccount.typeComplement(complementFaker)
    MyAccount.typeReceiverName(fullNameFaker)
    MyAccount.clickSaveEditedAddress()
})

Then('I check if the address was edited correctly', () => {
    MyAccount.validateAddressTable()
    MyAccount.validateAddressSavedStreet(customStreetFaker)
    MyAccount.validateAddressSavedComplement(complementFaker)
    MyAccount.validateAddressSavedCity(addressData[1].city)
    //The state is showed in upper case in front-end, but cypress is case sensitive
    //MyAccount.validateAddressSavedState(state)
    MyAccount.validateAddressSavedCountry(addressData[1].country)
})

// Scenario: 15396 [My Account][Desktop] Check my orders
When('I Access my orders page', () => {
    MyAccount.goToOrders()
})

Then('I check that I am in the correct page', () => {
    MyAccount.validateMyOrdersPage()
})

// Scenario: 15397 [My Account][Desktop] Delete address
When('I delete the address', () => {
    MyAccount.clickEditAddress()
    MyAccount.deleteAddress()
})

Then('An alert message is shown on the screen', () => {
    MyAccount.deleteAdressMessage()
})

// ======================== MY ACCOUNT MOBILE ========================
// Scenario: [My Account][Mobile] Edit personal data 
Then('I see the profile page - Mobile', () => {
    MyAccount.hasProfileMobile()
})

And('I Access the profile page - Mobile', () => {
    MyAccount.goToProfile()
})

// Scenario: [My Account][Mobile] Edit  AND Add an address
And('I access the new address page - Mobile', () => {
    MyAccount.clickNewAddressMobile()
})

// Scenario: [My Account][Mobile] Check my orders
When('I check that I am in the correct page mobile', () => {
    MyAccount.validateMyOrdersPageMobile()
})