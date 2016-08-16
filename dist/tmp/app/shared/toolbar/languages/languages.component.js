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
            template: "<ul class=\"pull-right social-icons\">     <li class=\"globe\">         <div class=\"dropdown\">             <div (click)=\"openLanguages()\" class=\"dropbtn\"><i class=\"fa fa-globe\"></i> Language             </div>             <div id=\"myDropdown\" class=\"dropdown-content\" [ngClass]=\"{'show': open}\">                 <a *ngFor=\"let language of languages\" href=\"#\" [class]=\"language.class\" (click)=\"selectLanguage(language)\"><span [class]=\"language.class\"></span>{{language.language}}</a>             </div>         </div>     </li>     <li><a href=\"#\" [class]=\"currentLanguage.class\"><span [class]=\"currentLanguage.class\"></span>{{currentLanguage.language}}</a></li> </ul>",
            host: {
                '(document:click)': 'onClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LanguagesComponent);
    return LanguagesComponent;
}());
exports.LanguagesComponent = LanguagesComponent;
