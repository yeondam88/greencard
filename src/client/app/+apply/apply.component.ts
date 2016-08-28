import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ApiService } from '../api/index';
import { NavigationComponent } from './navigation/index';
import { MainComponent } from './main/index';
import { AddressComponent } from './address/index';
import { FamilyComponent } from './family/index';
import { ConfirmationComponent } from './confirmation/index';
import { AffirmationComponent } from './affirmation/index';
import { PhotoComponent } from './photo/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var swal: any;
declare var moment: any; 
@Component({
  moduleId: module.id,
  templateUrl: 'apply.component.html',
  styleUrls: ['apply.component.css'],
  directives: [NavigationComponent, MainComponent, AddressComponent, FamilyComponent, ConfirmationComponent, PhotoComponent, AffirmationComponent]
})
export class ApplyComponent implements OnInit {
  private application: any;

  private state: number = 1;
  private step: number = 1;

  private educations: any[] =[
    {id: 0, level: "Select Option", pass: false},
    {id: 1, level: "Middle School or below", pass: false},
    {id: 2, level: "High School", pass: true},
    {id: 3, level: "College", pass: true},
    {id: 4, level: "Grad School", pass: true}
  ];

  private workExperiences: any[] =[
    {id: 0, level: "Select Option", pass: false, finish: false},
    {id: 1, level: "Less than 2 Years", pass: false, finish: true },
    {id: 2, level: "2 Years or More", pass: true, finish: false }
  ]

  private countries: any[];

  private maritals: any[] = [
    {id: 0, response: "Select Option", answer: "Select Option", status: false},
    {id: 1, response: "No", answer: "Single", status: false, },
    {id: 2, response: "Yes", answer: "Married", status: true}
  ];

  private titles: any[] = [
    {id: 0, title: "Select a title"},
    {id: 1, title: "Mr"},
    {id: 2, title: "Ms"},
    {id: 3, title: "Doctor"}
  ]

  private genders: any[] = [
    {id: 0, gender: "Select a gender"},
    {id: 1, gender: "Male"},
    {id: 2, gender: "Female"}
  ]

  private days: any[] = [];

  private months: any[] = [
    {id: 0, month: "Month"},
    {id: 1, month: "JANUARY"},
    {id: 2, month: "FEBRUARY"},
    {id: 3, month: "MARCH"},
    {id: 4, month: "APRIL"},
    {id: 5, month: "MAY"},
    {id: 6, month: "JUNE"},
    {id: 7, month: "JULY"},
    {id: 8, month: "AUGUST"},
    {id: 9, month: "SEPTEMBER"},
    {id: 10, month: "OCTOBER"},
    {id: 11, month: "NOVEMBER"},
    {id: 12, month: "DECEMBER"}
  ]

  private years: any[] = [];

  private ready: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(){
    this.api.getCountries()
      .subscribe(countries => {
          this.countries = countries;
          this.countries.unshift({'country': 'Select a country', pass: 0});

          this.application = {
            title: this.titles[0],
            firstname: "",
            lastname: "",
            education: this.educations[0],
            experience: this.workExperiences[0],
            country: this.countries[0],
            city: "",
            marital: this.maritals[0],
            gender: this.genders[0],
            address: {line1: "", line2: "", postal:"", city: "", country: this.countries[0]},
            phone: {country: "", area: "", phone: ""},
            birth: {day: this.days[0], month: this.months[0], year: this.years[0]},
            children: 0,
            spouse: {
              country: this.countries[0]
            },
            mother: {
              country: this.countries[0]
            },
            father: {
              country: this.countries[0]
            }
          }

          this.ready = true;
        });

    this.days.push({id: 0, day: 'Day'});
    for(let x = 1; x <= 31; x++){
      this.days.push({id: x, day: x})
    }

    this.years.push({id: 0, year: 'Year'});
    for(let x = 2016; x >= 1900; x--){
      this.years.push({id: x, year: x});
    }
  }

  eligible(){
    if(this.application.country.pass || this.application.spouse.country.pass || this.application.father.country.pass || this.application.mother.country.pass){
      return true;
    }
    return false;
  }

  finished(){
    if(this.application.experience.finish || this.application.country.pass || this.application.spouse.country.pass || this.application.mother.country.pass || this.application.father.country.pass){
      return true;
    }
    if(this.application.father.country != this.countries[0]){
      return true;
    }
    return false
  }

  educationChange(){
    this.application.experience = this.workExperiences[0];
    this.application.country = this.countries[0];
    this.application.marital = this.maritals[0];
    this.application.spouse.country = this.countries[0];
    this.application.mother.country = this.countries[0];
    this.application.father.country = this.countries[0];
  }

  workChange(){
    this.application.country = this.countries[0];
    this.application.marital = this.maritals[0];
    this.application.spouse.country = this.countries[0];
    this.application.mother.country = this.countries[0];
    this.application.father.country = this.countries[0];
  }

  appCountryChange(){
    this.application.marital = this.maritals[0];
    this.application.spouse.country = this.countries[0];
    this.application.mother.country = this.countries[0];
    this.application.father.country = this.countries[0];
  }

  maritalChange(){
    this.application.spouse.country = this.countries[0];
    this.application.mother.country = this.countries[0];
    this.application.father.country = this.countries[0];
  }

  spouseChange(){
    this.application.mother.country = this.countries[0];
    this.application.father.country = this.countries[0];
  }
  

  motherChange(){
    this.application.father.country = this.countries[0];
  }

  goto(state: number){
    this.state = state;
  }

  onMainComplete(application: any){
    this.application = application;
    if(this.application.marital.id == 2 || this.application.children){
      this.step = 2;
    }
    else{
      this.application.family = null;
      this.step = 3;
    }
  }

  onAddressBack(application: any){
    this.application = application;
    if(this.application.marital.id == 2 || this.application.children){
      this.step = 2;
    }
    else{
      this.step = 1;
    }
  }

  onAddressComplete(application: any){
    this.application = application;
    this.step = 4;
  }

  onFamilyBack(application: any){
    this.application = application;
    this.step = 1;
  }

  onFamilyComplete(application: any){
    this.application = application;
    this.step = 3;
  }


  registrationCheck(){
    if(
      this.eligible() &&
      this.application.firstname.length > 1 &&
      this.application.lastname.length > 1 &&
      this.application.title.id && this.application.titles != this.titles[0] &&
      this.application.gender.id && this.application.gender != this.genders[0] &&
      this.application.education.id && this.application.education != this.educations[0] &&
      this.application.experience.id && this.application.experience != this.workExperiences[0] &&
      this.application.country.id && this.application.country != this.countries[0] &&
      this.application.marital.id && this.application.marital && this.countries[0] &&
      this.application.email &&
      this.application.confirmEmail &&
      this.application.email === this.application.confirmEmail &&
      this.application.password &&
      this.application.password === this.application.confirmPassword &&
      this.application.address.line1.length > 1 &&
      this.application.address.postal.length > 1 &&
      this.application.address.city.length > 1 &&
      this.application.address.country.id && this.application.address.country != this.countries[0] &&
      this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id)
      {
        return true;
    }
    return false;
  }

  stepChange(step: number){
    this.step = step;
  }

  send(application: any){
    application.birthday = moment().year(application.birth.year.id).month(application.birth.month.id-1).date(application.birth.day.id).format('YYYY-MM-DD');
    this.api.postApplication(application)
      .subscribe(
        result => {
          swal("Application Uploaded", "Your application has been uploaded", "success");
          this.step = 5;
        },
        err => {
          swal("Error", err._body, "error");
        }
        );
  }

}
