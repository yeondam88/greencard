import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	isAdmin: boolean = false;
	isLoggedIn: boolean = false;
	admin: any;
	user: any;
	constructor(){}

    adminLogin(user: any){
        this.isAdmin = true;
		this.admin = user;
        let adminString = JSON.stringify(user);
        sessionStorage.setItem('admindata', adminString);
    }

	adminLogout() {
		this.isAdmin = false;
		this.admin = null;
		sessionStorage.clear();
	}

	login(user: any){
		this.isLoggedIn = true;
		this.user = user;
        let userString = JSON.stringify(user);
        sessionStorage.setItem('userdata', userString);
	}

	logout(){
		this.isLoggedIn = true;
		this.user = null;
		sessionStorage.clear();
	}

	checkSession(){
        let admin = JSON.parse(sessionStorage.getItem('admindata'));
        let user = JSON.parse(sessionStorage.getItem('userdata'));
        if(admin){
			this.adminLogin(admin)
        }
		else{
			if(user){
				this.login(user);
			}
		}
	}
}