import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'order' })
export class OrderPipe implements PipeTransform {
    constructor() { }
    transform(value: any[], field: string, reverse: boolean): any[] {
		if(value){
			if(!reverse){
				return value.sort((a, b) => {
					if (a[field] > b[field]) {
						return 1;
					}
					if (a[field] < b[field]) {
						return -1;
					}
					return 0;
				})
			}
			else {
				return value.sort((a, b) => {
					if (a[field] > b[field]) {
						return -1;
					}
					if (a[field] < b[field]) {
						return 1;
					}
					return 0;
				})
			}
		}
		else{
			return [];
		}
    }
}