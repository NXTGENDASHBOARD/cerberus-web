import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApplicationModel } from 'src/app/_models';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl + '/applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  public applications:any = [];

  constructor(private http: HttpClient) {}

  // Get All applications
  getAll(): Observable<ApplicationModel[]> {
    return this.http.get<ApplicationModel[]>(`${baseUrl}`);
  }

  getApplications() {
    return this.http.get(baseUrl);
  }
  setApps(): Observable<number> {
    let num = 0;
    var subject = new Subject<number>();
    this.getApplications().subscribe(x =>{
       this.applications = x;
       num = this.applications.length;
       subject.next(this.applications.length);
     // this.single[itemIndex] = this.applications.length;
    });
    
    return subject.asObservable();
  }
  getApplicationsGenders() {
    return this.http.get(baseUrl + '/GetApplicantGenderAll');
  }
  getApplicationsRaces() {
    return this.http.get(baseUrl + '/GetApplicantRaceAll');
  }
  updateShortlistApplication(model: ApplicationModel): Observable<number> {
    return this.http.put<number>(`${baseUrl}/${model.id}`, model);
  }
}
