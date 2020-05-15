import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { log } from '../generator/generator.component'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  tables = []
  statements
  formGroup: FormGroup

  constructor(private tableData: TableDataService) {
  }
  
  submit(){
    log(this.formGroup)
  }

  ngOnInit(): void {
    this.tables = this.tableData.getTables()

    let group={}    
    this.tables.forEach(table=>{
      table.fields.forEach(field=>{
        group[field.fieldname]=new FormControl('');  
      })
    })
    this.formGroup = new FormGroup(group);
  }

}
