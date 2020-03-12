
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fill-fields',
  templateUrl: './fill-fields.component.html'
})
export class FillFieldsComponent {
    @Input() iterateArray: string[]
}
