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
            templateUrl: 'keyin.component.html',
            styleUrls: ['keyin.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.AuthService, router_1.Router])
    ], KeyinComponent);
    return KeyinComponent;
}());
exports.KeyinComponent = KeyinComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8ra2V5aW4va2V5aW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBT3pDO0lBRUUsd0JBQW9CLEdBQWUsRUFBVSxJQUFpQixFQUFVLE1BQWM7UUFBbEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRDlFLGVBQVUsR0FBUSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ2tDLENBQUM7SUFFMUYsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sVUFBZTtRQUFyQixpQkFPQztRQU5DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxJQUFJO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQW5CSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDOztzQkFBQTtJQWdCRixxQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksc0JBQWMsaUJBZTFCLENBQUEiLCJmaWxlIjoiYXBwLytrZXlpbi9rZXlpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9ndWFyZC9pbmRleCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdrZXlpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydrZXlpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgS2V5aW5Db21wb25lbnQge1xuICBwcml2YXRlIGNyZWRlbnRpYWw6IGFueSA9IHt1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCJ9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvZ2luKGNyZWRlbnRpYWw6IGFueSl7XG4gICAgdGhpcy5hcGkuYWRtaW5Mb2dpbihjcmVkZW50aWFsKS5zdWJzY3JpYmUoXG4gICAgICB1c2VyID0+e1xuICAgICAgICB0aGlzLmF1dGguYWRtaW5Mb2dpbih1c2VyKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nXSk7XG4gICAgICB9XG4gICAgKVxuICB9XG59XG4iXX0=
