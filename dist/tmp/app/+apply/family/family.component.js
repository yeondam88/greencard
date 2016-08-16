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
var FamilyComponent = (function () {
    function FamilyComponent() {
        this.onFamilyComplete = new core_1.EventEmitter();
        this.onFamilyBack = new core_1.EventEmitter();
    }
    FamilyComponent.prototype.ngOnInit = function () {
        this.spouse = null;
        this.children = [];
        if (this.application.family) {
            if (this.application.marital.id == 2) {
                if (this.application.family.spouse) {
                    this.spouse = this.application.family.spouse;
                }
                else {
                    this.spouse = {
                        firstname: "",
                        lastname: "",
                        education: this.educations[0],
                        experience: this.workExperiences[0],
                        country: this.countries[0],
                        city: "",
                        gender: this.genders[0],
                        birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
                    };
                }
            }
            if (this.application.family.children) {
                console.log(this.application.family);
                for (var x = 0; x < this.application.children; x++) {
                    if (this.application.family.children[x]) {
                        console.log("pushing", this.application.family.children[x]);
                        this.children.push(this.application.family.children[x]);
                    }
                    else {
                        var child = {
                            firstname: "",
                            lastname: "",
                            country: this.countries[0],
                            city: "",
                            gender: this.genders[0],
                            birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
                        };
                        this.children.push(child);
                    }
                }
            }
        }
        else {
            this.newFamily();
        }
    };
    FamilyComponent.prototype.newFamily = function () {
        if (this.application.marital.id == 2) {
            this.spouse = {
                firstname: "",
                lastname: "",
                education: this.educations[0],
                experience: this.workExperiences[0],
                country: this.countries[0],
                city: "",
                gender: this.genders[0],
                birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
            };
        }
        for (var x = 1; x <= this.application.children; x++) {
            this.children.push({
                firstname: "",
                lastname: "",
                country: this.countries[0],
                city: "",
                gender: this.genders[0],
                birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
            });
        }
    };
    FamilyComponent.prototype.checkSpouse = function () {
        if (this.spouse) {
            if (this.spouse.firstname.length > 1 &&
                this.spouse.lastname.length > 1 &&
                this.spouse.gender.id && this.spouse.gender != this.genders[0] &&
                this.spouse.education.id && this.spouse.education != this.educations[0] &&
                this.spouse.experience.id && this.spouse.experience != this.workExperiences[0] &&
                this.spouse.country.id && this.spouse.country != this.countries[0] &&
                this.spouse.city.length > 1 &&
                this.spouse.birth.day.id && this.spouse.birth.month.id && this.spouse.birth.year.id) {
                this.setBirthday(this.spouse);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    FamilyComponent.prototype.checkChild = function (child) {
        if (child.firstname.length > 1 &&
            child.lastname.length > 1 &&
            child.gender.id && child.gender != this.genders[0] &&
            child.country.id && child.country != this.countries[0] &&
            child.city.length > 1 &&
            child.birth.day.id && child.birth.month.id && child.birth.year.id) {
            this.setBirthday(child);
            return true;
        }
        else {
            return false;
        }
    };
    FamilyComponent.prototype.checkChildren = function () {
        if (this.children.length) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (!this.checkChild(child)) {
                    return false;
                }
            }
            return true;
        }
        return true;
    };
    FamilyComponent.prototype.back = function () {
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyBack.emit(this.application);
    };
    FamilyComponent.prototype.next = function () {
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyComplete.emit(this.application);
    };
    FamilyComponent.prototype.setBirthday = function (member) {
        member.birthday = moment().year(member.birth.year.id).month(member.birth.month.id - 1).date(member.birth.day.id).format('YYYY-MM-DD');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "educations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "workExperiences", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "genders", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "days", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "months", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "years", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "onFamilyComplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "onFamilyBack", void 0);
    FamilyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'family',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div class=\"row\" *ngIf=\"spouse\">         <h4>Spouse</h4>         <hr>             <div class=\"col-sm-4\">                 <label>First Name</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" name=\"firstname\" [(ngModel)]=\"spouse.firstname\" class=\"form-control\">             </div>             <div class=\"col-sm-4\">                 <label>Last Name</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" name=\"lastname\" [(ngModel)]=\"spouse.lastname\" class=\"form-control\">             </div>             <div class=\"col-sm-4\">                 <label>Gender</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.gender\" name=\"gender\">                     <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender.gender}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Education</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.education\" name=\"education\">                     <option *ngFor=\"let education of educations\" [ngValue]=\"education\">{{education.level}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Work Experience</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.experience\" name=\"experience\">                     <option *ngFor=\"let experience of workExperiences\" [ngValue]=\"experience\">{{experience.level}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Birth Day</label>             </div>             <div class=\"col-sm-2\">             <select class=\"form-control\" [(ngModel)]=\"spouse.birth.day\" name=\"birthday\">                 <option *ngFor=\"let day of days\" [ngValue]=\"day\">{{day.day}}</option>             </select></div>             <div class=\"col-sm-3\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.birth.month\" name=\"birthmonth\">                     <option *ngFor=\"let month of months\" [ngValue]=\"month\">{{month.month}}</option>                 </select>             </div>             <div class=\"col-sm-3\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.birth.year\" name=\"birthyear\">                     <option *ngFor=\"let year of years\" [ngValue]=\"year\">{{year.year}}</option>                 </select>             </div>             <div class=\"col-sm-4\">                 <label>Birth City</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" name=\"city\" [(ngModel)]=\"spouse.city\" class=\"form-control\">             </div>             <div class=\"col-sm-4\">                 <label>Birth Country</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"spouse.country\" name=\"country\">                     <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                 </select>             </div>         </div>         <div *ngFor=\"let child of children; let i = index\">             <div class=\"spacer-30\"></div>             <div class=\"row\">             <h4>Child {{i+1}}</h4>             <hr>                 <div class=\"col-sm-4\">                     <label>First Name</label>                 </div>                 <div class=\"col-sm-8\">                     <input type=\"text\" name=\"firstname\" [(ngModel)]=\"child.firstname\" class=\"form-control\">                 </div>                 <div class=\"col-sm-4\">                     <label>Last Name</label>                 </div>                 <div class=\"col-sm-8\">                     <input type=\"text\" name=\"lastname\" [(ngModel)]=\"child.lastname\" class=\"form-control\">                 </div>                 <div class=\"col-sm-4\">                     <label>Gender</label>                 </div>                 <div class=\"col-sm-8\">                     <select class=\"form-control\" [(ngModel)]=\"child.gender\" name=\"gender\">                         <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender.gender}}</option>                     </select>                 </div>                 <div class=\"col-sm-4\">                     <label>Birth Day</label>                 </div>                 <div class=\"col-sm-2\">                 <select class=\"form-control\" [(ngModel)]=\"child.birth.day\" name=\"birthday\">                     <option *ngFor=\"let day of days\" [ngValue]=\"day\">{{day.day}}</option>                 </select></div>                 <div class=\"col-sm-3\">                     <select class=\"form-control\" [(ngModel)]=\"child.birth.month\" name=\"birthmonth\">                         <option *ngFor=\"let month of months\" [ngValue]=\"month\">{{month.month}}</option>                     </select>                 </div>                 <div class=\"col-sm-3\">                     <select class=\"form-control\" [(ngModel)]=\"child.birth.year\" name=\"birthyear\">                         <option *ngFor=\"let year of years\" [ngValue]=\"year\">{{year.year}}</option>                     </select>                 </div>                 <div class=\"col-sm-4\">                     <label>Birth City</label>                 </div>                 <div class=\"col-sm-8\">                     <input type=\"text\" name=\"city\" [(ngModel)]=\"child.city\" class=\"form-control\">                 </div>                 <div class=\"col-sm-4\">                     <label>Birth Country</label>                 </div>                 <div class=\"col-sm-8\">                     <select class=\"form-control\" [(ngModel)]=\"child.country\" name=\"country\">                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                     </select>                 </div>             </div>         </div>     </div> </div> <div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <button class=\"btn btn-info pull-left\" (click)=\"back()\">Back</button>         <button class=\"btn btn-success pull-right\" (click)=\"next()\" [disabled]=\"!checkSpouse() || !checkChildren()\">Next</button>     </div> </div>",
            styles: ["input,select{margin-bottom:15px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], FamilyComponent);
    return FamilyComponent;
}());
exports.FamilyComponent = FamilyComponent;
