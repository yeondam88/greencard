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
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.stepChange = new core_1.EventEmitter();
    }
    NavigationComponent.prototype.changeStep = function (step) {
        this.step = step;
        this.stepChange.emit(step);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NavigationComponent.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "stepChange", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navigation',
            templateUrl: 'navigation.component.html',
            styleUrls: ['navigation.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXBwbHkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBUS9FO0lBSUU7UUFEVSxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVoQix3Q0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBUkQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzJEQUFBO0lBVFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzs7MkJBQUE7SUFXRiwwQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksMkJBQW1CLHNCQVUvQixDQUFBIiwiZmlsZSI6ImFwcC8rYXBwbHkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYXBwbGljYXRpb246IGFueTtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuICBAT3V0cHV0KCkgc3RlcENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY2hhbmdlU3RlcChzdGVwOiBudW1iZXIpe1xuICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoc3RlcCk7XG4gIH1cbn1cbiJdfQ==
