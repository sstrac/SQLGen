import { Table } from '../model/table.interface';
import { Observable } from 'rxjs';

export interface TableService{
    addTable(table: Table)
    getTables(): Observable<Table[]>
    deleteTable(): boolean
}