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
var index_1 = require('../../../guard/index');
var index_2 = require('../../modal/index');
var index_3 = require('../../login/index');
var UserComponent = (function () {
    function UserComponent(auth) {
        this.auth = auth;
        this.showModal = false;
    }
    UserComponent.prototype.loginModal = function () {
        this.showModal = true;
    };
    UserComponent.prototype.close = function () {
        this.showModal = false;
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            template: "<ul class=\"pull-right social-icons\">     <li class=\"user\" *ngIf=\"!auth.isLoggedIn\"><a (click)=\"loginModal()\"><i class=\"fa fa-user\"></i> My Account</a></li>     <li class=\"user\" *ngIf=\"auth.isLoggedIn\"><a><i class=\"fa fa-user\"></i> {{auth.user.firstname}}</a></li> </ul>  <modal (close)=\"close()\" *ngIf=\"showModal\">     <login (loggedin)=\"close()\"></login> </modal>",
            directives: [index_2.ModalComponent, index_3.LoginComponent]
        }), 
        __metadata('design:paramtypes', [index_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
