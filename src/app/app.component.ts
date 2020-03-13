import { Component, Output, Input } from '@angular/core';
import { JobVacancy, DUMMY_JOB_VACANCY, Table } from './shared/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableObservable: Observable<any>

  sendValues(event) {
    let valueArr = event.target.value.split(",")
    let keysOfJobVacancy = Object.keys(DUMMY_JOB_VACANCY)
    let obj: Table = { table_name: '', table_fields: []}
    obj['table_name'] = 'job_vacancy'
    let i = 0;
    while (i != valueArr.length) {
      obj.table_fields[keysOfJobVacancy[i]] = valueArr[i]
      i++
    }
    console.log(obj)
    this.tableObservable = of(obj)
  }

  logFields() {
    this.tableObservable.subscribe(
      element => console.log(element)
    )
  }
}
