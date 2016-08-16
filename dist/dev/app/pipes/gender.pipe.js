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
var GenderPipe = (function () {
    function GenderPipe() {
    }
    GenderPipe.prototype.transform = function (value) {
        switch (+value) {
            case 1:
                return 'Male';
            case 2:
                return 'Female';
            default:
                return '';
        }
    };
    GenderPipe = __decorate([
        core_1.Pipe({ name: 'gender' }), 
        __metadata('design:paramtypes', [])
    ], GenderPipe);
    return GenderPipe;
}());
exports.GenderPipe = GenderPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9nZW5kZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQUE7SUFXQSxDQUFDO0lBVkcsOEJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsTUFBTSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQztnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1osS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDZDtnQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDQyxDQUFDO0lBWEw7UUFBQyxXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O2tCQUFBO0lBWXZCLGlCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQkFBVSxhQVd0QixDQUFBIiwiZmlsZSI6ImFwcC9waXBlcy9nZW5kZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnZ2VuZGVyJ30pXG5leHBvcnQgY2xhc3MgR2VuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XG4gICAgdHJhbnNmb3JtKHZhbHVlOm51bWJlcik6c3RyaW5ne1xuICAgICAgICBzd2l0Y2goK3ZhbHVlKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiAnTWFsZSc7XG5cdFx0ICAgIGNhc2UgMjpcblx0XHQgICAgICAgIHJldHVybiAnRmVtYWxlJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuXHRcdH1cbiAgICB9XG59XG4iXX0=
