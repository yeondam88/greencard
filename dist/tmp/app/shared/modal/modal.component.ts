import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { StopPropagationDirective } from '../../directives/index';

@Component({
  moduleId: module.id,
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
  directives: [StopPropagationDirective]
})
export class ModalComponent {
	@Output() close = new EventEmitter<boolean>();

	onOut(){
		this.close.emit(true);
	}
}