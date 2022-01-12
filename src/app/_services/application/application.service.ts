import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationModel } from 'src/app/_models';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl + '/applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  // Get All applications
  getAll(): Observable<ApplicationModel[]> {
    return this.http.get<ApplicationModel[]>(`${baseUrl}`);
  }

  getApplications() {
    return this.http.get(baseUrl);
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
