/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
let regressionEnv = Cypress.env('environment')
const brand = Cypress.env('brand')
let country = Cypress.env('country')
import ConsultoraPage from '../pages/Consultora';
// import HomePage from '../pages/Homepage'
// import authCookie from '../../fixtures/auth.json'

/*FIXTURES*/
let itemsConsultora = require('../../fixtures/Chile/itemsConsultora.json')
let itemsConsultoraMX = require('../../fixtures/Mexico/itemsConsultora.json')
let itemsConsultoraCO = require('../../fixtures/Colombia/itemsConsultora.json')
let itemsConsultoraPE = require('../../fixtures/Peru/itemsConsultora.json')
let itemsConsultoraPA = require('../../fixtures/Panama/itemsConsultora.json')

if (regressionEnv == "PRD" && country == "CO") {
    itemsConsultora = itemsConsultoraCO;
}

if (regressionEnv == "PRD" && country == "MX") {
    itemsConsultora = itemsConsultoraMX;
}

if (regressionEnv == "PRD" && country == "PE") {
    itemsConsultora = itemsConsultoraPE;
}


if (regressionEnv == "PRD" && country == "PA") {
    itemsConsultora = itemsConsultoraPA;
}


Given('I am on the Consultant page', () => {
    ConsultoraPage.accessConsultoraPage()
})

// ======================== CONSULTORA PAGE DESKTOP ========================
// Scenario: 0000 [Consultant page][Desktop] Search for a consultant randomly - Console
When('I click on Asignarme una consultora button', () => {
    cy.scrollTo('bottom')
    cy.wait(3000)
    ConsultoraPage.clickAsigConsultora()
});

Then('random consultant information is displayed on a modal', () => {
    cy.wait(3500)
    ConsultoraPage.hasConsultoraModal()
    ConsultoraPage.hasConsultoraFirstName()
    ConsultoraPage.hasConsultoraLastName()
    ConsultoraPage.hasConsultoraPhone()
    ConsultoraPage.hasConsultoraEmail()
});

// Scenario: 0000 [Consultant Page][Desktop] Consultant search result information
When('I make a valid consultant search', () => {
    cy.scrollTo('bottom')
    ConsultoraPage.typeConsultoraName(itemsConsultora[1][0].consultoraName)
    ConsultoraPage.typeConsultoraLastName(itemsConsultora[1][0].consultoraLastName)
    ConsultoraPage.selectConsultoraArea(itemsConsultora[1][0].consultoraArea)
    ConsultoraPage.clickBuscarBtn()
});

And('I check the information result', () => {
    cy.wait(2000)
});

Then('it must display the results for number, name, last name, and region', () => {
    ConsultoraPage.checkConsultoraResult(itemsConsultora[1][0].consultoraName, itemsConsultora[1][0].consultoraLastName, itemsConsultora[1][0].consultoraArea)
});

// Scenario: 17511 [Consultant Page][Desktop] Consultant search result button "Compra conmigo"
And('I make a real and valid consultant search', () => {
    ConsultoraPage.typeConsultoraName(itemsConsultora[1][1].consultoraName)
    ConsultoraPage.typeConsultoraLastName(itemsConsultora[1][1].consultoraLastName)
    ConsultoraPage.clickBuscarBtn()
});

And('I click on Compre conmigo button', () => {
    ConsultoraPage.clickBuyWithMeBtn()
});
/*
Then('the url must contain the following parameter {} in the final part for Consultant Page', (store) => {
    cy.wait(2000)
    HomePage.checkMTOURL(itemsConsultora[1][1].consultoraArea)
});
*/

// Scenario: 0000 [Consultant Page][Desktop] Consultant search result button "Compra conmigo"
// And('I click on Compre conmigo button', () => {
//     ConsultoraPage.clickBuyWithMeBtn()
// });

// Scenario: 0000 [Consultant Page][Desktop] Search non-existent consultant
And('I search for a non-existent consultant', () => {
    cy.scrollTo('bottom')
    ConsultoraPage.typeConsultoraName(itemsConsultora[2][0].consultoraInvalidName)
    ConsultoraPage.typeConsultoraLastName(itemsConsultora[2][0].consultoraInvalidLastName)
    ConsultoraPage.selectConsultoraArea(itemsConsultora[1][0].consultoraArea)
    ConsultoraPage.clickBuscarBtn()
});

Then('I must be see the No Result message', () => {
    cy.wait(3500)
    ConsultoraPage.checkConsultoraNoResult(itemsConsultora[3][0].noResultMsg)
});

// Scenario: 0000 [Consultant Page][Desktop] Consultant search result pagination
And('I check the pagination element', () => {
    cy.scrollTo('bottom')
    ConsultoraPage.hasPagination()
});

Then('I must be able to click the pagination button', () => {
    ConsultoraPage.clickPaginationBtn()
});

// ======================== CONSULTORA PAGE MOBILE ========================
// Scenario: 0000 [Consultant Page][Mobile] Consultant search result button "Compra conmigo"
And('I click on Compre conmigo button Mobile', () => {
    ConsultoraPage.clickBuyWithMeBtnMobile()
});

// Scenario: [Consultant Page][Mobile] Consultant search result button "Mostrar más consultoras"
And('I must be able to click the pagination button Mobile', () => {
    cy.scrollTo('bottom')
    cy.wait(3000)
    ConsultoraPage.clickPaginationBtnMobile()
});

