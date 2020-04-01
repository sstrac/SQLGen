export interface Table {
    name: string
    fields: Field[]
}
interface Field {
    fieldname: string
    type: string
}