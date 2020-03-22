import { Injectable } from '@angular/core'
import { LocalStorageService } from './local-storage.service';
import * as TABLES from '../../assets/tables.json'

@Injectable()
export class TableDataService {


    constructor(private localStorage: LocalStorageService) { }

    getTables() {
        let softStorage = this.localStorage.getStorage()
        let hardStorage = TABLES.default.tables
        if (softStorage !== undefined && hardStorage !== undefined) {
            return hardStorage.concat(softStorage)
        } else {
            return hardStorage!==undefined ? hardStorage : softStorage 
        }
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