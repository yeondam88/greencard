import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../../guard/index';
import { ModalComponent } from'../../modal/index';
import { LoginComponent } from '../../login/index';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  directives: [ModalComponent, LoginComponent]
})
export class UserComponent {
    private showModal: boolean = false;
    constructor(private auth: AuthService){}

    loginModal(){
      this.showModal = true;
    }

    close(){
      this.showModal = false;
    }
}