import invetoryPage from "./pages/invetory.page"
import CreateLogin from "./pages/login.paga"
import createUserPage from "./pages/create.user.page"
import Credentials from "../others/Credentials"

describe('login', () => {
    it('show data', ()=>{
        cy.visit('https://test.independentspeculator.com')
        createUserPage.clickOpenSignUp()
        let { firstName: firstname , secondName: secondname, email: email, password: password} = Credentials.get()
        createUserPage.typeValueToNameFirst(firstname)
        createUserPage.typeValueToNameSecond(secondname)
        createUserPage.typeValueEmail(email)
        createUserPage.typeValuePassword(password)
        createUserPage.clickReadonlyCheackbox()
        
      
        //cy.wait(500);
        
       
        

        
        createUserPage.clickOpenCheackbox()
        createUserPage.clickOpenCheackbox2()
        createUserPage.clickToNext()
        createUserPage.clickTosignUP()
        invetoryPage.checkPageUrl('/confirm')


        




   })
})