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
var index_1 = require('./languages/index');
var index_2 = require('./social/index');
var index_3 = require('./user/index');
var index_4 = require('../../guard/index');
var ToolbarComponent = (function () {
    function ToolbarComponent(auth) {
        this.auth = auth;
    }
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: ['toolbar.component.css'],
            directives: [index_1.LanguagesComponent, index_2.SocialComponent, index_3.UserComponent]
        }), 
        __metadata('design:paramtypes', [index_4.AuthService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFtQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUE4QixjQUFjLENBQUMsQ0FBQTtBQUM3QyxzQkFBNEIsbUJBQW1CLENBQUMsQ0FBQTtBQVloRDtJQUNFLDBCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUUsQ0FBQztJQVIxQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBa0IsRUFBRSx1QkFBZSxFQUFFLHFCQUFhLENBQUM7U0FDakUsQ0FBQzs7d0JBQUE7SUFHRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5ndWFnZXMvaW5kZXgnO1xuaW1wb3J0IHsgU29jaWFsQ29tcG9uZW50IH0gZnJvbSAnLi9zb2NpYWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gJy4vdXNlci9pbmRleCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2d1YXJkL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIHRvb2xiYXIgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd0b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXIuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbTGFuZ3VhZ2VzQ29tcG9uZW50LCBTb2NpYWxDb21wb25lbnQsIFVzZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKXt9XG59XG4iXX0=
