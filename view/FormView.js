import FormInputElementView from "./FormInputElementView.js";

export default class FormView {

    #szuloElement
    #formElement
    #inputs = []

    constructor(parentElement, data) {
        this.#szuloElement = parentElement;
        this.#szuloElement.append('<form class="was-validated">');
        this.#formElement = parentElement.find('form');

        $(window).on("onDataCreate", ((event) => {
            // create an empty form
            console.table(event.detail)
        }));

        $(window).on("onDataShow", ((event) => {
            // show selected item (read-only)
            console.table(event.detail)
        }));

        $(window).on("onDataEdit", ((event) => {
            // show loaded form (to update)
            console.table(event.detail)
        }));

        $(window).on("onDataDestroy", ((event) => {
            // ##delete item
            console.table(event.detail)
        }));

        axios
            .get(new URL("data/fields.json", window.location.href).href)
            .then((response) => {
                console.log("fields.json resp", response);
                console.log("fields.json user data", data);
                this.createFormContent(response.data, data)
            }, data)
    }

    createFormContent(fields, data) {
        this.#inputs = [];
        for (const [name, field] of Object.entries(fields)) {
            const value = data[name] ? data[name] : null;
            switch (field.type) {
                case "email":
                case "text":
                case "number":
                case "date":
                case "password":
                    this.#inputs.push(new FormInputElementView(this.#formElement, name, field, value));
                    break;
                case "hidden":
                    break;
                default:
                    console.log("unknown type", field);
            }
        }

        this.#formElement.append(`
            <div class="form-check mb-3">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"> Remember me
              </label>
            </div>`
        );
        this.#formElement.append(`
            <button type="sxubmit" class="btn btn-primary">Submit</button>`
        );

        this.#formElement.find("button").on("click", (event) => { event.preventDefault(); this.formSubmitClick(event) })
    }

    formSubmitClick(event) {
        let values = {};
        this.#inputs.forEach((item) => values[item.fieldName] = item.value, values);
        console.log("evnt", values);
    }
}
