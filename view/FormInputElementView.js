export default class FormInputElementView {

    #inputElement
    #value
    #fieldName
    #validAttribs
    #validBoolAttribs

    constructor(parentElement, fieldName, fieldData) {

        this.#fieldName = fieldName
        this.#validAttribs = [
            'list',
            'maxlength',
            'minlength',
            'pattern',
            'placeholder',
            'readonly',
            'size',
            'spellcheck',
            'step',
        ];

        this.#validBoolAttribs = [
            'required',
        ]

        let attribs = this.createAttribHtml(fieldData);
        parentElement.append(`
            <div class="row g-3 align-items-center">
                <div class="col-2">
                    <label for="${fieldName}" class="form-label">${fieldData.display}:</label>
                </div>
                <div class="col-auto">
                    <input type="${fieldData.type}"
                        class="form-control"
                        id="${fieldName}"
                        name="${fieldName}"
                        ${attribs} />
                </div>
                <div class="col-auto">
                    <span class="form-text form-hint">${fieldData.hint}</span>
                </div>
            </div>`);

        this.#inputElement = $(`#${fieldName}`)
        this.#inputElement.on("input", (event) => {
            this.#value = this.#inputElement.val()
        })
        this.#value = this.#inputElement.val()
        return this
    }

    createAttribHtml(fieldData) {
        let html = ""
        this.#validAttribs.forEach((attr) => {html += fieldData[attr] ? ` ${attr}="${fieldData[attr]}"`:""}, html, fieldData)
        this.#validBoolAttribs.forEach((attr) => {html += fieldData[attr] ? ` ${attr}`:""}, html, fieldData)
        return html
    }

    get value() {
        return this.#value
    }

    get fieldName() {
        return this.#fieldName
    }
}