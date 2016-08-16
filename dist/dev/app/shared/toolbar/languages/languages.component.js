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
var LanguagesComponent = (function () {
    function LanguagesComponent(el) {
        this.el = el;
        this.open = false;
        this.languages = [
            { class: "lang-en", language: "English" },
            { class: "lang-es", language: "Español" },
            { class: "lang-ru", language: "Русский" },
            { class: "lang-fr", language: "Français" },
            { class: "lang-it", language: "Italiano" },
            { class: "lang-nl", language: "Nederlands" },
            { class: "lang-de", language: "Deutsch" },
            { class: "lang-se", language: "Svenska" },
            { class: "lang-pl", language: "Polski" },
            { class: "lang-pt", language: "Português" },
            { class: "lang-tr", language: "Türkçe" },
            { class: "lang-dz", language: "العربية" },
            { class: "lang-il", language: "עברית" },
            { class: "lang-tw", language: "繁體中文" },
            { class: "lang-tw", language: "简体中文" },
            { class: "lang-jp", language: "日本語" },
            { class: "lang-th", language: "ภาษาไทย" },
        ];
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        this.currentLanguage = this.languages[0];
    };
    LanguagesComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.open = false;
        }
    };
    LanguagesComponent.prototype.openLanguages = function () {
        this.open = true;
    };
    LanguagesComponent.prototype.selectLanguage = function (language) {
        this.currentLanguage = language;
        this.open = false;
    };
    LanguagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'languages',
            templateUrl: 'languages.component.html',
            host: {
                '(document:click)': 'onClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LanguagesComponent);
    return LanguagesComponent;
}());
exports.LanguagesComponent = LanguagesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9vbGJhci9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBVTlEO0lBd0JJLDRCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXZCMUIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQVU7WUFDdEIsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDeEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDeEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUM7WUFDMUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7WUFDekMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDckMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7WUFDcEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7WUFDcEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7WUFDbkMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7U0FDMUMsQ0FBQztJQUltQyxDQUFDO0lBRXRDLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFuREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsSUFBSSxFQUFFO2dCQUNGLGtCQUFrQixFQUFDLGlCQUFpQjthQUN2QztTQUNGLENBQUM7OzBCQUFBO0lBOENGLHlCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSwwQkFBa0IscUJBNkM5QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdG9vbGJhci9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xhbmd1YWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnbGFuZ3VhZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICAgJyhkb2N1bWVudDpjbGljayknOidvbkNsaWNrKCRldmVudCknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGxhbmd1YWdlczogYW55W10gPSBbXG4gICAgICAgIHtjbGFzczogXCJsYW5nLWVuXCIsIGxhbmd1YWdlOiBcIkVuZ2xpc2hcIn0sXG4gICAgICAgIHtjbGFzczogXCJsYW5nLWVzXCIsIGxhbmd1YWdlOiBcIkVzcGHDsW9sXCJ9LFxuICAgICAgICB7Y2xhc3M6IFwibGFuZy1ydVwiLCBsYW5ndWFnZTogXCLQoNGD0YHRgdC60LjQuVwifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctZnJcIiwgbGFuZ3VhZ2U6IFwiRnJhbsOnYWlzXCJ9LFxuICAgICAgICB7Y2xhc3M6IFwibGFuZy1pdFwiLCBsYW5ndWFnZTogXCJJdGFsaWFub1wifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctbmxcIiwgbGFuZ3VhZ2U6IFwiTmVkZXJsYW5kc1wifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctZGVcIiwgbGFuZ3VhZ2U6IFwiRGV1dHNjaFwifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctc2VcIiwgbGFuZ3VhZ2U6IFwiU3ZlbnNrYVwifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctcGxcIiwgbGFuZ3VhZ2U6IFwiUG9sc2tpXCJ9LFxuICAgICAgICB7Y2xhc3M6IFwibGFuZy1wdFwiLCBsYW5ndWFnZTogXCJQb3J0dWd1w6pzXCJ9LFxuICAgICAgICB7Y2xhc3M6IFwibGFuZy10clwiLCBsYW5ndWFnZTogXCJUw7xya8OnZVwifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctZHpcIiwgbGFuZ3VhZ2U6IFwi2KfZhNi52LHYqNmK2KlcIn0sXG4gICAgICAgIHtjbGFzczogXCJsYW5nLWlsXCIsIGxhbmd1YWdlOiBcItei15HXqNeZ16pcIn0sXG4gICAgICAgIHtjbGFzczogXCJsYW5nLXR3XCIsIGxhbmd1YWdlOiBcIue5gemrlOS4reaWh1wifSxcbiAgICAgICAge2NsYXNzOiBcImxhbmctdHdcIiwgbGFuZ3VhZ2U6IFwi566A5L2T5Lit5paHXCJ9LFxuICAgICAgICB7Y2xhc3M6IFwibGFuZy1qcFwiLCBsYW5ndWFnZTogXCLml6XmnKzoqp5cIn0sXG4gICAgICAgIHtjbGFzczogXCJsYW5nLXRoXCIsIGxhbmd1YWdlOiBcIuC4oOC4suC4qeC4suC5hOC4l+C4olwifSxcbiAgICBdO1xuXG4gICAgcHVibGljIGN1cnJlbnRMYW5ndWFnZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZXNbMF07XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpe1xuICAgICAgICBpZighdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTGFuZ3VhZ2VzKCl7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgc2VsZWN0TGFuZ3VhZ2UobGFuZ3VhZ2U6IGFueSl7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cblxufSJdfQ==
