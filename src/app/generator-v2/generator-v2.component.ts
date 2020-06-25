import { Component, OnInit } from '@angular/core';
import { TablesInteractor } from '../services/tables-interactor.service';
import { Table } from '../model/table.interface';
import { FormGroup, FormControl } from '@angular/forms';

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
  formGroup: FormGroup

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
    this.formGroup = new FormGroup({
      field: new FormControl(''),
      operand: new FormControl(''),
      value: new FormControl('')
    })
  }

  update(): void {
    if (this.selectIsReady()) {
      this.updateSelect()
    }
  }

  selectIsReady(): boolean {
    return this.tableIsSet() && this.statementTypeIsSet('SELECT')
  }

  updateSelect() {
    let fields: string = this.state.table.tableFields.length == this.getTableByName(this.state.table.tableName).tableFields.length
      ? '*' : this.state.table.tableFields.join(", ")
    this.state.statement = "SELECT " +
      fields + " FROM " +
      this.state.table.tableName
    if(this.state.conditions.length !== 0){
      this.state.statement += " WHERE " + this.state.conditions.join(" AND ")
    }
      
  }

  onTableSelect(tablename: string) {
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
      this.state.fullStatement += "\n" + this.state.statement + ";"
    }
  }

  //-- Field Chips Logic --//
  deactivateField = (field: string) => this.state.table.tableFields.splice(this.state.table.tableFields.indexOf(field), 1)
  activateField = (field: string) => this.state.table.tableFields.push(field)

  toggleField(field: string) {
    this.state.table.tableFields.includes(field) ? this.deactivateField(field) : this.activateField(field)
    this.update()
  }

  toggleFieldChipStyle = (field: string) => this.state.table.tableFields.includes(field) ? 'pink' : 'lightgrey'

  //-- Conditions Chips Logic --//
  activateCondition = (condition: string) => this.state.conditions.push(condition)

  deactivateCondition = (condition: string) => this.state.conditions.splice(this.state.conditions.indexOf(condition), 1)

  toggleCondition(condition: string){
    /*TODO: Block the ability to add already existing condition*/
    this.state.conditions.includes(condition) ? this.deactivateCondition(condition) : this.activateCondition(condition)
    this.update()
  }

  toggleConditionChipStyle = (condition: string) => this.state.conditions.includes(condition) ? '#B5F6D6' : 'lightgrey'
  
  dropCondition = (condition: string) => {
    this.deactivateCondition(condition)
    this.conditions.splice(this.conditions.indexOf(condition), 1)
    this.update()
  }

  addCondition() {
    let condition = (
      this.formGroup.value['field'] + " " +
      this.formGroup.value['operand'] + " " +
      this.formGroup.value['value']
    )
    this.conditions.push(condition)
    this.activateCondition(condition)
    this.update()
  }
}