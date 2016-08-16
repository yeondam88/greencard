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
            templateUrl: 'photo.component.html',
            styleUrls: ['photo.component.css'],
            directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXBwbHkvcGhvdG8vcGhvdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsZ0NBQW1ELGlCQUFpQixDQUFDLENBQUE7QUFFckUsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDO0FBUTFCO0lBQUE7UUFDUyxhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELHdCQUFtQixHQUFXLEtBQUssQ0FBQztRQUNwQywyQkFBc0IsR0FBVyxLQUFLLENBQUM7SUFTaEQsQ0FBQztJQVBRLHFDQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sd0NBQWUsR0FBdEIsVUFBdUIsQ0FBSztRQUMxQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFsQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsVUFBVSxFQUFFLENBQUMsd0NBQXNCLENBQUM7U0FDckMsQ0FBQzs7c0JBQUE7SUFhRixxQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksc0JBQWMsaUJBWTFCLENBQUEiLCJmaWxlIjoiYXBwLythcHBseS9waG90by9waG90by5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RklMRV9VUExPQURfRElSRUNUSVZFUywgRmlsZVVwbG9hZGVyfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xuXG5jb25zdCBVUkwgPSAnL3VwbG9hZC5waHAnO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncGhvdG8nLFxuICB0ZW1wbGF0ZVVybDogJ3Bob3RvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Bob3RvLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW0ZJTEVfVVBMT0FEX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFBob3RvQ29tcG9uZW50IHtcbiAgcHVibGljIHVwbG9hZGVyOkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoe3VybDogVVJMfSk7XG4gIHB1YmxpYyBoYXNCYXNlRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGhhc0Fub3RoZXJEcm9wWm9uZU92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBmaWxlT3ZlckJhc2UoZTphbnkpOnZvaWQge1xuICAgIHRoaXMuaGFzQmFzZURyb3Bab25lT3ZlciA9IGU7XG4gIH1cblxuICBwdWJsaWMgZmlsZU92ZXJBbm90aGVyKGU6YW55KTp2b2lkIHtcbiAgICB0aGlzLmhhc0Fub3RoZXJEcm9wWm9uZU92ZXIgPSBlO1xuICB9XG59XG4iXX0=
