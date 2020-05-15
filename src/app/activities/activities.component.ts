import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  providers: [NgbCarouselConfig]
})
export class ActivitiesComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

}
