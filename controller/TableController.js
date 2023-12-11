import DataService from "../model/DataService.js";
import UserModel from "../model/UserModel.js";
import TableView from "../view/TableView.js";

export default class TableController {

    #parentElement;

    constructor(parentElement) {
        this.#parentElement = parentElement;

        $(window).on("onDataView", ((event) => {
            // show all items (refresh?)
            console.table(event.detail)
        }));
        $(window).on("onDataCreate", ((event) => {
            // create an empty form
            console.table(event.detail)
        }));
        $(window).on("onDataStore", ((event) => {
            // save new item (from create)
            console.table(event.detail)
        }));
        // $(window).on("onDataShow", ((event) => {
        //     // show selected item
        //     console.table(event.detail)
        // }));
        // $(window).on("onDataEdit", ((event) => {
        //     // show loaded form (to update)
        //     console.table(event.detail)
        // }));
        $(window).on("onDataUpdate", ((event) => {
            // update data (from edit)
            console.table(event.detail)
        }));
        // $(window).on("onDataDestroy", ((event) => {
        //     // ##delete item
        //     console.table(event.detail)
        // }));

        this.load();
    }

    load() {
        DataService.viewModel(UserModel, (data) => {
            new TableView(UserModel, this.parentElement, data);
        });
    }

    get parentElement() {
        return this.#parentElement;
    }

}