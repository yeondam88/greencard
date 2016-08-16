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
var MaritalPipe = (function () {
    function MaritalPipe() {
    }
    MaritalPipe.prototype.transform = function (value) {
        switch (+value) {
            case 1:
                return 'Single';
            case 2:
                return 'Married';
            default:
                return '';
        }
    };
    MaritalPipe = __decorate([
        core_1.Pipe({ name: 'marital' }), 
        __metadata('design:paramtypes', [])
    ], MaritalPipe);
    return MaritalPipe;
}());
exports.MaritalPipe = MaritalPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9tYXJpdGFsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRDtJQUFBO0lBV0EsQ0FBQztJQVZHLCtCQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ2xCLE1BQU0sQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUM7Z0JBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLEtBQUssQ0FBQztnQkFDRixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2Y7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0MsQ0FBQztJQVhMO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDOzttQkFBQTtJQVl4QixrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksbUJBQVcsY0FXdkIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMvbWFyaXRhbC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlVHJhbnNmb3JtLCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdtYXJpdGFsJ30pXG5leHBvcnQgY2xhc3MgTWFyaXRhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWx1ZTpudW1iZXIpOnN0cmluZ3tcbiAgICAgICAgc3dpdGNoKCt2YWx1ZSkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gJ1NpbmdsZSc7XG5cdFx0ICAgIGNhc2UgMjpcblx0XHQgICAgICAgIHJldHVybiAnTWFycmllZCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcblx0XHR9XG4gICAgfVxufVxuIl19
