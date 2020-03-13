import { Table } from './shared/table'


export const TABLES: Table[] = [
    {
        tableName: 'job_vacancy',
        tableFields: [
            'id',
            'category',
            'closing_method',
            'dedication',
            'description',
            'required_experience',
            'status',
            'version',
            'job_id'
        ]
    },
    {
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
]