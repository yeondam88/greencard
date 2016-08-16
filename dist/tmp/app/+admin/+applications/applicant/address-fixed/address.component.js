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
var AddressComponent = (function () {
    function AddressComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddressComponent.prototype, "countries", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'address',
            template: "<div class=\"row\">     <div class=\"col-md-10 col-md-offset-1\">         <div class=\"row\">         <h4>Address</h4>         <hr>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Address Line 1</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.address}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Address Line 2</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.address2}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>City</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.address_city}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>State</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.address_state}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Postal Code</label>                 </div>                 <div class=\"col-sm-8\">                 {{application.postal}}                 </div>             </div>             <div class=\"row\">                 <div class=\"col-sm-4\">                     <label>Country</label>                 </div>                 <div class=\"col-sm-8\">                     {{application.address_country | idToString: countries: 'country'}}                 </div>             </div>         </div>     </div> </div>",
            styles: [""],
            pipes: [index_1.IdToStringPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
