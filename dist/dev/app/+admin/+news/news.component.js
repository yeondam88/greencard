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
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var index_2 = require('./current-news-service/index');
var index_3 = require('../../pipes/index');
var NewsComponent = (function () {
    function NewsComponent(api, router, current) {
        this.api = api;
        this.router = router;
        this.current = current;
        this.orderField = 'timestamp';
        this.reverseField = true;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getNews().subscribe(function (news) { return _this.news = news; });
    };
    NewsComponent.prototype.goto = function (article) {
        this.router.navigate(['/admin/news', article.id]);
        this.current.article = article;
    };
    NewsComponent.prototype.sort = function (field) {
        this.orderField = field;
        this.reverseField = !this.reverseField;
    };
    NewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'news.component.html',
            styleUrls: ['news.component.css'],
            directives: [router_2.ROUTER_DIRECTIVES],
            pipes: [index_3.OrderPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, router_1.Router, index_2.NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK25ld3MvbmV3cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBNEIsOEJBQThCLENBQUMsQ0FBQTtBQUMzRCxzQkFBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQVM5QztJQUlJLHVCQUFvQixHQUFlLEVBQ3ZCLE1BQWMsRUFDZCxPQUFvQjtRQUZaLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFKeEIsZUFBVSxHQUFXLFdBQVcsQ0FBQztRQUNqQyxpQkFBWSxHQUFZLElBQUksQ0FBQztJQUdGLENBQUM7SUFFcEMsZ0NBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssT0FBWTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEtBQWE7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBM0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLEtBQUssRUFBRSxDQUFDLGlCQUFTLENBQUM7U0FDbkIsQ0FBQzs7cUJBQUE7SUFzQkYsb0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHFCQUFhLGdCQXFCekIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluLytuZXdzL25ld3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi9jdXJyZW50LW5ld3Mtc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBPcmRlclBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ25ld3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmV3cy5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIHBpcGVzOiBbT3JkZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIG5ld3M6IGFueVtdO1xuICAgIHByaXZhdGUgb3JkZXJGaWVsZDogc3RyaW5nID0gJ3RpbWVzdGFtcCc7XG4gICAgcHJpdmF0ZSByZXZlcnNlRmllbGQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGN1cnJlbnQ6IE5ld3NTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5hcGkuZ2V0TmV3cygpLnN1YnNjcmliZSggbmV3cyA9PiB0aGlzLm5ld3MgPSBuZXdzKVxuICAgIH1cblxuICAgIGdvdG8oYXJ0aWNsZTogYW55KXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vbmV3cycsIGFydGljbGUuaWRdKTtcbiAgICAgICAgdGhpcy5jdXJyZW50LmFydGljbGUgPSBhcnRpY2xlO1xuICAgIH1cblxuICAgIHNvcnQoZmllbGQ6IHN0cmluZyl7XG4gICAgICAgIHRoaXMub3JkZXJGaWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLnJldmVyc2VGaWVsZCA9ICF0aGlzLnJldmVyc2VGaWVsZDtcbiAgICB9XG59XG4iXX0=
