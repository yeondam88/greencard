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
var index_1 = require('../api/index');
var index_2 = require('../guard/index');
var router_1 = require('@angular/router');
var KeyinComponent = (function () {
    function KeyinComponent(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.credential = { username: "", password: "" };
    }
    KeyinComponent.prototype.ngOnInit = function () {
    };
    KeyinComponent.prototype.login = function (credential) {
        var _this = this;
        this.api.adminLogin(credential).subscribe(function (user) {
            _this.auth.adminLogin(user);
            _this.router.navigate(['/admin']);
        });
    };
    KeyinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header have-submenu\">         <div class=\"container\">             <h1 class=\"text-center\">Admin Login</h1>         </div>     </div> </div>  <div class=\"content\">     <div class=\"container\">         <div class=\"row\">             <div class=\"col-lg-6 col-lg-offset-3\">                 <form>                     <div class=\"form-group\">                         <label for=\"username\">Username</label>                         <input type=\"text\" [(ngModel)]=\"credential.username\" name=\"username\" class=\"form-control\" placeholder=\"username\">                     </div>                     <div class=\"form-group\">                         <label for=\"username\">Password</label>                         <input type=\"password\" [(ngModel)]=\"credential.password\" name=\"password\" class=\"form-control\" placeholder=\"password\">                     </div>                     <button class=\"btn btn-success btn-block\" (click)=\"login(credential)\">Login</button>                 </form>             </div>         </div>     </div> </div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.AuthService, router_1.Router])
    ], KeyinComponent);
    return KeyinComponent;
}());
exports.KeyinComponent = KeyinComponent;
