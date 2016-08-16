"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var async_1 = require('@angular/core/src/facade/async');
var MockLocationStrategy = (function (_super) {
    __extends(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        _super.call(this);
        this.internalBaseHref = '/';
        this.internalPath = '/';
        this.internalTitle = '';
        this.urlChanges = [];
        this._subject = new async_1.EventEmitter();
    }
    MockLocationStrategy.prototype.simulatePopState = function (url) {
        this.internalPath = url;
        async_1.ObservableWrapper.callEmit(this._subject, new MockPopStateEvent(this.path()));
    };
    MockLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.internalPath;
    };
    MockLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
            return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
    };
    MockLocationStrategy.prototype.pushState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
    };
    MockLocationStrategy.prototype.replaceState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push('replace: ' + externalUrl);
    };
    MockLocationStrategy.prototype.onPopState = function (fn) {
        async_1.ObservableWrapper.subscribe(this._subject, fn);
    };
    MockLocationStrategy.prototype.getBaseHref = function () {
        return this.internalBaseHref;
    };
    MockLocationStrategy.prototype.back = function () {
        if (this.urlChanges.length > 0) {
            this.urlChanges.pop();
            var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
            this.simulatePopState(nextUrl);
        }
    };
    MockLocationStrategy.prototype.forward = function () {
        throw 'not implemented';
    };
    MockLocationStrategy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockLocationStrategy);
    return MockLocationStrategy;
}(common_1.LocationStrategy));
exports.MockLocationStrategy = MockLocationStrategy;
var MockPopStateEvent = (function () {
    function MockPopStateEvent(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    }
    return MockPopStateEvent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Rpbmcvcm91dGVyL21vY2stbG9jYXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHNCQUFnRCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBT2pGO0lBQTBDLHdDQUFnQjtJQVF4RDtRQUNFLGlCQUFPLENBQUM7UUFSVixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0IsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUUxQixhQUFRLEdBQXNCLElBQUksb0JBQVksRUFBRSxDQUFDO0lBSWpELENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4Qix5QkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxXQUE0QjtRQUE1QiwyQkFBNEIsR0FBNUIsbUJBQTRCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDakMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsR0FBUSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV4QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxHQUFRLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFhO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBRXhCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxFQUF3QjtRQUNqQyx5QkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDRSxNQUFNLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFuRUg7UUFBQyxpQkFBVSxFQUFFOzs0QkFBQTtJQW9FYiwyQkFBQztBQUFELENBbkVBLEFBbUVDLENBbkV5Qyx5QkFBZ0IsR0FtRXpEO0FBbkVZLDRCQUFvQix1QkFtRWhDLENBQUE7QUFFRDtJQUdFLDJCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZqQyxRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxVQUFVLENBQUM7SUFDVSxDQUFDO0lBQ3ZDLHdCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUEiLCJmaWxlIjoidGVzdGluZy9yb3V0ZXIvbW9jay1sb2NhdGlvbi1zdHJhdGVneS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9jayBsb2NhdGlvbiBzdHJhdGVneSAodW50aWwgcHJvdmlkZWQgYnkgQGFuZ3VsYXIpXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL21vZHVsZXMvJTQwYW5ndWxhci9jb21tb24vdGVzdGluZy9tb2NrX2xvY2F0aW9uX3N0cmF0ZWd5LnRzXG4gKi9cbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPYnNlcnZhYmxlV3JhcHBlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbi8qKlxuICogQSBtb2NrIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSB0aGF0IGFsbG93cyB0ZXN0cyB0byBmaXJlIHNpbXVsYXRlZFxuICogbG9jYXRpb24gZXZlbnRzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0xvY2F0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBMb2NhdGlvblN0cmF0ZWd5IHtcbiAgaW50ZXJuYWxCYXNlSHJlZjogc3RyaW5nID0gJy8nO1xuICBpbnRlcm5hbFBhdGg6IHN0cmluZyA9ICcvJztcbiAgaW50ZXJuYWxUaXRsZTogc3RyaW5nID0gJyc7XG4gIHVybENoYW5nZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3N1YmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzaW11bGF0ZVBvcFN0YXRlKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSB1cmw7XG4gICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fc3ViamVjdCwgbmV3IE1vY2tQb3BTdGF0ZUV2ZW50KHRoaXMucGF0aCgpKSk7XG4gIH1cblxuICBwYXRoKGluY2x1ZGVIYXNoOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsUGF0aDtcbiAgfVxuXG4gIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaW50ZXJuYWwuc3RhcnRzV2l0aCgnLycpICYmIHRoaXMuaW50ZXJuYWxCYXNlSHJlZi5lbmRzV2l0aCgnLycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJhc2VIcmVmICsgaW50ZXJuYWwuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJhc2VIcmVmICsgaW50ZXJuYWw7XG4gIH1cblxuICBwdXNoU3RhdGUoY3R4OiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxUaXRsZSA9IHRpdGxlO1xuXG4gICAgdmFyIHVybCA9IHBhdGggKyAocXVlcnkubGVuZ3RoID4gMCA/ICgnPycgKyBxdWVyeSkgOiAnJyk7XG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSB1cmw7XG5cbiAgICB2YXIgZXh0ZXJuYWxVcmwgPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpO1xuICAgIHRoaXMudXJsQ2hhbmdlcy5wdXNoKGV4dGVybmFsVXJsKTtcbiAgfVxuXG4gIHJlcGxhY2VTdGF0ZShjdHg6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFRpdGxlID0gdGl0bGU7XG5cbiAgICB2YXIgdXJsID0gcGF0aCArIChxdWVyeS5sZW5ndGggPiAwID8gKCc/JyArIHF1ZXJ5KSA6ICcnKTtcbiAgICB0aGlzLmludGVybmFsUGF0aCA9IHVybDtcblxuICAgIHZhciBleHRlcm5hbFVybCA9IHRoaXMucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XG4gICAgdGhpcy51cmxDaGFuZ2VzLnB1c2goJ3JlcGxhY2U6ICcgKyBleHRlcm5hbFVybCk7XG4gIH1cblxuICBvblBvcFN0YXRlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIE9ic2VydmFibGVXcmFwcGVyLnN1YnNjcmliZSh0aGlzLl9zdWJqZWN0LCBmbik7XG4gIH1cblxuICBnZXRCYXNlSHJlZigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWY7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVybENoYW5nZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy51cmxDaGFuZ2VzLnBvcCgpO1xuICAgICAgdmFyIG5leHRVcmwgPSB0aGlzLnVybENoYW5nZXMubGVuZ3RoID4gMCA/IHRoaXMudXJsQ2hhbmdlc1t0aGlzLnVybENoYW5nZXMubGVuZ3RoIC0gMV0gOiAnJztcbiAgICAgIHRoaXMuc2ltdWxhdGVQb3BTdGF0ZShuZXh0VXJsKTtcbiAgICB9XG4gIH1cblxuICBmb3J3YXJkKCk6IHZvaWQge1xuICAgIHRocm93ICdub3QgaW1wbGVtZW50ZWQnO1xuICB9XG59XG5cbmNsYXNzIE1vY2tQb3BTdGF0ZUV2ZW50IHtcbiAgcG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgdHlwZTogc3RyaW5nID0gJ3BvcHN0YXRlJztcbiAgY29uc3RydWN0b3IocHVibGljIG5ld1VybDogc3RyaW5nKSB7fVxufVxuIl19
