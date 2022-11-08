import { Injectable } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { ActivitiesResponse, ManagementActivities } from "../../../domain/useCases/management_activities.interface";
import { Topic } from 'src/models/index';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesAWS implements ManagementActivities {

  constructor() { }

  async createTopic(
    name: string,
    activities: any | null,
    conceptInformation: string[]
  ): Promise<ActivitiesResponse> {

    const topic: Topic = await DataStore.save(
      new Topic({
        name: name,
        activities: activities,
        conceptInformation: conceptInformation,
      })
    );

    const res: ActivitiesResponse = { isOk: true, data: topic };

    return res;
  }

}
