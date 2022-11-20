import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';
import { Activitie } from 'src/models/index';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {

  public newActivities: Activitie[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {

    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities()
    this.newActivities = newActivitiesResponse.data;

  }

}
