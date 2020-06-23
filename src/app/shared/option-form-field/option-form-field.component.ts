import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'option-form-field',
  templateUrl: './option-form-field.component.html',
  styleUrls: ['./option-form-field.component.scss']
})
export class OptionFormFieldComponent implements OnInit {

  @Input() label?: string
  @Input() options: string[]
  @Input() width?
  @Output() selection: EventEmitter<MatSelectChange> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    // let currLabel = changes.label.currentValue
    // let prevLabel = changes.label.previousValue
  }

  selectionChange(event: MatOptionSelectionChange){
    if(event.isUserInput)
      this.selection.emit(event.source.value)
  }
}
