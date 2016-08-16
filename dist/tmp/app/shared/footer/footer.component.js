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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'footer',
            template: "<div class=\"site-footer\">     <div class=\"container\">         <div class=\"row footer-widgets-area\">             <div class=\"col-md-3 col-sm-4\">                 <div class=\"widget footer_widget widget_links\">                     <h4 class=\"widgettitle\">Client Services</h4>                     <ul>                         <li><a [routerLink]=\"['/apply']\">Check Eligibility</a></li>                         <li><a [routerLink]=\"['/apply']\">Photo Requirements</a></li>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                     </ul>                 </div>             </div>             <div class=\"col-md-3 col-sm-4\">                 <div class=\"widget footer_widget widget_links\">                     <h4 class=\"widgettitle\">&nbsp;</h4>                     <ul>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                         <li><a [routerLink]=\"['/apply']\">Other Service</a></li>                     </ul>                 </div>             </div>             <div class=\"col-md-3 col-sm-4\">                 <div class=\"widget footer_widget widget_recent_posts\">                     <h4 class=\"widgettitle\">Recent Posts</h4>                     <ul>                         <li>                             <a href=\"single-post.html\">Green Card Lottery voted 15th best company to work for in the US</a>                             <span class=\"meta-data grid-item-meta\">Posted on 05 May, 2016</span>                         </li>                         <li>                             <a href=\"single-post.html\">Government softens plan to criminalise unwitting offshore tax evasion</a>                             <span class=\"meta-data grid-item-meta\">Posted on 04 May, 2016</span>                         </li>                     </ul>                 </div>             </div>             <div class=\"col-md-3 col-sm-4\">                 <div class=\"widget footer_widget widget_recent_posts\">                     <h4 class=\"widgettitle\">Contact Us</h4>                     <ul>                         <li>34 Executive Park, Suite 275,                         <br />Irvine, California 92614 USA                         <br />949-660-0020                         </li>                         <li>3731 Wilshire Blvd Suite 61,                         <br />Los Angeles, California 90010                         <br />877-529-1004                         </li>                     </ul>                 </div>             </div>         </div>                  <div class=\"footer-row2\">             <ul class=\"pull-right social-icons social-icons-colored social-icons-inverted\">                 <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook-f\"></i></a></li>                 <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>                 <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>             </ul>             <ul class=\"footer-menu\">                 <li><a [routerLink]=\"['/']\">Home</a></li>                 <li><a [routerLink]=\"['/apply']\">Privacy Policy</a></li>                 <li><a [routerLink]=\"['/apply']\">Terms & Conditions</a></li>                 <li><a [routerLink]=\"['/apply']\">Payment Terms</a></li>                 <li><a [routerLink]=\"['/apply']\">Cookie Policy</a></li>             </ul>         </div>         <div class=\"footer-row3\">             <a [routerLink]=\"['/apply']\"><img src=\"images/logo-light.png\" alt=\"\" width=\"130\" class=\"site-footer-logo\"></a>             <p>&copy; 2016 Green Card Lottery Group of Lawyers &amp; Attorneys. All Rights Reserved.</p>         </div>     </div> </div>",
            styles: [""],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
