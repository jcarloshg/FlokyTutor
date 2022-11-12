import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAssignTasksComponent } from './pages/home-assign-tasks/home-assign-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAssignTasksComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignTasksRoutingModule { }
