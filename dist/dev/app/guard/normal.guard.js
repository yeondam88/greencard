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
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var NormalGuard = (function () {
    function NormalGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NormalGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    NormalGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], NormalGuard);
    return NormalGuard;
}());
exports.NormalGuard = NormalGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9ub3JtYWwuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCx1QkFBaUYsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRyw2QkFBb0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUdyRDtJQUNFLHFCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV4RSxpQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUdqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFWSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBV2Isa0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLG1CQUFXLGNBVXZCLENBQUEiLCJmaWxlIjoiYXBwL2d1YXJkL25vcm1hbC5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vcm1hbEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAvLyBJZiBub3QgTG9nZ2VkIGluXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==
