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
            templateUrl: 'admin-toolbar.component.html',
            styleUrls: ['admin-toolbar.component.css'],
            directives: [index_1.LanguagesComponent, index_2.LinksComponent, index_3.UserComponent]
        }), 
        __metadata('design:paramtypes', [index_4.AuthService])
    ], AdminToolbarComponent);
    return AdminToolbarComponent;
}());
exports.AdminToolbarComponent = AdminToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYWRtaW4tdG9vbGJhci9hZG1pbi10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFtQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZELHNCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxzQkFBOEIsY0FBYyxDQUFDLENBQUE7QUFDN0Msc0JBQTRCLG1CQUFtQixDQUFDLENBQUE7QUFZaEQ7SUFDRSwrQkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFFLENBQUM7SUFSMUM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDMUMsVUFBVSxFQUFFLENBQUMsMEJBQWtCLEVBQUUsc0JBQWMsRUFBRSxxQkFBYSxDQUFDO1NBQ2hFLENBQUM7OzZCQUFBO0lBR0YsNEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDZCQUFxQix3QkFFakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2FkbWluLXRvb2xiYXIvYWRtaW4tdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlc0NvbXBvbmVudCB9IGZyb20gJy4vbGFuZ3VhZ2VzL2luZGV4JztcbmltcG9ydCB7IExpbmtzQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rcy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZ3VhcmQvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgdG9vbGJhciBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FkbWluLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJ2FkbWluLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWRtaW4tdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtMYW5ndWFnZXNDb21wb25lbnQsIExpbmtzQ29tcG9uZW50LCBVc2VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblRvb2xiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKXt9XG59XG4iXX0=
