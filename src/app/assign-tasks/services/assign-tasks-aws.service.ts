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

    const newTopic = await DataStore.save(
      new Topic({
        name: 'Futuro Simple',
        activities: null,
        conceptInformation: [
          'Las formas “will” y “going to” se utilizan para expresar el futuro.',
          'En general, se usa “going to” para planes concretos, cuando estamos seguros de que algo va a suceder.',
          'Se usa “will” con acciones voluntarias. Will you help me move?(¿Me ayudarás a mudarme?)',
          'Se utiliza “will” para expresar una promesa. 	He promises he will call when he arrives.(Promete que llamará cuando llegue.)',
          'Se usa “going to” para planes. Se indica la intención de hacer algo. We are going to have a party tonight.(Vamos a dar una fiesta esta noche.)',
        ],
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
