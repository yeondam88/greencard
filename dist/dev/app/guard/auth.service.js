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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUd6RCxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQztJQUtDO1FBSkEsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQVksS0FBSyxDQUFDO0lBR2QsQ0FBQztJQUVaLGdDQUFVLEdBQVYsVUFBVyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFSixpQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBMUJGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUEyQmIsa0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG1CQUFXLGNBMEJ2QixDQUFBIiwiZmlsZSI6ImFwcC9ndWFyZC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0aXNBZG1pbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRpc0xvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XG5cdGFkbWluOiBhbnk7XG5cdHVzZXI6IGFueTtcblx0Y29uc3RydWN0b3IoKXt9XG5cbiAgICBhZG1pbkxvZ2luKHVzZXI6IGFueSl7XG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IHRydWU7XG5cdFx0dGhpcy5hZG1pbiA9IHVzZXI7XG4gICAgfVxuXG5cdGFkbWluTG9nb3V0KCkge1xuXHRcdHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xuXHRcdHRoaXMuYWRtaW4gPSBudWxsO1xuXHR9XG5cblx0bG9naW4odXNlcjogYW55KXtcblx0XHR0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuXHRcdHRoaXMudXNlciA9IHVzZXI7XG5cdH1cblxuXHRsb2dvdXQoKXtcblx0XHR0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuXHRcdHRoaXMudXNlciA9IG51bGw7XG5cdH1cbn0iXX0=
