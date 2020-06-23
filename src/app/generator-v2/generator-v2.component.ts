import { Component, OnInit } from '@angular/core';
import { TablesInteractor } from '../services/tables-interactor.service';
import { Table } from '../model/table.interface';

interface GeneratorState {
  statementType?: string,
  table?: Table,
  statement?: string
  fullStatement?: string,
  conditions?: string[]
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
  conditions: string[] = []
  //Volatile
  state: GeneratorState

  constructor(private tablesInteractor: TablesInteractor) { }

  ngOnInit(): void {
    this.tablesInteractor.getTables().subscribe(data => {
      data.forEach(table => {
        this.tables.push({ tableName: table.tableName, tableFields: table.tableFields })
      })
    })
    this.state = {
      statementType: undefined,
      table: undefined,
      statement: "",
      fullStatement: "",
      conditions: []
    }
  }

  update(): void {
    if(this.selectIsReady()){
      this.updateSelect()
    }
  }

  selectIsReady(): boolean{ 
    return this.tableIsSet() && this.statementTypeIsSet('SELECT')
  }

  updateSelect() {
    let fields: string = this.state.table.tableFields.length == this.getTableByName(this.state.table.tableName).tableFields.length
      ? '*' : this.state.table.tableFields.join(", ")
    this.state.statement = "SELECT " +
      fields + " FROM " +
      this.state.table.tableName +
      this.state.conditions.join(", ") + ";"
  }

  onTableSelect( tablename: string ) {
    let tablefields = this.getCopyTableFields(tablename)
    this.state.table = { tableName: tablename, tableFields: tablefields }
    this.update()
  }

  onStatementSelect(statementType) {
    this.state.statementType = statementType
    this.update()
  }

  tableIsSet = () => this.state.table !== undefined
  statementTypeIsSet = (statementType: string) => this.state.statementType == statementType

  getTableNames = () => this.tables.map(table => table.tableName)

  getTableByName = (tablename: string): Table => this.tables.filter(table => table.tableName == tablename)[0]

  getCopyTableFields = (tablename: string): string[] => {
    return [].concat(this.getTableByName(tablename).tableFields) //creates new array
  }

  //-- Full Statement Logic --//
  addMiniToFull() {
    if (this.state.statement != "") {
      this.state.fullStatement += "\n" + this.state.statement
    }
  }

  //-- Field Chips Logic --//
  dropField = (field: string) => this.state.table.tableFields.splice(this.state.table.tableFields.indexOf(field), 1)
  addField = (field: string) => this.state.table.tableFields.push(field)

  toggleFields(field: string) {
    this.state.table.tableFields.includes(field) ? this.dropField(field) : this.addField(field)
    console.log("state: \n")
    console.log(this.state)
    console.log("static: \n")
    console.log(this.tables)
    this.update()
  }

  toggleChipStyle = (field) => this.state.table.tableFields.includes(field) ? 'pink' : 'lightgrey'

  //-- Conditions Chips Logic --//
  toggleConditionChipStyle = (condition) => this.state.conditions.includes(condition) ? '#CD344E' : 'lightgrey'
}
