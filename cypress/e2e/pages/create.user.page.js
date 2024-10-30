import { clickToElementbyElement, typeValueToElementByElementAndValue, checkCheackBox } from "../../actions/actions"


class CreateLogin{

    get openSigUp() {
        return cy.get('.header_btnSubscribe__8Ov9x')
        
   }
   get nameFirst(){
        return cy.get('.page_form__bL0NI > :nth-child(1) > input')
   }
   get nameSecond(){
    return cy.get('.page_form__bL0NI > :nth-child(2) > input')
}
get email(){
    return cy.get(':nth-child(3) > input')
}
get password(){
    return cy.get('.page_passwordWrapper__9GfS8 > input')
}
get cheackReadonlyBox(){
    return cy.get('input[type="checkbox"][readonly]')
}
get cheackOpencheacbox(){
    return cy.get('.styles_modal__JE2CQ [type="checkbox"]')
}
get cheackOpencheacbox2(){
    return cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
}
get next(){
    return cy.get('.page_next__uVc2g')
}

get signUPlast(){
    return cy.get('.page_sign__0D54L')
}


   clickOpenSignUp(){
    clickToElementbyElement(this.openSigUp)
   }
   typeValueToNameFirst(value){
    typeValueToElementByElementAndValue(this.nameFirst, value)
   }
   typeValueToNameSecond(value){
    typeValueToElementByElementAndValue(this.nameSecond, value)
   }
   typeValueEmail(value){
    typeValueToElementByElementAndValue(this.email, value)
   }
   typeValuePassword(value){
    typeValueToElementByElementAndValue(this.password, value)
   }
   clickReadonlyCheackbox(){
    checkCheackBox(this.cheackReadonlyBox )
    
   }
   clickOpenCheackbox(){
    checkCheackBox(this.cheackOpencheacbox )
    
   }
   clickOpenCheackbox2(){
    checkCheackBox(this.cheackOpencheacbox2 )
    
   }
   clickToNext(){
    clickToElementbyElement(this.next)
   }
   clickTosignUP(){
    clickToElementbyElement(this.signUPlast)
   }
   
   //:nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input


   
   

}export default new CreateLogin()

