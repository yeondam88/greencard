import { RouterConfig } from '@angular/router';

import { AdminComponent } from './index';
import { ApplicationsComponent, ApplicationsRoutes } from './+applications/index';
import { NewsRoutes } from './+news/index';
import { AuthGuard } from '../guard/index';

export const AdminRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
      path: 'admin',
      component: AdminComponent,
      children: [
          {path: '', component: ApplicationsComponent},
          ...ApplicationsRoutes,
          ...NewsRoutes
      ],
      canActivate: [AuthGuard]
  }
];
