import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'links',
  templateUrl: 'links.component.html',
  directives: [ ROUTER_DIRECTIVES]
})
export class LinksComponent {}