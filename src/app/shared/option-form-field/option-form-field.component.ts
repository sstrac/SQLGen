import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'option-form-field',
  templateUrl: './option-form-field.component.html',
  styleUrls: ['./option-form-field.component.scss']
})
export class OptionFormFieldComponent implements OnInit {

  @Input() label?: string
  @Input() options: string[]
  @Input() iterationMapping?
  @Output() selectionChange? = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    // let currLabel = changes.label.currentValue
    // let prevLabel = changes.label.previousValue
  }

  onSelectionChange(domElement){
    this.selectionChange.emit(domElement.value)
  }

}
