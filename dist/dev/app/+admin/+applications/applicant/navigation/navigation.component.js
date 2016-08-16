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
            styleUrls: ['navigation.component.css'],
            pipes: [index_1.StatusPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2FwcGxpY2F0aW9ucy9hcHBsaWNhbnQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBQy9FLHNCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBU3JEO0lBSUU7UUFEVSxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVoQix3Q0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBUkQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzJEQUFBO0lBVlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsS0FBSyxFQUFFLENBQUUsa0JBQVUsQ0FBRTtTQUN0QixDQUFDOzsyQkFBQTtJQVdGLDBCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwyQkFBbUIsc0JBVS9CLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rYXBwbGljYXRpb25zL2FwcGxpY2FudC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdHVzUGlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3BpcGVzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXSxcbiAgcGlwZXM6IFsgU3RhdHVzUGlwZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBhcHBsaWNhdGlvbjogYW55O1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBzdGVwQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBjaGFuZ2VTdGVwKHN0ZXA6IG51bWJlcil7XG4gICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdChzdGVwKTtcbiAgfVxufVxuIl19
