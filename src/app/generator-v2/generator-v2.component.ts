import { Component, OnInit, OnChanges } from '@angular/core';
import { TablesInteractor } from '../services/tables-interactor.service';
import { Table } from '../model/table.interface';
import { TagContentType, removeSummaryDuplicates } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-generator-v2',
  templateUrl: './generator-v2.component.html',
  styleUrls: ['./generator-v2.component.scss']
})
export class GeneratorV2Component implements OnInit{

  statementTypes = ['SELECT', 'INSERT']
  currentStatementType: string
  tables: Table[] = []
  currentTable: Table

  fullStatement: string
  miniStatement: string

  constructor(private tablesInteractor: TablesInteractor) { }

  ngOnInit(): void {
    this.tablesInteractor.getTables().subscribe(data => {
      data.forEach(table => {
        this.tables.push({ tableName: table.tableName, tableFields: table.tableFields })
      })
    })
  }

  readyUp(){
    if(this.tableIsSet() && this.statementTypeIsSet()){
      this.setBaseMiniSelectStatement()
    }
  }

  setBaseMiniSelectStatement() {
    this.miniStatement = "SELECT * FROM " + this.currentTable.tableName
  }

  addMiniToFull() {
    if (this.miniStatement != "") {
      this.fullStatement += "\n" + this.miniStatement
    }
  }

  setTable(tablename) {
    this.currentTable = this.getTableByName(tablename)
    this.readyUp()
  }

  tableIsSet = (): boolean => {
    return this.currentTable !== undefined
  }

  setStatementType(statementType) {
    this.currentStatementType = statementType
    this.readyUp()
  }

  statementTypeIsSet = () => {
    return this.currentStatementType !== undefined
  }

  getTableNames = () => {
    return this.tables.map(table => table.tableName)
  }

  getTableByName = (tablename: string): Table => {
    return this.tables.filter(table => table.tableName == tablename)[0]
  }

  getFieldNames = (table: Table): string[] => {
    return table.tableFields
  }

}
