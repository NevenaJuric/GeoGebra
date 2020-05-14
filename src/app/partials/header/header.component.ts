import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../particles-config';

declare let particlesJS: any;
declare let particlesJS2: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.invokeParticles();
    this.invokeParticles2();
  }

  public invokeParticles(): void {
    // tslint:disable-next-line: only-arrow-functions
    particlesJS('scene', ParticlesConfig, function() {});
  }

  public invokeParticles2(): void {
    // tslint:disable-next-line: only-arrow-functions
    particlesJS2('layer2', ParticlesConfig, function() {});
  }
}
