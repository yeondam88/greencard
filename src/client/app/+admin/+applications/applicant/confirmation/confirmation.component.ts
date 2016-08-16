import { Component, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.css']
})
export class ConfirmationComponent {
    @Input() application: any;
}
