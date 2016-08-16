import { Component } from '@angular/core';
import { LanguagesComponent } from './languages/index';
import { LinksComponent } from './links/index';
import { UserComponent } from './user/index';
import { AuthService } from '../../guard/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'admin-toolbar',
  templateUrl: 'admin-toolbar.component.html',
  styleUrls: ['admin-toolbar.component.css'],
  directives: [LanguagesComponent, LinksComponent, UserComponent]
})
export class AdminToolbarComponent {
  constructor(private auth: AuthService){}
}
