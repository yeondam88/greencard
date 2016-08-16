import { Component } from '@angular/core';
import { LanguagesComponent } from './languages/index';
import { SocialComponent } from './social/index';
import { UserComponent } from './user/index';
import { AuthService } from '../../guard/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [LanguagesComponent, SocialComponent, UserComponent]
})
export class ToolbarComponent {
  constructor(private auth: AuthService){}
}
