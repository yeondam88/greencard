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
var index_1 = require('../../../../pipes/index');
var MainComponent = (function () {
    function MainComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "countries", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div class=\"row\">         <h4>Personal Information</h4>         <hr>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Title</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.title | title}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>First Name</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.firstname}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Last Name</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.lastname}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Email</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.email}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Gender</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.gender | gender}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Education</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.education | education}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Work Experience</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.experience | experience}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Phone</label>                 </div>                 <div class=\"col-sm-2\">                 {{application.phone_country}}                 </div>                 <div class=\"col-sm-6\">                 {{application.phone_number}}                 </div>             </div>         </div>         <div class=\"spacer-30\"></div>         <div class=\"row\">         <h4>Birth Information</h4>         <hr>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Birth Day</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.birthday}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Birth City</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.birth_city}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Birth Country</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.birth_country | idToString: countries: 'country'}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Marital Status</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.marital | marital}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Children</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.children}}                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            pipes: [index_1.IdToStringPipe, index_1.TitlePipe, index_1.EducationPipe, index_1.ExperiencePipe, index_1.MaritalPipe, index_1.GenderPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
