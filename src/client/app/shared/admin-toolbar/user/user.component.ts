import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../../guard/index';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponent {
    constructor(private auth: AuthService){}
}