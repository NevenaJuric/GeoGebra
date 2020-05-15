import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { MembersComponent } from './members/members.component';
import { LaborsComponent } from './labors/labors.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'members', component: MembersComponent},
  {path: 'labors', component: LaborsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
