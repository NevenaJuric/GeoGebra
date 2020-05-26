import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient, @Inject(DOCUMENT) private document: Document) { }

  courses: any = [];

  menu = this.document.getElementById('courses-menu');

  getCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/json/courses.json');
  }

  getLesson(courseId: string, lessonId: string): Observable<string> {
    if (courseId && lessonId){
      return this.httpClient.get<string>(`assets/data/${courseId}/${lessonId}.html`, { responseType: 'text' as 'json' });
    }
    return of(null);
  }



}
