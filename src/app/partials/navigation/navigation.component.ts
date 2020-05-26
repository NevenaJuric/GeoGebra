import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  scroll = false;
  route: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true);
    this.router.events.subscribe(() => {
      this.route = this.location.path();
    });
  }

  scrolling = (s) => {
    if (this.route === '/home'){
      const sc = s.target.scrollingElement.scrollTop;
      if (sc >= 50) {
        this.scroll = true;
      }
      else {
        this.scroll = false;
      }
    }else {
      this.scroll = true;
    }

  }
}
