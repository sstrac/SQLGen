import { Component } from '@angular/core'
import { TableDataService } from '../services/table-data.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
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

    constructor(private tableData: TableDataService) {
        this.tables = tableData.getTables()
    }

    //only for insert
    getFieldValueArray() {
        return this.fieldValues.split(',')
    }

    //--------------

    addCondition() {
        let joiningWord = this.conditions[0] === undefined ? " WHERE " : " AND "
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
        } else if (this.conditionForm.value.operand === "=") {
            values = values.concat("'").concat(this.conditionForm.value.conditionValue).concat("'")
        }
        let finalCondition = joiningWord.
            concat(this.conditionForm.value.conditionField)
            .concat(" ")
            .concat(this.conditionForm.value.operand)
            .concat(" ")
            .concat(values)

        this.conditions.push(finalCondition)
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
        let conditions = this.activeConditions.join(" ")
        return "SELECT ".concat(fields).concat(" FROM ").concat(this.table.name, conditions)
    }

    toggleChipActive(element, type) {
        let arrayRef = type === 'field' ? this.activeFields
            : type === 'condition' ? this.activeConditions : undefined
        if (arrayRef.indexOf(element) > -1) {
            arrayRef.splice(arrayRef.indexOf(element), 1)
        } else if (arrayRef.indexOf(element) <= -1) {
            arrayRef.push(element)
        }
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

    setSelectedStatementChoice(statementChoice) {
        this.statementChoice = statementChoice
    }


    setSelectedTable(tablename) {
        this.table = this.tables.filter(table => table.name == tablename)[0]
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