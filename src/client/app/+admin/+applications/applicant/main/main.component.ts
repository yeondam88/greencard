import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ApiService } from '../../../../api/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {
    @Input() application: any;
    @Input() educations: any[];
    @Input() countries: any[];
    @Input() workExperiences: any[];
    @Input() maritals: any[];
    @Input() titles: any[];
    @Input() genders: any[];
    @Input() days: any[];
    @Input() months: any[];
    @Input() years: any[];
    @Output() onMainComplete = new EventEmitter<any>();


    check(){
        if(
            this.application.firstname.length > 1 &&
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
            this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id)
            {
            return true;
        }
        return false;
    }

    next(){
        this.onMainComplete.emit(this.application);
    }
}
