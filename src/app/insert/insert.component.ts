
import { Component, Input } from '@angular/core';
import { Table, JobVacancy } from '../shared/table';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html'
})
export class InsertComponent {
  @Input() columns: any
  columnKeys: string[] 
  columnValues: string[] 

  constructor(){
  }

  ngOnInit(){
    this.columnKeys = Object.keys(this.columns)
    this.columnValues = Object.values(this.columns)
  }
}