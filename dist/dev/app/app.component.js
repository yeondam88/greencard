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
            templateUrl: 'app.component.html',
            providers: [index_3.ApiService],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.ToolbarComponent, index_1.BrandingComponent, index_1.NavbarComponent, index_1.FooterComponent, index_1.AdminBrandingComponent, index_1.AdminToolbarComponent]
        }), 
        __metadata('design:paramtypes', [index_2.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQXFJLGdCQUFnQixDQUFDLENBQUE7QUFDdEosc0JBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHNCQUEyQixhQUFhLENBQUMsQ0FBQTtBQWF6QztJQUNFLHNCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUUsQ0FBQztJQVIxQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxrQkFBVSxDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHdCQUFnQixFQUFFLHlCQUFpQixFQUFFLHVCQUFlLEVBQUUsdUJBQWUsRUFBRSw4QkFBc0IsRUFBRSw2QkFBcUIsQ0FBQztTQUN0SixDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50LCBCcmFuZGluZ0NvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIEFkbWluQnJhbmRpbmdDb21wb25lbnQsIEFkbWluVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9ndWFyZC9pbmRleCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuIFdpdGhpbiB0aGUgQFJvdXRlcyBhbm5vdGF0aW9uIGlzIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZVxuICogYXBwbGljYXRpb25zIHJvdXRlcywgY29uZmlndXJpbmcgdGhlIHBhdGhzIGZvciB0aGUgbGF6eSBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQpLlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRvb2xiYXJDb21wb25lbnQsIEJyYW5kaW5nQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgQWRtaW5CcmFuZGluZ0NvbXBvbmVudCwgQWRtaW5Ub29sYmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKXt9XG59XG4iXX0=
