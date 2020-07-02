import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TablesInteractor } from 'src/app/services/tables-interactor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {
  tableName: string
  fields: string[] = []
  
  constructor( private tableInteractor: TablesInteractor, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  addTable(){
    this.tableInteractor.addTable({ tableName: this.tableName, tableFields: this.fields }).subscribe(
      () => this.snackBar.open('Table Added', null, { duration: 2000 }),
      err => { 
        this.snackBar.open('Error: Table could not be added', null, { duration: 2000, panelClass: ['red_snackbar'] })
        console.error(err)
      }
    )
  }

  addField = (field: string) => field != "" ? this.fields.push(field) : undefined
}
