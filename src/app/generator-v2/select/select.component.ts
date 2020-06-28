import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Table } from 'src/app/model/table.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';

interface SelectState {
  table: Table
  statement?: string[]
  fullStatement?: string,
  conditions?: string[]
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() table: Table
  @Input() tables: Table[]
  state: SelectState
  formGroup: FormGroup
  conditions: string[] = []
  conditionIsString: boolean = false

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.state = {
      table: this.table,
      statement: [],
      fullStatement: "",
      conditions: []
    }
    this.formGroup = new FormGroup({
      field: new FormControl(''),
      operand: new FormControl(''),
      value: new FormControl('')
    })
    this.update()
  }
  
  update(): void {
    this.updateSelect()
  }

  updateSelect() {
    this.state.statement = []
    let fields: string = this.state.table.tableFields.length == this.getTableByName(this.state.table.tableName).tableFields.length
      ? '*' : this.state.table.tableFields.join(", ")
    this.state.statement.push("SELECT")
    this.state.statement.push(fields)
    this.state.statement.push("FROM")
    this.state.statement.push(this.state.table.tableName)      
    if(this.state.conditions.length !== 0){
      this.state.statement.push("WHERE")
      this.state.conditions.forEach( condition => {
        this.state.statement.push(condition)
        if(this.state.conditions[this.state.conditions.indexOf(condition)+1] != undefined){
          this.state.statement.push("AND")
        }
      })
    }
      
  }

  appendWord(event){
    console.log(event)
  }
  
  getTableByName = (tablename: string): Table => this.tables.filter(table => table.tableName == tablename)[0]
  
  //-- Full Statement Logic --//
  addMiniToFull() {
    if (this.state.statement.length != 0) {
      this.state.fullStatement += "\n" + this.state.statement.join(" ") + ";"
    }
  }

  clearFull(){
    this.state.fullStatement = ""
  }

  notifyCopied(){
    this.snackBar.open('Copied', null, { duration: 2000 })
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

  toggleConditionChipStyle = (condition: string) => this.state.conditions.includes(condition) ? '#B6C4FF' : 'lightgrey'
  
  dropCondition = (condition: string) => {
    this.deactivateCondition(condition)
    this.conditions.splice(this.conditions.indexOf(condition), 1)
    this.update()
  }

  addCondition() {
    let condition = (
      this.formGroup.value['field'] + " " +
      this.formGroup.value['operand'] + " "
    )
    condition += this.conditionIsString
      ? "'" + this.formGroup.value['value'] + "'"
      : this.formGroup.value['value']

    this.conditions.push(condition)
    this.activateCondition(condition)
    this.update()
  }

  checkboxChange = (event: MatCheckboxChange) => this.conditionIsString = event.checked

}
