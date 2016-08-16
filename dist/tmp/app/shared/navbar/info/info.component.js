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
var InfoComponent = (function () {
    function InfoComponent(el) {
        this.el = el;
        this.open = false;
        this.state = 1;
    }
    InfoComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.open = false;
        }
    };
    InfoComponent.prototype.toggleInfo = function () {
        this.open = !this.open;
    };
    InfoComponent.prototype.changeState = function () {
        this.state++;
        if (this.state > 2) {
            this.state = 1;
        }
    };
    InfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'info',
            template: "<div id=\"info-icon\" (click)=\"toggleInfo()\"><i class=\"fa fa-info\"></i></div> <ul *ngIf=\"open\"> \t<li> \t\t<i class=\"fa fa-phone\"></i> \t\t<div> \t\t\t<span class=\"ititle\">Call us at</span> <br /> \t\t\t<strong>949-660-0020</strong> \t\t</div> \t</li> \t<li> \t\t<i class=\"fa fa-map-signs\" (click)=\"changeState()\"></i> \t\t<div class=\"ititle\"> \t\t\t<div *ngIf=\"state == 1\"> \t\t\t\t3731 Wilshire Blvd <br /> \t\t\t\tSuite 612 <br /> \t\t\t\tLos Angeles <br /> \t\t\t\tCalifornia - 90010 USA \t\t\t</div> \t\t\t<div *ngIf=\"state == 2\"> \t\t\t\tExecutive Park <br /> \t\t\t\tSuite 275, Irvine <br /> \t\t\t\tCalifornia - 92614 USA \t\t\t</div> \t\t</div> \t</li> \t<li> \t\t<i class=\"fa fa-clock-o\"></i> \t\t<div> \t\t\t<span class=\"ititle\">Working Hours</span> <br /> \t\t\t<strong>Mon-Sat <br /> \t\t\t09:00 to 17:00 PST</strong> \t\t</div> \t</li> </ul>",
            styles: [":host{position:relative}#info-icon{width:40px;height:40px;text-align:center;line-height:40px;color:#fff;display:inline-block;background-color:#8d1812}.ititle{opacity:.6}ul{position:absolute;width:250px;top:50px;right:0;z-index:9;margin:0;list-style-type:none;background-color:#8d1812}li{padding:15px 25px;border-bottom:1px solid rgba(0,0,0,.1);color:#fff;font-size:14px;overflow:overlay}li>i{font-size:30px;margin:12px 20px 0 0;width:25px}li>div,li>i{float:left}"],
            host: {
                '(document:click)': 'onClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
