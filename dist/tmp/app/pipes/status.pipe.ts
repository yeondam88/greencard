import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform{
    transform(value:number):string{
        switch(+value) {
			case 0:
				return 'Unpaid';
			case 1:
				return 'In Progress';
		    case 2:
		        return 'Submitted';
		    case 3:
		        return 'Denied';
		    case 4:
		        return 'Accepted';
            default:
                return '';
		}
    }
}
