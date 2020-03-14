export interface Table{
    table_name: string
    table_fields: string[]
}
export const JOB_VACANCY_KEYS = [
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
export const JOB_KEYS = [
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
export const PROFILE_KEYS = [
    'name'
]