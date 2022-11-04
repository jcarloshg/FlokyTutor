import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// mine
import { HomeActivitiesComponent } from './pages/home-activities/home-activities.component';
import { CreateActivitieComponent } from './pages/create-activitie/create-activitie.component';

const routes: Routes = [{
  path: '',
  component: HomeActivitiesComponent,
  children: [
    {
      path: 'crear_actividad',
      component: CreateActivitieComponent,
    },
    {
      path: '**',
      redirectTo: 'crear_actividad'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
