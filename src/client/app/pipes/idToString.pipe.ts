import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'idToString'})
export class IdToStringPipe implements PipeTransform{
    transform(value:number, list: any[], attribute: string):string{
        let word = "";
        if(value && list){
            for(let item of list){
                if(item.id == value){
                    word = item[attribute];
                    break;
                }
            }
        }
        return word;
    }
}
