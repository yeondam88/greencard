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
