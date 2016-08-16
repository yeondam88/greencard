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
var index_1 = require('../../../api/index');
var index_2 = require('../current-news-service/index');
var ArticleComponent = (function () {
    function ArticleComponent(current, api, route, router) {
        this.current = current;
        this.api = api;
        this.route = route;
        this.router = router;
        this.step = 1;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        if (!this.current.article) {
            this.api.getArticle(this.id).subscribe(function (result) { return _this.current.article = result; });
        }
    };
    ArticleComponent.prototype.go = function (step) {
        this.step = step;
    };
    ArticleComponent.prototype.save = function (article) {
        var _this = this;
        this.api.putArticle(article).subscribe(function (result) {
            swal("Article Edited", "", "success");
            _this.router.navigate(['/admin/news']);
        });
    };
    ArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'article.component.html',
            styleUrls: ['article.component.css']
        }), 
        __metadata('design:paramtypes', [index_2.NewsService, index_1.ApiService, router_1.ActivatedRoute, router_1.Router])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK25ld3MvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBUTVEO0lBR0ksMEJBQ1UsT0FBb0IsRUFDcEIsR0FBZSxFQUNmLEtBQXFCLEVBQ3JCLE1BQWM7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGhCLFNBQUksR0FBVyxDQUFDLENBQUM7SUFLRSxDQUFDO0lBQzVCLG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFFOUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUUsR0FBRixVQUFHLElBQVk7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLE9BQVk7UUFBakIsaUJBT0M7UUFORyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsTUFBTTtZQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWhDTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDOzt3QkFBQTtJQTZCRix1QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qlksd0JBQWdCLG1CQTRCNUIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluLytuZXdzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2luZGV4JztcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1uZXdzLXNlcnZpY2UvaW5kZXgnO1xuXG5kZWNsYXJlIHZhciBzd2FsOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdhcnRpY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FydGljbGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlciA9IDE7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGN1cnJlbnQ6IE5ld3NTZXJ2aWNlLCBcbiAgICAgIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ10pO1xuXG4gICAgICBpZighdGhpcy5jdXJyZW50LmFydGljbGUpe1xuICAgICAgICB0aGlzLmFwaS5nZXRBcnRpY2xlKHRoaXMuaWQpLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5jdXJyZW50LmFydGljbGUgPSByZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdvKHN0ZXA6IG51bWJlcil7XG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgfVxuXG4gICAgc2F2ZShhcnRpY2xlOiBhbnkpe1xuICAgICAgICB0aGlzLmFwaS5wdXRBcnRpY2xlKGFydGljbGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgc3dhbChcIkFydGljbGUgRWRpdGVkXCIsIFwiXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9uZXdzJ10pXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
