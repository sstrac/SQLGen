export interface Table{
    table_name: string
    table_fields: string[]
}
export interface JobVacancy{
    id?: string,
    category?: string,
    closing_method?: string,
    dedication?: string,
    description?: string,
    required_experience?: string,
    status?: string,
    version?: string,
    job_id?: string
}

export const DUMMY_JOB_VACANCY: JobVacancy = {
    id: '',
    category: '',
    closing_method: '',
    dedication: '',
    description: '',
    required_experience: '',
    status: '',
    version: '',
    job_id: ''
}