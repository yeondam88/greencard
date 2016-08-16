import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LatestNewsComponent } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css'],
  directives: [ROUTER_DIRECTIVES, LatestNewsComponent]
})
export class NewsComponent {
  private news: any[];
  constructor() {}
}
