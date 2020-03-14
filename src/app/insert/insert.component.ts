
import { Component, Input } from '@angular/core';
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

  ngOnChanges(){
    this.table.subscribe( element => {
      this.tableName = element.table_name
      this.columnKeys = Object.keys(element.table_fields)
      this.columnValues = Object.values(element.table_fields)
    })
  }
}