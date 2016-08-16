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
var TitlePipe = (function () {
    function TitlePipe() {
    }
    TitlePipe.prototype.transform = function (value) {
        switch (+value) {
            case 1:
                return 'Mr';
            case 2:
                return 'Ms';
            case 3:
                return 'Doctor';
            default:
                return '';
        }
    };
    TitlePipe = __decorate([
        core_1.Pipe({ name: 'title' }), 
        __metadata('design:paramtypes', [])
    ], TitlePipe);
    return TitlePipe;
}());
exports.TitlePipe = TitlePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy90aXRsZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQ7SUFBQTtJQWFBLENBQUM7SUFaRyw2QkFBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixNQUFNLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkO2dCQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNDLENBQUM7SUFiTDtRQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQzs7aUJBQUE7SUFjdEIsZ0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGlCQUFTLFlBYXJCLENBQUEiLCJmaWxlIjoiYXBwL3BpcGVzL3RpdGxlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGVUcmFuc2Zvcm0sIFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ3RpdGxlJ30pXG5leHBvcnQgY2xhc3MgVGl0bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgICB0cmFuc2Zvcm0odmFsdWU6bnVtYmVyKTpzdHJpbmd7XG4gICAgICAgIHN3aXRjaCgrdmFsdWUpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdNcic7XG5cdFx0ICAgIGNhc2UgMjpcblx0XHQgICAgICAgIHJldHVybiAnTXMnO1xuXHRcdCAgICBjYXNlIDM6XG5cdFx0ICAgICAgICByZXR1cm4gJ0RvY3Rvcic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcblx0XHR9XG4gICAgfVxufVxuIl19
