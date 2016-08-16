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
var FamilyComponent = (function () {
    function FamilyComponent() {
        this.onFamilyComplete = new core_1.EventEmitter();
        this.onFamilyBack = new core_1.EventEmitter();
    }
    FamilyComponent.prototype.ngOnInit = function () {
        this.spouse = null;
        this.children = [];
        if (this.application.family) {
            if (this.application.marital.id == 2) {
                if (this.application.family.spouse) {
                    this.spouse = this.application.family.spouse;
                }
                else {
                    this.spouse = {
                        firstname: "",
                        lastname: "",
                        education: this.educations[0],
                        experience: this.workExperiences[0],
                        country: this.countries[0],
                        city: "",
                        gender: this.genders[0],
                        birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
                    };
                }
            }
            if (this.application.family.children) {
                console.log(this.application.family);
                for (var x = 0; x < this.application.children; x++) {
                    if (this.application.family.children[x]) {
                        console.log("pushing", this.application.family.children[x]);
                        this.children.push(this.application.family.children[x]);
                    }
                    else {
                        var child = {
                            firstname: "",
                            lastname: "",
                            country: this.countries[0],
                            city: "",
                            gender: this.genders[0],
                            birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
                        };
                        this.children.push(child);
                    }
                }
            }
        }
        else {
            this.newFamily();
        }
    };
    FamilyComponent.prototype.newFamily = function () {
        if (this.application.marital.id == 2) {
            this.spouse = {
                firstname: "",
                lastname: "",
                education: this.educations[0],
                experience: this.workExperiences[0],
                country: this.countries[0],
                city: "",
                gender: this.genders[0],
                birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
            };
        }
        for (var x = 1; x <= this.application.children; x++) {
            this.children.push({
                firstname: "",
                lastname: "",
                country: this.countries[0],
                city: "",
                gender: this.genders[0],
                birth: { day: this.days[0], month: this.months[0], year: this.years[0] }
            });
        }
    };
    FamilyComponent.prototype.checkSpouse = function () {
        if (this.spouse) {
            if (this.spouse.firstname.length > 1 &&
                this.spouse.lastname.length > 1 &&
                this.spouse.gender.id && this.spouse.gender != this.genders[0] &&
                this.spouse.education.id && this.spouse.education != this.educations[0] &&
                this.spouse.experience.id && this.spouse.experience != this.workExperiences[0] &&
                this.spouse.country.id && this.spouse.country != this.countries[0] &&
                this.spouse.city.length > 1 &&
                this.spouse.birth.day.id && this.spouse.birth.month.id && this.spouse.birth.year.id) {
                this.setBirthday(this.spouse);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    FamilyComponent.prototype.checkChild = function (child) {
        if (child.firstname.length > 1 &&
            child.lastname.length > 1 &&
            child.gender.id && child.gender != this.genders[0] &&
            child.country.id && child.country != this.countries[0] &&
            child.city.length > 1 &&
            child.birth.day.id && child.birth.month.id && child.birth.year.id) {
            this.setBirthday(child);
            return true;
        }
        else {
            return false;
        }
    };
    FamilyComponent.prototype.checkChildren = function () {
        if (this.children.length) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (!this.checkChild(child)) {
                    return false;
                }
            }
            return true;
        }
        return true;
    };
    FamilyComponent.prototype.back = function () {
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyBack.emit(this.application);
    };
    FamilyComponent.prototype.next = function () {
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyComplete.emit(this.application);
    };
    FamilyComponent.prototype.setBirthday = function (member) {
        member.birthday = moment().year(member.birth.year.id).month(member.birth.month.id - 1).date(member.birth.day.id).format('YYYY-MM-DD');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "application", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "educations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "workExperiences", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "genders", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "days", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "months", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FamilyComponent.prototype, "years", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "onFamilyComplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FamilyComponent.prototype, "onFamilyBack", void 0);
    FamilyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'family',
            templateUrl: 'family.component.html',
            styleUrls: ['family.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FamilyComponent);
    return FamilyComponent;
}());
exports.FamilyComponent = FamilyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXBwbHkvZmFtaWx5L2ZhbWlseS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQVUvRTtJQUFBO1FBU2MscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDM0MsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQXdKckQsQ0FBQztJQW5KRyxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO29CQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDakQsQ0FBQztnQkFDRCxJQUFJLENBQUEsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHO3dCQUNWLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFFBQVEsRUFBRSxFQUFFO3dCQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxFQUFFO3dCQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FB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QUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzZEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBaEJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBbUtGLHNCQUFDO0FBQUQsQ0FsS0EsQUFrS0MsSUFBQTtBQWxLWSx1QkFBZSxrQkFrSzNCLENBQUEiLCJmaWxlIjoiYXBwLythcHBseS9mYW1pbHkvZmFtaWx5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZGVjbGFyZSB2YXIgbW9tZW50OiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmYW1pbHknLFxuICB0ZW1wbGF0ZVVybDogJ2ZhbWlseS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmYW1pbHkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZhbWlseUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgYXBwbGljYXRpb246IGFueTtcbiAgICBASW5wdXQoKSBlZHVjYXRpb25zOiBhbnlbXTtcbiAgICBASW5wdXQoKSBjb3VudHJpZXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHdvcmtFeHBlcmllbmNlczogYW55W107XG4gICAgQElucHV0KCkgZ2VuZGVyczogYW55W107XG4gICAgQElucHV0KCkgZGF5czogYW55W107XG4gICAgQElucHV0KCkgbW9udGhzOiBhbnlbXTtcbiAgICBASW5wdXQoKSB5ZWFyczogYW55W107XG4gICAgQE91dHB1dCgpIG9uRmFtaWx5Q29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25GYW1pbHlCYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgcHJpdmF0ZSBzcG91c2U6IGFueTtcbiAgICBwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcbiAgICBwcml2YXRlIGZhbWlseTogYW55O1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5zcG91c2UgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGlmKHRoaXMuYXBwbGljYXRpb24uZmFtaWx5KXtcbiAgICAgICAgICAgIGlmKHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbC5pZCA9PSAyKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwcGxpY2F0aW9uLmZhbWlseS5zcG91c2Upe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwb3VzZSA9IHRoaXMuYXBwbGljYXRpb24uZmFtaWx5LnNwb3VzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcG91c2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkdWNhdGlvbjogdGhpcy5lZHVjYXRpb25zWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogdGhpcy53b3JrRXhwZXJpZW5jZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvdW50cmllc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IHRoaXMuZ2VuZGVyc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpcnRoOiB7ZGF5OiB0aGlzLmRheXNbMF0sIG1vbnRoOiB0aGlzLm1vbnRoc1swXSwgeWVhcjogdGhpcy55ZWFyc1swXX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5hcHBsaWNhdGlvbi5mYW1pbHkuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwbGljYXRpb24uZmFtaWx5KTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5hcHBsaWNhdGlvbi5jaGlsZHJlbjsgeCsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hcHBsaWNhdGlvbi5mYW1pbHkuY2hpbGRyZW5beF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXNoaW5nXCIsIHRoaXMuYXBwbGljYXRpb24uZmFtaWx5LmNoaWxkcmVuW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmFwcGxpY2F0aW9uLmZhbWlseS5jaGlsZHJlblt4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJpZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IHRoaXMuZ2VuZGVyc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXJ0aDoge2RheTogdGhpcy5kYXlzWzBdLCBtb250aDogdGhpcy5tb250aHNbMF0sIHllYXI6IHRoaXMueWVhcnNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLm5ld0ZhbWlseSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3RmFtaWx5KCl7XG4gICAgICAgIGlmKHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbC5pZCA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuc3BvdXNlID0ge1xuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBlZHVjYXRpb246IHRoaXMuZWR1Y2F0aW9uc1swXSxcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlOiB0aGlzLndvcmtFeHBlcmllbmNlc1swXSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvdW50cmllc1swXSxcbiAgICAgICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogdGhpcy5nZW5kZXJzWzBdLFxuICAgICAgICAgICAgICAgIGJpcnRoOiB7ZGF5OiB0aGlzLmRheXNbMF0sIG1vbnRoOiB0aGlzLm1vbnRoc1swXSwgeWVhcjogdGhpcy55ZWFyc1swXX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgeCA9IDE7IHggPD0gdGhpcy5hcHBsaWNhdGlvbi5jaGlsZHJlbjsgeCsrKXtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyaWVzWzBdLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IHRoaXMuZ2VuZGVyc1swXSxcbiAgICAgICAgICAgICAgICAgICAgYmlydGg6IHtkYXk6IHRoaXMuZGF5c1swXSwgbW9udGg6IHRoaXMubW9udGhzWzBdLCB5ZWFyOiB0aGlzLnllYXJzWzBdfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU3BvdXNlKCl7XG4gICAgICAgIGlmKHRoaXMuc3BvdXNlKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc3BvdXNlLmZpcnN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICB0aGlzLnNwb3VzZS5sYXN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICB0aGlzLnNwb3VzZS5nZW5kZXIuaWQgJiYgdGhpcy5zcG91c2UuZ2VuZGVyICE9IHRoaXMuZ2VuZGVyc1swXSAmJlxuICAgICAgICAgICAgdGhpcy5zcG91c2UuZWR1Y2F0aW9uLmlkICYmIHRoaXMuc3BvdXNlLmVkdWNhdGlvbiAhPSB0aGlzLmVkdWNhdGlvbnNbMF0gJiZcbiAgICAgICAgICAgIHRoaXMuc3BvdXNlLmV4cGVyaWVuY2UuaWQgJiYgdGhpcy5zcG91c2UuZXhwZXJpZW5jZSAhPSB0aGlzLndvcmtFeHBlcmllbmNlc1swXSAmJlxuICAgICAgICAgICAgdGhpcy5zcG91c2UuY291bnRyeS5pZCAmJiB0aGlzLnNwb3VzZS5jb3VudHJ5ICE9IHRoaXMuY291bnRyaWVzWzBdICYmXG4gICAgICAgICAgICB0aGlzLnNwb3VzZS5jaXR5Lmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHRoaXMuc3BvdXNlLmJpcnRoLmRheS5pZCAmJiB0aGlzLnNwb3VzZS5iaXJ0aC5tb250aC5pZCAmJiB0aGlzLnNwb3VzZS5iaXJ0aC55ZWFyLmlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJpcnRoZGF5KHRoaXMuc3BvdXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NoaWxkKGNoaWxkOiBhbnkpe1xuICAgICAgICBpZihcbiAgICAgICAgICAgIGNoaWxkLmZpcnN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICBjaGlsZC5sYXN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICBjaGlsZC5nZW5kZXIuaWQgJiYgY2hpbGQuZ2VuZGVyICE9IHRoaXMuZ2VuZGVyc1swXSAmJlxuICAgICAgICAgICAgY2hpbGQuY291bnRyeS5pZCAmJiBjaGlsZC5jb3VudHJ5ICE9IHRoaXMuY291bnRyaWVzWzBdICYmXG4gICAgICAgICAgICBjaGlsZC5jaXR5Lmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIGNoaWxkLmJpcnRoLmRheS5pZCAmJiBjaGlsZC5iaXJ0aC5tb250aC5pZCAmJiBjaGlsZC5iaXJ0aC55ZWFyLmlkXG4gICAgICAgIClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXRCaXJ0aGRheShjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDaGlsZHJlbigpe1xuICAgICAgICBpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrQ2hpbGQoY2hpbGQpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGJhY2soKXtcbiAgICAgICAgdGhpcy5mYW1pbHkgPSB7fTtcbiAgICAgICAgdGhpcy5mYW1pbHkuc3BvdXNlID0gdGhpcy5zcG91c2U7XG4gICAgICAgIHRoaXMuZmFtaWx5LmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5mYW1pbHkgPSB0aGlzLmZhbWlseTtcbiAgICAgICAgdGhpcy5vbkZhbWlseUJhY2suZW1pdCh0aGlzLmFwcGxpY2F0aW9uKTtcbiAgICB9XG5cbiAgICBuZXh0KCl7XG4gICAgICAgIHRoaXMuZmFtaWx5ID0ge307XG4gICAgICAgIHRoaXMuZmFtaWx5LnNwb3VzZSA9IHRoaXMuc3BvdXNlO1xuICAgICAgICB0aGlzLmZhbWlseS5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uZmFtaWx5ID0gdGhpcy5mYW1pbHk7XG4gICAgICAgIHRoaXMub25GYW1pbHlDb21wbGV0ZS5lbWl0KHRoaXMuYXBwbGljYXRpb24pO1xuICAgIH1cblxuICAgIHNldEJpcnRoZGF5KG1lbWJlcjogYW55KXtcbiAgICAgICAgbWVtYmVyLmJpcnRoZGF5ID0gbW9tZW50KCkueWVhcihtZW1iZXIuYmlydGgueWVhci5pZCkubW9udGgobWVtYmVyLmJpcnRoLm1vbnRoLmlkLTEpLmRhdGUobWVtYmVyLmJpcnRoLmRheS5pZCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgfVxufVxuIl19
