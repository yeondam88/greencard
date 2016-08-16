import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'experience'})
export class ExperiencePipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 1:
				return 'Less than 2 Years';
		    case 2:
		        return '2 Years or More';
            default:
                return '';
		}
    }
}
