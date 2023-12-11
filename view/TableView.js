import DataService from "../model/DataService.js";
import UserModel from "../model/UserModel.js";
import FormInputElementView from "./FormInputElementView.js";

export default class TableView {

    #parentElement
    #tableElement
    #tbodyElement
    #model
    #data

    constructor(model, parentElement, data) {
        this.#model = model;
        this.#data = data;
        this.#parentElement = parentElement;
        this.#tableElement = this.#parentElement.append('<table class="table table-striped table-hoverd table-sm"><thead class="thead-dark"><tr scope="row"></tr></thead><tbody></tbody></table>');
        this.#tbodyElement = this.#tableElement.find("tbody");
        this.renderTable();
    }

    renderTable() {
        let thtr = this.#tableElement.find('thead tr');

        for (const [field, fieldData] of Object.entries(this.#model.displayFields)) {
            if (fieldData.displayOnList) {
                thtr.append(`<th>${fieldData.displayText}</th>`)
            }
        }
        thtr.append(`<th>Műveletek</th>`)
        this.#data.forEach((data) => {
            let row = "<tr>";
            for (const [field, display] of Object.entries(this.#model.displayFields)) {
                if (display.displayOnList) {
                    row += `<td>${data[field]}</td>`
                }
            }
            row += '<td>'
            row += '<button class="btn btn-info"><i class="fa-solid fa-magnifying-glass"></i></button>&nbsp;'
            row += '<button class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>&nbsp;'
            row += '<button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>'
            row += '</td>'
            row += '</tr>'
            this.#tbodyElement.append(row);
            $('table tbody tr:last-child button.btn-info').on('click', (event) => {
                window.dispatchEvent(new CustomEvent('onDataShow', { detail: {sender: this, data: data, id: data.id }}));
            })
            $('table tbody tr:last-child button.btn-warning').on('click', (event) => {
                window.dispatchEvent(new CustomEvent('onDataEdit', { detail: {sender: this, data: data, id: data.id }}));
            })
            $('table tbody tr:last-child button.btn-danger').on('click', (event) => {
                window.dispatchEvent(new CustomEvent('onDataDestroy', { detail: {sender: this, data: data, id: data.id }}));
            })

        });

    }
}
