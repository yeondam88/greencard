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
var router_1 = require('@angular/router');
var index_1 = require('./info/index');
var index_2 = require('../../guard/index');
var NavbarComponent = (function () {
    function NavbarComponent(el, auth) {
        this.el = el;
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onScroll();
    };
    NavbarComponent.prototype.onScroll = function () {
        var navHeight = this.el.nativeElement.offsetTop;
        var scrollY = window.scrollY;
        if (scrollY >= navHeight) {
            this.fixed = true;
        }
        else {
            this.fixed = false;
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.InfoComponent],
            host: {
                '(window:scroll)': 'onScroll($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, index_2.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBOEIsY0FBYyxDQUFDLENBQUE7QUFFN0Msc0JBQTRCLG1CQUFtQixDQUFDLENBQUE7QUFlaEQ7SUFFRSx5QkFBb0IsRUFBYyxFQUFVLElBQWlCO1FBQXpDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUUsQ0FBQztJQUNoRSxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDN0IsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUscUJBQWEsQ0FBQztZQUM5QyxJQUFJLEVBQUU7Z0JBQ0osaUJBQWlCLEVBQUUsa0JBQWtCO2FBQ3RDO1NBQ0YsQ0FBQzs7dUJBQUE7SUFrQkYsc0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLHVCQUFlLGtCQWlCM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluZm9Db21wb25lbnQgfSBmcm9tICcuL2luZm8vaW5kZXgnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ndWFyZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBuYXZpZ2F0aW9uIGJhciBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSW5mb0NvbXBvbmVudF0sXG4gIGhvc3Q6IHtcbiAgICAnKHdpbmRvdzpzY3JvbGwpJzogJ29uU2Nyb2xsKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBmaXhlZDogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSl7fVxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMub25TY3JvbGwoKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCl7XG4gICAgbGV0IG5hdkhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZihzY3JvbGxZID49IG5hdkhlaWdodCl7XG4gICAgICB0aGlzLmZpeGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuZml4ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
