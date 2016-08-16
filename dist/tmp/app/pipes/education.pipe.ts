import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'education'})
export class EducationPipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 1:
				return 'Middle School or Below';
		    case 2:
		        return 'High School';
		    case 3:
		        return 'College';
		    case 4:
		        return 'Grad School';
            default:
                return '';
		}
    }
}
