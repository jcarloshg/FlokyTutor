import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {

  public topics: any = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const response = await this.assignTasksAWSService.getAllTopic();
    this.topics = response.data;
  }

  async getActivities() {
    const response = await this.assignTasksAWSService.getAllTopic();
    this.topics = response.data;
    return response;
  }

  async createTopic() {
    const newTopic = await this.assignTasksAWSService.createTopic('TOPIC_EXAMPLE', [], []);
    console.log({ newTopic });

  }

  async clearDataStore() {
    const response = await this.assignTasksAWSService.clearDataStore();
  }

}
