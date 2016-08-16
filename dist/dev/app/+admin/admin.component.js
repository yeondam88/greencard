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
var index_1 = require('./+applications/current-application-service/index');
var index_2 = require('./+news/current-news-service/index');
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'admin.component.html',
            styleUrls: ['admin.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [index_1.ApplicationService, index_2.NewsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQW1DLG1EQUFtRCxDQUFDLENBQUE7QUFDdkYsc0JBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFTakU7SUFDSTtJQUFlLENBQUM7SUFScEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMsMEJBQWtCLEVBQUUsbUJBQVcsQ0FBQztTQUM3QyxDQUFDOztzQkFBQTtJQUdGLHFCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQkFBYyxpQkFFMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluL2FkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8rYXBwbGljYXRpb25zL2N1cnJlbnQtYXBwbGljYXRpb24tc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gJy4vK25ld3MvY3VycmVudC1uZXdzLXNlcnZpY2UvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdhZG1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhZG1pbi5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0FwcGxpY2F0aW9uU2VydmljZSwgTmV3c1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=
