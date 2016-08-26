import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToolbarComponent, NavbarComponent, FooterComponent, AdminBrandingComponent, AdminToolbarComponent } from './shared/index';
import { AuthService } from './guard/index';
import { ApiService } from './api/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [ApiService],
  directives: [ROUTER_DIRECTIVES, ToolbarComponent, NavbarComponent, FooterComponent, AdminBrandingComponent, AdminToolbarComponent]
})
export class AppComponent {
  constructor(private auth: AuthService){}
}
