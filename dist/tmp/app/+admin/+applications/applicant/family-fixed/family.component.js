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
var index_1 = require('../../../../api/index');
var index_2 = require('../../../../pipes/index');
var FamilyComponent = (function () {
    function FamilyComponent(api) {
        this.api = api;
    }
    FamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getFamily(this.application.id).subscribe(function (family) {
            _this.family = family;
            console.log(family);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "countries", void 0);
    FamilyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'family',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div *ngFor=\"let child of family; let i = index\">             <div class=\"row\">             <h4>Child {{child.relationship}}</h4>             <hr>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>First Name</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.firstname}}                     </div>                 </div>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>Last Name</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.lastname}}                     </div>                 </div>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>Gender</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.gender | gender}}                     </div>                 </div>                 <div class=\"row\" *ngIf=\"child.experience\">                     <div class=\"col-sm-4\">                         <label>Education</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.education | education}}                     </div>                 </div>                 <div class=\"row\" *ngIf=\"child.experience\">                     <div class=\"col-sm-4\">                         <label>Work Experience</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.experience | experience}}                     </div>                 </div>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>Birth Day</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.birthday}}                     </div>                 </div>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>Birth City</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.birth_city}}                     </div>                 </div>                 <div class=\"row\">                     <div class=\"col-sm-4\">                         <label>Birth Country</label>                     </div>                     <div class=\"col-sm-8\">                         {{child.birth_country | idToString: countries: 'country'}}                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            pipes: [index_2.IdToStringPipe, index_2.EducationPipe, index_2.ExperiencePipe, index_2.GenderPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], FamilyComponent);
    return FamilyComponent;
}());
exports.FamilyComponent = FamilyComponent;
