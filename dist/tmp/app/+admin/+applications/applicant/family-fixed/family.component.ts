import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../api/index';
import { IdToStringPipe, EducationPipe, ExperiencePipe, GenderPipe } from '../../../../pipes/index';

@Component({
  moduleId: module.id,
  selector: 'family',
  templateUrl: 'family.component.html',
  styleUrls: ['family.component.css'],
  pipes: [IdToStringPipe, EducationPipe, ExperiencePipe, GenderPipe]
})
export class FamilyComponent implements OnInit {
    @Input() application: any;
    @Input() countries: any[];
    private family: any[];
    constructor(private api: ApiService){}

    ngOnInit(){
      this.api.getFamily(this.application.id).subscribe(
        family =>{
          this.family = family;
          console.log(family);
        } 
      )
    }

}
