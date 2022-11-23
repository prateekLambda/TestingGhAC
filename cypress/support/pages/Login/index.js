/// <reference types="Cypress" />

const elLogin = require('./elements').ELEMENTS
const baseUrl = Cypress.config("baseUrl")
class LoginCDC {

    accessLoginPage(loginUrl) {
        cy.visit(loginUrl)
    }

    clickLoginIcon() {
        cy.get(elLogin.loginIcon)
        .should('be.visible')
        .click({force:true})
    }

    clickLoginIconMobile() {
        cy.get(elLogin.loginIconMobile)
        .should('be.visible')
        .click({force:true})
    }

    hasLoginCookie() {
        cy.wait(3000)
        cy.getCookie('customAuthCookie')
          .should('have.property', 'value')
      }

    isElement(email,password) {
        cy.get(elLogin.email).type(email)
        cy.get(elLogin.password).type(password)
    }

    isVadationLogin(validationLoginName){
        cy.get(elLogin.txtBienv)
            .should('have.text', validationLoginName)
    }

    isVadationLoginMobile(validationLoginNameMobile){
        cy.get(elLogin.nameLoggedMyAccount)
            .should('have.text', validationLoginNameMobile)
    }

    isElementerror(email,password) {
        cy.get(elLogin.email).type(email)
        cy.get(elLogin.password).type(password)
    }

    isclicBotton() {
        cy.get(elLogin.clicIniciarSesion)
            .should('be.visible')
            .click({force: true})
    }


    isValidationError(){
        cy.get(elLogin.emailInvalid)
            .should('be.visible')
            .eq(0)
            .should('have.text','Ingresa un correo electrónico válido')
        cy.get(elLogin.emailInvalid)
            .eq(1)
            .should('be.visible')
            .should('have.text','Ingresa una contraseña válida')
    }

    isEmailError() {
        cy.get(elLogin.emailInvalid)
            .should('be.visible')
            .should('have.text','Ingresa un correo electrónico válido')
    }

    isPasswordError() {
        cy.get(elLogin.emailInvalid)
            .should('not.be.visible')
        cy.get(elLogin.passwordInvalid)
            .should('have.text','Ingresa una contraseña válida')
        
    }

    isclicBottonReset(){
        cy.get(elLogin.olvidPassword).click()
        cy.get(elLogin.titleRestabPassword).should('have.text','Restablecer contraseña')
    }
    
    isEmailIncorrecto(email){
        cy.get(elLogin.email).type(email)
        cy.get(elLogin.clicIniciarSesion).click()
        cy.get(elLogin.txtemailinvalid).should('have.text','Ingresa un correo electrónico válido')
    }

    isclicBottonCrearCuenta(){
        cy.get(elLogin.txtAunNoCuenta).should('have.text','¿Aún no tienes una cuenta?')
        cy.get(elLogin.clicCrearCuenta).click()   
    }

    // acessSite2() {
    //     cy.visit(baseUrl)
    //     //cy.visit(`${baseUrl}login`)
    // }

    // isCorrectUrl2() {
    //     cy.url().should('include',baseUrl)
    //     cy.get('.belcorp-belcorp-challenge-0-x-loginText').click()
    // }

    isAccountCreate(name, lastName, email, password){
        cy.get(elLogin.txtnomb).type(name)
        cy.get(elLogin.txtapell).type(lastName)
        cy.get(elLogin.email).type(email)
        cy.get(elLogin.password).type(password)
        cy.get(elLogin.txtConfPass).type(password)
        cy.get(':nth-child(1) > .checkbox_checkboxtWrapper__SgWl5 > .inputLabel_inputLabel__3iDcW > [data-testid="checkbox-unselected"]').click()
        cy.get(':nth-child(2) > .checkbox_checkboxtWrapper__SgWl5 > .inputLabel_inputLabel__3iDcW > [data-testid="checkbox-unselected"]').click()
        cy.get(elLogin.clicIniciarSesion).click()
        cy.get(elLogin.txtCreatAccount).should('have.text','Creación de cuenta')
    }
    isAccountError(password,txtConfPass){
        cy.get(elLogin.clicIniciarSesion).click()
        cy.get(elLogin.txtCampRequeNom).should('have.text','Este campo es requerido')
        cy.get(elLogin.txtCampRequeApe).should('have.text','Este campo es requerido')
        cy.get(elLogin.txtCamprequeEmail).should('have.text','Este campo es requerido')
        //cy.get(elLogin.password).type(password)
        //cy.get(elLogin.txtConfPass).type(txtConfPass)
        cy.get(elLogin.password).type(password)
        cy.get(elLogin.txtConfPass).type(txtConfPass)
        cy.get(elLogin.txtCamprequeConfPass).should('have.text','Tus contraseñas no coinciden')
     }   
}
export default new LoginCDC();