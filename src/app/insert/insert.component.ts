
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Table } from '../shared/table.interface';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html'
})
export class InsertComponent {
  columnKeys: string[] 
  columnValues: string[]
  tableName: string

  updateSQL(table){
    console.log(table)
      // this.tableName = table.name
      // this.columnKeys = Object.keys(table.fields)
      // this.columnValues = Object.values(table.fields)

  }
}