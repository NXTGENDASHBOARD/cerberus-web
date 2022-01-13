import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApplicationModel, IChart } from 'src/app/_models';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl + '/applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  public subject = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  // Get All applications
  getAll(): Observable<ApplicationModel[]> {
    return this.http.get<ApplicationModel[]>(`${baseUrl}`);
  }

  getApplications() {
    return this.http.get(baseUrl);
  }
  setState(object:boolean) {
       this.subject.next(object);
  }
  getState(): Observable<boolean> {
    return this.subject.asObservable();
  }
  getApplicationsGenders() {
    return this.http.get(baseUrl + '/GetApplicantGenderAll');
  }
  getApplicationsRaces() {
    return this.http.get(baseUrl + '/GetApplicantRaceAll');
  }
  getApplicationsCourseType() {
    return this.http.get(baseUrl + '/GetApplicantCourseTypeAll');
  }//
  getApplicationsCompleted() {
    return this.http.get(baseUrl + '/GetApplicationsCompleted');
  }
  updateShortlistApplication(model: ApplicationModel): Observable<number> {
    return this.http.put<number>(`${baseUrl}/${model.id}`, model);
  }
}
