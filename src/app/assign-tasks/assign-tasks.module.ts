import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignTasksRoutingModule } from './assign-tasks-routing.module';
import { HomeAssignTasksComponent } from './pages/home-assign-tasks/home-assign-tasks.component';


@NgModule({
  declarations: [
    HomeAssignTasksComponent
  ],
  imports: [
    CommonModule,
    AssignTasksRoutingModule
  ]
})
export class AssignTasksModule { }
