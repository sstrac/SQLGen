export interface Table{
    tableName: string
    tableFields: string[]
}
export interface JobVacancy{
    table_name?: string,
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