import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 1:
				return 'Male';
		    case 2:
		        return 'Female';
            default:
                return '';
		}
    }
}
