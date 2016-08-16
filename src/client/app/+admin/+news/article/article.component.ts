import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api/index';
import { NewsService } from '../current-news-service/index';

declare var swal: any;
@Component({
  moduleId: module.id,
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {
    private id: string;
    private step: number = 1;
    constructor(
      private current: NewsService, 
      private api: ApiService,
      private route: ActivatedRoute,
      private router: Router) {}
    ngOnInit(){
      this.route.params.subscribe(params => this.id = params['id']);

      if(!this.current.article){
        this.api.getArticle(this.id).subscribe(result => this.current.article = result);
      }
    }

    go(step: number){
        this.step = step;
    }

    save(article: any){
        this.api.putArticle(article).subscribe(
            result => {
                swal("Article Edited", "", "success");
                this.router.navigate(['/admin/news'])
            }
        );
    }
}
