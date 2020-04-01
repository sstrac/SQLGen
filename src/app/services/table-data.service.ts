import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tablesUrl } from '../shared/properties'

@Injectable()
export class TableDataService {

    constructor(private http: HttpClient) { }

    getTables(): Observable<any> {
        return this.http.get(tablesUrl)
    }
}