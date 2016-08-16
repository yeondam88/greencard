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
var IdToStringPipe = (function () {
    function IdToStringPipe() {
    }
    IdToStringPipe.prototype.transform = function (value, list, attribute) {
        var word = "";
        if (value && list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.id == value) {
                    word = item[attribute];
                    break;
                }
            }
        }
        return word;
    };
    IdToStringPipe = __decorate([
        core_1.Pipe({ name: 'idToString' }), 
        __metadata('design:paramtypes', [])
    ], IdToStringPipe);
    return IdToStringPipe;
}());
exports.IdToStringPipe = IdToStringPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9pZFRvU3RyaW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRDtJQUFBO0lBYUEsQ0FBQztJQVpHLGtDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsSUFBVyxFQUFFLFNBQWlCO1FBQ2xELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2QsR0FBRyxDQUFBLENBQWEsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksQ0FBQztnQkFBakIsSUFBSSxJQUFJLGFBQUE7Z0JBQ1IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQSxDQUFDO29CQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUM7Z0JBQ1YsQ0FBQzthQUNKO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWJMO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxDQUFDOztzQkFBQTtJQWMzQixxQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksc0JBQWMsaUJBYTFCLENBQUEiLCJmaWxlIjoiYXBwL3BpcGVzL2lkVG9TdHJpbmcucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnaWRUb1N0cmluZyd9KVxuZXhwb3J0IGNsYXNzIElkVG9TdHJpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgICB0cmFuc2Zvcm0odmFsdWU6bnVtYmVyLCBsaXN0OiBhbnlbXSwgYXR0cmlidXRlOiBzdHJpbmcpOnN0cmluZ3tcbiAgICAgICAgbGV0IHdvcmQgPSBcIlwiO1xuICAgICAgICBpZih2YWx1ZSAmJiBsaXN0KXtcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiBsaXN0KXtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgd29yZCA9IGl0ZW1bYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3b3JkO1xuICAgIH1cbn1cbiJdfQ==
