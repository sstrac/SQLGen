import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log, buffArrayWithSeperator } from '../generator/generator.component'
import { FormGroup, FormControl } from '@angular/forms';
import * as TABLE_RELATIONS from '../../assets/table_relations.json'
import { UUID } from 'angular2-uuid'

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  tables = []
  table_relations = TABLE_RELATIONS.default
  statements = ''
  formGroup: FormGroup
  statementConfig = {}

  constructor(private tableData: TableDataService) {
  }

  autoFill() {
    this.tables.forEach(table => {
      let indexOfTable = this.tables.indexOf(table)
      table.fields.forEach(field => {
        let indexOfField = this.tables[indexOfTable].fields.indexOf(field)
        let autogen_type = this.tables[indexOfTable].fields[indexOfField].autogen_type
        if (autogen_type != undefined) {
          if (autogen_type == 'uuid')
            this.formGroup[field.formControlName] = this.genUUID()
        }
      })
    })
  }

  submit() {
    this.generateInsertStatement()
  }

  ngOnInit(): void {
    this.tables = this.tableData.getTables()

    let group = {}
    this.tables.forEach(table => {
      let indexOfTable = this.tables.indexOf(table)
      table.fields.forEach(field => {
        let indexOfField = this.tables[indexOfTable].fields.indexOf(field)
        //create form control name e.g. PROFILE_id
        let formControlName = table.name + '_' + field.fieldname
        //apply formControlName to existing tables
        this.tables[indexOfTable].fields[indexOfField].formControlName = formControlName
        group[formControlName] = new FormControl('');
      })
    })
    this.formGroup = new FormGroup(group);
  }

  genUUID() {
    return UUID.UUID().replace(/-/gi, "")
  }

  generateInsertStatement() {
    this.tables.forEach(table => {
      let formFieldValues: string[] = []
      let formFieldNames = Object.keys(this.formGroup.value).filter(value => value.includes(table.name + '_'))
      formFieldNames.forEach(fieldname => formFieldValues.push(this.formGroup.value[fieldname]))
      let fieldNames = formFieldNames.map(fieldname => fieldname.replace(table.name + '_', ''))
      this.statements += "INSERT INTO ".concat(table.name + " (")
        .concat(buffArrayWithSeperator(fieldNames, ","))
        .concat(") VALUES ('")
        .concat(buffArrayWithSeperator(formFieldValues, "','"))
        .concat("');\n")
    })
  }

  clearStatements() {
    this.statements = ''
  }
}
