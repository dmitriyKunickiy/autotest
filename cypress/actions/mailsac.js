import { config } from "chai"
const apiKey = Cypress.env('mailsacApiKey')

class Mailsac{
    getArrOfAllMessages(email) {
        return cy.request({
            method: 'GET',
            url: `https://mailsac.com/api/addresses/${email.toLowerCase()}/messages`,
            headers: {
                'Mailsac-Key': apiKey
            },
            _mailsacKey: apiKey
        })
    }

    visitInvitationLinkBySubjectFromArrOfMessages(email) {
        this.getArrOfAllMessages(email).then((response) => {
            const arrOfMessages = response.body
            const message = arrOfMessages.find((mes) => mes.subject.includes('Email confirmation'))
            const invitationLink = message.links[0]
            cy.visit(invitationLink)
        })
    }
} export default new Mailsac()