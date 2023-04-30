import { Component, OnInit } from '@angular/core';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';
import { Activity } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-new-activities',
  templateUrl: './new-activities.component.html',
  styleUrls: ['./new-activities.component.css']
})
export class NewActivitiesComponent implements OnInit {

  public newActivities: Activity[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities();
    this.newActivities = newActivitiesResponse.data as Activity[];
  }

}
