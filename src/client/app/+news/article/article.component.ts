import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { ApiService } from '../../api/index';

declare var swal: any;
@Component({
  moduleId: module.id,
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ArticleComponent implements OnInit {
    private id: string;
    private article: any;
    private news: any[];

    constructor(
      private api: ApiService,
      private route: ActivatedRoute) {}

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.api.getArticle(this.id).subscribe(result => this.article = result);
            this.api.getLatestNews().subscribe(result => this.news = result);
        });
    }
}
