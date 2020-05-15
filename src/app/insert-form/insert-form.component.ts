import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log } from '../generator/generator.component'

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  tables = []

  constructor(private tableData: TableDataService) {
    this.tables = tableData.getTables()
  }

  ngOnInit(): void {
    //array of tables, structure is
    //name: string, fields: []
    //fields structure is { fieldname, type }
  }

}
