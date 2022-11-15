import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/models';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';


@Component({
  selector: 'app-home-assign-tasks',
  templateUrl: './home-assign-tasks.component.html',
  styleUrls: ['./home-assign-tasks.component.css']
})
export class HomeAssignTasksComponent implements OnInit {

  public topics: any = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) {

    (async () => await this.getActivities())()

  }

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
