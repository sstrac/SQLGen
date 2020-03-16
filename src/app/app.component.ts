import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity, TABLE_MAPPING } from './shared/table';
import * as JOB_VACANCY_KEYS from '../assets/job_vacancy.json'
import * as JOB_KEYS from '../assets/job.json'
import * as PROFILE_KEYS from '../assets/profile.json'
import * as dedication from '../assets/options/dedication.json'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tables: Entity[] = []
  tableKeys = []
  observables: Entity[] = []
  myControl = new FormControl();

  constructor() {
    this.tableKeys.push(
      JOB_VACANCY_KEYS.default, JOB_KEYS.default, PROFILE_KEYS.default
    )
    this.tables.push(
      { name: 'job_vacancy', fields: {} },
      { name: 'job', fields: {} },
      { name: 'profile', fields: {} }
    )
    this.tables.forEach(table => {
      this.observables.push(
        { name: table.name, fields: of(table) }
      )
    });
  }

  ngOnInit() {
    console.log(dedication)
    
  }

  generateRandomValues() {
    this.tableKeys.forEach(tableKey => {
      let values: string = ""
      for (let i = 0; i < tableKey.fields.length; i++) {
        values += makeid(5) + ","
      }
      let event: any = { target: { value: values } }
      this.sendValues(event, tableKey.name)
    })
  }

  clearAllValues() {
    this.tables.forEach(table => {
      table.fields = {}
    })
  }

  sendValues(event, tablename) {
    //only handle one table
    var cols = this.getEntityByName(tablename, this.tableKeys).fields
    let table = this.getEntityByName(tablename, this.tables)
    let valueArr = event.target.value.split(',')
    for (let i = 0; i < valueArr.length; i++) {
      if (i < cols.length)
      //TODO: this can't handle bulk changes, only changes to single fields
        table.fields[cols[i]] = valueArr[i]
    }
    this.overrideChildValues() //handle update to child linked tables
    //should send updates to all table entities
    this.cleanupEmptyValues() //cleansup all tables
    this.updateTables()
  }

  updateTables() {
    for (let i = 0; i < this.tables.length; i++) {
      this.observables[i].fields = of(this.tables[i])
    }
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

  overrideChildValues() {
    TABLE_MAPPING.forEach(mapping => {
      let parentTable = this.getEntityByName(mapping.parentEntityName, this.tables)
      let childTable = this.getEntityByName(mapping.childEntityName, this.tables)
      if (parentTable.name == mapping.parentEntityName
        && childTable.name == mapping.childEntityName
        && isDefined(childTable.fields[mapping.childKey])) {
        parentTable.fields[mapping.parentKey] = childTable.fields[mapping.childKey]
      }
    });
  }

  getEntityByName(itemName: string, entities: Entity[]): Entity {
    let result
    entities.forEach(item => {
      if (item.name == itemName) {
        result = item
      }
    });
    if (result == undefined)
      throw Error('item not found in entity array')
    return result;
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