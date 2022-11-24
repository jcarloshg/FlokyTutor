import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignTasksRoutingModule } from './assign-tasks-routing.module';
import { HomeAssignTasksComponent } from './pages/home-assign-tasks/home-assign-tasks.component';
import { SharedModule } from '../shared/shared.module';
import { ViewActivitiesComponent } from './pages/view-activities/view-activities.component';
import { FormsModule } from '@angular/forms';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityTypeBadgeComponent } from './components/activity-type-badge/activity-type-badge.component';
import { ActivityBodyWriteComponent } from './components/activity-body-write/activity-body-write.component';
import { ActivityBodyReadingComponent } from './components/activity-body-reading/activity-body-reading.component';
import { ActivityBodyTalkingComponent } from './components/activity-body-talking/activity-body-talking.component';
import { ActivityBodyListeningComponent } from './components/activity-body-listening/activity-body-listening.component';


@NgModule({
  declarations: [
    HomeAssignTasksComponent,
    ViewActivitiesComponent,
    ActivityComponent,
    ActivityTypeBadgeComponent,
    ActivityBodyWriteComponent,
    ActivityBodyReadingComponent,
    ActivityBodyTalkingComponent,
    ActivityBodyListeningComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // mine
    AssignTasksRoutingModule,
    SharedModule,
  ]
})
export class AssignTasksModule { }
