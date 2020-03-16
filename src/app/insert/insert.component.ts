
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../shared/table';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html'
})
export class InsertComponent {
  @Input() table: Observable<any>
  columnKeys: string[] 
  columnValues: string[]
  tableName: string

  ngOnChanges(){
    this.table.subscribe( element => {
      this.tableName = element.name
      this.columnKeys = Object.keys(element.fields)
      this.columnValues = Object.values(element.fields)
    })
  }
}