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
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header text-align-center\" style=\"background-image:url(images/bg_map.jpg);\">         <div class=\"container\">             <h1>Article</h1>         </div>     </div> </div>  <div id=\"main-container\">     <div class=\"content\">         <div class=\"container\">             <div class=\"row\">                 <div class=\"col-lg-9 col-md-8\">                     <div *ngIf=\"article\">                         <h2>{{article.title}}</h2>                         <p><strong>{{article.heading}}</strong></p>                         <div [innerHTML]=\"article.body\"></div>                     </div>                 </div>                 <div class=\"col-lg-3 col-md-4 sidebar right-sidebar\">                     <div class=\"sidebar-widget widget upcoming_events_widget\" *ngIf=\"news\">                         <h3 class=\"widgettitle\">Latest News</h3>                         <ul class=\"events-list events-list-compact\">                             <li *ngFor=\"let article of news\">                                 <div class=\"event-date\">                                     <div class=\"event-month\">{{article.timestamp | date: 'MMM'}}</div>                                     <div class=\"event-day\">{{article.timestamp | date: 'dd'}}</div>                                 </div>                                 <a [routerLink]=\"['/news/' + article.id]\"><strong>{{article.title}}</strong></a>                                 <span class=\"meta-data\">{{article.timestamp | date: 'EEEE'}}, {{article.timestamp | date: 'jm'}}</span>                             </li>                         </ul>                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, router_1.ActivatedRoute])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
