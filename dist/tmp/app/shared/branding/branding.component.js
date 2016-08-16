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
var BrandingComponent = (function () {
    function BrandingComponent() {
    }
    BrandingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'branding',
            template: "<div class=\"middlebar\">     <div class=\"container\">         <div class=\"row\">             <div class=\"col-xs-12\">                 <div class=\"site-logo\">                     <a [routerLink]=\"['/']\">                         <img src=\"images/logo.png\" alt=\"\" class=\"default-logo\">                         <img src=\"images/logo@2x.png\" alt=\"\" class=\"retina-logo\" width=\"407\" height=\"72\">                     </a>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BrandingComponent);
    return BrandingComponent;
}());
exports.BrandingComponent = BrandingComponent;
