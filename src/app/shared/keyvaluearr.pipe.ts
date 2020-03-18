import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keyvaluearr', pure: false})
export class KeyValueArrPipe implements PipeTransform{
    transform( object: Object, type: string): string[] {
        let result: string[]
        switch(type){
            case 'keys':
                result = Object.keys(object);
                break;
            case 'values':
                result = Object.values(object);
                break;
            default:
                throw Error('key value option not defined for keyvalue pipe')
                break;
        }
        return result;
    }
}