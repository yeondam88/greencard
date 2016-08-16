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
var index_1 = require('../../directives/index');
var ModalComponent = (function () {
    function ModalComponent() {
        this.close = new core_1.EventEmitter();
    }
    ModalComponent.prototype.onOut = function () {
        this.close.emit(true);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "close", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal',
            templateUrl: 'modal.component.html',
            styleUrls: ['modal.component.css'],
            directives: [index_1.StopPropagationDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsc0JBQXlDLHdCQUF3QixDQUFDLENBQUE7QUFTbEU7SUFBQTtRQUNXLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUsvQyxDQUFDO0lBSEEsOEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFKRDtRQUFDLGFBQU0sRUFBRTs7aURBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN2QyxDQUFDOztzQkFBQTtJQU9GLHFCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxzQkFBYyxpQkFNMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtb2RhbC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcblx0QE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdG9uT3V0KCl7XG5cdFx0dGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuXHR9XG59Il19
