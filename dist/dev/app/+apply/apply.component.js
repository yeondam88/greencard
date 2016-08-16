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
var index_1 = require('../api/index');
var index_2 = require('./navigation/index');
var index_3 = require('./main/index');
var index_4 = require('./address/index');
var index_5 = require('./family/index');
var index_6 = require('./confirmation/index');
var index_7 = require('./affirmation/index');
var index_8 = require('./photo/index');
var ApplyComponent = (function () {
    function ApplyComponent(api) {
        this.api = api;
        this.state = 1;
        this.step = 1;
        this.educations = [
            { id: 0, level: "Select Option", pass: false },
            { id: 1, level: "Middle School or below", pass: false },
            { id: 2, level: "High School", pass: true },
            { id: 3, level: "College", pass: true },
            { id: 4, level: "Grad School", pass: true }
        ];
        this.workExperiences = [
            { id: 0, level: "Select Option", pass: false, finish: false },
            { id: 1, level: "Less than 2 Years", pass: false, finish: true },
            { id: 2, level: "2 Years or More", pass: true, finish: false }
        ];
        this.maritals = [
            { id: 0, response: "Select Option", answer: "Select Option", status: false },
            { id: 1, response: "No", answer: "Single", status: false, },
            { id: 2, response: "Yes", answer: "Married", status: true }
        ];
        this.titles = [
            { id: 0, title: "Select a title" },
            { id: 1, title: "Mr" },
            { id: 2, title: "Ms" },
            { id: 3, title: "Doctor" }
        ];
        this.genders = [
            { id: 0, gender: "Select a gender" },
            { id: 1, gender: "Male" },
            { id: 2, gender: "Female" }
        ];
        this.days = [];
        this.months = [
            { id: 0, month: "Month" },
            { id: 1, month: "JANUARY" },
            { id: 2, month: "FEBRUARY" },
            { id: 3, month: "MARCH" },
            { id: 4, month: "APRIL" },
            { id: 5, month: "MAY" },
            { id: 6, month: "JUNE" },
            { id: 7, month: "JULY" },
            { id: 8, month: "AUGUST" },
            { id: 9, month: "SEPTEMBER" },
            { id: 10, month: "OCTOBER" },
            { id: 11, month: "NOVEMBER" },
            { id: 12, month: "DECEMBER" }
        ];
        this.years = [];
        this.children = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ];
        this.ready = false;
    }
    ApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
            _this.countries.unshift({ 'country': 'Select a country', pass: 0 });
            _this.application = {
                title: _this.titles[0],
                firstname: "",
                lastname: "",
                education: _this.educations[0],
                experience: _this.workExperiences[0],
                country: _this.countries[0],
                city: "",
                marital: _this.maritals[0],
                gender: _this.genders[0],
                address: { line1: "", line2: "", postal: "", city: "", country: _this.countries[0] },
                phone: { country: "", area: "", phone: "" },
                birth: { day: _this.days[0], month: _this.months[0], year: _this.years[0] },
                children: 0,
                spouse: {
                    country: _this.countries[0]
                },
                mother: {
                    country: _this.countries[0]
                },
                father: {
                    country: _this.countries[0]
                }
            };
            _this.ready = true;
        });
        this.days.push({ id: 0, day: 'Day' });
        for (var x = 1; x <= 31; x++) {
            this.days.push({ id: x, day: x });
        }
        this.years.push({ id: 0, year: 'Year' });
        for (var x = 2016; x >= 1900; x--) {
            this.years.push({ id: x, year: x });
        }
    };
    ApplyComponent.prototype.eligible = function () {
        if (this.application.country.pass || this.application.spouse.country.pass || this.application.father.country.pass || this.application.mother.country.pass) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.finished = function () {
        if (this.application.experience.finish || this.application.country.pass || this.application.spouse.country.pass || this.application.mother.country.pass || this.application.father.country.pass) {
            return true;
        }
        if (this.application.father.country != this.countries[0]) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.educationChange = function () {
        this.application.experience = this.workExperiences[0];
        this.application.country = this.countries[0];
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.workChange = function () {
        this.application.country = this.countries[0];
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.appCountryChange = function () {
        this.application.marital = this.maritals[0];
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.maritalChange = function () {
        this.application.spouse.country = this.countries[0];
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.spouseChange = function () {
        this.application.mother.country = this.countries[0];
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.motherChange = function () {
        this.application.father.country = this.countries[0];
    };
    ApplyComponent.prototype.goto = function (state) {
        this.state = state;
    };
    ApplyComponent.prototype.onMainComplete = function (application) {
        this.application = application;
        if (this.application.marital.id == 2 || this.application.children) {
            this.step = 2;
        }
        else {
            this.application.family = null;
            this.step = 3;
        }
    };
    ApplyComponent.prototype.onAddressBack = function (application) {
        this.application = application;
        if (this.application.marital.id == 2 || this.application.children) {
            this.step = 2;
        }
        else {
            this.step = 1;
        }
    };
    ApplyComponent.prototype.onAddressComplete = function (application) {
        this.application = application;
        this.step = 4;
    };
    ApplyComponent.prototype.onFamilyBack = function (application) {
        this.application = application;
        this.step = 1;
    };
    ApplyComponent.prototype.onFamilyComplete = function (application) {
        this.application = application;
        this.step = 3;
    };
    ApplyComponent.prototype.registrationCheck = function () {
        if (this.application.firstname.length > 1 &&
            this.application.lastname.length > 1 &&
            this.application.title.id && this.application.titles != this.titles[0] &&
            this.application.gender.id && this.application.gender != this.genders[0] &&
            this.application.education.id && this.application.education != this.educations[0] &&
            this.application.experience.id && this.application.experience != this.workExperiences[0] &&
            this.application.country.id && this.application.country != this.countries[0] &&
            this.application.marital.id && this.application.marital && this.countries[0] &&
            this.application.email &&
            this.application.confirmEmail &&
            this.application.email === this.application.confirmEmail &&
            this.application.address.line1.length > 1 &&
            this.application.address.postal.length > 1 &&
            this.application.address.city.length > 1 &&
            this.application.address.country.id && this.application.address.country != this.countries[0] &&
            this.application.birth.day.id && this.application.birth.month.id && this.application.birth.year.id) {
            return true;
        }
        return false;
    };
    ApplyComponent.prototype.stepChange = function (step) {
        this.step = step;
    };
    ApplyComponent.prototype.send = function (application) {
        var _this = this;
        application.birthday = moment().year(application.birth.year.id).month(application.birth.month.id - 1).date(application.birth.day.id).format('YYYY-MM-DD');
        this.api.postApplication(application)
            .subscribe(function (result) {
            swal("Application Uploaded", "Your application has been uploaded", "success");
            _this.step = 5;
        }, function (err) {
            swal("Error", err._body, "error");
        });
    };
    ApplyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'apply.component.html',
            styleUrls: ['apply.component.css'],
            directives: [index_2.NavigationComponent, index_3.MainComponent, index_4.AddressComponent, index_5.FamilyComponent, index_6.ConfirmationComponent, index_8.PhotoComponent, index_7.AffirmationComponent]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], ApplyComponent);
    return ApplyComponent;
}());
exports.ApplyComponent = ApplyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXBwbHkvYXBwbHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsc0JBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLHNCQUFvQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3pELHNCQUE4QixjQUFjLENBQUMsQ0FBQTtBQUM3QyxzQkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCxzQkFBZ0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRCxzQkFBc0Msc0JBQXNCLENBQUMsQ0FBQTtBQUM3RCxzQkFBcUMscUJBQXFCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFhL0M7SUFtRUUsd0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEUzQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsZUFBVSxHQUFTO1lBQ3pCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDNUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ3JELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUM7WUFDekMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQztZQUNyQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO1NBQzFDLENBQUM7UUFFTSxvQkFBZSxHQUFTO1lBQzlCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQztZQUMzRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMvRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUM5RCxDQUFBO1FBSU8sYUFBUSxHQUFVO1lBQ3hCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQztZQUMxRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEdBQUc7WUFDMUQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1NBQzFELENBQUM7UUFFTSxXQUFNLEdBQVU7WUFDdEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBQztZQUNoQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztZQUNwQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztZQUNwQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztTQUN6QixDQUFBO1FBRU8sWUFBTyxHQUFVO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7WUFDbEMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUM7WUFDdkIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUM7U0FDMUIsQ0FBQTtRQUVPLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsV0FBTSxHQUFVO1lBQ3RCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ3pCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDO1lBQzFCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1lBQ3JCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQ3RCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQ3RCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQ3hCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQzNCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQzFCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDO1lBQzNCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDO1NBQzVCLENBQUE7UUFFTyxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBRWxCLGFBQVEsR0FBYTtZQUMzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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QUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEosSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2xDLFNBQVMsQ0FDUixVQUFBLE1BQU07WUFDSixJQUFJLENBQUMsc0JBQXNCLEVBQUUsb0NBQW9DLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUUsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQ0EsQ0FBQztJQUNSLENBQUM7SUFsUUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsVUFBVSxFQUFFLENBQUMsMkJBQW1CLEVBQUUscUJBQWEsRUFBRSx3QkFBZ0IsRUFBRSx1QkFBZSxFQUFFLDZCQUFxQixFQUFFLHNCQUFjLEVBQUUsNEJBQW9CLENBQUM7U0FDakosQ0FBQzs7c0JBQUE7SUErUEYscUJBQUM7QUFBRCxDQTlQQSxBQThQQyxJQUFBO0FBOVBZLHNCQUFjLGlCQThQMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2FwcGx5L2FwcGx5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2luZGV4JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzL2luZGV4JztcbmltcG9ydCB7IEZhbWlseUNvbXBvbmVudCB9IGZyb20gJy4vZmFtaWx5L2luZGV4JztcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uL2luZGV4JztcbmltcG9ydCB7IEFmZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hZmZpcm1hdGlvbi9pbmRleCc7XG5pbXBvcnQgeyBQaG90b0NvbXBvbmVudCB9IGZyb20gJy4vcGhvdG8vaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuZGVjbGFyZSB2YXIgc3dhbDogYW55O1xuZGVjbGFyZSB2YXIgbW9tZW50OiBhbnk7IFxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnYXBwbHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwbHkuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbTmF2aWdhdGlvbkNvbXBvbmVudCwgTWFpbkNvbXBvbmVudCwgQWRkcmVzc0NvbXBvbmVudCwgRmFtaWx5Q29tcG9uZW50LCBDb25maXJtYXRpb25Db21wb25lbnQsIFBob3RvQ29tcG9uZW50LCBBZmZpcm1hdGlvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwbHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGFwcGxpY2F0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBzdGVwOiBudW1iZXIgPSAxO1xuXG4gIHByaXZhdGUgZWR1Y2F0aW9uczogYW55W10gPVtcbiAgICB7aWQ6IDAsIGxldmVsOiBcIlNlbGVjdCBPcHRpb25cIiwgcGFzczogZmFsc2V9LFxuICAgIHtpZDogMSwgbGV2ZWw6IFwiTWlkZGxlIFNjaG9vbCBvciBiZWxvd1wiLCBwYXNzOiBmYWxzZX0sXG4gICAge2lkOiAyLCBsZXZlbDogXCJIaWdoIFNjaG9vbFwiLCBwYXNzOiB0cnVlfSxcbiAgICB7aWQ6IDMsIGxldmVsOiBcIkNvbGxlZ2VcIiwgcGFzczogdHJ1ZX0sXG4gICAge2lkOiA0LCBsZXZlbDogXCJHcmFkIFNjaG9vbFwiLCBwYXNzOiB0cnVlfVxuICBdO1xuXG4gIHByaXZhdGUgd29ya0V4cGVyaWVuY2VzOiBhbnlbXSA9W1xuICAgIHtpZDogMCwgbGV2ZWw6IFwiU2VsZWN0IE9wdGlvblwiLCBwYXNzOiBmYWxzZSwgZmluaXNoOiBmYWxzZX0sXG4gICAge2lkOiAxLCBsZXZlbDogXCJMZXNzIHRoYW4gMiBZZWFyc1wiLCBwYXNzOiBmYWxzZSwgZmluaXNoOiB0cnVlIH0sXG4gICAge2lkOiAyLCBsZXZlbDogXCIyIFllYXJzIG9yIE1vcmVcIiwgcGFzczogdHJ1ZSwgZmluaXNoOiBmYWxzZSB9XG4gIF1cblxuICBwcml2YXRlIGNvdW50cmllczogYW55W107XG5cbiAgcHJpdmF0ZSBtYXJpdGFsczogYW55W10gPSBbXG4gICAge2lkOiAwLCByZXNwb25zZTogXCJTZWxlY3QgT3B0aW9uXCIsIGFuc3dlcjogXCJTZWxlY3QgT3B0aW9uXCIsIHN0YXR1czogZmFsc2V9LFxuICAgIHtpZDogMSwgcmVzcG9uc2U6IFwiTm9cIiwgYW5zd2VyOiBcIlNpbmdsZVwiLCBzdGF0dXM6IGZhbHNlLCB9LFxuICAgIHtpZDogMiwgcmVzcG9uc2U6IFwiWWVzXCIsIGFuc3dlcjogXCJNYXJyaWVkXCIsIHN0YXR1czogdHJ1ZX1cbiAgXTtcblxuICBwcml2YXRlIHRpdGxlczogYW55W10gPSBbXG4gICAge2lkOiAwLCB0aXRsZTogXCJTZWxlY3QgYSB0aXRsZVwifSxcbiAgICB7aWQ6IDEsIHRpdGxlOiBcIk1yXCJ9LFxuICAgIHtpZDogMiwgdGl0bGU6IFwiTXNcIn0sXG4gICAge2lkOiAzLCB0aXRsZTogXCJEb2N0b3JcIn1cbiAgXVxuXG4gIHByaXZhdGUgZ2VuZGVyczogYW55W10gPSBbXG4gICAge2lkOiAwLCBnZW5kZXI6IFwiU2VsZWN0IGEgZ2VuZGVyXCJ9LFxuICAgIHtpZDogMSwgZ2VuZGVyOiBcIk1hbGVcIn0sXG4gICAge2lkOiAyLCBnZW5kZXI6IFwiRmVtYWxlXCJ9XG4gIF1cblxuICBwcml2YXRlIGRheXM6IGFueVtdID0gW107XG5cbiAgcHJpdmF0ZSBtb250aHM6IGFueVtdID0gW1xuICAgIHtpZDogMCwgbW9udGg6IFwiTW9udGhcIn0sXG4gICAge2lkOiAxLCBtb250aDogXCJKQU5VQVJZXCJ9LFxuICAgIHtpZDogMiwgbW9udGg6IFwiRkVCUlVBUllcIn0sXG4gICAge2lkOiAzLCBtb250aDogXCJNQVJDSFwifSxcbiAgICB7aWQ6IDQsIG1vbnRoOiBcIkFQUklMXCJ9LFxuICAgIHtpZDogNSwgbW9udGg6IFwiTUFZXCJ9LFxuICAgIHtpZDogNiwgbW9udGg6IFwiSlVORVwifSxcbiAgICB7aWQ6IDcsIG1vbnRoOiBcIkpVTFlcIn0sXG4gICAge2lkOiA4LCBtb250aDogXCJBVUdVU1RcIn0sXG4gICAge2lkOiA5LCBtb250aDogXCJTRVBURU1CRVJcIn0sXG4gICAge2lkOiAxMCwgbW9udGg6IFwiT0NUT0JFUlwifSxcbiAgICB7aWQ6IDExLCBtb250aDogXCJOT1ZFTUJFUlwifSxcbiAgICB7aWQ6IDEyLCBtb250aDogXCJERUNFTUJFUlwifVxuICBdXG5cbiAgcHJpdmF0ZSB5ZWFyczogYW55W10gPSBbXTtcblxuICBwcml2YXRlIGNoaWxkcmVuOiBudW1iZXJbXSA9IFtcbiAgICAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XG4gIF1cblxuICBwcml2YXRlIHJlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFwaS5nZXRDb3VudHJpZXMoKVxuICAgICAgLnN1YnNjcmliZShjb3VudHJpZXMgPT4ge1xuICAgICAgICAgIHRoaXMuY291bnRyaWVzID0gY291bnRyaWVzO1xuICAgICAgICAgIHRoaXMuY291bnRyaWVzLnVuc2hpZnQoeydjb3VudHJ5JzogJ1NlbGVjdCBhIGNvdW50cnknLCBwYXNzOiAwfSk7XG5cbiAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVzWzBdLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiBcIlwiLFxuICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICBlZHVjYXRpb246IHRoaXMuZWR1Y2F0aW9uc1swXSxcbiAgICAgICAgICAgIGV4cGVyaWVuY2U6IHRoaXMud29ya0V4cGVyaWVuY2VzWzBdLFxuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJpZXNbMF0sXG4gICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgbWFyaXRhbDogdGhpcy5tYXJpdGFsc1swXSxcbiAgICAgICAgICAgIGdlbmRlcjogdGhpcy5nZW5kZXJzWzBdLFxuICAgICAgICAgICAgYWRkcmVzczoge2xpbmUxOiBcIlwiLCBsaW5lMjogXCJcIiwgcG9zdGFsOlwiXCIsIGNpdHk6IFwiXCIsIGNvdW50cnk6IHRoaXMuY291bnRyaWVzWzBdfSxcbiAgICAgICAgICAgIHBob25lOiB7Y291bnRyeTogXCJcIiwgYXJlYTogXCJcIiwgcGhvbmU6IFwiXCJ9LFxuICAgICAgICAgICAgYmlydGg6IHtkYXk6IHRoaXMuZGF5c1swXSwgbW9udGg6IHRoaXMubW9udGhzWzBdLCB5ZWFyOiB0aGlzLnllYXJzWzBdfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiAwLFxuICAgICAgICAgICAgc3BvdXNlOiB7XG4gICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyaWVzWzBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW90aGVyOiB7XG4gICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyaWVzWzBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmF0aGVyOiB7XG4gICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyaWVzWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgdGhpcy5kYXlzLnB1c2goe2lkOiAwLCBkYXk6ICdEYXknfSk7XG4gICAgZm9yKGxldCB4ID0gMTsgeCA8PSAzMTsgeCsrKXtcbiAgICAgIHRoaXMuZGF5cy5wdXNoKHtpZDogeCwgZGF5OiB4fSlcbiAgICB9XG5cbiAgICB0aGlzLnllYXJzLnB1c2goe2lkOiAwLCB5ZWFyOiAnWWVhcid9KTtcbiAgICBmb3IobGV0IHggPSAyMDE2OyB4ID49IDE5MDA7IHgtLSl7XG4gICAgICB0aGlzLnllYXJzLnB1c2goe2lkOiB4LCB5ZWFyOiB4fSk7XG4gICAgfVxuICB9XG5cbiAgZWxpZ2libGUoKXtcbiAgICBpZih0aGlzLmFwcGxpY2F0aW9uLmNvdW50cnkucGFzcyB8fCB0aGlzLmFwcGxpY2F0aW9uLnNwb3VzZS5jb3VudHJ5LnBhc3MgfHwgdGhpcy5hcHBsaWNhdGlvbi5mYXRoZXIuY291bnRyeS5wYXNzIHx8IHRoaXMuYXBwbGljYXRpb24ubW90aGVyLmNvdW50cnkucGFzcyl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZmluaXNoZWQoKXtcbiAgICBpZih0aGlzLmFwcGxpY2F0aW9uLmV4cGVyaWVuY2UuZmluaXNoIHx8IHRoaXMuYXBwbGljYXRpb24uY291bnRyeS5wYXNzIHx8IHRoaXMuYXBwbGljYXRpb24uc3BvdXNlLmNvdW50cnkucGFzcyB8fCB0aGlzLmFwcGxpY2F0aW9uLm1vdGhlci5jb3VudHJ5LnBhc3MgfHwgdGhpcy5hcHBsaWNhdGlvbi5mYXRoZXIuY291bnRyeS5wYXNzKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZih0aGlzLmFwcGxpY2F0aW9uLmZhdGhlci5jb3VudHJ5ICE9IHRoaXMuY291bnRyaWVzWzBdKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGVkdWNhdGlvbkNoYW5nZSgpe1xuICAgIHRoaXMuYXBwbGljYXRpb24uZXhwZXJpZW5jZSA9IHRoaXMud29ya0V4cGVyaWVuY2VzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24uY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbCA9IHRoaXMubWFyaXRhbHNbMF07XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5zcG91c2UuY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24ubW90aGVyLmNvdW50cnkgPSB0aGlzLmNvdW50cmllc1swXTtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLmZhdGhlci5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gIH1cblxuICB3b3JrQ2hhbmdlKCl7XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5tYXJpdGFsID0gdGhpcy5tYXJpdGFsc1swXTtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLnNwb3VzZS5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5tb3RoZXIuY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24uZmF0aGVyLmNvdW50cnkgPSB0aGlzLmNvdW50cmllc1swXTtcbiAgfVxuXG4gIGFwcENvdW50cnlDaGFuZ2UoKXtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLm1hcml0YWwgPSB0aGlzLm1hcml0YWxzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24uc3BvdXNlLmNvdW50cnkgPSB0aGlzLmNvdW50cmllc1swXTtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLm1vdGhlci5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5mYXRoZXIuY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICB9XG5cbiAgbWFyaXRhbENoYW5nZSgpe1xuICAgIHRoaXMuYXBwbGljYXRpb24uc3BvdXNlLmNvdW50cnkgPSB0aGlzLmNvdW50cmllc1swXTtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLm1vdGhlci5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5mYXRoZXIuY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICB9XG5cbiAgc3BvdXNlQ2hhbmdlKCl7XG4gICAgdGhpcy5hcHBsaWNhdGlvbi5tb3RoZXIuY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICAgIHRoaXMuYXBwbGljYXRpb24uZmF0aGVyLmNvdW50cnkgPSB0aGlzLmNvdW50cmllc1swXTtcbiAgfVxuICBcblxuICBtb3RoZXJDaGFuZ2UoKXtcbiAgICB0aGlzLmFwcGxpY2F0aW9uLmZhdGhlci5jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gIH1cblxuICBnb3RvKHN0YXRlOiBudW1iZXIpe1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIG9uTWFpbkNvbXBsZXRlKGFwcGxpY2F0aW9uOiBhbnkpe1xuICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICBpZih0aGlzLmFwcGxpY2F0aW9uLm1hcml0YWwuaWQgPT0gMiB8fCB0aGlzLmFwcGxpY2F0aW9uLmNoaWxkcmVuKXtcbiAgICAgIHRoaXMuc3RlcCA9IDI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmZhbWlseSA9IG51bGw7XG4gICAgICB0aGlzLnN0ZXAgPSAzO1xuICAgIH1cbiAgfVxuXG4gIG9uQWRkcmVzc0JhY2soYXBwbGljYXRpb246IGFueSl7XG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgIGlmKHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbC5pZCA9PSAyIHx8IHRoaXMuYXBwbGljYXRpb24uY2hpbGRyZW4pe1xuICAgICAgdGhpcy5zdGVwID0gMjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgfVxuICB9XG5cbiAgb25BZGRyZXNzQ29tcGxldGUoYXBwbGljYXRpb246IGFueSl7XG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgIHRoaXMuc3RlcCA9IDQ7XG4gIH1cblxuICBvbkZhbWlseUJhY2soYXBwbGljYXRpb246IGFueSl7XG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gIH1cblxuICBvbkZhbWlseUNvbXBsZXRlKGFwcGxpY2F0aW9uOiBhbnkpe1xuICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICB0aGlzLnN0ZXAgPSAzO1xuICB9XG5cblxuICByZWdpc3RyYXRpb25DaGVjaygpe1xuICAgIGlmKFxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5maXJzdG5hbWUubGVuZ3RoID4gMSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5sYXN0bmFtZS5sZW5ndGggPiAxICYmXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLnRpdGxlLmlkICYmIHRoaXMuYXBwbGljYXRpb24udGl0bGVzICE9IHRoaXMudGl0bGVzWzBdICYmXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmdlbmRlci5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLmdlbmRlciAhPSB0aGlzLmdlbmRlcnNbMF0gJiZcbiAgICAgIHRoaXMuYXBwbGljYXRpb24uZWR1Y2F0aW9uLmlkICYmIHRoaXMuYXBwbGljYXRpb24uZWR1Y2F0aW9uICE9IHRoaXMuZWR1Y2F0aW9uc1swXSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5leHBlcmllbmNlLmlkICYmIHRoaXMuYXBwbGljYXRpb24uZXhwZXJpZW5jZSAhPSB0aGlzLndvcmtFeHBlcmllbmNlc1swXSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5jb3VudHJ5LmlkICYmIHRoaXMuYXBwbGljYXRpb24uY291bnRyeSAhPSB0aGlzLmNvdW50cmllc1swXSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5tYXJpdGFsLmlkICYmIHRoaXMuYXBwbGljYXRpb24ubWFyaXRhbCAmJiB0aGlzLmNvdW50cmllc1swXSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5lbWFpbCAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5jb25maXJtRW1haWwgJiZcbiAgICAgIHRoaXMuYXBwbGljYXRpb24uZW1haWwgPT09IHRoaXMuYXBwbGljYXRpb24uY29uZmlybUVtYWlsICYmXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmFkZHJlc3MubGluZTEubGVuZ3RoID4gMSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5hZGRyZXNzLnBvc3RhbC5sZW5ndGggPiAxICYmXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmFkZHJlc3MuY2l0eS5sZW5ndGggPiAxICYmXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmFkZHJlc3MuY291bnRyeS5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLmFkZHJlc3MuY291bnRyeSAhPSB0aGlzLmNvdW50cmllc1swXSAmJlxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5iaXJ0aC5kYXkuaWQgJiYgdGhpcy5hcHBsaWNhdGlvbi5iaXJ0aC5tb250aC5pZCAmJiB0aGlzLmFwcGxpY2F0aW9uLmJpcnRoLnllYXIuaWQpXG4gICAgICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGVwQ2hhbmdlKHN0ZXA6IG51bWJlcil7XG4gICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgfVxuXG4gIHNlbmQoYXBwbGljYXRpb246IGFueSl7XG4gICAgYXBwbGljYXRpb24uYmlydGhkYXkgPSBtb21lbnQoKS55ZWFyKGFwcGxpY2F0aW9uLmJpcnRoLnllYXIuaWQpLm1vbnRoKGFwcGxpY2F0aW9uLmJpcnRoLm1vbnRoLmlkLTEpLmRhdGUoYXBwbGljYXRpb24uYmlydGguZGF5LmlkKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLmFwaS5wb3N0QXBwbGljYXRpb24oYXBwbGljYXRpb24pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIHN3YWwoXCJBcHBsaWNhdGlvbiBVcGxvYWRlZFwiLCBcIllvdXIgYXBwbGljYXRpb24gaGFzIGJlZW4gdXBsb2FkZWRcIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgIHRoaXMuc3RlcCA9IDU7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgc3dhbChcIkVycm9yXCIsIGVyci5fYm9keSwgXCJlcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICB9XG5cbn1cbiJdfQ==
