import { Component, OnInit } from '@angular/core';
import { TablesInteractor } from '../services/tables-interactor.service';
import { Table } from '../model/table.interface';

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.scss']
})
export class ManageTablesComponent implements OnInit {
  database: string = 'sqlgendb'
  tables = []
  state

  constructor(private tablesInteractor: TablesInteractor) { }

  ngOnInit(): void {
    this.tablesInteractor.getTables().subscribe(data => {
      data.forEach(table => {
        this.tables.push({ tableName: table.tableName, tableFields: table.tableFields, expandFields: true })
      })
    })
    this.state = {
      showTables: false
    }
  }

  toggleTablesShowing = () => this.state.showTables = !this.state.showTables

  toggleFieldsShowing = (table) => {
    table.expandFields = !table.expandFields
  }

}
