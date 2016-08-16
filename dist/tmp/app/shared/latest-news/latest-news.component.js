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
            template: "<ul class=\"events-list events-list-compact\" *ngIf=\"news\">     <li *ngFor=\"let article of news\">         <div class=\"event-date\">             <div class=\"event-month\">{{article.timestamp | date: 'MMM'}}</div>             <div class=\"event-day\">{{article.timestamp | date: 'dd'}}</div>         </div>         <a [routerLink]=\"['/news/' + article.id]\" class=\"btn btn-default btn-sm\">READ</a>         <a [routerLink]=\"['/news/' + article.id]\"><strong>{{article.title}}</strong></a>         <span class=\"meta-data\">{{article.timestamp | date: 'jm'}}, {{article.timestamp | date: 'EEEE MMMM d, y'}}</span>     </li> </ul> <div class=\"spacer-40\"></div>      <ul class=\"pagination\">     <li><a href=\"#\"><i class=\"fa fa-chevron-left\"></i></a></li>     <li class=\"active\"><a href=\"#\">1</a></li>     <li><a href=\"#\">2</a></li>     <li><a href=\"#\">3</a></li>     <li><a href=\"#\">4</a></li>     <li><a href=\"#\">5</a></li>     <li><a href=\"#\"><i class=\"fa fa-chevron-right\"></i></a></li> </ul>",
            styles: [""],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], LatestNewsComponent);
    return LatestNewsComponent;
}());
exports.LatestNewsComponent = LatestNewsComponent;
