import { Topic } from '../entities/entities.interface'

export interface ActivitiesResponse {
    isOk: boolean,
    message?: string,
    data?: any
}

export interface ManagementActivities {

    createTopic(
        name: string,
        activities: string[],
        conceptInformation: string[]
    ): Promise<ActivitiesResponse>;

    getAllTopic(): Promise<ActivitiesResponse>;

}