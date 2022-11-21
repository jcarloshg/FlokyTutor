export interface AssignTasks {

    createTopic(
        name: string,
        activities: string[],
        conceptInformation: string[]
    ): Promise<ActivitiesResponse>;
    createActivitie(): Promise<ActivitiesResponse>;
    getAllTopic(): Promise<ActivitiesResponse>;
    getNewActivities(): Promise<ActivitiesResponse>;

}

export interface ActivitiesResponse {
    isOk: boolean,
    message?: string,
    data?: any
}