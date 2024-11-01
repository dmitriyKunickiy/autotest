function typeValueToElementByElementAndValue(element, value) {
    element.type(value)
}
function clickToElementbyElement(element) {
    element.click()
}
function checkVisabilityElementByElement(element) {
    element.should('be.visible')
}
function checkCheackBox(element){
    element.check()
}
export {
    typeValueToElementByElementAndValue,
    clickToElementbyElement,
    checkVisabilityElementByElement,
    checkCheackBox, 
}

