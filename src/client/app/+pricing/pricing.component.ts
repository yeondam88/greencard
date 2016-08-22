import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class PricingComponent {
  constructor() {}
}
