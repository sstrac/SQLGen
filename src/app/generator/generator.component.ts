import { Component } from '@angular/core'
import { TableDataService } from '../services/table-data.service'

@Component({
    selector: 'generator',
    templateUrl: './generator.component.html'
})
export class GeneratorComponent{
    statementOptions = ['Select', 'Insert']
    tables = []
    table = { name: '', fields: []}
    allFields = []
    activeFields = []

    constructor(private tableData: TableDataService){
        this.tables = tableData.getTables()
    }

    toggleFieldActive(field){
        console.log(this.activeFields)
        if(this.activeFields.indexOf(field)>-1){
            this.activeFields.splice(this.activeFields.indexOf(field), 1)
        }else if(this.activeFields.indexOf(field)<=-1){
            this.activeFields.push(field)
        }
        console.log(this.activeFields)
    }

    setSelectedTable(tablename){
        this.table = this.tables.filter( table => table.name==tablename )[0]
        this.allFields = this.table.fields.map( field => field.fieldname )
        this.activeFields = this.table.fields.map( field => field.fieldname )
    }



    log(){
        
    }
}