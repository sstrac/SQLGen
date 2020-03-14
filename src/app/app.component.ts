import { Component, Output, Input } from '@angular/core';
import { Table, JOB_VACANCY_KEYS, JOB_KEYS, PROFILE_KEYS } from './shared/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  centralTable: Table
  centralTableObs
  secondTableObs

  ngOnInit() {
    this.centralTable = { table_name: '', table_fields: [] }
  }

  sendValues(event, tablename, sharedValues?) {
    switch (tablename) {
      case 'job_vacancy': {
        this.sendValuesToCentralTable(event, tablename, JOB_VACANCY_KEYS)
        this.centralTableObs = of(this.centralTable)
        break;
      }
      case 'job': {
        let table = this.sendValuesToTable(event, tablename, JOB_KEYS)
        console.log(sharedValues)
        this.secondTableObs = of(table)
        break;
      }
    }
  }

  sendValuesToTable(event, tablename, cols): Table {
    let table: Table = { table_name: tablename, table_fields: [] }
    let valueArr = event.target.value.split(",")
    for (let i = 0; i != valueArr.length; i++) {
      table.table_fields[cols[i]] = valueArr[i]
    }
    return table
  }

  sendValuesToCentralTable(event, tablename, cols) {
    this.centralTable.table_name = tablename
    let valueArr = event.target.value.split(",")
    for (let i = 0; i != valueArr.length; i++) {
      this.centralTable.table_fields[cols[i]] = valueArr[i]
    }
  }

  logFields() {
    this.centralTableObs.subscribe(
      element => console.log(element)
    )
    this.secondTableObs.subscribe(
      element => console.log(element)
    )
  }
}