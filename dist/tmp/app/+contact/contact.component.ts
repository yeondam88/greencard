import { Component, OnInit, ElementRef } from '@angular/core';
import { GooglemapComponent } from './googlemap/index';

@Component({
  moduleId: module.id,
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives: [GooglemapComponent]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
