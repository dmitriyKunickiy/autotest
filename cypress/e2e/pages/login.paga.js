import { clickToElementbyElement, typeValueToElementByElementAndValue } from "../../actions/actions"
import { Mailsac } from "@mailsac/api";


class LoginPage {
    get clickloginPage1() {
        return cy.get('.header_btnLogIn__7_aG2')
   }
    
    get loginField() {
        return cy.get('input[name="email"]')
    }

    get passwordField() {
        return cy.get('input[name="password"]')
    }

    get loginButton() {
        return cy.get('.Login_button__gH2sT')
    }
    get clickPortfolio1(){
        return cy.get('.styles_is__S_XZJ > ul > :nth-child(3) > a')

    }
    clickloginPage2() {
        clickToElementbyElement(this.clickloginPage1)
    }

    typeValueToLoginField(value) {
        typeValueToElementByElementAndValue(this.loginField, value)
    }

    typeValueToPasswordField(value) {
        typeValueToElementByElementAndValue(this.passwordField, value)
    }

    clickToLoginButton() {
        clickToElementbyElement(this.loginButton)
    }
    clickPortfolio() {
        clickToElementbyElement(this.clickPortfolio1)
    }
    
    
} export default new LoginPage()