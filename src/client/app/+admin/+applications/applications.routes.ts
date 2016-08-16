import { RouterConfig } from '@angular/router';

import { ApplicationsComponent } from './index';
import { ApplicantComponent } from './applicant/index';

export const ApplicationsRoutes: RouterConfig = [
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'applications/:id',
    component: ApplicantComponent
  }
];
