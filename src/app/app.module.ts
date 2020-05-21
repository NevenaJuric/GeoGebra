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
import { News3Component } from './news/news3/news3.component';
import { News4Component } from './news/news4/news4.component';
import { News5Component } from './news/news5/news5.component';
import { CoursesComponent } from './courses/courses.component';

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
      News3Component,
      News4Component,
      News5Component,
      ProjectsComponent,
      MaterialHomeComponent,
      MaterialsPartialComponent,
      MaterialsComponent,
      LaborsComponent,
      FooterComponent,
      CoursesComponent
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
