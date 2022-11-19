import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAssignTasksComponent } from './pages/home-assign-tasks/home-assign-tasks.component';
import { ViewActivitiesComponent } from './pages/view-activities/view-activities.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeAssignTasksComponent,
    children: [
      {
        path: 'ver_actividades',
        component: ViewActivitiesComponent,
      },
      {
        path: '**',
        redirectTo: 'ver_actividades',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignTasksRoutingModule { }
