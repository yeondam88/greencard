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
var index_1 = require('../../api/index');
var LatestNewsComponent = (function () {
    function LatestNewsComponent(api) {
        this.api = api;
    }
    LatestNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getNews().subscribe(function (news) { return _this.news = news; });
    };
    LatestNewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'latest-news',
            templateUrl: 'latest-news.component.html',
            styleUrls: ['latest-news.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], LatestNewsComponent);
    return LatestNewsComponent;
}());
exports.LatestNewsComponent = LatestNewsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGF0ZXN0LW5ld3MvbGF0ZXN0LW5ld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFZN0M7SUFFRSw2QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBRyxDQUFDO0lBRXZDLHNDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUMxQixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUN6QixDQUFBO0lBQ0gsQ0FBQztJQWZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7OzJCQUFBO0lBVUYsMEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDJCQUFtQixzQkFTL0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2xhdGVzdC1uZXdzL2xhdGVzdC1uZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xhdGVzdC1uZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICdsYXRlc3QtbmV3cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsYXRlc3QtbmV3cy5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTGF0ZXN0TmV3c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgbmV3czogYW55W107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpLmdldE5ld3MoKS5zdWJzY3JpYmUoXG4gICAgICBuZXdzID0+IHRoaXMubmV3cyA9IG5ld3NcbiAgICApXG4gIH1cbn1cbiJdfQ==
