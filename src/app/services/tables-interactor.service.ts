import { Injectable } from '@angular/core'
import { TableService } from './tables-service.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Table } from '../model/table.interface';

const tablesUrl = 'http://localhost:8080/api/table'

@Injectable()
export class TablesInteractor implements TableService{

    constructor(private http: HttpClient){}

    addTable() {
    }
    getTables(): Observable<Table[]> {
        let tables = this.http.get<Table[]>(tablesUrl)
        return tables
    }
    deleteTable() {
        throw new Error("Method not implemented.");
    }

}