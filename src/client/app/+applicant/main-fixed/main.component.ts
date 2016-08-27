import { Component, Input } from '@angular/core';
import { IdToStringPipe, TitlePipe, EducationPipe, ExperiencePipe, MaritalPipe, GenderPipe } from '../../pipes/index';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  pipes: [IdToStringPipe, TitlePipe, EducationPipe, ExperiencePipe, MaritalPipe, GenderPipe]
})
export class MainComponent {
  @Input() application: any;
  @Input() countries: any[];
}
