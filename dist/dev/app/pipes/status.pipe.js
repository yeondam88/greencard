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
var StatusPipe = (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (value) {
        switch (+value) {
            case 0:
                return 'Unpaid';
            case 1:
                return 'In Progress';
            case 2:
                return 'Submitted';
            case 3:
                return 'Denied';
            case 4:
                return 'Accepted';
            default:
                return '';
        }
    };
    StatusPipe = __decorate([
        core_1.Pipe({ name: 'status' }), 
        __metadata('design:paramtypes', [])
    ], StatusPipe);
    return StatusPipe;
}());
exports.StatusPipe = StatusPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9zdGF0dXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQUE7SUFpQkEsQ0FBQztJQWhCRyw4QkFBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixNQUFNLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDakIsS0FBSyxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDbkIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDaEI7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0MsQ0FBQztJQWpCTDtRQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7a0JBQUE7SUFrQnZCLGlCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxrQkFBVSxhQWlCdEIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMvc3RhdHVzLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGVUcmFuc2Zvcm0sIFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ3N0YXR1cyd9KVxuZXhwb3J0IGNsYXNzIFN0YXR1c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWx1ZTpudW1iZXIpOnN0cmluZ3tcbiAgICAgICAgc3dpdGNoKCt2YWx1ZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gJ1VucGFpZCc7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiAnSW4gUHJvZ3Jlc3MnO1xuXHRcdCAgICBjYXNlIDI6XG5cdFx0ICAgICAgICByZXR1cm4gJ1N1Ym1pdHRlZCc7XG5cdFx0ICAgIGNhc2UgMzpcblx0XHQgICAgICAgIHJldHVybiAnRGVuaWVkJztcblx0XHQgICAgY2FzZSA0OlxuXHRcdCAgICAgICAgcmV0dXJuICdBY2NlcHRlZCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcblx0XHR9XG4gICAgfVxufVxuIl19
