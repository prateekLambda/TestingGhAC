/// <reference types="Cypress" />

const elConsultoraPage = require('./elements').ELEMENTS
const baseUrl = Cypress.config("baseUrl")

class Consultorapage {
    accessConsultoraPage() {
        cy.visit(`${baseUrl}consultora`)
        cy.wait(2500)
    }

    clickAsigConsultora() {
        cy.get(elConsultoraPage.asigConsultoraBtn)
            .should('be.visible')
            .click({force: true})
    }

    hasConsultoraModal() {
        cy.get(elConsultoraPage.consultoraModal)
            .should('be.visible')
    }

    hasConsultoraFirstName() {
            cy.get(elConsultoraPage.consultoraModalFirstName)
               .should('be.visible')
               .should('not.be.empty')
    }

    hasConsultoraLastName() {
        cy.get(elConsultoraPage.consultoraModalLastName)
            .should('be.visible')
            .should('not.be.empty')
    }

    hasConsultoraPhone() {
        cy.get(elConsultoraPage.consultoraModalPhone)
            .should('be.visible')
            .should('not.be.empty')
    }

    hasConsultoraEmail() {
        cy.get(elConsultoraPage.consultoraModalEmail)
            .should('be.visible')
            .should('not.be.empty')
    }

    typeConsultoraName(consultoraName) {
        cy.wait(1500)
        cy.get(elConsultoraPage.consultoraNameField)
            .should('be.visible')
            .type(consultoraName)
    }

    typeConsultoraLastName(consultoraLastName) {
        cy.wait(1500)
        cy.get(elConsultoraPage.consultoraLastNameField)
            .should('exist')
            .type(consultoraLastName)
    }

    selectConsultoraArea(consultoraArea) {
        cy.get(elConsultoraPage.consultoraAreaField)
            .should('exist')
            .select(consultoraArea)
    }

    clickBuscarBtn() {
        cy.get(elConsultoraPage.consultoraBuscarBtn)
            .should('be.visible')
            .click({force: true})
    }

    checkConsultoraResult(consultoraName, consultoraLastName, consultoraArea) {
        var message = `resultados para “${consultoraName} ${consultoraLastName}” en “${consultoraArea}”`
        cy.get(elConsultoraPage.consultoraResultMsg)
            .should('be.visible')
            .contains(message)
    }

    clickBuyWithMeBtn() {
        cy.get(elConsultoraPage.consultoraBuyWithMeBtn)
        .eq("0")
            .should('be.visible')
            .click({force: true})
    }

    clickBuyWithMeBtnMobile() {
        cy.get(elConsultoraPage.consultoraBuyWithMeBtnMobile)
        .eq("0")
            .should('be.visible')
            .click({force: true})
    }

    checkConsultoraNoResult(noResultMsg) {
        cy.get(elConsultoraPage.consultoraNoResultMsg)
            .should('be.visible')
            .should('have.text', noResultMsg)
    }

    hasPagination() {
        cy.get(elConsultoraPage.consultoraPagination)
            .should('be.visible')
    }

    clickPaginationBtn() {
        cy.get(elConsultoraPage.consultoraPaginationBtn)
            .should('be.visible')
            .click({force: true})
    }

    clickPaginationBtnMobile() {
        cy.get(elConsultoraPage.consultoraPaginationBtnMobile)
            .should('be.visible')
            .click({force: true})
    }
}

export default new Consultorapage()