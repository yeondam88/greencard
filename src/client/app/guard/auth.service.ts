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
    }

	adminLogout() {
		this.isAdmin = false;
		this.admin = null;
	}

	login(user: any){
		this.isLoggedIn = true;
		this.user = user;
	}

	logout(){
		this.isLoggedIn = true;
		this.user = null;
	}
}