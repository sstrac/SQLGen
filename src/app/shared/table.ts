export interface Entity{
    name: string
    fields: any
}
export const JOB_KEYS: Entity = {
    name: 'job',
    fields: [
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
export const JOB_VACANCY_KEYS: Entity = {
    name: 'job_vacancy',
    fields: [
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
}
export const PROFILE_KEYS: Entity = {
    name: 'profile',
    fields: [
    'id',
    'description',
    'distance',
    'image_url',
    'name',
    'version',
    'background_image_url',
    'category',
    'email',
    'job_title',
    'rating',
    'web_url',
    'account_id'
    ]
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