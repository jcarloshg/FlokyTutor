import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';
import { Activitie, Topic } from 'src/models/index';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {

  public newActivities: Activitie[] = [];
  public topics: Topic[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {

    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities();
    console.log(`[newActivitiesResponse] -> `, newActivitiesResponse.data);
    this.newActivities = newActivitiesResponse.data;

    const getAllTopicResponse = await this.assignTasksAWSService.getAllTopic();
    console.log(getAllTopicResponse.data);
    this.topics = getAllTopicResponse.data;


  }

}
