import { Component } from '@angular/core';
import { ApiService } from '../../api/index';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css']
})
export class SpinnerComponent {
	private spin: number;

	constructor(private api: ApiService){
		this.api.requestsEmitter.subscribe(
			(requests: number)=>{
				this.spin = requests;
			}
		)
	}
}