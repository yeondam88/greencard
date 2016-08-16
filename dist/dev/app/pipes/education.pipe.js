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
var EducationPipe = (function () {
    function EducationPipe() {
    }
    EducationPipe.prototype.transform = function (value) {
        switch (+value) {
            case 1:
                return 'Middle School or Below';
            case 2:
                return 'High School';
            case 3:
                return 'College';
            case 4:
                return 'Grad School';
            default:
                return '';
        }
    };
    EducationPipe = __decorate([
        core_1.Pipe({ name: 'education' }), 
        __metadata('design:paramtypes', [])
    ], EducationPipe);
    return EducationPipe;
}());
exports.EducationPipe = EducationPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9lZHVjYXRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQUE7SUFlQSxDQUFDO0lBZEcsaUNBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsTUFBTSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQztnQkFDTCxNQUFNLENBQUMsd0JBQXdCLENBQUM7WUFDOUIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDckIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDbkI7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0MsQ0FBQztJQWZMO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOztxQkFBQTtJQWdCMUIsb0JBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHFCQUFhLGdCQWV6QixDQUFBIiwiZmlsZSI6ImFwcC9waXBlcy9lZHVjYXRpb24ucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnZWR1Y2F0aW9uJ30pXG5leHBvcnQgY2xhc3MgRWR1Y2F0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbHVlOm51bWJlcik6c3RyaW5ne1xuICAgICAgICBzd2l0Y2goK3ZhbHVlKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiAnTWlkZGxlIFNjaG9vbCBvciBCZWxvdyc7XG5cdFx0ICAgIGNhc2UgMjpcblx0XHQgICAgICAgIHJldHVybiAnSGlnaCBTY2hvb2wnO1xuXHRcdCAgICBjYXNlIDM6XG5cdFx0ICAgICAgICByZXR1cm4gJ0NvbGxlZ2UnO1xuXHRcdCAgICBjYXNlIDQ6XG5cdFx0ICAgICAgICByZXR1cm4gJ0dyYWQgU2Nob29sJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuXHRcdH1cbiAgICB9XG59XG4iXX0=
