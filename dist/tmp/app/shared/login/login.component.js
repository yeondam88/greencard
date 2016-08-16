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
var index_1 = require('../../api/index');
var index_2 = require('../../guard/index');
var LoginComponent = (function () {
    function LoginComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.credential = { email: "", id: "" };
        this.loggedin = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (credential) {
        var _this = this;
        this.api.login(credential).subscribe(function (user) {
            _this.error = null;
            _this.auth.login(user);
            _this.loggedin.emit(true);
        }, function (err) {
            _this.error = "Email or ID is incorrect";
            setTimeout(function () {
                _this.error = null;
            }, 2000);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loggedin", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            template: "<div class=\"row\">     <div class=\"col-sm-12\">         <div class=\"panel panel-info\">             <div class=\"panel-heading\"><h3 class=\"panel-title\">Login</h3></div>             <div class=\"panel-body\">                 <form>                     <div class=\"form-group\">                         <label for=\"email\">Email</label>                         <input type=\"text\" [(ngModel)]=\"credential.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">                     </div>                     <div class=\"form-group\">                         <label for=\"id\">Id</label>                         <input type=\"number\" [(ngModel)]=\"credential.id\" name=\"id\" class=\"form-control\" placeholder=\"Id Number\">                     </div>                     <div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>                     <button class=\"btn btn-success btn-block\" (click)=\"login(credential)\">Login</button>                 </form>             </div>         </div>     </div> </div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
