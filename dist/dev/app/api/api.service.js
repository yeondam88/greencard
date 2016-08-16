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
        if ('dev' === 'prod') {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksT0FBWTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLE9BQVk7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFDckMsQ0FBQztJQTFFTDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBMkViLGlCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFWSxrQkFBVSxhQTBFdEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBpL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7SGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICAgIHB1YmxpYyByZXF1ZXN0czogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcmVxdWVzdHNFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdC9yZXN0L1wiO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCl7XG4gICAgICAgIGlmICgnPCU9IEVOViAlPicgPT09ICdwcm9kJykgeyB0aGlzLnVybCA9IFwiL3Jlc3QvXCI7IH1cbiAgICAgICAgZWxzZSB7IHRoaXMudXJsID0gXCJodHRwOi8vbG9jYWxob3N0L3Jlc3QvXCI7IH1cbiAgICB9XG5cbiAgICBsb2dpbihjcmVkZW50aWFsOiBhbnkpe1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsnY3JlZGVudGlhbCc6IGNyZWRlbnRpYWx9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgJ2xvZ2luJywgYm9keSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxhbnk+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgYWRtaW5Mb2dpbihjcmVkZW50aWFsOiBhbnkpe1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsnY3JlZGVudGlhbCc6IGNyZWRlbnRpYWx9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgJ2FkbWluL2xvZ2luJywgYm9keSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxhbnk+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZ2V0Q291bnRyaWVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ2NvdW50cmllcycpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8YW55W10+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZ2V0QXBwbGljYXRpb25zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ2FwcGxpY2F0aW9ucycpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8YW55W10+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZ2V0QXBwbGljYXRpb24oaWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ2FwcGxpY2F0aW9ucycgKyAnLycgKyBpZClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxhbnlbXT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBnZXRGYW1pbHkoaWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ2FwcGxpY2F0aW9ucycgKyAnLycgKyBpZCArICcvZmFtaWx5JylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxhbnlbXT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBwb3N0QXBwbGljYXRpb24oYXBwbGljYXRpb246IGFueSl7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeydhcHBsaWNhdGlvbic6IGFwcGxpY2F0aW9ufSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArICdhcHBsaWNhdGlvbnMnLCBib2R5KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPGFueT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBnZXROZXdzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ25ld3MnKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPGFueVtdPiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGdldExhdGVzdE5ld3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyAnbmV3cy9sYXRlc3QnKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPGFueVtdPiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGdldEFydGljbGUoaWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ25ld3MnICsgJy8nICsgaWQpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8YW55W10+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgcG9zdEFydGljbGUoYXJ0aWNsZTogYW55KXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7J2FydGljbGUnOiBhcnRpY2xlfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArICduZXdzJywgYm9keSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxhbnk+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgcHV0QXJ0aWNsZShhcnRpY2xlOiBhbnkpe1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsnYXJ0aWNsZSc6IGFydGljbGV9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwgKyAnbmV3cycgKyAnLycgKyBhcnRpY2xlLmlkLCBib2R5KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPGFueT4gcmVzLmpzb24oKSlcbiAgICB9XG59Il19
