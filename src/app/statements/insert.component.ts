import { Component, Input } from '@angular/core';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html',
})
export class InsertComponent {
    @Input() table
    @Input() fields
    @Input() field_values
}