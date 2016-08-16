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
var index_1 = require('../../../../api/index');
var index_2 = require('../../../../pipes/index');
var FamilyComponent = (function () {
    function FamilyComponent(api) {
        this.api = api;
    }
    FamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getFamily(this.application.id).subscribe(function (family) {
            _this.family = family;
            console.log(family);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "countries", void 0);
    FamilyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'family',
            templateUrl: 'family.component.html',
            styleUrls: ['family.component.css'],
            pipes: [index_2.IdToStringPipe, index_2.EducationPipe, index_2.ExperiencePipe, index_2.GenderPipe]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], FamilyComponent);
    return FamilyComponent;
}());
exports.FamilyComponent = FamilyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvZmFtaWx5LWZpeGVkL2ZhbWlseS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxzQkFBMkIsdUJBQXVCLENBQUMsQ0FBQTtBQUNuRCxzQkFBMEUseUJBQXlCLENBQUMsQ0FBQTtBQVNwRztJQUlJLHlCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFFLENBQUM7SUFFdEMsa0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQy9DLFVBQUEsTUFBTTtZQUNKLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBWkQ7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBVFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsc0JBQWMsRUFBRSxxQkFBYSxFQUFFLHNCQUFjLEVBQUUsa0JBQVUsQ0FBQztTQUNuRSxDQUFDOzt1QkFBQTtJQWdCRixzQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksdUJBQWUsa0JBZTNCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rYXBwbGljYXRpb25zL2FwcGxpY2FudC9mYW1pbHktZml4ZWQvZmFtaWx5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBJZFRvU3RyaW5nUGlwZSwgRWR1Y2F0aW9uUGlwZSwgRXhwZXJpZW5jZVBpcGUsIEdlbmRlclBpcGUgfSBmcm9tICcuLi8uLi8uLi8uLi9waXBlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2ZhbWlseScsXG4gIHRlbXBsYXRlVXJsOiAnZmFtaWx5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZhbWlseS5jb21wb25lbnQuY3NzJ10sXG4gIHBpcGVzOiBbSWRUb1N0cmluZ1BpcGUsIEVkdWNhdGlvblBpcGUsIEV4cGVyaWVuY2VQaXBlLCBHZW5kZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBGYW1pbHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGFwcGxpY2F0aW9uOiBhbnk7XG4gICAgQElucHV0KCkgY291bnRyaWVzOiBhbnlbXTtcbiAgICBwcml2YXRlIGZhbWlseTogYW55W107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLmFwaS5nZXRGYW1pbHkodGhpcy5hcHBsaWNhdGlvbi5pZCkuc3Vic2NyaWJlKFxuICAgICAgICBmYW1pbHkgPT57XG4gICAgICAgICAgdGhpcy5mYW1pbHkgPSBmYW1pbHk7XG4gICAgICAgICAgY29uc29sZS5sb2coZmFtaWx5KTtcbiAgICAgICAgfSBcbiAgICAgIClcbiAgICB9XG5cbn1cbiJdfQ==
