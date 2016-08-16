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
var router_1 = require('@angular/router');
var index_1 = require('./shared/index');
var index_2 = require('./guard/index');
var index_3 = require('./api/index');
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            template: "<div *ngIf=\"!auth.isAdmin\">     <toolbar></toolbar>     <branding></branding>     <navbar id=\"navbar\"></navbar> </div> <div *ngIf=\"auth.isAdmin\">     <admin-toolbar></admin-toolbar>     <admin-branding></admin-branding> </div> <router-outlet></router-outlet> <footer *ngIf=\"!auth.isAdmin\"></footer>",
            providers: [index_3.ApiService],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.ToolbarComponent, index_1.BrandingComponent, index_1.NavbarComponent, index_1.FooterComponent, index_1.AdminBrandingComponent, index_1.AdminToolbarComponent]
        }), 
        __metadata('design:paramtypes', [index_2.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
