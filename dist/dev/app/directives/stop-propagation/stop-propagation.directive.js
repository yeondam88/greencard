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
var StopPropagationDirective = (function () {
    function StopPropagationDirective() {
    }
    StopPropagationDirective.prototype.stop = function (e) {
        e.stopPropagation();
    };
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], StopPropagationDirective.prototype, "stop", null);
    StopPropagationDirective = __decorate([
        core_1.Directive({
            selector: '[stopPropagation]',
        }), 
        __metadata('design:paramtypes', [])
    ], StopPropagationDirective);
    return StopPropagationDirective;
}());
exports.StopPropagationDirective = StopPropagationDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL3N0b3AtcHJvcGFnYXRpb24vc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRCxlQUFlLENBQUMsQ0FBQTtBQU1qRTtJQUFBO0lBS0EsQ0FBQztJQUhBLHVDQUFJLEdBQUosVUFBSyxDQUFRO1FBQ1osQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFIRTtRQUFDLG1CQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7d0RBQUE7SUFMdEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG1CQUFtQjtTQUM3QixDQUFDOztnQ0FBQTtJQU9GLCtCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxnQ0FBd0IsMkJBS3BDLENBQUEiLCJmaWxlIjoiYXBwL2RpcmVjdGl2ZXMvc3RvcC1wcm9wYWdhdGlvbi9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzdG9wUHJvcGFnYXRpb25dJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUge1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcblx0c3RvcChlOiBFdmVudCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cbn1cbiJdfQ==
