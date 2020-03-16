export interface Table {
    name: string
    fields: any
    fieldKeys: string[]
    options: Option[]
}
export interface Option {
    field: string
    options: any[]
}
export interface Mapping {
    sourceTableName: string
    sourceTableKey: string
    destTableName: string
    destTableKey: string
}