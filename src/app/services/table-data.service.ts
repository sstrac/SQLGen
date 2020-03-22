import { Injectable } from '@angular/core'
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TableDataService{


    constructor(private localStorage: LocalStorageService){}

    getTables(){
        return this.localStorage.getStorage()
    }
}