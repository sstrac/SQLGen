import { Table } from './shared/table'

export const jobMapping = [
    { title: 'dummytitle',
    description: 'dummydescription',
    distance: ''
}
]

export const tables = [
    'job',
    'job_vacancy',
    'instrument',
    'profile'
]
//owner_id in profile

export const jobTable: Table = {
    tableName: 'job',
    tableFields: [
        'id',
        'description',
        'distance',
        'image_url',
        'name',
        'version',
        'category',
        'published_date',
        'updated_date',
        'event_name',
        'status',
        'type',
        'owner_id'
    ]
}