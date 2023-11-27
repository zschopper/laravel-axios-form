import DataService from "../model/DataService.js";
import UserModel from "../model/UserModel.js";
import FormView from "../view/FormView.js";


export default class FormController {

    #baseUrl;
    #parentElement;
    #inputElement

    constructor(baseUrl, parentElement) {
        this.#baseUrl = baseUrl;
        this.#parentElement = parentElement;

        console.log("Controller");

        let ds = new DataService(baseUrl);
        // ds.viewModel(UserModel);
        ds.showModel(UserModel, 12, (data) => {
            new FormView(this.#parentElement, data);
        });

    }

    // load() {
    //     let cb = this.createModelList;

    //     axios.defaults.baseURL = this.#baseUrl;
    //     console.log("baseurl", this.#baseUrl);

    //     axios(this.#baseUrl)
    //         .then((response) => {
    //             this.createModelList(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log("error", error)
    //         })
    // }

    // createModelList(data) {
    //     let list = [];


    //     data.forEach(element => {
    //         console.log("element", element);

    //         list.push(new UserModel(element));
    //     });
    //     console.log("data", list);

    //     new CustomEvent('onDataChange', { detail: this, modelList: list });
    //     return list;
    // }
}