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
var index_1 = require('../../../api/index');
var router_1 = require('@angular/router');
var NewArticleComponent = (function () {
    function NewArticleComponent(api, router) {
        this.api = api;
        this.router = router;
        this.article = { title: "", heading: "", body: "" };
        this.step = 1;
    }
    NewArticleComponent.prototype.go = function (step) {
        this.step = step;
    };
    NewArticleComponent.prototype.save = function (article) {
        var _this = this;
        this.api.postArticle(article).subscribe(function (result) {
            swal("Article Edited", "", "success");
            _this.router.navigate(['/admin/news']);
        });
    };
    NewArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'new-article.component.html',
            styleUrls: ['new-article.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, router_1.Router])
    ], NewArticleComponent);
    return NewArticleComponent;
}());
exports.NewArticleComponent = NewArticleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK25ld3MvbmV3LWFydGljbGUvbmV3LWFydGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsc0JBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFRekM7SUFHSSw2QkFBb0IsR0FBZSxFQUFVLE1BQWM7UUFBdkMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbkQsWUFBTyxHQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUNsRCxTQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ3FDLENBQUM7SUFFL0QsZ0NBQUUsR0FBRixVQUFHLElBQVk7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQUksR0FBSixVQUFLLE9BQVk7UUFBakIsaUJBT0M7UUFORyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ25DLFVBQUEsTUFBTTtZQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQXJCTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOzsyQkFBQTtJQWtCRiwwQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksMkJBQW1CLHNCQWlCL0IsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluLytuZXdzL25ldy1hcnRpY2xlL25ldy1hcnRpY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2luZGV4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIHN3YWw6IGFueTtcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ25ldy1hcnRpY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25ldy1hcnRpY2xlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdBcnRpY2xlQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGFydGljbGU6IGFueSA9IHt0aXRsZTogXCJcIiwgaGVhZGluZzogXCJcIiwgYm9keTogXCJcIn07XG4gICAgcHJpdmF0ZSBzdGVwOiBudW1iZXIgPSAxO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgZ28oc3RlcDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICBzYXZlKGFydGljbGU6IGFueSl7XG4gICAgICAgIHRoaXMuYXBpLnBvc3RBcnRpY2xlKGFydGljbGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgc3dhbChcIkFydGljbGUgRWRpdGVkXCIsIFwiXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9uZXdzJ10pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
