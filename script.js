import FormController from "./controller/FormController.js";
import TableController from "./controller/TableController.js";
import DataService from "./model/DataService.js";

$(function () {
    'use strict'

    DataService.setBaseUrl('http://localhost:8000/api/');

    let fcParent = $('#dataViewModal div.form');
    let fc = new FormController(fcParent);

    let tcParent = $('.table-container');
    let tc = new TableController(tcParent);
    let myModal = document.getElementById('modal');

});
