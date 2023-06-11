import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/contexts/shared/domain/models';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';

@Component({
  selector: 'app-new-activities-viewer',
  templateUrl: './new-activities-viewer.component.html',
  styleUrls: ['./new-activities-viewer.component.css']
})
export class NewActivitiesViewerComponent implements OnInit {

  public newActivities: Activity[] = [];

  constructor(
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  public async ngOnInit(): Promise<void> {
    const newActivitiesResponse = await this.assignTasksAWSService.getNewActivities();
    this.newActivities = newActivitiesResponse.data as Activity[];
  }

}
