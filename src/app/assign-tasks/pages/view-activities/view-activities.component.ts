import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';
import { Activity, Topic } from 'src/contexts/shared/domain/models/index';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {

  public searchByActivityName: string = '';
  public activitiesSearched: Activity[] = [];
  public newActivities: Activity[] = [];
  public topics: Topic[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {

    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities();
    this.newActivities = newActivitiesResponse.data;

    const getAllTopicResponse = await this.assignTasksAWSService.getAllTopic();
    this.topics = getAllTopicResponse.data;
  }

  public async searchActivities() {
    const searchActivitiesByNameResponse = await this.assignTasksAWSService.searchActivitiesByName(this.searchByActivityName);
    this.activitiesSearched = searchActivitiesByNameResponse.data;
  }

  public async createActivity() {
    const createActivitieResponse = await this.assignTasksAWSService.createActivitie();
    console.log(createActivitieResponse);

  }

}
