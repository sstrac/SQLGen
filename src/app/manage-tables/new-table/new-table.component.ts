import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {
  tableName: String
  fields: string[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  addTable(){
    console.log(this.tableName)
  }
  addField = (field: string) => field != "" ? this.fields.push(field) : undefined
}
