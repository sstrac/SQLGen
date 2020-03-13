import { Component, Output, Input } from '@angular/core';
import { TABLES } from './job_table_mapping'
import { JobVacancy } from './shared/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//need a mapping

  tableColumns: JobVacancy = {
    id: '12345',
    category: 'something'
  }

  processValues(event){
    //this.insertValues = event.target.value.split(",")
  }

  logFields() {
    console.log(this.tableColumns)
  }
}
