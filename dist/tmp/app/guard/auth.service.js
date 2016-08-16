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
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var AuthService = (function () {
    function AuthService() {
        this.isAdmin = false;
        this.isLoggedIn = false;
    }
    AuthService.prototype.adminLogin = function (user) {
        this.isAdmin = true;
        this.admin = user;
    };
    AuthService.prototype.adminLogout = function () {
        this.isAdmin = false;
        this.admin = null;
    };
    AuthService.prototype.login = function (user) {
        this.isLoggedIn = true;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = true;
        this.user = null;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
