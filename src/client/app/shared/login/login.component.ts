import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/index';
import { AuthService } from '../../guard/index';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  private credential: any = {email: "", id: ""};
  private error: string;
	@Output() loggedin = new EventEmitter<boolean>();

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  login(credential: any){
    this.api.login(credential).subscribe(
      user =>{
        this.error = null;
        this.auth.login(user);
		    this.loggedin.emit(true);
        this.router.navigate(['applicant']);
      },
      err => {
        this.error = "Email or ID is incorrect";
        setTimeout(() => {
          this.error = null;
        }, 2000);
      }
    )
  }
}
