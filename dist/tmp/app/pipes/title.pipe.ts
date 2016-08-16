import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'title'})
export class TitlePipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 1:
				return 'Mr';
		    case 2:
		        return 'Ms';
		    case 3:
		        return 'Doctor';
            default:
                return '';
		}
    }
}
