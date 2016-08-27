import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatusPipe } from '../../pipes/index';

@Component({
  moduleId: module.id,
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  pipes: [ StatusPipe ]
})
export class NavigationComponent {
  @Input() application: any;
  @Input() step: number;
  @Output() stepChange = new EventEmitter<number>();
  constructor() {}

  changeStep(step: number){
    this.step = step;
    this.stepChange.emit(step);
  }
}
