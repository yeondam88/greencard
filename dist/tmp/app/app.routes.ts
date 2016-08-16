import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { ApplyRoutes } from './+apply/index';
import { QnaRoutes } from './+qna/index';
import { NewsRoutes } from './+news/index';
import { BlogsRoutes } from './+blogs/index';
import { ContactRoutes } from './+contact/index';
import { AdminRoutes } from './+admin/index';
import { KeyinRoutes } from './+keyin/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...ApplyRoutes,
  ...QnaRoutes,
  ...NewsRoutes,
  ...BlogsRoutes,
  ...ContactRoutes,
  ...AdminRoutes,
  ...KeyinRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
