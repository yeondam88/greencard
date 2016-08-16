import { Component, Input } from '@angular/core';
import { IdToStringPipe } from '../../../../pipes/index';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css'],
  pipes: [IdToStringPipe]
})
export class AddressComponent {
    @Input() application: any;
    @Input() countries: any[];
}
