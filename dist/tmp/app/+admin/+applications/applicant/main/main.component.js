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
var MainComponent = (function () {
    function MainComponent() {
        this.onMainComplete = new core_1.EventEmitter();
    }
    MainComponent.prototype.check = function () {
        if (this.application.firstname.length > 1 &&
            this.application.lastname.length > 1 &&
            this.application.title.id && this.application.titles != this.titles[0] &&
            this.application.gender.id && this.application.gender != this.genders[0] &&
            this.application.education.id && this.application.education != this.educations[0] &&
            this.application.experience.id && this.application.experience != this.workExperiences[0] &&
            this.application.country.id && this.application.country != this.countries[0] &&
            this.application.city.length > 1 &&
            this.application.marital.id && this.application.marital && this.countries[0] &&
            this.application.email &&
            this.application.confirmEmail &&
            this.application.email === this.application.confirmEmail &&
            this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id) {
            return true;
        }
        return false;
    };
    MainComponent.prototype.next = function () {
        this.onMainComplete.emit(this.application);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "educations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "workExperiences", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "maritals", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "titles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "genders", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "days", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "months", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "years", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "children", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "onMainComplete", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div class=\"row\">         <h4>Personal Information</h4>         <hr>             <div class=\"col-sm-4\">                 <label>Title</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.title\" name=\"title\">                     <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.title}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>First Name</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.firstname\" name=\"fisrtname\" required>             </div>             <div class=\"col-sm-4\">                 <label>Last Name</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.lastname\" name=\"lastname\" required>             </div>             <div class=\"col-sm-4\">                 <label>Email</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.email\" name=\"email\" required>             </div>             <div class=\"col-sm-4\">                 <label>Confirm Email</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.confirmEmail\" name=\"confirmEmail\" required>             </div>             <div class=\"col-sm-4\">                 <label>Gender</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.gender\" name=\"gender\">                     <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender.gender}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Education</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.education\" name=\"education2\">                     <option *ngFor=\"let education of educations\" [ngValue]=\"education\">{{education.level}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Work Experience</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.experience\" name=\"experience2\">                     <option *ngFor=\"let experience of workExperiences\" [ngValue]=\"experience\">{{experience.level}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Phone</label>             </div>             <div class=\"col-sm-2\">                 <!--                 <select class=\"form-control\" [(ngModel)]=\"application.phone.country\" name=\"phone_country\">                     <option *ngFor=\"let country of countryNumbers\" [ngValue]=\"country\">{{number.number}}</option>                 </select>                 -->                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.phone.country\" name=\"phone-country\" required>             </div>             <div class=\"col-sm-6\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.phone.number\" name=\"phone-number\" required>             </div>         </div>         <div class=\"spacer-30\"></div>         <div class=\"row\">         <h4>Birth Information</h4>         <hr>             <div class=\"col-sm-4\">                 <label>Birth Day</label>             </div>             <div class=\"col-sm-2\">             <select class=\"form-control\" [(ngModel)]=\"application.birth.day\" name=\"birthday\">                 <option *ngFor=\"let day of days\" [ngValue]=\"day\">{{day.day}}</option>             </select></div>             <div class=\"col-sm-3\">                 <select class=\"form-control\" [(ngModel)]=\"application.birth.month\" name=\"birthmonth\">                     <option *ngFor=\"let month of months\" [ngValue]=\"month\">{{month.month}}</option>                 </select>             </div>             <div class=\"col-sm-3\">                 <select class=\"form-control\" [(ngModel)]=\"application.birth.year\" name=\"birthyear\">                     <option *ngFor=\"let year of years\" [ngValue]=\"year\">{{year.year}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Birth City</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.city\" name=\"city\">             </div>             <div class=\"col-sm-4\">                 <label>Birth Country</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.country\" name=\"country\">                     <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Marital Status</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.marital\" name=\"application-marital2\">                     <option *ngFor=\"let marital of maritals\" [ngValue]=\"marital\">{{marital.answer}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Children</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.children\" name=\"application-children\">                     <option *ngFor=\"let child of children\" [ngValue]=\"child\">{{child}}</option>                 </select>             </div>         </div>     </div> </div> <div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <button class=\"btn btn-success pull-right\" [disabled]=\"!check()\" (click)=\"next()\">Next</button>     </div> </div>",
            styles: ["input,select{margin-bottom:15px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
