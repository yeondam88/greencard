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
var ArticleComponent = (function () {
    function ArticleComponent(api, route) {
        this.api = api;
        this.route = route;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.api.getArticle(_this.id).subscribe(function (result) { return _this.article = result; });
            _this.api.getLatestNews().subscribe(function (result) { return _this.news = result; });
        });
    };
    ArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'article.component.html',
            styleUrls: ['article.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, router_1.ActivatedRoute])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbmV3cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtELGlCQUFpQixDQUFDLENBQUE7QUFDcEUsc0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFTN0M7SUFLSSwwQkFDVSxHQUFlLEVBQ2YsS0FBcUI7UUFEckIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQztJQUVuQyxtQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDaEMsQ0FBQzs7d0JBQUE7SUFpQkYsdUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHdCQUFnQixtQkFnQjVCLENBQUEiLCJmaWxlIjoiYXBwLytuZXdzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnO1xuXG5kZWNsYXJlIHZhciBzd2FsOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdhcnRpY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FydGljbGUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGFydGljbGU6IGFueTtcbiAgICBwcml2YXRlIG5ld3M6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0QXJ0aWNsZSh0aGlzLmlkKS5zdWJzY3JpYmUocmVzdWx0ID0+IHRoaXMuYXJ0aWNsZSA9IHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLmFwaS5nZXRMYXRlc3ROZXdzKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB0aGlzLm5ld3MgPSByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
