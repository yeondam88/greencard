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
var ExperiencePipe = (function () {
    function ExperiencePipe() {
    }
    ExperiencePipe.prototype.transform = function (value) {
        switch (+value) {
            case 1:
                return 'Less than 2 Years';
            case 2:
                return '2 Years or More';
            default:
                return '';
        }
    };
    ExperiencePipe = __decorate([
        core_1.Pipe({ name: 'experience' }), 
        __metadata('design:paramtypes', [])
    ], ExperiencePipe);
    return ExperiencePipe;
}());
exports.ExperiencePipe = ExperiencePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9leHBlcmllbmNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRDtJQUFBO0lBV0EsQ0FBQztJQVZHLGtDQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ2xCLE1BQU0sQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUM7Z0JBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLEtBQUssQ0FBQztnQkFDRixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDdkI7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0MsQ0FBQztJQVhMO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxDQUFDOztzQkFBQTtJQVkzQixxQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksc0JBQWMsaUJBVzFCLENBQUEiLCJmaWxlIjoiYXBwL3BpcGVzL2V4cGVyaWVuY2UucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnZXhwZXJpZW5jZSd9KVxuZXhwb3J0IGNsYXNzIEV4cGVyaWVuY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgICB0cmFuc2Zvcm0odmFsdWU6bnVtYmVyKTpzdHJpbmd7XG4gICAgICAgIHN3aXRjaCgrdmFsdWUpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdMZXNzIHRoYW4gMiBZZWFycyc7XG5cdFx0ICAgIGNhc2UgMjpcblx0XHQgICAgICAgIHJldHVybiAnMiBZZWFycyBvciBNb3JlJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuXHRcdH1cbiAgICB9XG59XG4iXX0=
