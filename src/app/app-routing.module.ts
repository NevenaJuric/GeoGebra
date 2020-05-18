import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { MembersComponent } from './members/members.component';
import { LaborsComponent } from './labors/labors.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'members', component: MembersComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'labors', component: LaborsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
