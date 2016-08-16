import { Component, ElementRef } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
  host: {
      '(document:click)':'onClick($event)',
  }
})
export class InfoComponent {
  private open: boolean = false;
  private state: number = 1;

  constructor(private el: ElementRef){}

  onClick(event: Event){
      if(!this.el.nativeElement.contains(event.target)){
          this.open = false;
      }
  }

  toggleInfo(){
    this.open = !this.open;
  }

  changeState(){
    this.state++
    if(this.state > 2){
      this.state = 1;
    }
  }
}
