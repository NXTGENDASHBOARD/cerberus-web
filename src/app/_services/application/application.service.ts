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
}
