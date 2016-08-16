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
var router_1 = require('@angular/router');
var UserComponent = (function () {
    function UserComponent(auth) {
        this.auth = auth;
    }
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYWRtaW4tdG9vbGJhci91c2VyL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFRcEQ7SUFDSSx1QkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFFLENBQUM7SUFQNUM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDaEMsQ0FBQzs7cUJBQUE7SUFHRixvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hZG1pbi10b29sYmFyL3VzZXIvdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9ndWFyZC9pbmRleCc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VzZXInLFxuICB0ZW1wbGF0ZVVybDogJ3VzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2Upe31cbn0iXX0=
