import { Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as TABLES from '../assets/tables.json'
import * as TABLE_MAPPING from '../assets/table_mapping.json'
import { Table, Mapping } from './shared/table.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myControl = new FormControl();
  tables: Table[] = []
  tableMappings: Mapping[] = []
  @Output() tableUpdate: EventEmitter<Table> = new EventEmitter<Table>()

  constructor() {
    TABLES.default.tables.forEach(table => {
      this.tables.push(table)
    });
  }

  // generateRandomValues() {
  //   this.tableKeys.forEach(tableKey => {
  //     let values: string = ""
  //     for (let i = 0; i < tableKey.fields.length; i++) {
  //       values += makeid(5) + ","
  //     }
  //     let event: any = { target: { value: values } }
  //     this.sendValues(event, tableKey.name)
  //   })
  // }

  sendValue(event, tablename, fieldkeyname) {
    this.tables.forEach(table => {
      if (table.name === tablename) {
        table.fieldKeys.forEach(fieldKey => {
          if(fieldKey === fieldkeyname){
            table.fields[fieldKey] = event.target.value
          }
        });
      }
    })
    this.overrideChildValues()
    this.cleanupEmptyValues()
    this.tableUpdate.emit(this.tables[0])
  }


  overrideChildValues() {
    this.tableMappings.forEach(mapping => {
      let sourceTable = this.getTableByName(mapping.sourceTableName)
      let destTable = this.getTableByName(mapping.destTableName)
      if (sourceTable.name == mapping.sourceTableName
        && destTable.name == mapping.destTableName
        && isDefined(sourceTable.fields[mapping.sourceTableKey])) {
        destTable.fields[mapping.destTableKey] = sourceTable.fields[mapping.sourceTableKey]
      }
    });
  }

  cleanupEmptyValues() {
    this.tables.forEach(table => {
      for (const field in table.fields) {
        if (table.fields[field] === '') {
          delete table.fields[field]
        }
      }
    });
  }

  getTableByName(tablename: string) {
    let result
    this.tables.forEach(table => {
      if (table.name == tablename) {
        result = table
      }
    })
    if (result == undefined)
      throw Error('table not found among table objects')
    return result;
  }

  clearAllValues = () => {
    this.tables.forEach(table => {
      table.fields = {}
    })
  }

}
export function isDefined(item) {
  return item !== undefined
}
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}