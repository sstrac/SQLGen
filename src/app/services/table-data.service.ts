import { Injectable } from '@angular/core'
import { LocalStorageService } from './local-storage.service';
import * as TABLES from '../../assets/tables.json'

@Injectable()
export class TableDataService{


    constructor(private localStorage: LocalStorageService){}

    getTables(){
        return this.localStorage.getStorage().concat(TABLES.default.tables)
    }
}
interface Table {
    name: string
    fields: Field[]
}
interface Field {
    fieldname: string
    type: string
}