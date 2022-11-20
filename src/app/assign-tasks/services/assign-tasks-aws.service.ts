import { Injectable } from '@angular/core';
import { ActivitiesResponse, AssignTasks } from '../../../domain/useCases/assign-tasks.useCase.interface';
import { DataStore } from '@aws-amplify/datastore';
import { Topic, Activitie } from 'src/models/index';

@Injectable({
  providedIn: 'root'
})
export class AssignTasksAWSService implements AssignTasks {

  constructor() {
    (async () => {
      console.log('start');
      // await DataStore.clear();
      await DataStore.start();
    })();
  }

  async getNewActivities(): Promise<ActivitiesResponse> {
    const activities = await DataStore.query(Activitie);
    return { isOk: true, data: activities };
  }

  //============================================================
  // this is auxiliar (👇)
  //============================================================

  async createTopic(
    name: string,
    activities: string[],
    conceptInformation: string[]
  ): Promise<ActivitiesResponse> {
    return { isOk: true, data: null };

  }

  async getAllTopic(): Promise<ActivitiesResponse> {
    console.log('getAllTopic');
    const topics = await DataStore.query(Topic);
    return { isOk: true, data: topics };
  }

  async clearDataStore() {
    console.log('clearDataStore');
    await DataStore.clear();
  }



}
