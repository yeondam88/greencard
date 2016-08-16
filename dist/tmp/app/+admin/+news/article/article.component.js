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
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header have-submenu\">         <div class=\"container\">             <h2 class=\"text-center\">Edit Article</h2>         </div>     </div> </div>  <div id=\"main-container\">     <div class=\"content\">         <div class=\"container\" *ngIf=\"step == 1\">             <div class=\"row\">                 <div class=\"col-sm-12\">                     <table>                         <tr>                             <th style=\"width: 20%\">Title</th>                             <td><input type=\"text\" [(ngModel)]=\"current.article.title\" class=\"form-control\" required></td>                         </tr>                         <tr>                             <th>Heading</th>                             <td><input type=\"text\" [(ngModel)]=\"current.article.heading\" class=\"form-control\"></td>                         </tr>                         <tr>                             <th>Body</th>                             <td><textarea  rows=\"20\" [(ngModel)]=\"current.article.body\" class=\"form-control\" required></textarea></td>                         </tr>                     </table>                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-12\">                     <button class=\"btn btn-success pull-right\" (click)=\"go(2)\">Preview</button>                 </div>             </div>         </div>          <div class=\"container\" *ngIf=\"step == 2\">             <div class=\"row\">                 <div class=\"col-sm-12\">                     <h2>{{current.article.title}}</h2>                     <p><strong>{{current.article.heading}}</strong></p>                     <div [innerHTML]=\"current.article.body\"></div>                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-12\">                     <button class=\"btn btn-info pull-left\" (click)=\"go(1)\">Back</button>                     <button class=\"btn btn-success pull-right\" (click)=\"save(current.article)\">Save</button>                 </div>             </div>         </div>     </div> </div>",
            styles: ["table{width:100%}td,th{padding:10px}"]
        }), 
        __metadata('design:paramtypes', [index_2.NewsService, index_1.ApiService, router_1.ActivatedRoute, router_1.Router])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
