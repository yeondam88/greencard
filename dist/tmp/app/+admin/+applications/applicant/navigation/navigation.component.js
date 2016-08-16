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
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.stepChange = new core_1.EventEmitter();
    }
    NavigationComponent.prototype.changeStep = function (step) {
        this.step = step;
        this.stepChange.emit(step);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NavigationComponent.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "stepChange", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navigation',
            template: "<!-- Start Hero Area --> <div class=\"hero-area\">     <div class=\"page-header have-submenu\">         <div class=\"container\">             <div class=\"col-sm-6\">             <h2>Applicant Information</h2>             </div>             <div class=\"col-sm-6 text-align-right\">             <h2>Status</h2>             </div>             <div class=\"col-sm-6\">             <h4>ID: {{application.id}}<br />Date: {{application.timestamp}}</h4>             </div>             <div class=\"col-sm-6 text-align-right\">             <h4>{{application.status | status}}                  <select [(ngModel)]=\"application.status\">                     <option value=0>Unpaid</option>                     <option value=1>In Progress</option>                     <option value=2>Submitted</option>                     <option value=3>Denied</option>                     <option value=4>Accepted</option>                 </select><br /><i class=\"fa fa-pencil\"></i> note</h4>             </div>         </div>     </div> </div> <div class=\"utility-bar\">     <div class=\"container\">         <ul class=\"template-submenu\">             <li [ngClass]=\"{'active': step == 1}\"><a (click)=\"changeStep(1)\">Main Applicant</a></li>             <li [ngClass]=\"{'active': step == 2}\"><a (click)=\"changeStep(2)\">Family</a></li>             <li [ngClass]=\"{'active': step == 3}\"><a (click)=\"changeStep(3)\">Address</a></li>             <li [ngClass]=\"{'active': step == 4}\"><a (click)=\"changeStep(4)\">Photo</a></li>         </ul>     </div> </div>",
            styles: [""],
            pipes: [index_1.StatusPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
