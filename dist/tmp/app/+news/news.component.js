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
var index_1 = require('../shared/index');
var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'news',
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header text-align-center\" style=\"background-image:url(images/newspaper.jpg);\">         <div class=\"container\">             <h1>News</h1>         </div>     </div> </div> <!-- Main Content --> <div id=\"main-container\">     <div class=\"content\">         <div class=\"container\">             <div class=\"row\">                 <div class=\"col-md-9\">                     <latest-news></latest-news>                 </div>                                  <div class=\"col-md-3 sidebar right-sidebar\">                     <div class=\"widget sidebar-widget widget_recent_posts\">                         <h3 class=\"widgettitle\">Recent News</h3>                         <ul>                             <li>                                 <a href=\"single-news.html\">Green Card Lottery voted 15th best company to work for in the US</a>                                 <span class=\"meta-data grid-item-meta\">Posted on 05 May, 2016</span>                             </li>                             <li>                                 <a href=\"single-news.html\">Government softens plan to criminalise unwitting offshore tax evasion</a>                                 <span class=\"meta-data grid-item-meta\">Posted on 04 May, 2016</span>                             </li>                             <li>                                 <a href=\"single-news.html\">Green Card Lottery announces 6 new partners</a>                                 <span class=\"meta-data grid-item-meta\">Posted on 28 April, 2016</span>                             </li>                         </ul>                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.LatestNewsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
