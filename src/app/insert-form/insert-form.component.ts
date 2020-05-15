import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log, buffStringWithSeperator, buffArrayWithSeperator } from '../generator/generator.component'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  tables = []
  statements = ''
  formGroup: FormGroup

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

}
