import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/index';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NewsService } from './current-news-service/index';
import { OrderPipe } from '../../pipes/index';

@Component({
  moduleId: module.id,
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [OrderPipe]
})
export class NewsComponent implements OnInit {
    private news: any[];
    private orderField: string = 'timestamp';
    private reverseField: boolean = true;
    constructor(private api: ApiService,
        private router: Router,
        private current: NewsService) {}

    ngOnInit(){
        this.api.getNews().subscribe( news => this.news = news)
    }

    goto(article: any){
        this.router.navigate(['/admin/news', article.id]);
        this.current.article = article;
    }

    sort(field: string){
        this.orderField = field;
        this.reverseField = !this.reverseField;
    }
}
