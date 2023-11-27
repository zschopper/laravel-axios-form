export default class UserModel {

    static path = 'users';
    static idField = 'id';

    constructor(data = null) {

        if (data != null) {
            this.loadFromData(data);
        }
    }

    loadFromData(data) {
        this.id = data.id
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

    get idValue() {
        return this[this.idField];
    }
}
