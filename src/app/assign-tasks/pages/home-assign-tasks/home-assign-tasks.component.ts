import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';

@Component({
  selector: 'app-home-assign-tasks',
  templateUrl: './home-assign-tasks.component.html',
  styleUrls: ['./home-assign-tasks.component.css']
})
export class HomeAssignTasksComponent implements OnInit {

  topics = [];

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
  }

  async clearDataStore() {
    const response = await this.assignTasksAWSService.clearDataStore();
  }

}
