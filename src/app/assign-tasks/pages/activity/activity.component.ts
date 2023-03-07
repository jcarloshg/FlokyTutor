import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/contexts/shared/domain/models';
import { AssignTasksAWSService } from '../../services/assign-tasks-aws.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public activity!: Activity;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public assignTasksAWSService: AssignTasksAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const activityIDtoSearch = this.activatedRoute.snapshot.paramMap.get('id');
    const getActivityByIDResponse = await this.assignTasksAWSService.getActivityByID(activityIDtoSearch!);
    this.activity = getActivityByIDResponse.data;
  }

}
