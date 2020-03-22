import { Component } from '@angular/core'
import { TableDataService } from '../services/table-data.service'

@Component({
    selector: 'generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
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
        let style = { 'background-color': 'pink'}
        if(this.activeFields.indexOf(field)>-1){
            this.activeFields.splice(this.activeFields.indexOf(field), 1)
        }else if(this.activeFields.indexOf(field)<=-1){
            style = { 'background-color': 'lightgrey'}
            this.activeFields.push(field)
        }
        return style
    }

    setSelectedTable(tablename){
        this.table = this.tables.filter( table => table.name==tablename )[0]
        this.allFields = this.table.fields.map( field => field.fieldname )
        this.activeFields = this.table.fields.map( field => field.fieldname )
    }



    log(){
        
    }
}