export default class DataService {

    static #baseUrl;
    static #instance = undefined;

    static getInstance() {
        if (DataService.#instance == unknown) {
            DataService.#instance = new DataService();
        }
        return DataService.#instance;
    }

    static setBaseUrl(baseUrl) {
        DataService.#baseUrl = baseUrl;
    }

    static #makeurl(elements) {
        return elements.map((e) => String(e).replace(/\/+$/, '')).join('/');
    }

    // GET|HEAD        api/users           users.index
    static viewModel(model, callback) {
        let url = DataService.#baseUrl + model.path;
        console.log(DataService.#baseUrl + model.path);

        axios.get(url)
            .then((response) => {
                let resp = [];
                response.data.forEach(element => {
                    resp.push(new model(element))
                });
                callback(resp)
            })
            .catch((error) => {
                console.log("error", error);
            })
            .finally(() => { })
    }

    // GET|HEAD        api/users/{user}    users.show
    static showModel(model, id, callback) {
        let url = DataService.#makeurl([DataService.#baseUrl, model.path, id]);
        axios.get(url)
            .then((response) => {
                let resp = new model(response.data);
                callback(resp)
            })
            .catch((error) => {
                console.log("error", error);
            })
            .finally(() => { })
    }

    // POST            api/users           users.store
    static storeModel(model) {
        let url = DataService.#makeurl([DataService.#baseUrl, model.path]);
        axios.post(url, model)
            .then((response) => {
                let resp = new model(response.data);
                callback(resp)
            })
            .catch((error) => {
                console.log("error", error);
            })
            .finally(() => { })
    }

    // PUT|PATCH       api/users/{user}    users.update
    static updateModel() {

    }

    // DELETE          api/users/{user}    users.destroy
    static destroyModel() {

    }

}
/*
  GET|HEAD        api/users           users.index
  POST            api/users           users.store
  GET|HEAD        api/users/{user}    users.show
  PUT|PATCH       api/users/{user}    users.update
  DELETE          api/users/{user}    users.destroy
*/
