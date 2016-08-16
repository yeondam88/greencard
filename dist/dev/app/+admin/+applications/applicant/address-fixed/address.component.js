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
            templateUrl: 'address.component.html',
            styleUrls: ['address.component.css'],
            pipes: [index_1.IdToStringPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvYWRkcmVzcy1maXhlZC9hZGRyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHNCQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBU3pEO0lBQUE7SUFHQSxDQUFDO0lBRkc7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBVFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsS0FBSyxFQUFFLENBQUMsc0JBQWMsQ0FBQztTQUN4QixDQUFDOzt3QkFBQTtJQUlGLHVCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3QkFBZ0IsbUJBRzVCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rYXBwbGljYXRpb25zL2FwcGxpY2FudC9hZGRyZXNzLWZpeGVkL2FkZHJlc3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWRUb1N0cmluZ1BpcGUgfSBmcm9tICcuLi8uLi8uLi8uLi9waXBlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJ2FkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWRkcmVzcy5jb21wb25lbnQuY3NzJ10sXG4gIHBpcGVzOiBbSWRUb1N0cmluZ1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGFwcGxpY2F0aW9uOiBhbnk7XG4gICAgQElucHV0KCkgY291bnRyaWVzOiBhbnlbXTtcbn1cbiJdfQ==
