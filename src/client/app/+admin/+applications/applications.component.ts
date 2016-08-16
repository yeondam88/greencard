import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/index';
import { ApplicationService } from './current-application-service/index';
import { Router } from '@angular/router';
import { IdToStringPipe, OrderPipe, SearchPipe } from '../../pipes/index';

@Component({
  moduleId: module.id,
  templateUrl: 'applications.component.html',
  styleUrls: ['applications.component.css'],
  pipes: [IdToStringPipe, OrderPipe, SearchPipe]
})
export class ApplicationsComponent implements OnInit {
    private applications: any[];
    private countries: any[];
    private orderField: string = 'id';
    private reverseField: boolean = false;
    private search: any = {};
    constructor(
        private api: ApiService, 
        private current: ApplicationService,
        private router: Router) {}

    ngOnInit() {
        this.current.application = null;
        this.api.getCountries().subscribe(countries => this.countries = countries);
        this.api.getApplications().subscribe(applications => this.applications = applications)
    }

    goto(application: any){
        this.router.navigate(['/admin/applications', application.id])
        this.current.application = application;
    }

    sort(field: string){
        this.orderField = field;
        this.reverseField = !this.reverseField;
    }
}
