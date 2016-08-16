import { Injectable }          from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }         from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAdmin) {
      console.log("yes admin");
      return true; 
    }


    console.log("not admin");
    // If not Logged in
    this.router.navigate(['/keyin']);
    return false;
  }
}