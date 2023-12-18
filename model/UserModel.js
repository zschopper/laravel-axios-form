import DataService from "./DataService.js";

export default class UserModel {

    static path = 'users';
    static idField = 'id';

    constructor(data = null) {

        if (data != null) {
            this.loadFromData(data);
        }
    }

    loadFromData(data) {
        this.id = data.id ?? null
        this.name = data.name;
        this.email = data.email;
        this.gender = data.gender;
        this.date_of_birth = data.date_of_birth;
        this.country = data.country;
        this.city = data.city;
        this.address1 = data.address1;
        this.address2 = data.address2;
        this.postcode = data.postcode;
    }

    static get displayFields() {
        return {
            'id': {displayText: '#', displayOnList: true},
            'name': {displayText: 'Név', displayOnList: true},
            'email': {displayText: 'Email', displayOnList: true},
            'gender': {displayText: 'Nem', displayOnList: true},
            'date_of_birth': {displayText: 'Szül. dátum', displayOnList: true},
            'country': {displayText: 'Ország', displayOnList: false},
            'city': {displayText: 'Város', displayOnList: false},
            'address1': {displayText: 'Cím #1', displayOnList: false},
            'address2': {displayText: 'Cím #2', displayOnList: false},
            'postcode': {displayText: 'Irsz.', displayOnList: false},
        };
    }

    get idValue() {
        return this[this.idField];
    }

    get isNew() {
        return !this.id;
    }

    // save() {
    //     if (this.isNew) {
    //         DataService.storeModel(this);
    //     } else {
    //         DataService.updateModel(this);
    //     }
    // }
}
