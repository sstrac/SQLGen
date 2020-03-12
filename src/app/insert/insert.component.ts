
import { Component, Input } from '@angular/core';
import { Table } from '../shared/table';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html'
})
export class InsertComponent {
    @Input() table: Table
    @Input() values: string[]
}

