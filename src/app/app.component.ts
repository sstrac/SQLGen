import { Component, Output, Input } from '@angular/core';
import { Entity, JOB_VACANCY_KEYS, JOB_KEYS, PROFILE_KEYS, TABLE_MAPPING } from './shared/table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tables: Entity[] = []
  tableKeys: Entity[] = []
  observable: Observable<Entity>
  obs1 = of(this.tables[1])

  constructor() {
    this.tables.push(
      { name: 'job_vacancy', fields: {} },
      { name: 'job', fields: {} }
    )
    this.tableKeys.push(
      JOB_VACANCY_KEYS, JOB_KEYS
    )
  }

  ngOnInit(){


  }
  sendValues(event, tablename){
    var cols = this.getEntityByName(tablename, this.tableKeys).fields
    let table = this.getEntityByName(tablename, this.tables)
    let valueArr = event.target.value.split(",")
    for (let i = 0; i < valueArr.length; i++) {
      table.fields[cols[i]] = valueArr[i]
    }
    this.cleanupEmptyValues(table)
    this.overrideChildValues()
    console.log(this.tables)
    this.observable = of(table)
  }

  cleanupEmptyValues(table){
    for(const field in table.fields) {
      if(table.fields[field] === ''){
        delete table.fields[field]
      }
    }
  }

  overrideChildValues(){
    TABLE_MAPPING.forEach(mapping => {
      let parentTable = this.getEntityByName(mapping.parentEntityName, this.tables)
      let childTable = this.getEntityByName(mapping.childEntityName, this.tables)
      if(parentTable.name == mapping.parentEntityName
        && childTable.name == mapping.childEntityName
        && this.isDefined(childTable.fields[mapping.childKey])){
          parentTable.fields[mapping.parentKey] = childTable.fields[mapping.childKey]
        }
    });
  }

  isDefined(item){
    return item !== undefined
  }

  getEntityByName(itemName: string, entities: Entity[]): Entity {
    let result
    entities.forEach(item => {
      if(item.name == itemName){
        result = item
      }
    });
    if(result == undefined)
      throw Error('item not found in entity array')
    return result;
  }
}