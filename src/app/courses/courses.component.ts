import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, mergeMap, switchMap } from 'rxjs/operators';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, OnDestroy {
  coursesMatadata$: Observable<any[]>;
  lessonHtml$: Observable<SafeHtml>;

  private destroy$ = new Subject<void>();

  constructor(
    private courseService: CourseService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.coursesMatadata$ = this.courseService.getCourses();
    this._loadLesson();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onLessonClick(courseId: string, lessonId: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { courseId, lessonId },
    });
  }

  private _loadLesson() {
    this.lessonHtml$ = this.activatedRoute.queryParams.pipe(
      switchMap((p) => this.courseService.getLesson(p.courseId, p.lessonId)),
      takeUntil(this.destroy$),
      map((lt) => (lt ? this.sanitizer.bypassSecurityTrustHtml(lt) : null))
    );
  }
}
