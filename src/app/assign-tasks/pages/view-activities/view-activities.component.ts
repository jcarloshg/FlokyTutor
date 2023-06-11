import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';
import { Activity, ActivityType, Topic } from 'src/contexts/shared/domain/models/index';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {
  hola(value: any) {
    console.log(value);
  }

  public searchByActivityName: string = '';
  public activitiesSearched: Activity[] = [];
  public newActivities: Activity[] = [];
  public activitiesToAssignAgain: Activity[] = [];
  public activitiesToReading: Activity[] = [];
  public activitiesToWriting: Activity[] = [];
  public activitiesToListening: Activity[] = [];
  public activitiesToTalking: Activity[] = [];

  public topics: Topic[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {

    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities();
    const activities = newActivitiesResponse.data as Activity[];

    this.newActivities = activities;
    this.activitiesToReading = activities.filter((activity) => activity.activityType == ActivityType.READING);
    this.activitiesToListening = activities.filter((activity) => activity.activityType == ActivityType.LISTENING);
    this.activitiesToTalking = activities.filter((activity) => activity.activityType == ActivityType.TALKING);
    this.activitiesToWriting = activities.filter((activity) => activity.activityType == ActivityType.WRITING);


    // this.activitiesToAssignAgain = newActivitiesResponse.data.reverse();

    const getAllTopicResponse = await this.assignTasksAWSService.getAllTopic();
    this.topics = getAllTopicResponse.data;
  }

  public async searchActivities(keyword: string) {
    this.searchByActivityName = keyword;
    const searchActivitiesByNameResponse = await this.assignTasksAWSService.searchActivitiesByName(keyword);
    this.activitiesSearched = searchActivitiesByNameResponse.data;
  }

  public async createActivity() {
    const createActivitieResponse = await this.assignTasksAWSService.createActivitie();
    console.log(createActivitieResponse);
  }

}
