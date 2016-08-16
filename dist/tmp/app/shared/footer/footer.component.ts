import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {}
