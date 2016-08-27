import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

declare var moment: any;
@Component({
  moduleId: module.id,
  selector: 'family',
  templateUrl: 'family.component.html',
  styleUrls: ['family.component.css']
})
export class FamilyComponent implements OnInit {
    @Input() application: any;
    @Input() educations: any[];
    @Input() countries: any[];
    @Input() workExperiences: any[];
    @Input() genders: any[];
    @Input() days: any[];
    @Input() months: any[];
    @Input() years: any[];
    @Output() onFamilyComplete = new EventEmitter<any>();
    @Output() onFamilyBack = new EventEmitter<any>();
    private spouse: any;
    private children: any[];
    private family: any;

    ngOnInit(){
        this.spouse = null;
        this.children = [];
        if(this.application.family){
            if(this.application.marital.id == 2){
                if(this.application.family.spouse){
                    this.spouse = this.application.family.spouse;
                }
                else{
                    this.spouse = {
                        firstname: "",
                        lastname: "",
                        education: this.educations[0],
                        experience: this.workExperiences[0],
                        country: this.countries[0],
                        city: "",
                        gender: this.genders[0],
                        birth: {day: this.days[0], month: this.months[0], year: this.years[0]}
                    }
                }
            }

            if(this.application.family.children){
                console.log(this.application.family);
                for(let x = 0; x < this.application.children; x++){
                    if(this.application.family.children[x]){
                        console.log("pushing", this.application.family.children[x]);
                        this.children.push(this.application.family.children[x]);
                    }
                    else{
                        let child = {
                            firstname: "",
                            lastname: "",
                            country: this.countries[0],
                            city: "",
                            gender: this.genders[0],
                            birth: {day: this.days[0], month: this.months[0], year: this.years[0]}
                        }
                        this.children.push(child);
                    }
                }
            }
        }
        else{
            this.newFamily();
        }
    }

    newFamily(){
        if(this.application.marital.id == 2){
            this.spouse = {
                firstname: "",
                lastname: "",
                education: this.educations[0],
                experience: this.workExperiences[0],
                country: this.countries[0],
                city: "",
                gender: this.genders[0],
                birth: {day: this.days[0], month: this.months[0], year: this.years[0]}
            }
        }

        for(let x = 1; x <= this.application.children; x++){
            this.children.push(
                {
                    firstname: "",
                    lastname: "",
                    country: this.countries[0],
                    city: "",
                    gender: this.genders[0],
                    birth: {day: this.days[0], month: this.months[0], year: this.years[0]}
                }
            )
        }
    }

    checkSpouse(){
        if(this.spouse){
            if(this.spouse.firstname.length > 1 &&
            this.spouse.lastname.length > 1 &&
            this.spouse.gender.id && this.spouse.gender != this.genders[0] &&
            this.spouse.education.id && this.spouse.education != this.educations[0] &&
            this.spouse.experience.id && this.spouse.experience != this.workExperiences[0] &&
            this.spouse.country.id && this.spouse.country != this.countries[0] &&
            this.spouse.city.length > 1 &&
            this.spouse.birth.day.id && this.spouse.birth.month.id && this.spouse.birth.year.id){
                this.setBirthday(this.spouse);
                return true
            }
            else{
                return false
            }
        }
        else{
            return true;
        }
    }

    checkChild(child: any){
        if(
            child.firstname.length > 1 &&
            child.lastname.length > 1 &&
            child.gender.id && child.gender != this.genders[0] &&
            child.country.id && child.country != this.countries[0] &&
            child.city.length > 1 &&
            child.birth.day.id && child.birth.month.id && child.birth.year.id
        )
        {
            this.setBirthday(child);
            return true;
        }
        else{
            return false;
        }
    }

    checkChildren(){
        if(this.children.length){
            for(let child of this.children){
                if(!this.checkChild(child)){
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    back(){
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyBack.emit(this.application);
    }

    next(){
        this.family = {};
        this.family.spouse = this.spouse;
        this.family.children = this.children;
        this.application.family = this.family;
        this.onFamilyComplete.emit(this.application);
    }

    setBirthday(member: any){
        member.birthday = moment().year(member.birth.year.id).month(member.birth.month.id-1).date(member.birth.day.id).format('YYYY-MM-DD');
    }
}
