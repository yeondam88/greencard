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
var index_1 = require('../current-application-service/index');
var index_2 = require('./navigation/index');
var index_3 = require('../../../api/index');
var index_4 = require('./main-fixed/index');
var index_5 = require('./family-fixed/index');
var index_6 = require('./address-fixed/index');
var ApplicantComponent = (function () {
    function ApplicantComponent(current, api, route) {
        this.current = current;
        this.api = api;
        this.route = route;
        this.step = 1;
    }
    ApplicantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.api.getCountries().subscribe(function (countries) {
            _this.countries = countries;
        });
        if (!this.current.application) {
            this.api.getApplication(this.id).subscribe(function (result) { return _this.current.application = result; });
        }
    };
    ApplicantComponent.prototype.stepChange = function (step) {
        this.step = step;
    };
    ApplicantComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<div *ngIf=\"current.application && countries\">     <navigation [application]=\"current.application\" [step]=\"step\" (stepChange)=\"stepChange($event)\"></navigation>     <!-- Main Content -->     <div id=\"main-container\">         <div class=\"content\">             <div class=\"container\">                 <main [application]=\"current.application\" [countries]=\"countries\" *ngIf=\"step == 1\"></main>                 <family [application]=\"current.application\" [countries]=\"countries\" *ngIf=\"step == 2\"></family>                 <address [application]=\"current.application\" [countries]=\"countries\" *ngIf=\"step == 3\"></address>             </div>         </div>     </div> </div>",
            styles: [":host .input-lg{margin-bottom:15px}"],
            directives: [index_2.NavigationComponent, index_4.MainComponent, index_5.FamilyComponent, index_6.AddressComponent]
        }), 
        __metadata('design:paramtypes', [index_1.ApplicationService, index_3.ApiService, router_1.ActivatedRoute])
    ], ApplicantComponent);
    return ApplicantComponent;
}());
exports.ApplicantComponent = ApplicantComponent;
