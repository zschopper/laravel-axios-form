export default class RowView {
    #parentElement
    #model
    #data

    constructor(model, parentElement, data) {
        this.#model = model
        this.#parentElement = parentElement
        this.#data = data

        this.renderRow()
    }

    renderRow() {
        let row = `<tr data-id="${this.#data.id}">`;
        for (const [field, display] of Object.entries(this.#model.displayFields)) {
            if (display.displayOnList) {
                row += `<td>${this.#data[field]}</td>`
            }
        }
        row += '<td>'
        row += '<button class="btn btn-xs btn-info"><i class="fa-solid fa-magnifying-glass"></i></button>&nbsp;'
        row += '<button class="btn btn-xs btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>&nbsp;'
        row += '<button class="btn btn-xs btn-danger"><i class="fa-solid fa-trash"></i></button>'
        row += '</td>'
        row += '</tr>'
        this.#parentElement.append(row);
        $('table tbody tr:last-child button.btn-info').on('click', (event) => {
            window.dispatchEvent(new CustomEvent('onDataShow', { detail: {sender: this, data: this.#data, id: this.#data.id }}));
        })
        $('table tbody tr:last-child button.btn-warning').on('click', (event) => {
            window.dispatchEvent(new CustomEvent('onDataEdit', { detail: {sender: this, data: this.#data, id: this.#data.id }}));
        })
        $('table tbody tr:last-child button.btn-danger').on('click', (event) => {
            window.dispatchEvent(new CustomEvent('onDataDestroy', { detail: {sender: this, data: this.#data, id: this.#data.id }}));
        })

    }
}