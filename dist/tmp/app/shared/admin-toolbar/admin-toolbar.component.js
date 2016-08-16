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
var index_1 = require('./languages/index');
var index_2 = require('./links/index');
var index_3 = require('./user/index');
var index_4 = require('../../guard/index');
var AdminToolbarComponent = (function () {
    function AdminToolbarComponent(auth) {
        this.auth = auth;
    }
    AdminToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-toolbar',
            template: "<div class=\"topbar\">     <div class=\"container\" style=\"margin-bottom:9px;\">         <div class=\"row\">             <div class=\"col-sm-6\">                 <links></links>             </div>             <div class=\"col-sm-6\">                 <user></user>                 <languages></languages>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [index_1.LanguagesComponent, index_2.LinksComponent, index_3.UserComponent]
        }), 
        __metadata('design:paramtypes', [index_4.AuthService])
    ], AdminToolbarComponent);
    return AdminToolbarComponent;
}());
exports.AdminToolbarComponent = AdminToolbarComponent;
