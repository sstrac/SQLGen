export interface Entity{
    name: string
    fields: any
}
export const TABLE_MAPPING = [
    {
        parentEntityName: 'job',
        parentKey: 'id',
        childEntityName: 'job_vacancy',
        childKey: 'job_id'
    },
    {
        parentEntityName: 'profile',
        parentKey: 'account_id',
        childEntityName: 'job',
        childKey: 'owner_id'
    }
]