import { RouterConfig } from '@angular/router';

import { NewsComponent } from './index';
import { ArticleComponent } from './article/index';

export const NewsRoutes: RouterConfig = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: ArticleComponent
  }
];
