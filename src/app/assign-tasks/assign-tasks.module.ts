import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignTasksRoutingModule } from './assign-tasks-routing.module';
import { HomeAssignTasksComponent } from './pages/home-assign-tasks/home-assign-tasks.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeAssignTasksComponent
  ],
  imports: [
    CommonModule,
    AssignTasksRoutingModule,
    SharedModule,
  ]
})
export class AssignTasksModule { }
