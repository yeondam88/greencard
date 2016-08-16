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
var index_2 = require('./current-application-service/index');
var router_1 = require('@angular/router');
var index_3 = require('../../pipes/index');
var ApplicationsComponent = (function () {
    function ApplicationsComponent(api, current, router) {
        this.api = api;
        this.current = current;
        this.router = router;
        this.orderField = 'id';
        this.reverseField = false;
        this.search = {};
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current.application = null;
        this.api.getCountries().subscribe(function (countries) { return _this.countries = countries; });
        this.api.getApplications().subscribe(function (applications) { return _this.applications = applications; });
    };
    ApplicationsComponent.prototype.goto = function (application) {
        this.router.navigate(['/admin/applications', application.id]);
        this.current.application = application;
    };
    ApplicationsComponent.prototype.sort = function (field) {
        this.orderField = field;
        this.reverseField = !this.reverseField;
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header have-submenu\">         <div class=\"container\">             <h1 class=\"text-center\">Applications</h1>         </div>     </div> </div>  <div class=\"content\">     <div class=\"container\">         <table class=\"table table-bordered table-hover\" *ngIf=\"applications\">             <thead>                 <tr>                     <th (click)=\"sort('firstname')\">First Name<span *ngIf=\"orderField == 'firstname'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('lastname')\">Last Name<span *ngIf=\"orderField == 'lastname'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('id')\">ID<span *ngIf=\"orderField == 'id'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('email')\">Email<span *ngIf=\"orderField == 'email'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('birth_country')\">Country<span *ngIf=\"orderField == 'birth_country'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('timestamp')\">Date<span *ngIf=\"orderField == 'timestamp'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                     <th (click)=\"sort('status')\">Status<span *ngIf=\"orderField == 'status'\"><span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!reverseField\"></span><span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"reverseField\"></span></span></th>                 </tr>                 <tr>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.firstname\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.lastname\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.id\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.email\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.birth_country\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.timestamp\"></th>                     <th><input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.status\"></th>                 </tr>             </thead>             <tbody>                 <tr *ngFor=\"let application of applications | order : orderField : reverseField\" (click)=\"goto(application)\">                     <td>{{application.firstname}}</td>                     <td>{{application.lastname}}</td>                     <td>{{application.id}}</td>                     <td>{{application.email}}</td>                     <td>{{application.birth_country | idToString: countries: 'country'}}</td>                     <td>{{application.timestamp}}</td>                     <td>{{application.status}}</td>                 </tr>             </tbody>         </table>     </div> </div>",
            styles: ["thead{background-color:#022b52;color:#fff}tr{cursor:pointer}"],
            pipes: [index_3.IdToStringPipe, index_3.OrderPipe, index_3.SearchPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.ApplicationService, router_1.Router])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;
