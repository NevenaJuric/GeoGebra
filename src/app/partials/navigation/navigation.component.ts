import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  scroll = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true);
  }

  scrolling = (s) => {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc >= 50) {
      this.scroll = true;
    }
    else {
      this.scroll = false;
    }

  }
}
