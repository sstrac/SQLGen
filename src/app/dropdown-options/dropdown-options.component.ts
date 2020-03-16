import { Component, Input } from '@angular/core'

@Component({
    selector: 'dropdown-options',
    templateUrl: './dropdown-options.component.html'
  })
  export class DropdownOptionsComponent {
      @Input() tables
      @Input() sendValues
  }