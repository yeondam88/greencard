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
var index_1 = require('./info/index');
var index_2 = require('../../guard/index');
var NavbarComponent = (function () {
    function NavbarComponent(el, auth) {
        this.el = el;
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onScroll();
    };
    NavbarComponent.prototype.onScroll = function () {
        var navHeight = this.el.nativeElement.offsetTop;
        var scrollY = window.scrollY;
        if (scrollY >= navHeight) {
            this.fixed = true;
        }
        else {
            this.fixed = false;
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            template: "<div class=\"placeholder\"> \t<div class=\"site-header\" [ngClass]=\"{'fixed':fixed}\"> \t\t<div class=\"container info-container\"> \t\t\t<div class=\"pull-right\"><info></info></div> \t\t\t<div id=\"menu-toggle\" class=\"hamburger\" (click)=\"miniMenu = !miniMenu\"> \t\t\t\t<div></div> \t\t\t\t<div></div> \t\t\t\t<div></div> \t\t\t\t<div></div> \t\t\t</div> \t\t\t<nav class=\"main-navigation pull-left\" [ngClass]=\"{'mini-menu': miniMenu}\"> \t\t\t\t<ul class=\"dd-menu sf-menu\"> \t\t\t\t\t<li><a [routerLink]=\"['/']\">About Green Card Lottery</a></li> \t\t\t\t\t<li><a [routerLink]=\"['/apply']\">Apply</a></li> \t\t\t\t\t<li><a [routerLink]=\"['/qna']\">Q&A</a></li> \t\t\t\t\t<li><a [routerLink]=\"['/news']\">News</a></li> \t\t\t\t\t<li><a [routerLink]=\"['/blogs']\">Blogs</a></li> \t\t\t\t\t<li><a [routerLink]=\"['/contact']\">Contact Us</a></li> \t\t\t\t\t<li *ngIf=\"auth.isAdmin\"><a [routerLink]=\"['/admin']\">Admin</a></li> \t\t\t\t</ul> \t\t\t</nav> \t\t</div> \t</div> </div>",
            styles: [".fixed{position:fixed;top:0;left:0;right:0;z-index:10}.placeholder{height:76px}"],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.InfoComponent],
            host: {
                '(window:scroll)': 'onScroll($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, index_2.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
