import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log } from '../generator/generator.component'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-tables',
  templateUrl: './manage-tables.component.html',
  styleUrls: ['./manage-tables.component.scss']
})
export class ManageTablesComponent implements OnInit {
  tables
  selectedTable = ''
  
  constructor(private tableData: TableDataService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.tables = this.tableData.getTables()
  }

  ngOnChanges(smallChanges){
    this.tables = this.tableData.getTables()
  }

  setSelectedTable(eventValue) {
    this.selectedTable = this.tables.filter(table => table.name == eventValue)[0]
  }

  nofityDeleteCaution(tablename){
    return this.snackBar.open('Delete ' + tablename + '?', 'Confirm', null)
  }

  deleteTable(table): void {
    try{
      this.tableData.deleteTable(table)
      this.snackBar.open(table.name + ' deleted', null, { duration: 2000 })
    }
    catch (e) {
      this.snackBar.open(table.name + e.message, null, { duration: 2000 })
    }
  }

}
