export interface AssignTasks {

    getNewActivities(): Promise<ActivitiesResponse>;
    searchActivitiesByName(name: string): Promise<ActivitiesResponse>;


    //============================================================
    // this is auxiliar (👇)
    //============================================================
    createTopic(
        name: string,
        activities: string[],
        conceptInformation: string[]
    ): Promise<ActivitiesResponse>;
    getAllTopic(): Promise<ActivitiesResponse>;
    createActivitie(): Promise<ActivitiesResponse>;

}

export interface ActivitiesResponse {
    isOk: boolean,
    message?: string,
    data?: any
}