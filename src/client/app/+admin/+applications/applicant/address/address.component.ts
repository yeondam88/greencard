import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ApiService } from '../../../../api/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})
export class AddressComponent {
    @Input() application: any;
    @Input() countries: any[];
    @Output() onAddressComplete = new EventEmitter<any>();
    @Output() onAddressBack = new EventEmitter<any>();

    check(){
        if(
            this.application.address.line1.length > 1 &&
            this.application.address.postal.length > 1 &&
            this.application.address.city.length > 1 &&
            this.application.address.country.id && this.application.address.country != this.countries[0])
            {
            return true;
        }
        return false;
    }

    back(){
        this.onAddressBack.emit(this.application);
    }

    next(){
        this.onAddressComplete.emit(this.application);
    }
}
