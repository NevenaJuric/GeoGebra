import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, filter, mapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  onCourses$ = new Observable<boolean>();

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.onCourses$ = this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url.indexOf('/course') === 0)
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
