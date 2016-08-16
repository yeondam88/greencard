import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../current-application-service/index';
import { NavigationComponent } from './navigation/index';
import { ApiService } from '../../../api/index';
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
    constructor(
      private current: ApplicationService, 
      private api: ApiService,
      private route: ActivatedRoute) {}
    ngOnInit(){
      this.route.params.subscribe(params => this.id = params['id']);

      this.api.getCountries().subscribe(countries => {
        this.countries = countries;
      });
      if(!this.current.application){
        this.api.getApplication(this.id).subscribe(result => this.current.application = result);
      }
    }

    stepChange(step: number){
      this.step = step;
    }
}
