import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'isempty', pure: false})
export class IsEmptyPipe implements PipeTransform{
    transform( object: Object ): boolean {
        return Object.keys(object).length !== 0
    }
}