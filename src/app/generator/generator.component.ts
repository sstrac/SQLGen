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
        if(this.activeFields.indexOf(field)>-1){
            this.activeFields.splice(this.activeFields.indexOf(field), 1)
        }else if(this.activeFields.indexOf(field)<=-1){
            this.activeFields.push(field)
        }
    }

    toggleActiveStyle(field){
        let style = {}
        if(this.activeFields.indexOf(field)>-1){
            style = { 'background-color': 'pink' }
        }else if(this.activeFields.indexOf(field)<=-1){
            style = { 'background-color': 'lightgrey'}
        }
        return style
    }

    setSelectedTable(tablename){
        this.table = this.tables.filter( table => table.name==tablename )[0]
        this.allFields = this.table.fields.map( field => field.fieldname )
        this.activeFields = this.table.fields.map( field => field.fieldname )
    }

    arraysEqual(a, b) {
        a.sort()
        b.sort()
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

}
export function log(input){
        console.log(input)
}