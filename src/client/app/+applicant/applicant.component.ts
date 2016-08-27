import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from './navigation/index';
import { ApiService } from '../api/index';
import { AuthService } from '../guard/index';
import { MainComponent } from './main-fixed/index';
import { FamilyComponent } from './family-fixed/index';
import { AddressComponent } from './address-fixed/index';

@Component({
  moduleId: module.id,
  templateUrl: 'applicant.component.html',
  styleUrls: ['applicant.component.css'],
  directives: [NavigationComponent, MainComponent, FamilyComponent, AddressComponent]
})
export class ApplicantComponent implements OnInit {
    private id: string;
    private step: number = 1;
    private countries: any[];
    private application: any;
    constructor(
      private api: ApiService,
      private auth: AuthService) {}

    ngOnInit(){
      this.api.getCountries().subscribe(countries => {
        this.countries = countries;
      });

      this.api.getApplication(this.auth.user.id).subscribe(result => this.application = result);
    }

    stepChange(step: number){
      this.step = step;
    }
}
