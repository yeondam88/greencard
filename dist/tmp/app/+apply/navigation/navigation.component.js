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
            template: "<!-- Start Hero Area --> <div class=\"utility-bar\">     <ul class=\"template-submenu\">         <li [ngClass]=\"{'active': step == '1'}\"><a>Main Applicant</a></li>         <li [ngClass]=\"{'active': step == '2'}\"><a>Family</a></li>         <li [ngClass]=\"{'active': step == '3'}\"><a>Address</a></li>         <li [ngClass]=\"{'active': step == '9'}\" (click)=\"changeStep(9)\"><a>Photo</a></li>     </ul> </div>",
            styles: [".utility-bar{margin-bottom:40px;top:0}"]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
