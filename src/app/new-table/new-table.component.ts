import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent{
    fields = []
    stringType: boolean = true
    tableName = new FormControl()
    field = new FormControl();

    constructor(private localStorage: LocalStorageService){

    }

    toggleFieldType(event){
        if(event.checked === true){
            this.stringType = true
        }
        else if(event.checked === false){
            this.stringType = false
        }
    }

    removeField(fieldIndex){
        this.fields.splice(fieldIndex, 1)
    }

    addField(){
        let type
        if(this.stringType == true){
            type = 'string'
        }
        else if(this.stringType == false){
            type = 'number'
        }
        this.fields.push({ fieldname: this.field.value, type: type })
        this.field.reset()
    }

    onSubmit(){
        let table = { name: this.tableName.value, fields: this.fields}
        this.localStorage.storeLocally(table)
        this.fields = []
        this.tableName.reset()
    }
}