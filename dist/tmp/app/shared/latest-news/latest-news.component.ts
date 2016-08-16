import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ApiService } from '../../api/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'latest-news',
  templateUrl: 'latest-news.component.html',
  styleUrls: ['latest-news.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LatestNewsComponent implements OnInit {
  private news: any[];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getNews().subscribe(
      news => this.news = news
    )
  }
}
