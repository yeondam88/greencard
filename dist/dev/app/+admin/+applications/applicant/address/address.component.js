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
            templateUrl: 'address.component.html',
            styleUrls: ['address.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBYS9FO0lBQUE7UUFHYyxzQkFBaUIsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUM1QyxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO0lBcUJ0RCxDQUFDO0lBbkJHLGdDQUFLLEdBQUw7UUFDSSxFQUFFLENBQUEsQ0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdGLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXZCRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7K0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFWYjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDOzt3QkFBQTtJQTBCRix1QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksd0JBQWdCLG1CQXlCNUIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluLythcHBsaWNhdGlvbnMvYXBwbGljYW50L2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJ2FkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWRkcmVzcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgYXBwbGljYXRpb246IGFueTtcbiAgICBASW5wdXQoKSBjb3VudHJpZXM6IGFueVtdO1xuICAgIEBPdXRwdXQoKSBvbkFkZHJlc3NDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkFkZHJlc3NCYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjaGVjaygpe1xuICAgICAgICBpZihcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uYWRkcmVzcy5saW5lMS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmFkZHJlc3MucG9zdGFsLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uYWRkcmVzcy5jaXR5Lmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uYWRkcmVzcy5jb3VudHJ5LmlkICYmIHRoaXMuYXBwbGljYXRpb24uYWRkcmVzcy5jb3VudHJ5ICE9IHRoaXMuY291bnRyaWVzWzBdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJhY2soKXtcbiAgICAgICAgdGhpcy5vbkFkZHJlc3NCYWNrLmVtaXQodGhpcy5hcHBsaWNhdGlvbik7XG4gICAgfVxuXG4gICAgbmV4dCgpe1xuICAgICAgICB0aGlzLm9uQWRkcmVzc0NvbXBsZXRlLmVtaXQodGhpcy5hcHBsaWNhdGlvbik7XG4gICAgfVxufVxuIl19
