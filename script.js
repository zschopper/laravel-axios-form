import FormController from "./controller/FormController.js";

$(function () {
'use strict'
    let baseUrl = 'http://localhost:8000/api/';
    let parent = $('.dynamic-content');
    let uc = new FormController(baseUrl, parent);
});
