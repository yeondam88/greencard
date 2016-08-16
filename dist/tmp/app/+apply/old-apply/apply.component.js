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
var index_1 = require('../../api/index');
var index_2 = require('./../navigation/index');
var ApplyComponent = (function () {
    function ApplyComponent(api) {
        this.api = api;
        this.state = 1;
        this.educations = [
            { id: 0, level: "Select Option", pass: false },
            { id: 1, level: "Middle School or below", pass: false },
            { id: 2, level: "High School", pass: true },
            { id: 3, level: "College", pass: true },
            { id: 4, level: "Grad School", pass: true }
        ];
        this.workExperiences = [
            { id: 0, level: "Select Option", pass: false, finish: false },
            { id: 1, level: "Less than 2 Years", pass: false, finish: true },
            { id: 2, level: "2 Years or More", pass: true, finish: false }
        ];
        this.maritals = [
            { id: 0, response: "Select Option", answer: "Select Option", status: false },
            { id: 1, response: "No", answer: "Single", status: false, },
            { id: 2, response: "Yes", answer: "Married", status: true }
        ];
        this.titles = [
            { id: 0, title: "Select a title" },
            { id: 1, title: "Mr" },
            { id: 2, title: "Ms" },
            { id: 3, title: "Doctor" }
        ];
        this.genders = [
            { id: 0, gender: "Select a gender" },
            { id: 1, gender: "Male" },
            { id: 2, gender: "Female" }
        ];
        this.days = [];
        this.months = [
            { id: 0, month: "Month" },
            { id: 1, month: "JANUARY" },
            { id: 2, month: "FEBRUARY" },
            { id: 3, month: "MARCH" },
            { id: 4, month: "APRIL" },
            { id: 5, month: "MAY" },
            { id: 6, month: "JUNE" },
            { id: 7, month: "JULY" },
            { id: 8, month: "AUGUST" },
            { id: 9, month: "SEPTEMBER" },
            { id: 10, month: "OCTOBER" },
            { id: 11, month: "NOVEMBER" },
            { id: 12, month: "DECEMBER" }
        ];
        this.years = [];
        this.children = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ];
        this.ready = false;
    }
    ApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
            _this.countries.unshift({ 'country': 'Select a country', pass: 0 });
            _this.applicant = {
                title: _this.titles[0],
                firstname: "",
                lastname: "",
                education: _this.educations[0],
                experience: _this.workExperiences[0],
                country: _this.countries[0],
                marital: _this.maritals[0],
                gender: _this.genders[0],
                address: { line1: "", line2: "", postal: "", city: "", country: _this.countries[0] },
                birth: { day: _this.days[0], month: _this.months[0], year: _this.years[0] },
                children: 0,
                spouse: {
                    country: _this.countries[0]
                },
                mother: {
                    country: _this.countries[0]
                },
                father: {
                    country: _this.countries[0]
                }
            };
            _this.ready = true;
        });
        this.days.push({ id: 0, day: 'Day' });
        for (var x = 1; x <= 31; x++) {
            this.days.push({ id: x, day: x });
        }
        this.years.push({ id: 0, year: 'Year' });
        for (var x = 2016; x >= 1900; x--) {
            this.years.push({ id: x, year: x });
        }
    };
    ApplyComponent.prototype.eligible = function () {
        if (this.applicant.country.pass || this.applicant.spouse.country.pass || this.applicant.father.country.pass || this.applicant.mother.country.pass) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.finished = function () {
        if (this.applicant.experience.finish || this.applicant.country.pass || this.applicant.spouse.country.pass || this.applicant.mother.country.pass || this.applicant.father.country.pass) {
            return true;
        }
        if (this.applicant.father.country != this.countries[0]) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.educationChange = function () {
        this.applicant.experience = this.workExperiences[0];
        this.applicant.country = this.countries[0];
        this.applicant.marital = this.maritals[0];
        this.applicant.spouse.country = this.countries[0];
        this.applicant.mother.country = this.countries[0];
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.workChange = function () {
        this.applicant.country = this.countries[0];
        this.applicant.marital = this.maritals[0];
        this.applicant.spouse.country = this.countries[0];
        this.applicant.mother.country = this.countries[0];
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.appCountryChange = function () {
        this.applicant.marital = this.maritals[0];
        this.applicant.spouse.country = this.countries[0];
        this.applicant.mother.country = this.countries[0];
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.maritalChange = function () {
        this.applicant.spouse.country = this.countries[0];
        this.applicant.mother.country = this.countries[0];
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.spouseChange = function () {
        this.applicant.mother.country = this.countries[0];
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.motherChange = function () {
        this.applicant.father.country = this.countries[0];
    };
    ApplyComponent.prototype.goto = function (state) {
        this.state = state;
    };
    ApplyComponent.prototype.registrationCheck = function () {
        if (this.applicant.firstname.length > 1 &&
            this.applicant.lastname.length > 1 &&
            this.applicant.title.id && this.applicant.titles != this.titles[0] &&
            this.applicant.gender.id && this.applicant.gender != this.genders[0] &&
            this.applicant.education.id && this.applicant.education != this.educations[0] &&
            this.applicant.experience.id && this.applicant.experience != this.workExperiences[0] &&
            this.applicant.country.id && this.applicant.country != this.countries[0] &&
            this.applicant.marital.id && this.applicant.marital && this.countries[0] &&
            this.applicant.email &&
            this.applicant.confirmEmail &&
            this.applicant.email === this.applicant.confirmEmail &&
            this.applicant.address.line1.length > 1 &&
            this.applicant.address.postal.length > 1 &&
            this.applicant.address.city.length > 1 &&
            this.applicant.address.country.id && this.applicant.address.country != this.countries[0] &&
            this.applicant.birth.day.id && this.applicant.birth.month.id && this.applicant.birth.year.id) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.send = function (application) {
        application.birthday = moment().year(application.birth.year.id).month(application.birth.month.id - 1).date(application.birth.day.id).format('YYYY-MM-DD');
        this.api.postApplication(application)
            .subscribe(function (result) { return console.log(result); });
    };
    ApplyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<div class=\"hero-area\">     <div class=\"page-header text-align-center\" style=\"background-image:url(images/desk-paper.jpg)\">         <div class=\"container\">             <h1>Apply</h1>         </div>     </div>     <navigation *ngIf=\"state == 2\"></navigation> </div>  <!-- Main Content --> <div id=\"main-container\" *ngIf=\"ready\">     <div class=\"content\">         <div class=\"container\">             <div class=\"row\" *ngIf=\"state == 1\">                 <div class=\"col-md-12 eli-b\">                     <h2>Registration Eligibility</h2>                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis labore quia error, tempora harum molestiae obcaecati accusantium possimus cupiditate, pariatur. Iure aut numquam labore blanditiis, ratione adipisci!                         Unde, ad vel.</p>                     <h2 class=\"fs-title\">Check your eligibility</h2>                 </div>                 <div class=\"col-lg-8 col-lg-offset-2 col-md-12 shadow-block-nomove\">                     <div class=\"eligibility-block\">                         <div class=\"eligibility\">                             <form>                                 <div class=\"form-group\">                                     <label>EDUCATION</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.education\" (ngModelChange)=\"educationChange()\" name=\"applicant-education\">                                         <option *ngFor=\"let education of educations\" [ngValue]=\"education\">{{education.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!applicant.education.pass && applicant.education != educations[0]\">                                     <label>WORK EXPERIENCE</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.experience\" (ngModelChange)=\"workChange()\" name=\"applicant-experience\">                                         <option *ngFor=\"let experience of workExperiences\" [ngValue]=\"experience\">{{experience.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"applicant.education.pass || applicant.experience.pass\">                                     <label>YOUR COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.country\" (ngModelChange)=\"appCountryChange()\" name=\"applicant-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!applicant.country.pass && applicant.country != countries[0]\">                                     <label>ARE YOU MARRIED</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.marital\" (ngModelChange)=\"maritalChange()\" name=\"applicant-marital\">                                         <option *ngFor=\"let marital of maritals\" [ngValue]=\"marital\">{{marital.response}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"applicant.marital.status\">                                     <label>YOUR SPOUSE COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.spouse.country\" (ngModelChange)=\"spouseChange()\" name=\"spouse-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\"                                      *ngIf=\"                                         (!applicant.marital.status && applicant.marital != maritals[0]) ||                                         (applicant.marital.status && !applicant.spouse.country.pass && applicant.spouse.country != countries[0])                                                                              \">                                     <label>YOUR MOTHER COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.mother.country\" (ngModelChange)=\"motherChange()\" name=\"mother-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!applicant.mother.country.pass && applicant.mother.country != countries[0]\">                                     <label>YOUR FATHER COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.father.country\" name=\"father-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div *ngIf=\"finished()\">                                     <div *ngIf=\"eligible()\" class=\"text-success\">You are Eligible</div>                                     <div *ngIf=\"!eligible()\" class=\"text-danger\">You are NOT Eligible</div>                                     <div class=\"btn btn-success btn-lg btn-block\" *ngIf=\"eligible()\" (click)=\"goto(2)\">Register</div>                                 </div>                             </form>                         </div>                     </div>                 </div>             </div>              <div class=\"row\" *ngIf=\"state == 2\">                 <div class=\"col-lg-10 col-lg-offset-1 col-md-12 shadow-block-nomove\">                     <div class=\"eligibility-block\">                         <div class=\"registration\">                             <form>                                 <div class=\"form-group\">                                     <label>TITLE</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.title\" name=\"applicant-title\">                                         <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.title}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>FIRST NAME</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.firstname\" name=\"applicant-fisrtname\" required>                                 </div>                                  <div class=\"form-group\">                                     <label>LAST NAME</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.lastname\" name=\"applicant-lastname\" required>                                 </div>                                  <div class=\"form-group\">                                     <label>GENDER</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.gender\" name=\"applicant-gender\">                                         <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender.gender}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>EDUCATION</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.education\" name=\"applicant-education2\">                                         <option *ngFor=\"let education of educations\" [ngValue]=\"education\">{{education.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>WORK EXPERIENCE</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.experience\" name=\"applicant-experience2\">                                         <option *ngFor=\"let experience of workExperiences\" [ngValue]=\"experience\">{{experience.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>YOUR COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.country\" name=\"applicant-country2\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>MARITAL STATUS</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.marital\" name=\"applicant-marital2\">                                         <option *ngFor=\"let marital of maritals\" [ngValue]=\"marital\">{{marital.answer}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\">                                     <label>EMAIL</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.email\" name=\"applicant-email\" required>                                 </div>                                  <div class=\"form-group\">                                     <label>CONFIRM EMAIL</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.confirmEmail\" name=\"applicant-confirmEmail\" required>                                 </div>                                  <div class=\"form-group\">                                     <label>PHONE</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.phone\" name=\"applicant-phone\" required>                                 </div>                                   <!-- ADDRESS -->                                 <div class=\"form-group\">                                     <label>ADDRESS</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.address.line1\" name=\"applicant-addressLine1\" required>                                 </div>                                  <div class=\"form-group\">                                     <label>ADDRESS 2</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.address.line2\" name=\"applicant-addressLine2\">                                 </div>                                  <div class=\"form-group\">                                     <label>POSTAL CODE</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.address.postal\" name=\"applicant-addressPostal\">                                 </div>                                  <div class=\"form-group\">                                     <label>CITY</label>                                     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"applicant.address.city\" name=\"applicant-addressCity\">                                 </div>                                  <div class=\"form-group\">                                     <label>COUNTRY</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.address.country\" name=\"father-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                   <!-- BIOGRAPHIC DATA -->                                  <div class=\"form-group\">                                     <label>BIRTHDATE</label>                                     <div class=\"row\">                                         <div class=\"col-xs-2\">                                             <select class=\"form-control\" [(ngModel)]=\"applicant.birth.day\" name=\"applicant-birthday\">                                                 <option *ngFor=\"let day of days\" [ngValue]=\"day\">{{day.day}}</option>                                             </select></div>                                         <div class=\"col-xs-6\">                                             <select class=\"form-control\" [(ngModel)]=\"applicant.birth.month\" name=\"applicant-birthmonth\">                                                 <option *ngFor=\"let month of months\" [ngValue]=\"month\">{{month.month}}</option>                                             </select>                                         </div>                                         <div class=\"col-xs-4\">                                             <select class=\"form-control\" [(ngModel)]=\"applicant.birth.year\" name=\"applicant-birthyear\">                                                 <option *ngFor=\"let year of years\" [ngValue]=\"year\">{{year.year}}</option>                                             </select>                                         </div>                                     </div>                                 </div>                                  <div class=\"form-group\">                                     <label>CHILDREN</label>                                     <select class=\"form-control\" [(ngModel)]=\"applicant.children\" name=\"applicant-children\">                                         <option *ngFor=\"let child of children\" [ngValue]=\"child\">{{child}}</option>                                     </select>                                 </div>                                  <button class=\"btn btn-success\" (click)=\"send(applicant)\" [disabled]=\"!registrationCheck()\">FINISH</button>                             </form>                         </div>                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [index_2.NavigationComponent]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], ApplyComponent);
    return ApplyComponent;
}());
exports.ApplyComponent = ApplyComponent;
