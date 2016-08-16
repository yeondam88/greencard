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
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'news',
            templateUrl: 'news.component.html',
            styleUrls: ['news.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.LatestNewsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbmV3cy9uZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3BELHNCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBWXREO0lBRUU7SUFBZSxDQUFDO0lBVGxCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixDQUFDO1NBQ3JELENBQUM7O3FCQUFBO0lBSUYsb0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHFCQUFhLGdCQUd6QixDQUFBIiwiZmlsZSI6ImFwcC8rbmV3cy9uZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGF0ZXN0TmV3c0NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICduZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICduZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25ld3MuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIExhdGVzdE5ld3NDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQge1xuICBwcml2YXRlIG5ld3M6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=
