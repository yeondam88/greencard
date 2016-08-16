"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.requests = 0;
        this.requestsEmitter = new core_1.EventEmitter();
        this.url = "http://localhost/rest/";
        if ('prod' === 'prod') {
            this.url = "/rest/";
        }
        else {
            this.url = "http://localhost/rest/";
        }
    }
    ApiService.prototype.login = function (credential) {
        var body = JSON.stringify({ 'credential': credential });
        return this.http.post(this.url + 'login', body)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.adminLogin = function (credential) {
        var body = JSON.stringify({ 'credential': credential });
        return this.http.post(this.url + 'admin/login', body)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCountries = function () {
        return this.http.get(this.url + 'countries')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getApplications = function () {
        return this.http.get(this.url + 'applications')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getApplication = function (id) {
        return this.http.get(this.url + 'applications' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getFamily = function (id) {
        return this.http.get(this.url + 'applications' + '/' + id + '/family')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.postApplication = function (application) {
        var body = JSON.stringify({ 'application': application });
        return this.http.post(this.url + 'applications', body)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getNews = function () {
        return this.http.get(this.url + 'news')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getLatestNews = function () {
        return this.http.get(this.url + 'news/latest')
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getArticle = function (id) {
        return this.http.get(this.url + 'news' + '/' + id)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.postArticle = function (article) {
        var body = JSON.stringify({ 'article': article });
        return this.http.post(this.url + 'news', body)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.putArticle = function (article) {
        var body = JSON.stringify({ 'article': article });
        return this.http.put(this.url + 'news' + '/' + article.id, body)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
