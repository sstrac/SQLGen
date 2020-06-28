import { Component, OnInit, EventEmitter } from '@angular/core';
import { TablesInteractor } from '../services/tables-interactor.service';
import { Table } from '../model/table.interface';

interface GeneratorState {
  statementType?: string,
  table?: Table
}

@Component({
  selector: 'app-generator-v2',
  templateUrl: './generator-v2.component.html',
  styleUrls: ['./generator-v2.component.scss']
})
export class GeneratorV2Component implements OnInit {
  //Non-volatile data
  statementTypes = ['SELECT', 'INSERT']
  tables: Table[] = []
  state: GeneratorState
  updateChild = new EventEmitter()

  constructor(private tablesInteractor: TablesInteractor) { }

  ngOnInit(): void {
    this.tablesInteractor.getTables().subscribe(data => {
      data.forEach(table => {
        this.tables.push({ tableName: table.tableName, tableFields: table.tableFields })
      })
    })
    this.state = {
      statementType: undefined,
      table: undefined
    }
  }

  selectIsReady(): boolean {
    return this.tableIsSet() && this.statementTypeIsSet('SELECT')
  }  

  onTableSelect(tablename: string) {
    let tablefields = this.getCopyTableFields(tablename)
    this.state.table = { tableName: tablename, tableFields: tablefields }
  }

  onStatementSelect(statementType) {
    this.state.statementType = statementType
  }

  tableIsSet = () => this.state.table !== undefined
  statementTypeIsSet = (statementType: string) => this.state.statementType == statementType

  getTableNames = () => this.tables.map(table => table.tableName)

  getTableByName = (tablename: string): Table => this.tables.filter(table => table.tableName == tablename)[0]

  getCopyTableFields = (tablename: string): string[] => {
    return [].concat(this.getTableByName(tablename).tableFields) //creates new array
  }
}