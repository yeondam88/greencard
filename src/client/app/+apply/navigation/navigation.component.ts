import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
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
