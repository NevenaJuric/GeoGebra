import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { MembersComponent } from './members/members.component';
import { LaborsComponent } from './labors/labors.component';
import { ContactComponent } from './contact/contact.component';
import { News1Component } from './news/news1/news1.component';
import { News2Component } from './news/news2/news2.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'activities', component: ActivitiesComponent },
{ path: 'members', component: MembersComponent },
{ path: 'materials', component: MaterialsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'labors', component: LaborsComponent },
{ path: 'news1', component: News1Component },
{ path: 'news2', component: News2Component },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
