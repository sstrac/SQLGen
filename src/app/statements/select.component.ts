import { Component, Input } from '@angular/core';

@Component({
  selector: 'select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
    @Input() table
    @Input() fields
}