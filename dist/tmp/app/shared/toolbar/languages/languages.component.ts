import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'languages',
  templateUrl: 'languages.component.html',
  host: {
      '(document:click)':'onClick($event)',
  }
})
export class LanguagesComponent implements OnInit {
    private open: boolean = false;
    public languages: any[] = [
        {class: "lang-en", language: "English"},
        {class: "lang-es", language: "Español"},
        {class: "lang-ru", language: "Русский"},
        {class: "lang-fr", language: "Français"},
        {class: "lang-it", language: "Italiano"},
        {class: "lang-nl", language: "Nederlands"},
        {class: "lang-de", language: "Deutsch"},
        {class: "lang-se", language: "Svenska"},
        {class: "lang-pl", language: "Polski"},
        {class: "lang-pt", language: "Português"},
        {class: "lang-tr", language: "Türkçe"},
        {class: "lang-dz", language: "العربية"},
        {class: "lang-il", language: "עברית"},
        {class: "lang-tw", language: "繁體中文"},
        {class: "lang-tw", language: "简体中文"},
        {class: "lang-jp", language: "日本語"},
        {class: "lang-th", language: "ภาษาไทย"},
    ];

    public currentLanguage: any;

    constructor(private el: ElementRef) {}

    ngOnInit(){
        this.currentLanguage = this.languages[0];
    }

    onClick(event: Event){
        if(!this.el.nativeElement.contains(event.target)){
            this.open = false;
        }
    }

    openLanguages(){
        this.open = true;
    }

    selectLanguage(language: any){
        this.currentLanguage = language;
        this.open = false;
    }

}