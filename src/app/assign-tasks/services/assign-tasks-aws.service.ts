import { Injectable } from '@angular/core';
import { ActivitiesResponse, AssignTasks } from '../../../domain/useCases/assign-tasks.useCase.interface';
import { DataStore, SortDirection } from '@aws-amplify/datastore';
import { Topic, Activity } from 'src/contexts/shared/domain/models';
import { Predicates } from 'aws-amplify';

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

  async createActivitie(): Promise<ActivitiesResponse> {
    return { isOk: true, data: null }
  }

  async getNewActivities(): Promise<ActivitiesResponse> {
    const activities = await DataStore.query(
      Activity,
      Predicates.ALL,
      {
        sort: activity => activity.updatedAt(SortDirection.DESCENDING)
      }
    );
    return { isOk: true, data: activities };
  }

  async searchActivitiesByName(name: string): Promise<ActivitiesResponse> {
    const activities = await DataStore.query(
      Activity,
      activity => {
        return activity.name('contains', name);
      },
    );
    return { isOk: true, data: activities };
  }

  async getActivityByID(ID: string): Promise<ActivitiesResponse> {
    const activity = await DataStore.query<Activity>(Activity, ID);
    return { isOk: true, data: activity };
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
    const topics = await DataStore.query(Topic);
    return { isOk: true, data: topics };
  }

  async clearDataStore() {
    console.log('clearDataStore');
    await DataStore.clear();
  }



}
