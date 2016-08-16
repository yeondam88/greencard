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
var index_2 = require('../../guard/index');
var LoginComponent = (function () {
    function LoginComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.credential = { email: "", id: "" };
        this.loggedin = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (credential) {
        var _this = this;
        this.api.login(credential).subscribe(function (user) {
            _this.error = null;
            _this.auth.login(user);
            _this.loggedin.emit(true);
        }, function (err) {
            _this.error = "Email or ID is incorrect";
            setTimeout(function () {
                _this.error = null;
            }, 2000);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loggedin", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, index_2.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFDaEUsc0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msc0JBQTRCLG1CQUFtQixDQUFDLENBQUE7QUFRaEQ7SUFLRSx3QkFBb0IsR0FBZSxFQUFVLElBQWlCO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBSnRELGVBQVUsR0FBUSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBRXJDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUVpQixDQUFDO0lBRWxFLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLFVBQWU7UUFBckIsaUJBY0M7UUFiQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSTtZQUNGLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLDBCQUEwQixDQUFDO1lBQ3hDLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFyQkY7UUFBQyxhQUFNLEVBQUU7O29EQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzs7c0JBQUE7SUEwQkYscUJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHNCQUFjLGlCQXlCMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ndWFyZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBwcml2YXRlIGNyZWRlbnRpYWw6IGFueSA9IHtlbWFpbDogXCJcIiwgaWQ6IFwiXCJ9O1xuICBwcml2YXRlIGVycm9yOiBzdHJpbmc7XG5cdEBPdXRwdXQoKSBsb2dnZWRpbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvZ2luKGNyZWRlbnRpYWw6IGFueSl7XG4gICAgdGhpcy5hcGkubG9naW4oY3JlZGVudGlhbCkuc3Vic2NyaWJlKFxuICAgICAgdXNlciA9PntcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih1c2VyKTtcblx0XHQgICAgdGhpcy5sb2dnZWRpbi5lbWl0KHRydWUpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBcIkVtYWlsIG9yIElEIGlzIGluY29ycmVjdFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgKVxuICB9XG59XG4iXX0=
