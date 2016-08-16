import { RouterConfig } from '@angular/router';

import { NewsComponent } from './index';
import { ArticleComponent } from './article/index';
import { NewArticleComponent } from './new-article/index';

export const NewsRoutes: RouterConfig = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/new',
    component: NewArticleComponent
  },
  {
    path: 'news/:id',
    component: ArticleComponent
  }
];
