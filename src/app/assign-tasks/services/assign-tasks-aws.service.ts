import { Injectable } from '@angular/core';
import { ActivitiesResponse, AssignTasks } from '../../../domain/useCases/assign-tasks.useCase.interface';
import { DataStore } from '@aws-amplify/datastore';
import { Topic } from 'src/models/index';

@Injectable({
  providedIn: 'root'
})
export class AssignTasksAWSService implements AssignTasks {

  constructor() {
    (async () => {
      console.log('start');
      await DataStore.start();
    })();
  }

  async createTopic(name: string, activities: string[], conceptInformation: string[]): Promise<ActivitiesResponse> {

    const newTopic = await DataStore.save(
      new Topic({
        name: name,
        activities: null,
        conceptInformation: conceptInformation,
      })
    )

    return { isOk: true, data: newTopic };

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
