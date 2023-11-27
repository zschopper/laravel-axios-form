export default class DataService {

    #baseUrl
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    #makeurl(elements) {
        return elements.map((e) => String(e).replace(/\/+$/, '')).join('/');
    }

    viewModel(model) {
        let url = this.#baseUrl + model.path;
        console.log(this.#baseUrl + model.path);

        axios.get(url)
            .then((response) => {
                console.log("then", response.data );
                let resp = [];
                response.data.forEach(element => {
                    resp.push(new model(element))
                });
                console.log("model", resp);
             })
            .catch((error) => { console.log("error", error );
            })
            .finally(() => { })
    }

    showModel(model, id, callback) {
        let url = this.#makeurl([this.#baseUrl, model.path, id]);
        axios.get(url)
            .then((response) => {
                console.log("then", response.data );
                let resp = new model(response.data);
                console.log("model", resp);
                callback(resp)
             })
            .catch((error) => { console.log("error", error );
            })
            .finally(() => { })

    }

    storeModel() {

    }

    updateModel() {

    }

    destroyModel() {

    }


}