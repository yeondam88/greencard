import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'admin-branding',
  templateUrl: 'admin-branding.component.html',
  styleUrls: ['admin-branding.component.css']
})
export class AdminBrandingComponent {
  constructor(private router: Router){}
}
