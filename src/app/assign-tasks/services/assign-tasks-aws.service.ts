import { Injectable } from '@angular/core';
import { ActivitiesResponse, AssignTasks } from '../../../domain/useCases/assign-tasks.useCase.interface';
import { DataStore } from '@aws-amplify/datastore';
import { Topic } from 'src/models/index';

@Injectable({
  providedIn: 'root'
})
export class AssignTasksAWSService implements AssignTasks {

  constructor() {
    (async () => { await DataStore.start(); })();
  }

  createTopic(name: string, activities: string[], conceptInformation: string[]): Promise<ActivitiesResponse> {
    throw new Error('Method not implemented.');
  }

  async getAllTopic(): Promise<ActivitiesResponse> {
    console.log('getAllTopic');
    const topics = await DataStore.query(Topic);
    console.log({ topics });

    return { isOk: true, data: topics };
  }

  async clearDataStore() {
    console.log('clear data');
    await DataStore.clear();

  }

}
