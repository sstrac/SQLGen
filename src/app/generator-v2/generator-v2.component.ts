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
  currentFields: string[] //Object reference to currentTable object
  allFields: string[] = [] //copy of currentTable fields

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

  readyUpSelect(){
    if(this.tableIsSet && this.statementTypeIsSet('SELECT')){
      this.setAllFields()
      this.fullStatement = ""
      this.miniStatement = "SELECT * FROM " + this.currentTable.tableName
    }
  }

  updateSelect(){
    let fields: string = this.allFields.length == this.currentFields.length ? '*' : this.currentFields.join(", ")
    this.miniStatement = "SELECT " + 
    fields + " FROM " +
    this.currentTable.tableName + ";"
  }

  readyUpInsert(){}

  updateInsert(){}

  tableIsSet = () => this.currentTable !== undefined
  statementTypeIsSet = (statementType: string) => this.currentStatementType == statementType

  addMiniToFull() {
    if (this.miniStatement != "") {
      this.fullStatement += "\n" + this.miniStatement
    }
  }

  setTable(tablename) {
    this.currentTable = this.getTableByName(tablename)
    this.currentFields = this.getFieldNames(this.currentTable)
    /*TODO: consider using switch as not to call both functions*/
    this.readyUpSelect()
    this.readyUpInsert()
  }

  setStatementType(statementType) {
    this.currentStatementType = statementType
    this.readyUpSelect()
    this.readyUpInsert()
  }

  setAllFields(){
    Object.assign(this.allFields, this.currentFields)
  }

  getTableNames = () => this.tables.map(table => table.tableName)

  getTableByName = (tablename: string): Table => this.tables.filter(table => table.tableName == tablename)[0]

  getFieldNames = (table: Table): string[] => table.tableFields

  //-- Field Chips Logic --//
  dropField = (field: string) => { 
    return this.currentFields.splice(this.currentFields.indexOf(field), 1) 
  }
  addField = (field: string) => this.currentFields.push(field)

  toggleFields(field: string){
    this.currentFields.includes(field) ? this.dropField(field): this.addField(field)
    this.updateSelect()
  }

  toggleChipStyle = (field) => this.currentFields.includes(field) ? 'pink' : 'lightgrey'

}
