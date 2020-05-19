import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  scroll = false;
  el: any;
  width: boolean;

  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true);
    this.el = document.getElementById('btn-nav');
    console.log(this.el);
  }

  scrolling(s) {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc >= 50) {
      this.scroll = true;
    }
    else {
      this.scroll = false;
    }
  }
}
