import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LatestNewsComponent } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES, LatestNewsComponent]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
