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
var index_1 = require('../current-application-service/index');
var index_2 = require('./navigation/index');
var index_3 = require('../../../api/index');
var index_4 = require('./main-fixed/index');
var index_5 = require('./family-fixed/index');
var index_6 = require('./address-fixed/index');
var ApplicantComponent = (function () {
    function ApplicantComponent(current, api, route) {
        this.current = current;
        this.api = api;
        this.route = route;
        this.step = 1;
    }
    ApplicantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.api.getCountries().subscribe(function (countries) {
            _this.countries = countries;
        });
        if (!this.current.application) {
            this.api.getApplication(this.id).subscribe(function (result) { return _this.current.application = result; });
        }
    };
    ApplicantComponent.prototype.stepChange = function (step) {
        this.step = step;
    };
    ApplicantComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'applicant.component.html',
            styleUrls: ['applicant.component.css'],
            directives: [index_2.NavigationComponent, index_4.MainComponent, index_5.FamilyComponent, index_6.AddressComponent]
        }), 
        __metadata('design:paramtypes', [index_1.ApplicationService, index_3.ApiService, router_1.ActivatedRoute])
    ], ApplicantComponent);
    return ApplicantComponent;
}());
exports.ApplicantComponent = ApplicantComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvYXBwbGljYW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHNCQUFtQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzFFLHNCQUFvQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pELHNCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHNCQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBUXpEO0lBSUksNEJBQ1UsT0FBMkIsRUFDM0IsR0FBZSxFQUNmLEtBQXFCO1FBRnJCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUx2QixTQUFJLEdBQVcsQ0FBQyxDQUFDO0lBS1MsQ0FBQztJQUNuQyxxQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLEVBQWpDLENBQWlDLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUEzQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsVUFBVSxFQUFFLENBQUMsMkJBQW1CLEVBQUUscUJBQWEsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ3BGLENBQUM7OzBCQUFBO0lBdUJGLHlCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSwwQkFBa0IscUJBc0I5QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvYXBwbGljYW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LWFwcGxpY2F0aW9uLXNlcnZpY2UvaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2luZGV4JztcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL21haW4tZml4ZWQvaW5kZXgnO1xuaW1wb3J0IHsgRmFtaWx5Q29tcG9uZW50IH0gZnJvbSAnLi9mYW1pbHktZml4ZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1maXhlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2FudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHBsaWNhbnQuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbTmF2aWdhdGlvbkNvbXBvbmVudCwgTWFpbkNvbXBvbmVudCwgRmFtaWx5Q29tcG9uZW50LCBBZGRyZXNzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBsaWNhbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBjb3VudHJpZXM6IGFueVtdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjdXJyZW50OiBBcHBsaWNhdGlvblNlcnZpY2UsIFxuICAgICAgcHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmlkID0gcGFyYW1zWydpZCddKTtcblxuICAgICAgdGhpcy5hcGkuZ2V0Q291bnRyaWVzKCkuc3Vic2NyaWJlKGNvdW50cmllcyA9PiB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gY291bnRyaWVzO1xuICAgICAgfSk7XG4gICAgICBpZighdGhpcy5jdXJyZW50LmFwcGxpY2F0aW9uKXtcbiAgICAgICAgdGhpcy5hcGkuZ2V0QXBwbGljYXRpb24odGhpcy5pZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB0aGlzLmN1cnJlbnQuYXBwbGljYXRpb24gPSByZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXBDaGFuZ2Uoc3RlcDogbnVtYmVyKXtcbiAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgfVxufVxuIl19
