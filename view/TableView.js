import DataService from "../model/DataService.js";
import UserModel from "../model/UserModel.js";
import FormInputElementView from "./FormInputElementView.js";
import RowView from "./RowView.js";

export default class TableView {

    #parentElement
    #tableElement
    #tbodyElement
    #model
    #data
    #rowViews

    constructor(model, parentElement, data) {
        this.#model = model;
        this.#data = data;
        this.#parentElement = parentElement;
        this.#tableElement = this.#parentElement.append('<table class="table table-striped table-hoverd table-sm"><thead class="thead-dark"><tr scope="row"></tr></thead><tbody></tbody></table>');
        this.#tbodyElement = this.#tableElement.find("tbody");
        this.#rowViews = [];
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
            this.#rowViews.push(new RowView(this.#model, this.#tbodyElement, data))

        });

    }
}
