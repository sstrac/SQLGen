import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log, buffStringWithSeperator, buffArrayWithSeperator } from '../generator/generator.component'
import { FormGroup, FormControl } from '@angular/forms';
import * as TABLE_RELATIONS from '../../assets/table_relations.json'

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  tables = []
  statements = ''
  formGroup: FormGroup
  statementConfig = {}

  constructor(private tableData: TableDataService) {
  }

  submit() {
    this.generateInsertStatement()
  }

  ngOnInit(): void {
    this.tables = this.tableData.getTables()

    let group = {}
    this.tables.forEach(table => {
      table.fields.forEach(field => {
        group[table.name + '_' + field.fieldname] = new FormControl('');
      })
    })
    this.formGroup = new FormGroup(group);
  }

  generateInsertStatement() {
    //set statementConfig like json
    /**
     * {
     *  name: Books
     * fields: 
     *  { field: value, field: value }
     * }
     */
    this.tables.forEach(table => {
      let formFieldValues : string[] = []
      let formFieldNames = Object.keys(this.formGroup.value).filter(value => value.includes(table.name + '_'))
      formFieldNames.forEach(fieldname => formFieldValues.push(this.formGroup.value[fieldname]))
      let fieldNames = formFieldNames.map( fieldname =>fieldname.replace(table.name + '_', '' ))
      this.statements += "INSERT INTO ".concat(table.name + " (")
      .concat(buffArrayWithSeperator(fieldNames, ","))
      .concat(") VALUES ('")
      .concat(buffArrayWithSeperator(formFieldValues, "','"))
      .concat("');\n")
    })
  }
  
  clearStatements(){
    this.statements = ''
  }

  getRelatedField(formFieldName): FormControl{
    let link1s = TABLE_RELATIONS.default.mappings.filter( relation => relation.link1 )
    let location = link1s.indexOf(formFieldName)
    return this.formGroup[TABLE_RELATIONS.default.mappings[location].link2]
  }

}
