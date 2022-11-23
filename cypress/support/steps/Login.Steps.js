/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let environment = Cypress.env('environment')
let country = Cypress.env('country')
let loginUrl;

// import HomePage from '../pages/Homepage'
// import MyAccount from '../pages/MyAccount'
let itemsLogin = require ('../../fixtures/Chile/accessData.json')
let itemsLoginCO = require ('../../fixtures/Colombia/accessData.json')
let itemsLoginMX = require ('../../fixtures/Mexico/accessData.json')
let itemsLoginPE = require ('../../fixtures/Peru/accessData.json')
let itemsLoginPA = require ('../../fixtures/Panama/accessData.json')

import LoginCDC from '../pages/Login'

if (environment == "QAS" && country == "CL") {
    loginUrl = "https://auth-qas.tiendabelcorp.cl/"
}

if (environment == "PRD" && country == "CL") {
    loginUrl = "https://auth.tiendabelcorp.cl/"
}

if (environment == "QAS" && country == "CO") {
    loginUrl = "https://auth-qas.tiendabelcorp.com.co/"
    itemsLogin=itemsLoginCO
}

if (environment == "PRD" && country == "CO") {
    loginUrl = "https://auth.tiendabelcorp.com.co/"
    itemsLogin=itemsLoginCO
}

if (environment == "QAS" && country == "MX") {
    loginUrl = "https://auth-qas.tiendabelcorp.com.mx/"
    itemsLogin=itemsLoginMX

}

if (environment == "PRD" && country == "MX") {
    loginUrl = "https://auth.tiendabelcorp.com.mx/"
    itemsLogin=itemsLoginMX

}

if (environment == "PRD" && country == "PE") {
    loginUrl = "https://auth.tiendabelcorp.com.pe/"
    itemsLogin=itemsLoginPE
}

if (environment == "PRD" && country == "PA") {
    loginUrl = "https://auth.tiendabelcorp.com.pa/"
    itemsLogin=itemsLoginPA
}

// Scenario Feature/NCP-1260

import { faker } from '@faker-js/faker'
/*Personal Data*/
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const correctEmailFaker = faker.internet.email(firstNameFaker,lastNameFaker, "mailinator.com")
const invalidEmailFaker = faker.internet.email(firstNameFaker,lastNameFaker,'@invalidprovider')
const passwordFaker = faker.internet.password(16)
///////////Faker.js///////

// ======================== LOGIN DESKTOP ========================
// Scenario: 23419 [Login][Desktop] Success Login
And('I click on the icon to Login', () => {
    cy.wait(2000)
    LoginCDC.clickLoginIcon()
})

When('I log in using the correct email and password', () => {
    LoginCDC.isElement(itemsLogin[0].correctEmail,itemsLogin[0].correctPassword)
    LoginCDC.isclicBotton()
})

Then('I must be logged in to the site', () => {
    LoginCDC.isVadationLogin(itemsLogin[0].validationLoginName)
})

// Scenario: 23420 [Login][Desktop] Success Login Error
Given('A user enters to the login page', () => {
    LoginCDC.accessLoginPage(loginUrl)
})

When('I log in using an incorrect password and email', () => {
    LoginCDC.isElementerror(itemsLogin[0].incorrectEmail,itemsLogin[0].incorrectPassword)
    LoginCDC.isclicBotton()
})

Then('Must be informed that the data access are wrong', ()=>{
    cy.wait(1000)
    LoginCDC.isValidationError()
});

// Scenario: 23424 [Login][Desktop] Login with incorrect email
When('I log in using an incorrect email', () => {
    LoginCDC.isElementerror(itemsLogin[0].incorrectEmail,itemsLogin[0].correctPassword)
    LoginCDC.isclicBotton()
})

Then('Must be informed that the email is incorrect', ()=>{
    cy.wait(1000)
    LoginCDC.isEmailError()
});

// Scenario: 23425 [Login][Desktop] Login with incorrect password
When('I log in using an incorrect password', () => {
    LoginCDC.isElementerror(itemsLogin[0].correctEmail,itemsLogin[0].incorrectPassword)
    LoginCDC.isclicBotton()
})

Then('Must be informed that only the password is wrong', ()=>{
    cy.wait(1000)
    LoginCDC.isPasswordError()
});

// Scenario: 23426 [Login][Desktop] Login with invalid email format
When('I log in using invalid format email', () => {
    LoginCDC.isElementerror(invalidEmailFaker,itemsLogin[0].correctPassword)
    LoginCDC.isclicBotton()
})

// ======================== LOGIN MOBILE ========================
// Scenario: 23431 [Login][Mobile] Success Login
And('I click on the icon to Login Mobile', () => {
    cy.wait(2000)
    LoginCDC.clickLoginIconMobile()
})

Then('I am correctly logged in', () => {
    cy.wait(5000)
    LoginCDC.hasLoginCookie();
    cy.wait(2000)
})



// ======================== CDC ========================

// Scenario 3
// Given('should login to the CDC', () => {
//     LoginCDC.acessSite2()
//     LoginCDC.isCorrectUrl2()
// })

// When('should click restablecer', () => {
//     LoginCDC.isclicBottonReset()
// })

// Then('should send wrong mail', ()=>{
//     LoginCDC.isEmailIncorrecto(itemsLogin.incorrectEmail)
// });

// Scenario 4
// Given('Connecting to the web CDC', () => {
//     LoginCDC.acessSite2()
//     LoginCDC.isCorrectUrl2()
// })

// When('Should click create account', () => {
//     LoginCDC.isclicBottonCrearCuenta()
    
// })
// Then('View account creation confirmation window', ()=>{
//     cy.wait(2000)
//     LoginCDC.isAccountCreate(firstNameFaker, lastNameFaker, correctEmailFaker, passwordFaker)
//     cy.wait(3000)
//     //LoginCDC.isValidationCreatAccount()
// })

// Scenario 5
// Given('Connecting to the web CDC', () => {
//     LoginCDC.acessSite2()
//     LoginCDC.isCorrectUrl2()
// })

// When('Should click create account', () => {
//     cy.wait(3000)
//     LoginCDC.isclicBottonCrearCuenta()
// })

// Then('Should account creation error', ()=>{
//     cy.wait(3000)
//     LoginCDC.isAccountError(itemsLogin.correctPassword,itemsLogin.incorrectPassword)
//     cy.wait(2000)
// });