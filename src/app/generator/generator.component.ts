import { Component } from '@angular/core'
import { TableDataService } from '../services/table-data.service'
import { FormGroup, FormControl } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
    selector: 'generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
    statements: string[] = []
    statementOptions = ['Select', 'Insert']
    tables = []
    conditions: string[] = []
    activeConditions = []

    statementChoice: string
    table = { name: '', fields: [] }
    allFields = []
    activeFields = []

    //only for insert
    fieldValues = ''

    conditionForm = new FormGroup({
        conditionField: new FormControl(),
        operand: new FormControl(),
        conditionValue: new FormControl()
    })

    constructor(private tableData: TableDataService, private snackBar: MatSnackBar) {
        this.tables = tableData.getTables()
    }

    openCopiedNotification(){
        this.snackBar.open('Copied to Clipboard!', null, { duration: 2000 })
    }

    addStatement(statement){
        this.statements.push(statement.value)
    }
    //only for insert
    getFieldValueArray() {
        return this.fieldValues.split(',')
    }

    //--------------

    addCondition() {
        let values = ''
        let valueArray
        if (this.conditionForm.value.operand === "IN") {
            valueArray = this.conditionForm.value.conditionValue.split(",")
            values = "("
            valueArray.forEach(value => {
                values = values.concat("'").concat(value).concat("'")
                if (valueArray.indexOf(value) + 1 !== valueArray.length) {
                    values = values.concat(",")
                }
            });
            values = values.concat(")")
        } else if (this.conditionForm.value.operand === "=" || this.conditionForm.value.operand === "LIKE") {
            values = values.concat("'").concat(this.conditionForm.value.conditionValue).concat("'")
        }
        let finalCondition = this.conditionForm.value.conditionField
            .concat(" ")
            .concat(this.conditionForm.value.operand)
            .concat(" ")
            .concat(values)

        this.conditions.push(finalCondition)
        this.activeConditions.push(finalCondition)
    }


    generateSelectStatement() {
        let fields: string = this.activeFields[0]
        if (arraysEqual(this.allFields, this.activeFields)) {
            fields = "*"
        } else if (!arraysEqual(this.allFields, this.activeFields)) {
            for (let i = 1; i < this.activeFields.length; i++) {
                fields += ", " + this.activeFields[i]
            }
        }
        let joiningWord = (condition: string): string => { 
            if(this.activeConditions[0] !== undefined)
                return condition === this.activeConditions[0] ? ' WHERE ' + condition : ' AND ' + condition 
            return ''
        }
        let conditions = ''
        this.activeConditions.forEach( condition => conditions += joiningWord(condition))
        return "SELECT ".concat(fields).concat(" FROM ").concat(this.table.name, conditions, ";")
    }

    generateInsertStatement(){
        let allFields = this.allFields.toString()
        return "INSERT INTO ".concat(this.table.name + " (")
        .concat(allFields + ") VALUES ('") + 
        buffStringWithSeperator(this.fieldValues, ",", "','") + "');"
    }

    deleteCondition(condition){
        this.conditions.splice(this.conditions.indexOf(condition), 1)
        this.activeConditions.splice(this.activeConditions.indexOf(condition), 1)
    }

    toggleChipActive(element, type) {
        let arrayRef = type === 'field' ? this.activeFields
            : type === 'condition' ? this.activeConditions : undefined
        toggleElementInArray(element, arrayRef)
    }

    toggleChipStyle(element, type) {
        let arrayRef = type === 'field' ? this.activeFields
        : type === 'condition' ? this.activeConditions : undefined
        let color = type === 'field' ? 'pink' :
            type === 'condition' ? 'lightsteelblue' : 'pink'
        let style = {}
        if (arrayRef.indexOf(element) > -1) {
            style = { 'background-color': color }
        } else if (arrayRef.indexOf(element) <= -1) {
            style = { 'background-color': 'lightgrey' }
        }
        return style
    }

    setSelectedStatementChoice(eventValue) {
        this.statementChoice = eventValue
    }


    setSelectedTable(eventValue) {
        this.table = this.tables.filter(table => table.name == eventValue)[0]
        this.allFields = this.table.fields.map(field => field.fieldname)
        this.activeFields = this.table.fields.map(field => field.fieldname)
    }

}
export function log(input) {
    console.log(input)
}
export function arraysEqual(a, b) {
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
export function toggleElementInArray(element, array){
    if (array.indexOf(element) > -1) {
        array.splice(array.indexOf(element), 1)
    } else if (array.indexOf(element) <= -1) {
        array.push(element)
    }
}
export function buffStringWithSeperator(string: string, delimiter: string, sep: string): string{
    let out = ''
    const stringArr: string[] = string.split(delimiter)
    stringArr.forEach( x => {
        if(stringArr.indexOf(x) !== stringArr.length-1){
            out += x + sep
        } else {
            out += x
        }
    })
    return out
}
export function buffArrayWithSeperator(stringArr: string[], sep: string): string{
    let out = ''
    stringArr.forEach( x => {
        if(stringArr.indexOf(x) !== stringArr.length-1){
            out += x + sep
        } else {
            out += x
        }
    })
    return out
}