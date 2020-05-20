import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './partials/navigation/navigation.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './partials/projects/projects.component';
import { MaterialHomeComponent } from './partials/material-home/material-home.component';
import { HeaderComponent } from './partials/header/header.component';
import { SmallHeaderComponent } from './partials/small-header/small-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsPartialComponent } from './partials/materials-partial/materials-partial.component';
import { MaterialsComponent } from './materials/materials.component';
import { MembersComponent } from './members/members.component';
import { LaborsComponent } from './labors/labors.component';
import { ContactComponent } from './contact/contact.component';
import { News1Component } from './news/news1/news1.component';
import { News2Component } from './news/news2/news2.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HeaderComponent,
      SmallHeaderComponent,
      HomeComponent,
      ActivitiesComponent,
      MembersComponent,
      ContactComponent,
      News1Component,
      News2Component,
      ProjectsComponent,
      MaterialHomeComponent,
      MaterialsPartialComponent,
      MaterialsComponent,
      LaborsComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
