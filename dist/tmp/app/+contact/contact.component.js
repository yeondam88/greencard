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
var index_1 = require('./googlemap/index');
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <googlemap></googlemap> </div> <!-- Main Content --> <div id=\"main-container\">     <div class=\"content\">         <div class=\"container\">             <div class=\"shadow-block contact-info-block\">                 <div class=\"row\">                     <div class=\"col-md-8 col-sm-8\">                         <form method=\"post\" id=\"contactform\" name=\"contactform\" class=\"contact-form clearfix\" action=\"mail/contact.php\">                             <h4>Send us a message</h4>                             <div class=\"row\">                                 <div class=\"col-md-6 col-sm-6\">                                     <label>Your Name (required)</label>                                     <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control input-lg\">                                 </div>                                 <div class=\"col-md-6 col-sm-6\">                                     <label>Your Email (required)</label>                                     <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control input-lg\">                                 </div>                             </div>                             <div class=\"row\">                                 <div class=\"col-md-6 col-sm-6\">                                     <label>Your Phone (required)</label>                                     <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control input-lg\">                                 </div>                                 <div class=\"col-md-6 col-sm-6\">                                     <label>Your Address</label>                                     <input type=\"text\" id=\"address\" name=\"address\" class=\"form-control input-lg\">                                 </div>                             </div>                             <div class=\"row\">                                 <div class=\"col-md-12\">                                     <label>Your message</label>                                     <textarea class=\"form-control input-lg\" id=\"comments\" name=\"comments\" rows=\"6\"></textarea>                                                                          <button type=\"submit\" id=\"submit\" name=\"submit\" class=\"btn btn-primary btn-lg\">Contact now</button>                                 </div>                             </div>                         </form>                         <div class=\"clearfix\"></div>                         <div id=\"message\"></div>                     </div>                     <div class=\"col-md-4 col-sm-4\">                         <div class=\"accent-bg parallax-light padding-all40\">                             <h4>Our Offices</h4>                             <span class=\"label label-info\">US OFFICE - IRVINE</span>                             <p>34 Executive Park, Suite 275, Irvine<br />California 92614 USA<br /><i class=\"fa fa-phone\"></i> 949-660-0020</p>                             <br />                             <span class=\"label label-info\">US OFFICE - LOS ANGELES</span>                             <p>3731 Wilshire Blvd Suite 61, Los Angeles <br />California 90010<br /><i class=\"fa fa-phone\"></i> 877-529-1004</p>                                                      </div>                     </div>                 </div>             </div>             <div class=\"clearfix\"></div>             <div class=\"spacer-30 visible-xs\"></div>             <div class=\"alert alert-warning\">                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lacinia diam quis imperdiet. Proin vitae iaculis nisl. Cras eleifend quam lectus, sed bibendum libero convallis at. Nulla sagittis convallis neque at scelerisque. Pellentesque placerat bibendum magna, semper accumsan sem congue nec. Etiam viverra, ipsum vel suscipit varius, neque odio suscipit orci, et molestie metus mi a dui. </p>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [index_1.GooglemapComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
