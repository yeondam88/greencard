import { Component, OnInit, Input } from '@angular/core';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

const URL = '/upload.php';
@Component({
  moduleId: module.id,
  selector: 'photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
  directives: [FILE_UPLOAD_DIRECTIVES]
})
export class PhotoComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
