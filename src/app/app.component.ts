import { Component, Output, Input } from '@angular/core';
import { Table, JOB_VACANCY_KEYS, JOB_KEYS, PROFILE_KEYS, TABLE_MAPPING } from './shared/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tables: Table[] = []
  observable: Observable<Table>
  obs1 = of(this.tables[1])

  constructor() {
    this.tables.push(
      { table_name: 'job_vacancy', table_fields: {} },
      { table_name: 'job', table_fields: {} }
    )
  }

  ngOnInit(){


  }
  sendValues(event, tablename){
    var cols = JOB_VACANCY_KEYS
    let table = this.getTableByName(tablename)
    let valueArr = event.target.value.split(",")
    for (let i = 0; i != valueArr.length; i++) {
      table.table_fields[cols[i]] = valueArr[i]
    }
    for(const field in table.table_fields) {
      if(table.table_fields[field] === ''){
        delete table.table_fields[field]
      }
    }
    this.overrideChildValues()
    console.log(this.tables)
    this.observable = of(table)
  }

  overrideChildValues(){
    TABLE_MAPPING.forEach(mapping => {
      let parentTable = this.getTableByName(mapping.parentEntity)
      let childTable = this.getTableByName(mapping.childEntity)
      if(parentTable.table_name == mapping.parentEntity
        && childTable.table_name == mapping.childEntity){
          parentTable.table_fields[mapping.parentKey] = childTable.table_fields[mapping.childKey]
        }
    });
  }

  getTableByName(tablename: string): Table {
    let result
    this.tables.forEach(table => {
      if(table.table_name == tablename){
        result = table
      }
    });
    if(result == undefined)
      throw Error('table not found in tables array')
    return result;
  }
}