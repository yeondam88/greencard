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
var index_1 = require('../api/index');
var index_2 = require('./navigation/index');
var index_3 = require('./main/index');
var index_4 = require('./address/index');
var index_5 = require('./family/index');
var index_6 = require('./confirmation/index');
var index_7 = require('./affirmation/index');
var index_8 = require('./photo/index');
var ApplyComponent = (function () {
    function ApplyComponent(api) {
        this.api = api;
        this.state = 1;
        this.step = 1;
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
            _this.application = {
                title: _this.titles[0],
                firstname: "",
                lastname: "",
                education: _this.educations[0],
                experience: _this.workExperiences[0],
                country: _this.countries[0],
                city: "",
                marital: _this.maritals[0],
                gender: _this.genders[0],
                address: { line1: "", line2: "", postal: "", city: "", country: _this.countries[0] },
                phone: { country: "", area: "", phone: "" },
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
        if (this.application.country.pass || this.application.spouse.country.pass || this.application.father.country.pass || this.application.mother.country.pass) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.finished = function () {
        if (this.application.experience.finish || this.application.country.pass || this.application.spouse.country.pass || this.application.mother.country.pass || this.application.father.country.pass) {
            return true;
        }
        if (this.application.father.country != this.countries[0]) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.educationChange = function () {
        this.application.experience = this.workExperiences[0];
        this.application.country = this.countries[0];
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.workChange = function () {
        this.application.country = this.countries[0];
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.appCountryChange = function () {
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.maritalChange = function () {
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.spouseChange = function () {
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.motherChange = function () {
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.goto = function (state) {
        this.state = state;
    };
    ApplyComponent.prototype.onMainComplete = function (application) {
        this.application = application;
        if (this.application.marital.id == 2 || this.application.children) {
            this.step = 2;
        }
        else {
            this.application.family = null;
            this.step = 3;
        }
    };
    ApplyComponent.prototype.onAddressBack = function (application) {
        this.application = application;
        if (this.application.marital.id == 2 || this.application.children) {
            this.step = 2;
        }
        else {
            this.step = 1;
        }
    };
    ApplyComponent.prototype.onAddressComplete = function (application) {
        this.application = application;
        this.step = 4;
    };
    ApplyComponent.prototype.onFamilyBack = function (application) {
        this.application = application;
        this.step = 1;
    };
    ApplyComponent.prototype.onFamilyComplete = function (application) {
        this.application = application;
        this.step = 3;
    };
    ApplyComponent.prototype.registrationCheck = function () {
        if (this.application.firstname.length > 1 &&
            this.application.lastname.length > 1 &&
            this.application.title.id && this.application.titles != this.titles[0] &&
            this.application.gender.id && this.application.gender != this.genders[0] &&
            this.application.education.id && this.application.education != this.educations[0] &&
            this.application.experience.id && this.application.experience != this.workExperiences[0] &&
            this.application.country.id && this.application.country != this.countries[0] &&
            this.application.marital.id && this.application.marital && this.countries[0] &&
            this.application.email &&
            this.application.confirmEmail &&
            this.application.email === this.application.confirmEmail &&
            this.application.address.line1.length > 1 &&
            this.application.address.postal.length > 1 &&
            this.application.address.city.length > 1 &&
            this.application.address.country.id && this.application.address.country != this.countries[0] &&
            this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.stepChange = function (step) {
        this.step = step;
    };
    ApplyComponent.prototype.send = function (application) {
        var _this = this;
        application.birthday = moment().year(application.birth.year.id).month(application.birth.month.id - 1).date(application.birth.day.id).format('YYYY-MM-DD');
        this.api.postApplication(application)
            .subscribe(function (result) {
            swal("Application Uploaded", "Your application has been uploaded", "success");
            _this.step = 5;
        }, function (err) {
            swal("Error", err._body, "error");
        });
    };
    ApplyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<div class=\"hero-area\">     <div class=\"page-header text-align-center\" style=\"background-image:url(images/desk-paper.jpg)\">         <div class=\"container\">             <h1>Apply</h1>         </div>     </div> </div>  <!-- Main Content --> <div id=\"main-container\" *ngIf=\"ready\">     <div class=\"content\">         <div class=\"container\">             <div class=\"row\" *ngIf=\"state == 1\">                 <div class=\"col-md-12 eli-b\">                     <h2>Registration Eligibility</h2>                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis labore quia error, tempora harum molestiae obcaecati accusantium possimus cupiditate, pariatur. Iure aut numquam labore blanditiis, ratione adipisci!                         Unde, ad vel.</p>                     <h2 class=\"fs-title\">Check your eligibility</h2>                 </div>                 <div class=\"col-lg-8 col-lg-offset-2 col-md-12 shadow-block-nomove\">                     <div class=\"eligibility-block\">                         <div class=\"eligibility\">                             <form>                                 <div class=\"form-group\">                                     <label>EDUCATION</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.education\" (ngModelChange)=\"educationChange()\" name=\"application-education\">                                         <option *ngFor=\"let education of educations\" [ngValue]=\"education\">{{education.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!application.education.pass && application.education != educations[0]\">                                     <label>WORK EXPERIENCE</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.experience\" (ngModelChange)=\"workChange()\" name=\"application-experience\">                                         <option *ngFor=\"let experience of workExperiences\" [ngValue]=\"experience\">{{experience.level}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"application.education.pass || application.experience.pass\">                                     <label>YOUR COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.country\" (ngModelChange)=\"appCountryChange()\" name=\"application-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!application.country.pass && application.country != countries[0]\">                                     <label>ARE YOU MARRIED</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.marital\" (ngModelChange)=\"maritalChange()\" name=\"application-marital\">                                         <option *ngFor=\"let marital of maritals\" [ngValue]=\"marital\">{{marital.response}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"application.marital.status\">                                     <label>YOUR SPOUSE COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.spouse.country\" (ngModelChange)=\"spouseChange()\" name=\"spouse-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\"                                      *ngIf=\"                                         (!application.marital.status && application.marital != maritals[0]) ||                                         (application.marital.status && !application.spouse.country.pass && application.spouse.country != countries[0])                                                                              \">                                     <label>YOUR MOTHER COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.mother.country\" (ngModelChange)=\"motherChange()\" name=\"mother-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div class=\"form-group\" *ngIf=\"!application.mother.country.pass && application.mother.country != countries[0]\">                                     <label>YOUR FATHER COUNTRY OF BIRTH</label>                                     <select class=\"form-control\" [(ngModel)]=\"application.father.country\" name=\"father-country\">                                         <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                                     </select>                                 </div>                                  <div *ngIf=\"finished()\">                                     <div *ngIf=\"eligible()\" class=\"text-success\">You are Eligible</div>                                     <div *ngIf=\"!eligible()\" class=\"text-danger\">You are NOT Eligible</div>                                     <div class=\"btn btn-success btn-lg btn-block\" *ngIf=\"eligible()\" (click)=\"goto(2)\">Register</div>                                 </div>                             </form>                         </div>                     </div>                 </div>             </div>              <div class=\"row\" *ngIf=\"state == 2\">                 <div class=\"col-lg-10 col-lg-offset-1 col-md-12 shadow-block-nomove\">                     <navigation [step]=\"step\" (stepChange)=\"stepChange($event)\"></navigation>                     <div class=\"eligibility-block\">                         <div class=\"registration\">                             <form>                                 <!-- MAIN -->                                 <main *ngIf=\"step == 1\"                                     [application]=\"application\"                                     [educations]=\"educations\"                                     [countries]=\"countries\"                                     [workExperiences]=\"workExperiences\"                                     [maritals]=\"maritals\"                                     [titles]=\"titles\"                                     [genders]=\"genders\"                                     [days]=\"days\"                                     [months]=\"months\"                                     [years]=\"years\"                                     [children]=\"children\"                                     (onMainComplete)=\"onMainComplete($event)\"                                 >                                 </main>                                  <!-- Family -->                                 <family *ngIf=\"step == 2\"                                     [application]=\"application\"                                     [educations]=\"educations\"                                     [countries]=\"countries\"                                     [workExperiences]=\"workExperiences\"                                     [genders]=\"genders\"                                     [days]=\"days\"                                     [months]=\"months\"                                     [years]=\"years\"                                     (onFamilyComplete)=\"onFamilyComplete($event)\"                                     (onFamilyBack)=\"onFamilyBack($event)\"                                 >                                 </family>                                  <!-- ADDRESS -->                                 <address *ngIf=\"step == 3\"                                     [application]=\"application\"                                     [countries]=\"countries\"                                     (onAddressComplete)=\"onAddressComplete($event)\"                                     (onAddressBack)=\"onAddressBack($event)\"                                 >                                 </address>                                  <div *ngIf=\"step == 4\">                                     <confirmation [application]=\"application\"></confirmation>                                     <div class=\"row\">                                         <div class=\"col-lg-10 col-lg-offset-1 col-md-12\">                                             <div class=\"row\">                                                 <button class=\"btn btn-info\" (click)=\"step = 3\">Back</button>                                                 <button class=\"btn btn-success pull-right\" (click)=\"send(application)\">Confirm</button>                                             </div>                                         </div>                                     </div>                                 </div>                                  <div *ngIf=\"step == 5\">                                     <affirmation></affirmation>                                     <button class=\"btn btn-warning\" (click)=\"step = 9\">Upload Photos</button>                                 </div>                                                                  <div *ngIf=\"step == 9\">                                     <photo></photo>                                 </div>                             </form>                         </div>                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            directives: [index_2.NavigationComponent, index_3.MainComponent, index_4.AddressComponent, index_5.FamilyComponent, index_6.ConfirmationComponent, index_8.PhotoComponent, index_7.AffirmationComponent]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], ApplyComponent);
    return ApplyComponent;
}());
exports.ApplyComponent = ApplyComponent;
