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
var index_1 = require('../../../../pipes/index');
var MainComponent = (function () {
    function MainComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "countries", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css'],
            pipes: [index_1.IdToStringPipe, index_1.TitlePipe, index_1.EducationPipe, index_1.ExperiencePipe, index_1.MaritalPipe, index_1.GenderPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvbWFpbi1maXhlZC9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHNCQUFrRyx5QkFBeUIsQ0FBQyxDQUFBO0FBUzVIO0lBQUE7SUFHQSxDQUFDO0lBRkM7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsc0JBQWMsRUFBRSxpQkFBUyxFQUFFLHFCQUFhLEVBQUUsc0JBQWMsRUFBRSxtQkFBVyxFQUFFLGtCQUFVLENBQUM7U0FDM0YsQ0FBQzs7cUJBQUE7SUFJRixvQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFkscUJBQWEsZ0JBR3pCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rYXBwbGljYXRpb25zL2FwcGxpY2FudC9tYWluLWZpeGVkL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWRUb1N0cmluZ1BpcGUsIFRpdGxlUGlwZSwgRWR1Y2F0aW9uUGlwZSwgRXhwZXJpZW5jZVBpcGUsIE1hcml0YWxQaXBlLCBHZW5kZXJQaXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGlwZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdtYWluJyxcbiAgdGVtcGxhdGVVcmw6ICdtYWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21haW4uY29tcG9uZW50LmNzcyddLFxuICBwaXBlczogW0lkVG9TdHJpbmdQaXBlLCBUaXRsZVBpcGUsIEVkdWNhdGlvblBpcGUsIEV4cGVyaWVuY2VQaXBlLCBNYXJpdGFsUGlwZSwgR2VuZGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFwcGxpY2F0aW9uOiBhbnk7XG4gIEBJbnB1dCgpIGNvdW50cmllczogYW55W107XG59XG4iXX0=
