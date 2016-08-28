import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/index';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { OrderPipe } from '../../pipes/index'

@Component({
  moduleId: module.id,
  templateUrl: 'countries.component.html',
  styleUrls: ['countries.component.css'],
  directives: [Dragula],
  viewProviders: [DragulaService],
  pipes: [OrderPipe]
})
export class CountriesComponent implements OnInit {
    private countries: any[];
    private allowed: any[];
    private denied: any[];
    private reverseOrder: boolean = false;
    constructor(private api: ApiService, private dragulaService: DragulaService) {
        dragulaService.setOptions('bag-one', {
            accepts: function (el: any, target: any, source: any, sibling: any) {
                if(source === target){
                    return false;
                }
                return true; // elements can be dropped in any of the `containers` by default
            },
        });
    }

    ngOnInit(){
        this.api.getCountries().subscribe( countries =>{
            this.countries = countries;
            this.allowed = countries.filter( country => country.pass == 1 );
            this.denied = countries.filter( country => country.pass == 0 );
        });
    }

    save(denied: any[]){
        this.api.putCountries(denied).subscribe( countries => {
            this.countries = countries;
            this.allowed = countries.filter( country => country.pass == 1 );
            this.denied = countries.filter( country => country.pass == 0 );
        })
    }
}
