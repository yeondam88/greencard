import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ApiService } from '../../api/index';
import { NavigationComponent } from './../navigation/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
declare var moment: any; 
@Component({
  moduleId: module.id,
  templateUrl: 'apply.component.html',
  styleUrls: ['apply.component.css'],
  directives: [NavigationComponent]
})
export class ApplyComponent implements OnInit {
  private applicant: any;

  private state: number = 1;

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

  private children: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  private ready: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(){
    this.api.getCountries()
      .subscribe(countries => {
          this.countries = countries;
          this.countries.unshift({'country': 'Select a country', pass: 0});

          this.applicant = {
            title: this.titles[0],
            firstname: "",
            lastname: "",
            education: this.educations[0],
            experience: this.workExperiences[0],
            country: this.countries[0],
            marital: this.maritals[0],
            gender: this.genders[0],
            address: {line1: "", line2: "", postal:"", city: "", country: this.countries[0]},
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
    if(this.applicant.country.pass || this.applicant.spouse.country.pass || this.applicant.father.country.pass || this.applicant.mother.country.pass){
      return true;
    }
    return false;
  }

  finished(){
    if(this.applicant.experience.finish || this.applicant.country.pass || this.applicant.spouse.country.pass || this.applicant.mother.country.pass || this.applicant.father.country.pass){
      return true;
    }
    if(this.applicant.father.country != this.countries[0]){
      return true;
    }
    return false
  }

  educationChange(){
    this.applicant.experience = this.workExperiences[0];
    this.applicant.country = this.countries[0];
    this.applicant.marital = this.maritals[0];
    this.applicant.spouse.country = this.countries[0];
    this.applicant.mother.country = this.countries[0];
    this.applicant.father.country = this.countries[0];
  }

  workChange(){
    this.applicant.country = this.countries[0];
    this.applicant.marital = this.maritals[0];
    this.applicant.spouse.country = this.countries[0];
    this.applicant.mother.country = this.countries[0];
    this.applicant.father.country = this.countries[0];
  }

  appCountryChange(){
    this.applicant.marital = this.maritals[0];
    this.applicant.spouse.country = this.countries[0];
    this.applicant.mother.country = this.countries[0];
    this.applicant.father.country = this.countries[0];
  }

  maritalChange(){
    this.applicant.spouse.country = this.countries[0];
    this.applicant.mother.country = this.countries[0];
    this.applicant.father.country = this.countries[0];
  }

  spouseChange(){
    this.applicant.mother.country = this.countries[0];
    this.applicant.father.country = this.countries[0];
  }
  

  motherChange(){
    this.applicant.father.country = this.countries[0];
  }

  goto(state: number){
    this.state = state;
  }

  registrationCheck(){
    if(
      this.applicant.firstname.length > 1 &&
      this.applicant.lastname.length > 1 &&
      this.applicant.title.id && this.applicant.titles != this.titles[0] &&
      this.applicant.gender.id && this.applicant.gender != this.genders[0] &&
      this.applicant.education.id && this.applicant.education != this.educations[0] &&
      this.applicant.experience.id && this.applicant.experience != this.workExperiences[0] &&
      this.applicant.country.id && this.applicant.country != this.countries[0] &&
      this.applicant.marital.id && this.applicant.marital && this.countries[0] &&
      this.applicant.email &&
      this.applicant.confirmEmail &&
      this.applicant.email === this.applicant.confirmEmail &&
      this.applicant.address.line1.length > 1 &&
      this.applicant.address.postal.length > 1 &&
      this.applicant.address.city.length > 1 &&
      this.applicant.address.country.id && this.applicant.address.country != this.countries[0] &&
      this.applicant.birth.day.id && this.applicant.birth.month.id && this.applicant.birth.year.id)
      {
        return true;
    }
    return false;
  }

  send(application: any){
    application.birthday = moment().year(application.birth.year.id).month(application.birth.month.id-1).date(application.birth.day.id).format('YYYY-MM-DD');
    this.api.postApplication(application)
      .subscribe(result => console.log(result));
  }

}
