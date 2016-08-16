import { Injectable }          from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }         from './auth.service';

@Injectable()
export class NormalGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) { return true; }

    // If not Logged in
    this.router.navigate(['/']);
    return false;
  }
}