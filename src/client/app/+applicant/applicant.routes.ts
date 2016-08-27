import { RouterConfig } from '@angular/router';

import { ApplicantComponent } from './index';
import { NormalGuard } from '../guard/index';

export const ApplicantRoutes: RouterConfig = [
  {
      path: 'applicant',
      component: ApplicantComponent,
      canActivate: [NormalGuard]
  }
];
