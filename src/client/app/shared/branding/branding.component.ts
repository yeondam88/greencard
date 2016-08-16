import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'branding',
  templateUrl: 'branding.component.html',
  styleUrls: ['branding.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BrandingComponent {}
