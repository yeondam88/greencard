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
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAdmin) {
            console.log("yes admin");
            return true;
        }
        console.log("not admin");
        this.router.navigate(['/keyin']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsdUJBQWlGLGlCQUFpQixDQUFDLENBQUE7QUFDbkcsNkJBQW9DLGdCQUFnQixDQUFDLENBQUE7QUFHckQ7SUFDRSxtQkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFeEUsK0JBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQWZIO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUFnQmIsZ0JBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGlCQUFTLFlBZXJCLENBQUEiLCJmaWxlIjoiYXBwL2d1YXJkL2F1dGguZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieWVzIGFkbWluXCIpO1xuICAgICAgcmV0dXJuIHRydWU7IFxuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coXCJub3QgYWRtaW5cIik7XG4gICAgLy8gSWYgbm90IExvZ2dlZCBpblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2tleWluJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==
