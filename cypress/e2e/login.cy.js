import invetoryPage from "./pages/invetory.page"
import loginPage from "./pages/login.paga"
import createUserPage from "./pages/create.user.page"

describe('login', () => {
    it('login pass', () => {
        cy.visit('https://test.independentspeculator.com')
        loginPage.clickloginPage2()
        loginPage.typeValueToPasswordField('1')
        loginPage.typeValueToLoginField(' ')
        loginPage.clickToLoginButton()
        invetoryPage.checkPageUrl('/member-area')
        invetoryPage.checkVisabilityOfLogo()
        loginPage.clickPortfolio()        
    })   
})