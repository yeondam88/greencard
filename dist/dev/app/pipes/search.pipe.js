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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, search) {
        var searching = false;
        return value;
    };
    SearchPipe = __decorate([
        core_1.Pipe({ name: 'search', pure: false }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9zZWFyY2gucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xEO0lBQ0k7SUFBZ0IsQ0FBQztJQUNqQiw4QkFBUyxHQUFULFVBQVUsS0FBWSxFQUFFLE1BQVc7UUFDL0IsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQU5MO1FBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7O2tCQUFBO0lBT3RDLGlCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxrQkFBVSxhQU10QixDQUFBIiwiZmlsZSI6ImFwcC9waXBlcy9zZWFyY2gucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3NlYXJjaCcsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnlbXSwgc2VhcmNoOiBhbnkpOiBhbnlbXSB7XG4gICAgICAgIGxldCBzZWFyY2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==
