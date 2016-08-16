import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api/index';
import { Router } from '@angular/router';

declare var swal: any;
@Component({
  moduleId: module.id,
  templateUrl: 'new-article.component.html',
  styleUrls: ['new-article.component.css']
})
export class NewArticleComponent {
    private article: any = {title: "", heading: "", body: ""};
    private step: number = 1;
    constructor(private api: ApiService, private router: Router) {}

    go(step: number){
        this.step = step;
    }

    save(article: any){
        this.api.postArticle(article).subscribe(
            result => {
                swal("Article Edited", "", "success");
                this.router.navigate(['/admin/news'])
            }
        );
    }
}
