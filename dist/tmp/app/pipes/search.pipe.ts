import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'search', pure: false })
export class SearchPipe implements PipeTransform {
    constructor() { }
    transform(value: any[], search: any): any[] {
        let searching: boolean = false;
        return value;
    }
}
