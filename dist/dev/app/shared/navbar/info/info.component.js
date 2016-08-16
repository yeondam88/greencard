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
var InfoComponent = (function () {
    function InfoComponent(el) {
        this.el = el;
        this.open = false;
        this.state = 1;
    }
    InfoComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.open = false;
        }
    };
    InfoComponent.prototype.toggleInfo = function () {
        this.open = !this.open;
    };
    InfoComponent.prototype.changeState = function () {
        this.state++;
        if (this.state > 2) {
            this.state = 1;
        }
    };
    InfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'info',
            templateUrl: 'info.component.html',
            styleUrls: ['info.component.css'],
            host: {
                '(document:click)': 'onClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL2luZm8vaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQWN0RDtJQUlFLHVCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUgxQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFFVSxDQUFDO0lBRXJDLCtCQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDWixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUE5Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsSUFBSSxFQUFFO2dCQUNGLGtCQUFrQixFQUFDLGlCQUFpQjthQUN2QztTQUNGLENBQUM7O3FCQUFBO0lBdUJGLG9CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxxQkFBYSxnQkFzQnpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYXZiYXIvaW5mby9pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbmF2aWdhdGlvbiBiYXIgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdpbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICdpbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2luZm8uY29tcG9uZW50LmNzcyddLFxuICBob3N0OiB7XG4gICAgICAnKGRvY3VtZW50OmNsaWNrKSc6J29uQ2xpY2soJGV2ZW50KScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgSW5mb0NvbXBvbmVudCB7XG4gIHByaXZhdGUgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHN0YXRlOiBudW1iZXIgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe31cblxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCl7XG4gICAgICBpZighdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xuICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICB9XG5cbiAgdG9nZ2xlSW5mbygpe1xuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gIH1cblxuICBjaGFuZ2VTdGF0ZSgpe1xuICAgIHRoaXMuc3RhdGUrK1xuICAgIGlmKHRoaXMuc3RhdGUgPiAyKXtcbiAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgIH1cbiAgfVxufVxuIl19
