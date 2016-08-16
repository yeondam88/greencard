import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { InfoComponent } from './info/index';
import { DOCUMENT } from "@angular/platform-browser";
import { AuthService } from '../../guard/index';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, InfoComponent],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class NavbarComponent implements OnInit {
  private fixed: boolean;
  constructor(private el: ElementRef, private auth: AuthService){}
  ngOnInit(){
    this.onScroll();
  }

  onScroll(){
    let navHeight = this.el.nativeElement.offsetTop;
    let scrollY = window.scrollY;
    if(scrollY >= navHeight){
      this.fixed = true;
    }
    else{
      this.fixed = false;
    }
  }
}
