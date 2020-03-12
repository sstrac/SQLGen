import { Component, Output, Input } from '@angular/core';
import { jobTable } from './job_table_mapping'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//need a mapping

  jobValues: string[] = []
  jobTable = jobTable

  processInput(event){
    this.jobValues = event.target.value.split(",")
  }

  logFields() {
    console.log(this.jobValues)
  }
}
