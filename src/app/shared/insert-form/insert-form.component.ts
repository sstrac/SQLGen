import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {

  @Input() tables
  formGroup: FormGroup
  tableRelations

  constructor() { }

  ngOnInit(): void {
  }

  tablesAreSet = this.tables != undefined

  submit(){}
}
