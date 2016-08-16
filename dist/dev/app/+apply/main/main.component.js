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
var MainComponent = (function () {
    function MainComponent() {
        this.onMainComplete = new core_1.EventEmitter();
    }
    MainComponent.prototype.check = function () {
        if (this.application.firstname.length > 1 &&
            this.application.lastname.length > 1 &&
            this.application.title.id && this.application.titles != this.titles[0] &&
            this.application.gender.id && this.application.gender != this.genders[0] &&
            this.application.education.id && this.application.education != this.educations[0] &&
            this.application.experience.id && this.application.experience != this.workExperiences[0] &&
            this.application.country.id && this.application.country != this.countries[0] &&
            this.application.city.length > 1 &&
            this.application.marital.id && this.application.marital && this.countries[0] &&
            this.application.email &&
            this.application.confirmEmail &&
            this.application.email === this.application.confirmEmail &&
            this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id) {
            return true;
        }
        return false;
    };
    MainComponent.prototype.next = function () {
        this.onMainComplete.emit(this.application);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "educations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "workExperiences", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "maritals", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "titles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "genders", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "days", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "months", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "years", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MainComponent.prototype, "children", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "onMainComplete", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXBwbHkvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBYS9FO0lBQUE7UUFZYyxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO0lBMkJ2RCxDQUFDO0lBeEJHLDZCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUEsQ0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNuRyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBckNEO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQWxCYjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQXdDRixvQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1kscUJBQWEsZ0JBdUN6QixDQUFBIiwiZmlsZSI6ImFwcC8rYXBwbHkvbWFpbi9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbWFpbicsXG4gIHRlbXBsYXRlVXJsOiAnbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtYWluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBhcHBsaWNhdGlvbjogYW55O1xuICAgIEBJbnB1dCgpIGVkdWNhdGlvbnM6IGFueVtdO1xuICAgIEBJbnB1dCgpIGNvdW50cmllczogYW55W107XG4gICAgQElucHV0KCkgd29ya0V4cGVyaWVuY2VzOiBhbnlbXTtcbiAgICBASW5wdXQoKSBtYXJpdGFsczogYW55W107XG4gICAgQElucHV0KCkgdGl0bGVzOiBhbnlbXTtcbiAgICBASW5wdXQoKSBnZW5kZXJzOiBhbnlbXTtcbiAgICBASW5wdXQoKSBkYXlzOiBhbnlbXTtcbiAgICBASW5wdXQoKSBtb250aHM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHllYXJzOiBhbnlbXTtcbiAgICBASW5wdXQoKSBjaGlsZHJlbjogYW55W107XG4gICAgQE91dHB1dCgpIG9uTWFpbkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxuICAgIGNoZWNrKCl7XG4gICAgICAgIGlmKFxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5maXJzdG5hbWUubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5sYXN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnRpdGxlLmlkICYmIHRoaXMuYXBwbGljYXRpb24udGl0bGVzICE9IHRoaXMudGl0bGVzWzBdICYmXG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmdlbmRlci5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLmdlbmRlciAhPSB0aGlzLmdlbmRlcnNbMF0gJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uZWR1Y2F0aW9uLmlkICYmIHRoaXMuYXBwbGljYXRpb24uZWR1Y2F0aW9uICE9IHRoaXMuZWR1Y2F0aW9uc1swXSAmJlxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5leHBlcmllbmNlLmlkICYmIHRoaXMuYXBwbGljYXRpb24uZXhwZXJpZW5jZSAhPSB0aGlzLndvcmtFeHBlcmllbmNlc1swXSAmJlxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5jb3VudHJ5LmlkICYmIHRoaXMuYXBwbGljYXRpb24uY291bnRyeSAhPSB0aGlzLmNvdW50cmllc1swXSAmJlxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5jaXR5Lmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbC5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLm1hcml0YWwgJiYgdGhpcy5jb3VudHJpZXNbMF0gJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uZW1haWwgJiZcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uY29uZmlybUVtYWlsICYmXG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmVtYWlsID09PSB0aGlzLmFwcGxpY2F0aW9uLmNvbmZpcm1FbWFpbCAmJlxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5iaXJ0aC5kYXkuaWQgJiYgdGhpcy5hcHBsaWNhdGlvbi5iaXJ0aC5tb250aC5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLmJpcnRoLnllYXIuaWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV4dCgpe1xuICAgICAgICB0aGlzLm9uTWFpbkNvbXBsZXRlLmVtaXQodGhpcy5hcHBsaWNhdGlvbik7XG4gICAgfVxufVxuIl19
