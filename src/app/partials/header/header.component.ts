import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../particles-config';

declare let particlesJS: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    // tslint:disable-next-line: only-arrow-functions
    particlesJS('scene', ParticlesConfig, function() {});
  }

}
