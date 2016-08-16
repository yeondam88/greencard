import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ApplicationService } from './+applications/current-application-service/index';
import { NewsService } from './+news/current-news-service/index';

@Component({
  moduleId: module.id,
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ApplicationService, NewsService]
})
export class AdminComponent {
    constructor() {}
}
