import { Component } from '@angular/core';
import { ApiService } from '../api/index';
import { AuthService } from '../guard/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'keyin.component.html',
  styleUrls: ['keyin.component.css']
})
export class KeyinComponent {
  private credential: any = {username: "", password: ""};
  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  login(credential: any){
    this.api.adminLogin(credential).subscribe(
      user =>{
        this.auth.adminLogin(user);
        this.router.navigate(['/admin']);
      }
    )
  }
}
