import FormView from "../view/FormView.js";

export default class FormController {

    #baseUrl;
    #parentElememt;
    #inputElement

    constructor(baseUrl, parentElement) {
        console.log("Controller");

        this.#baseUrl = baseUrl;
        this.#parentElememt = parentElement;
        let uv = new FormView(this.#parentElememt);
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