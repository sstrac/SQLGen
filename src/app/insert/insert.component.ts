
import { Component, Input } from '@angular/core';
import { Table, JobVacancy } from '../shared/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html'
})
export class InsertComponent {
  @Input() table: Observable<any>
  columnKeys: string[] 
  columnValues: string[]
  tableName: string

  constructor(){
  }

  ngOnChanges(){
    this.table.subscribe( element => {
      console.log(element)
      this.tableName = element.table_name
      this.columnKeys = Object.keys(element.table_fields)
      this.columnValues = Object.values(element.table_fields)
    })
    // this.columnKeys = Object.keys(this.columns)
    // this.columnValues = Object.values(this.columns)
  }

  logInputKeyValue(){
    console.log(this.table, this.columnKeys, this.columnValues)
  }
}