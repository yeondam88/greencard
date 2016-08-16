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
var index_1 = require('../../../guard/index');
var index_2 = require('../../modal/index');
var index_3 = require('../../login/index');
var UserComponent = (function () {
    function UserComponent(auth) {
        this.auth = auth;
        this.showModal = false;
    }
    UserComponent.prototype.loginModal = function () {
        this.showModal = true;
    };
    UserComponent.prototype.close = function () {
        this.showModal = false;
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            directives: [index_2.ModalComponent, index_3.LoginComponent]
        }), 
        __metadata('design:paramtypes', [index_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9vbGJhci91c2VyL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsc0JBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsc0JBQStCLG1CQUFtQixDQUFDLENBQUE7QUFRbkQ7SUFFSSx1QkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUQ3QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBQ0ksQ0FBQztJQUV4QyxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBaEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxDQUFDLHNCQUFjLEVBQUUsc0JBQWMsQ0FBQztTQUM3QyxDQUFDOztxQkFBQTtJQVlGLG9CQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxxQkFBYSxnQkFXekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3Rvb2xiYXIvdXNlci91c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2d1YXJkL2luZGV4JztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbScuLi8uLi9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xvZ2luL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndXNlcicsXG4gIHRlbXBsYXRlVXJsOiAndXNlci5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtNb2RhbENvbXBvbmVudCwgTG9naW5Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xuICAgIHByaXZhdGUgc2hvd01vZGFsOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSl7fVxuXG4gICAgbG9naW5Nb2RhbCgpe1xuICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgIH1cbn0iXX0=
