import invetoryPage from "./pages/invetory.page"
import createUserPage from "./pages/create.user.page"
import Credentials from "../others/Credentials"
import mailsac from "../actions/Mailsac"
import loginPage from "./pages/login.paga"


describe('Login', () => {
    let { firstName, secondName, email, password } = Credentials.get()
    it('Show data', () => {
        cy.visit('https://test.independentspeculator.com')
        createUserPage.clickOpenSignUp()
        createUserPage.typeValueToNameFirst(firstName)
        createUserPage.typeValueToNameSecond(secondName)
        createUserPage.typeValueEmail(email)
        createUserPage.typeValuePassword(password)
        createUserPage.clickReadonlyCheackbox()
        createUserPage.clickOpenCheackbox()
        createUserPage.clickOpenCheackbox2()
        createUserPage.clickToNext()
        createUserPage.clickTosignUP()
        invetoryPage.checkPageUrl('/confirm')
        cy.wait(5000);
        mailsac.visitInvitationLinkBySubjectFromArrOfMessages(email)
        loginPage.typeValueToPasswordField(password)
        loginPage.typeValueToLoginField(email)
        loginPage.clickToLoginButton()    
    })
})