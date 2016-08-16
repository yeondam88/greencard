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
            template: "<div id=\"modal\" (click)=\"onOut()\"> \t<div class=\"container\"> \t\t<div class=\"row\"> \t\t\t<div class=\"col-sm-6 col-sm-offset-3\"> \t\t\t\t<div class=\"modal-content\" stopPropagation> \t\t\t\t\t<ng-content></ng-content> \t\t\t\t</div> \t\t\t</div> \t\t</div> \t</div> </div>",
            styles: ["#modal{position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:10000;left:0;top:0;bottom:0;overflow:auto}.modal-content{background:#fff;min-width:300px;display:block;margin:50px auto}"],
            directives: [index_1.StopPropagationDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
