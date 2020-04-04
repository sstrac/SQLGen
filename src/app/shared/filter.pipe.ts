import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'map', pure: false})
export class FilterPipe implements PipeTransform{
    transform(arr: Array<Object>, filter: string): Object[] {
        if(filter !== undefined){  
            return arr.map(element => element[filter])
        } else {
            return arr
        }
    }
}