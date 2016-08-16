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
var index_2 = require('./current-application-service/index');
var router_1 = require('@angular/router');
var index_3 = require('../../pipes/index');
var ApplicationsComponent = (function () {
    function ApplicationsComponent(api, current, router) {
        this.api = api;
        this.current = current;
        this.router = router;
        this.orderField = 'id';
        this.reverseField = false;
        this.search = {};
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current.application = null;
        this.api.getCountries().subscribe(function (countries) { return _this.countries = countries; });
        this.api.getApplications().subscribe(function (applications) { return _this.applications = applications; });
    };
    ApplicationsComponent.prototype.goto = function (application) {
        this.router.navigate(['/admin/applications', application.id]);
        this.current.application = application;
    };
    ApplicationsComponent.prototype.sort = function (field) {
        this.orderField = field;
        this.reverseField = !this.reverseField;
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'applications.component.html',
            styleUrls: ['applications.component.css'],
            pipes: [index_3.IdToStringPipe, index_3.OrderPipe, index_3.SearchPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.ApplicationService, router_1.Router])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msc0JBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFDekUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQXNELG1CQUFtQixDQUFDLENBQUE7QUFRMUU7SUFNSSwrQkFDWSxHQUFlLEVBQ2YsT0FBMkIsRUFDM0IsTUFBYztRQUZkLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmxCLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQUlJLENBQUM7SUFFOUIsd0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFoQyxDQUFnQyxDQUFDLENBQUE7SUFDMUYsQ0FBQztJQUVELG9DQUFJLEdBQUosVUFBSyxXQUFnQjtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0NBQUksR0FBSixVQUFLLEtBQWE7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBL0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLEtBQUssRUFBRSxDQUFDLHNCQUFjLEVBQUUsaUJBQVMsRUFBRSxrQkFBVSxDQUFDO1NBQy9DLENBQUM7OzZCQUFBO0lBMkJGLDRCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSw2QkFBcUIsd0JBMEJqQyxDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jdXJyZW50LWFwcGxpY2F0aW9uLXNlcnZpY2UvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElkVG9TdHJpbmdQaXBlLCBPcmRlclBpcGUsIFNlYXJjaFBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyddLFxuICBwaXBlczogW0lkVG9TdHJpbmdQaXBlLCBPcmRlclBpcGUsIFNlYXJjaFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBhcHBsaWNhdGlvbnM6IGFueVtdO1xuICAgIHByaXZhdGUgY291bnRyaWVzOiBhbnlbXTtcbiAgICBwcml2YXRlIG9yZGVyRmllbGQ6IHN0cmluZyA9ICdpZCc7XG4gICAgcHJpdmF0ZSByZXZlcnNlRmllbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlYXJjaDogYW55ID0ge307XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLCBcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50OiBBcHBsaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50LmFwcGxpY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5hcGkuZ2V0Q291bnRyaWVzKCkuc3Vic2NyaWJlKGNvdW50cmllcyA9PiB0aGlzLmNvdW50cmllcyA9IGNvdW50cmllcyk7XG4gICAgICAgIHRoaXMuYXBpLmdldEFwcGxpY2F0aW9ucygpLnN1YnNjcmliZShhcHBsaWNhdGlvbnMgPT4gdGhpcy5hcHBsaWNhdGlvbnMgPSBhcHBsaWNhdGlvbnMpXG4gICAgfVxuXG4gICAgZ290byhhcHBsaWNhdGlvbjogYW55KXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vYXBwbGljYXRpb25zJywgYXBwbGljYXRpb24uaWRdKVxuICAgICAgICB0aGlzLmN1cnJlbnQuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICB9XG5cbiAgICBzb3J0KGZpZWxkOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLm9yZGVyRmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5yZXZlcnNlRmllbGQgPSAhdGhpcy5yZXZlcnNlRmllbGQ7XG4gICAgfVxufVxuIl19
