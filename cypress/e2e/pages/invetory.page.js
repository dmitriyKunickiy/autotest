import { checkVisabilityElementByElement } from "../../actions/actions"

class InventoryPage {
    checkPageUrl(url) {
        cy.url().should('includes', url, { timeout: 30000 })
    }

    get logo() {
        return cy.get('.page_header__SnuH_ > .page_title__fe7uS')
    }

    checkVisabilityOfLogo() {
        checkVisabilityElementByElement(this.logo)
    }
} export default new InventoryPage()
