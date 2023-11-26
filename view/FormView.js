import FormInputElementView from "./FormInputElementView.js";

export default class FormView {

    #szuloElem
    #formElem
    #inputs = []

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#szuloElem.append('<form class="was-validated">');
        this.#formElem = szuloElem.find('form');
        axios
            .get(new URL("data/fields.json", window.location.href).href)
            .then((response) => {
                console.log("resp", response);
                this.createFormContent(response.data)
            })
    }

    createFormContent(fields) {
        this.#inputs = [];
        for (const [name, field] of Object.entries(fields)) {
            switch (field.type) {
                case "email":
                case "text":
                case "number":
                case "date":
                case "password":
                    this.#inputs.push(new FormInputElementView(this.#formElem, name, field));
                    break;
                case "hidden":
                    break;
                default:
                    console.log("unknown type", field);
            }
        }

        this.#formElem.append(`
            <div class="form-check mb-3">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"> Remember me
              </label>
            </div>`
        );
        this.#formElem.append(`
            <button type="sxubmit" class="btn btn-primary">Submit</button>`
        );

        this.#formElem.find("button").on("click", (event) => { event.preventDefault(); this.formSubmitClick(event) })
    }

    formSubmitClick(event) {
        let values = {};
        this.#inputs.forEach((item) => values[item.fieldName] = item.value, values);
        console.log("evnt", values);
    }
}
