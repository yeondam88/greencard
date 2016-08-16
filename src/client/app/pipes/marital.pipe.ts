import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'marital'})
export class MaritalPipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 1:
				return 'Single';
		    case 2:
		        return 'Married';
            default:
                return '';
		}
    }
}
