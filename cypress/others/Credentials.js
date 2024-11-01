class Credentials {
    static get() {
        const possibleChar = 'abcdefghijklmnopqrstuvwxyz'
        const possibleDigit = '0123456789'
        let returnId = ''
        let returnCharId = ''
        for (let i = 0; i < 8; i++) {
            returnCharId += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
        }
        returnId = returnCharId
        for (let i = 0; i < 1; i++) {
            returnId += possibleDigit.charAt(Math.floor(Math.random() * possibleDigit.length))
        }
        const firstName = `AQA ${returnId}`
        const secondName = `AQA ${returnId}`
        const email = `AQA${returnId}@mailsac.com`
        const password = `Aqa${returnId}+1!`
        const externalCode = `_aqa_external_code${returnId}`
        const project = `_aqa_project${returnId}`
        const editedProject = `_aqa_project_e${returnId}`
        const phase = `_aqa_phase${returnId}`
        const plan = `_aqa_plan${returnId}`
        const editedPlan = `_aqa_plan_e${returnId}`
        const lot = `_aqa_lot${returnId}`
        const deliveryPhase = `_aqa_delivery_phase_${returnCharId}`
        const folder = `_aqa_folder_${returnCharId}`
        const file = `_aqa_file_${returnCharId}`

        return {
            firstName, password, returnId, email, returnCharId,
            externalCode, project, editedProject, plan, editedPlan,
            phase, lot, secondName, deliveryPhase, folder, file
        }
    }
}export default Credentials 