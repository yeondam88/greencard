"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('ng2-file-upload');
var URL = '/upload.php';
var PhotoComponent = (function () {
    function PhotoComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    PhotoComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    PhotoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'photo',
            template: "<!-- Main Content --> <div id=\"main-container\">     <div class=\"content\">         <div class=\"row\">             <div class=\"col-sm-12\">                 <h3>Select files</h3>                 <div ng2FileDrop                     [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"                     (fileOver)=\"fileOverBase($event)\"                     [uploader]=\"uploader\"                     class=\"well my-drop-zone\">                     Base drop zone                 </div>                  Multiple                 <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>             </div>             <div class=\"col-sm-12\">                 <h3>Upload queue</h3>                 <table class=\"table table-bordered\">                     <thead>                     <tr>                         <th width=\"50%\">Name</th>                         <th>Size</th>                         <th>Progress</th>                         <th>Status</th>                         <th>Actions</th>                     </tr>                     </thead>                     <tbody>                     <tr *ngFor=\"let item of uploader.queue\">                         <td><strong></strong></td>                         <td *ngIf=\"uploader.isHTML5\" nowrap>0.00 MB</td>                         <td *ngIf=\"uploader.isHTML5\">                             <div class=\"progress\" style=\"margin-bottom: 0;\">                                 <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>                             </div>                         </td>                         <td class=\"text-center\">                             <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>                             <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>                             <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>                         </td>                         <td nowrap>                             <button type=\"button\" class=\"btn btn-success btn-xs\"                                     (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">                                 <span class=\"glyphicon glyphicon-upload\"></span> Upload                             </button>                             <button type=\"button\" class=\"btn btn-warning btn-xs\"                                     (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">                                 <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel                             </button>                             <button type=\"button\" class=\"btn btn-danger btn-xs\"                                     (click)=\"item.remove()\">                                 <span class=\"glyphicon glyphicon-trash\"></span> Remove                             </button>                         </td>                     </tr>                     </tbody>                 </table>                  <div>                     <div>                         Queue progress:                         <div class=\"progress\" style=\"\">                             <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>                         </div>                     </div>                     <button type=\"button\" class=\"btn btn-success btn-s\"                             (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">                         <span class=\"glyphicon glyphicon-upload\"></span> Upload all                     </button>                     <button type=\"button\" class=\"btn btn-warning btn-s\"                             (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">                         <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all                     </button>                     <button type=\"button\" class=\"btn btn-danger btn-s\"                             (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">                         <span class=\"glyphicon glyphicon-trash\"></span> Remove all                     </button>                 </div>              </div>         </div>     </div> </div>",
            styles: [".my-drop-zone{border:3px dotted #d3d3d3}.nv-file-over{border:3px dotted red}.another-file-over-class{border:3px dotted green}"],
            directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
