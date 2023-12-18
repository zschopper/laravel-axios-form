import DataService from "../model/DataService.js";
import UserModel from "../model/UserModel.js";
import FormView from "../view/FormView.js";


export default class FormController {

    #parentElement;
    #inputElement

    constructor(parentElement) {
        this.#parentElement = parentElement;

        console.log("Controller");

        DataService.showModel(UserModel, 1, (data) => { // 12
            new FormView(this.#parentElement, data);
        });



        // <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        // <button type="button" class="btn btn-primary">Save changes</button>

    }
}