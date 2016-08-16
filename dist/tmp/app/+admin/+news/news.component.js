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
            template: "<div class=\"hero-area\">     <div class=\"page-header have-submenu\">         <div class=\"container\">             <h1 class=\"text-center\">News</h1>         </div>     </div> </div>  <div class=\"content\">     <div class=\"container\">         <div class=\"row\">             <div class=\"col-sm-12\">                 <button class=\"btn btn-primary\" [routerLink]=\"['/admin/news/new']\">New Article</button>             </div>             <div class=\"col-sm-12\">                 <table class=\"table table-bordered table-hover\" *ngIf=\"news\">                     <thead>                         <tr>                             <th (click)=\"sort('title')\">Title<span *ngIf=\"orderField == 'title'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                             <th (click)=\"sort('timestamp')\">Date<span *ngIf=\"orderField == 'timestamp'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                         </tr>                     </thead>                     <tbody>                         <tr *ngFor=\"let article of news | order : orderField : reverseField\" (click)=\"goto(article)\">                             <td>{{article.title}}</td>                             <td>{{article.timestamp}}</td>                         </tr>                     </tbody>                 </table>             </div>         </div>     </div> </div>",
            styles: ["thead{background-color:#022b52;color:#fff}tr{cursor:pointer}"],
            directives: [router_2.ROUTER_DIRECTIVES],
            pipes: [index_3.OrderPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, router_1.Router, index_2.NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
