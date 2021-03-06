import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  faBook = faBook;
  faFilePdf = faFilePdf;
  faGlobeAmericas = faGlobeAmericas;
  faNewspaper = faNewspaper;

  url: string;

  onClickNews(){
    this.url = 'http://www.geogebra.matf.bg.ac.rs/uputstvoGGB.pdf';
    window.open(this.url);
  }

  constructor() { }

  ngOnInit() {
  }

}
