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
var AddressComponent = (function () {
    function AddressComponent() {
        this.onAddressComplete = new core_1.EventEmitter();
        this.onAddressBack = new core_1.EventEmitter();
    }
    AddressComponent.prototype.check = function () {
        if (this.application.address.line1.length > 1 &&
            this.application.address.postal.length > 1 &&
            this.application.address.city.length > 1 &&
            this.application.address.country.id && this.application.address.country != this.countries[0]) {
            return true;
        }
        return false;
    };
    AddressComponent.prototype.back = function () {
        this.onAddressBack.emit(this.application);
    };
    AddressComponent.prototype.next = function () {
        this.onAddressComplete.emit(this.application);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddressComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "onAddressComplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "onAddressBack", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'address',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div class=\"row\">         <h4>Address</h4>         <hr>             <div class=\"col-sm-4\">                 <label>Address Line 1</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.address.line1\" name=\"address-line1\" required>             </div>             <div class=\"col-sm-4\">                 <label>Address Line 2</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.address.line2\" name=\"address-line2\">             </div>             <div class=\"col-sm-4\">                 <label>City</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.address.city\" name=\"address-city\">             </div>             <div class=\"col-sm-4\">                 <label>State</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.address.state\" name=\"address-state\">             </div>             <div class=\"col-sm-4\">                 <label>Postal Code</label>             </div>             <div class=\"col-sm-8\">                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"application.address.postal\" name=\"application-addressPostal\">             </div>             <div class=\"col-sm-4\">                 <label>Country</label>             </div>             <div class=\"col-sm-8\">                 <select class=\"form-control\" [(ngModel)]=\"application.address.country\" name=\"father-country\">                     <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.country}}</option>                 </select>             </div>         </div>     </div> </div> <div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <button class=\"btn btn-info pull-left\" (click)=\"back()\">Back</button>         <button class=\"btn btn-info pull-right\" (click)=\"next()\" [disabled]=\"!check()\">Next</button>     </div> </div>",
            styles: ["input,select{margin-bottom:15px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
